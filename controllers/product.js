const {product} = require('../db.json');
module.exports = {
    getProduct: (req,res) => {
        res.json({product})
    },

    addProduct: (req,res) => {
        const {name} = req.body;
        product.push({
            name,
            id: product.lenght
        });
        res.json({
            'success': true,
            'msg': 'añadido'
        });
    },

    updateProduct: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        product.forEach((product, i) => {
            if(product.id === Number(id)){
                product.name= name;
            }
        });
    },

    deleteProduct: (req, res) => {
        const {id} = req.params;
        product.forEach((product, i) => {
            if(product.id === Number(id)){
                product.splice(i,1);
            }
        });
        res.json({
            'success': true,
            'msg': 'delete'
        });
    }




};