const Products = require('../database/products.json');

module.exports = {
   
    totalInvenorty : (req,res,next) => {
        try {
            let total = 0 ;
            Object.keys(Products).forEach( element => {
                let stock = Number(Products[element].stock) ;
                total += stock;
            });
            res.status(200).json(total);
            
        } catch (error) {
            res.status(500).send({
                message:'Oops Ocurrio Un Error!'
            });
            next(error);
        }
    },
    by_product : (req,res,next) => {
        try {
            let sku = req.body.sku ;
            const prod = Products.find(el => el.sku === sku );
            res.status(200).json({"total": prod.stock});

        } catch (error) {
            res.status(500).send({
                message:'Oops Ocurrio Un Error!'
            });
            next(error);
        }
    }

}
