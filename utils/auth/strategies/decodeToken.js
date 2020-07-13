const jwt = require('jsonwebtoken');

function decode(token) {
    const decoded = jwt.decode(token.replace('Bearer ',''), {complete: true});
    return decoded.payload;
}
module.exports =  decode;