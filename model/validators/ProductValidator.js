import Joi from "joi"; // https://joi.dev/api/?v=17.6.3

class ProductValidator {
    
    static validate(product) {

        const productSchema = Joi.object({
            id: Joi.string().min(0).max(24).required(),
            name: Joi.string().min(3).max(20).required(),
            price: Joi.number().required(),
            description: Joi.string().required(),
            descriptionLarge: Joi.string().required(),
            image: Joi.string().required(),
            cantidad: Joi.number()
        });

        const { error } = productSchema.validate(product);

        return error;
    }

}

export default ProductValidator;