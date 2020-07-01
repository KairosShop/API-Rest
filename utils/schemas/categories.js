const joi = require('@hapi/joi');

const categoriesSchema = joi.object({
    id: joi.number()
        .min(1)
        .max(11),
    category: joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
    url_image: joi.string()
        .alphanum()
        .max(255),
    active: joi.number()
        .integer()
        .min(0)
        .max(1),
})
module.exports = categoriesSchema;