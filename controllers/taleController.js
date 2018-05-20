const Tale = require('../models/tale');

class TaleController {
    getAll(){

    }

    allNew(req,res){
        req.checkBody('title','title is required').notEmpty();
        req.checkBody('tale','content is required').notEmpty();
        req.getValidationResult().then((result)=>{
            if(!result.isEmpty()){
                return res.json({ errors: result.array() });
            }else{
                Tale.addNew(req.body,(err,data)=>{
                    if(err){
                        console.log(err);
                    } else {
                        res.redirect('/admin/addtale');
                    }
                });
            }
        });
    }

    getById(){

    }
}

module.exports = new TaleController();