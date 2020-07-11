const { format } = require('util');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }
  async function updateFile(type, { file }) {
    return new Promise((resolve, reject) => {
      // Create a new blob in the bucket and upload the file data.
      let nameBucket;

      if(type == 'CUSTOMER'){
        nameBucket = 'usersimg';
      }else if(type == 'SUPERMARKET'){
        nameBucket = 'superimg';
      }else{
        nameBucket = 'productsimg';
      }

      const bucket = storage.bucket(nameBucket);
      const blob = bucket.file(file.originalname);
      const blobStream = blob.createWriteStream({
        resumable: false,
      });

      blobStream.on('error', (err) => {
        reject(err);
      });

      blobStream.on('finish', () => {
        // The public URL can be used to directly access the file via HTTP.
        const publicUrl = format(
          `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        );
        resolve(publicUrl);
      });

      blobStream.end(file.buffer);
    });
  }

  return {
    updateFile,
  };
};
