const productinformation = require('../../models/productinformation')
const Productinformation = require('../../models/productinformation')

module.exports=function(router){

//GET: the 12 newest stand-up mwwting notes
router.get('/productinformation', function (req, res){
    //res.send("hello");
    productinformation.find({}, (err, productinformation) => {
        //check if error was found or not
        if (err) {
            res.json({ success: false, message:err }); //Return error message
        }else{
            // check if standup werefound in database
            if (!productinformation) {
                res.json({ success: false, message: 'No productinformation found.'}); // return error of no standup found
            }
            else{
                //res.json({ success: true, productinformation: productinformation }); //return success and stand array
                res.json(productinformation);
            }
        }
    })
})
//post:get new meeting note document...
    router.post('/productinformation',function(req,res){
        let note=new Productinformation(req.body)
        note.save(function(err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })


    router.put('/updateProductinformation',(req,res)=>{
        if(!req.body._id){
        res.json({success:false,message:'No productinformation id provided'});
        }else{
        productinformation.findOne({_id:req.body._id},(err,productinformation) => {
        if(err){
        res.json({ success:false,message:'Not a valid productinformation id'})
        }else{
        productinformation.id=req.body.id;
        productinformation.title=req.body.title;
        productinformation.price=req.body.price;
        productinformation.description=req.body. description;
        productinformation.category=req.body.category;
        productinformation.image=req.body.image;
        productinformation.rating=req.body.rating;
        

    
        productinformation.save((err)=>{
        if(err){
        res.json({success:false,message:err});
        }else{
        res.json({ success:true,message:'productinformation Updated!'});
        }
        });
        }
        });
        }
        });

        router.delete('/deleteProductinformation/:id',(req,res)=>{
            if(!req.params.id){
            res.json({success:false,message:'No is provided'});
            }else{
            productinformation.findOne({_id:req.params.id},(err,productinformation)=>{
            if(err){
            res.json({success:false,message:'Invalid id'});
            }else{
            productinformation.remove((err)=>{
            if(err){
            res.json({success:false,message:err});
            }else{
            res.json({success:true,message:'Productinformation deleted!'});
            }
            });
            }
            });
            }
            });

}