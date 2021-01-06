const Product=require('../models/product');
const express=require('express');
const router=express.Router();

//All end points and route handlers go here
router.post('/', async (req,res) => {
    try{
        const product=newProduct({
            name:'StanleyClassicVacuumBottle',
            description:`Our Stanley Classic Vacuum Bottle is made with superior insulation that keeps liquids (soup,coffee,tea) hot or cold drinks cool for up to 24 hours.`,
            category:'Travel',
            price:19.82,
        });
        await product.save();
        
        return res.send(product);
    } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});

module.exports=router;