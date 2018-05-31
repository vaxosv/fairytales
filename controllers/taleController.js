const Tale = require('../models/tale');

class TaleController {
    getAll(cb){
        Tale.getAll(cb);
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

    removeTale(id,cb){
        if(id){
            Tale.remove(id,cb);
        }
    }

    getById(id, cb){
        if(id){
            Tale.getById(id,cb);
        }
    }
}

module.exports = new TaleController();