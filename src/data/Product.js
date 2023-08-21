const {v4 : uuidv4} = require('uuid');

const Product = ({name, category, brand, model, price, discount, description, image}) =>{
    
    this.id = uuidv4();
    this.name = name.trim();
    this.category = category;
    this.brand = brand.trim();
    this.model = model.trim();
    this.price = +price;
    this.discount = +discount;
    this.description = description.trim();
    this.image = image;
}

module.exports = Product;