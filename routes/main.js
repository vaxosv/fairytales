const express = require('express');
const router = express.Router();
const Categorie = require('../controllers/categorieController');

router.get('/',(req,res)=>{
	let opt = {
		page: 'home'
	}
	res.render('template/index',opt);

});




module.exports=router;
