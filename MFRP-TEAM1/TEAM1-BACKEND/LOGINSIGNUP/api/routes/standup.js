const register = require('../../model/standup')
const Register = require('../../model/standup')
// const standup = require('../../model/standup')
module.exports = function(router){


 // post data
    router.post('/register', function (req,res){
        let note = new Register(req.body)
        note.save(function (err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//get data which we posted
    
    router.get('/register',function(req,res){
        Register.find({},(err,register)=>{
            if(err){
                res.json({success:false, message :err});
            }else{
                if(!register){
                    res.json({success:false, message:'no standup found'});
                }
                else{
                    //res.json({success:true,standup:standup});
                    res.json(register)

                }
            }
        })
    })

    
    //specific get
    router.get('/register/:_id', async(req,res)=>{
        try{
            const post = await Register.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })
    




    //update data which we posted  put verb

    router.put('/updateRegister/:_id',(req,res)=>{
        // check if id was provided
        if(!req.body._id){
            res.json({success:false,message:'No standup id provided'}); //return error message
        }else{
            //check if it's exist in database
            Register.findOne({_id:req.body._id},(err,register)=>{
                //check if id is a valid ID
                if(err){
                    res.json({success:false,message:'not a valid standupid'});
                } else{
                    register.FullName = req.body.FullName;
                    register.UserName= req.body.UserName;
                    register.EmailAdress= req.body.EmailAdress;
                    register.Passsword = req.body.Passsword;
                    register.ConfirmPassword = req.body.ConfirmPassword;
                    register.save((err) => {
                        if(err){
                            res.json({success:false,message:err});
                        }else{
                            res.json({success:true,message :'standup updated'});
                        }
                    })
                }
            }
            )
        }
    })

    // delete data
    
    router.delete('/deleteregister/:_id',(req,res) => {
        //check if id was provided in parameters
        if(!req.params._id){
            res.json({ success:false,message:'No id provided'}); //return error message
        } else {
            //check id id is found in database
            Register.findOne({_id: req.params._id},(err,register) => {
                //check if error was found
                if (err) {
                    res.json({success:false,message:'Invalid id'}); // return error message
                } else {
                    //remove the standup from database
                    register.remove((err) => {
                        if(err) {
                            res.json({ success: false,message:err}); //return error message
                        } else{
                            res.json({success:true,message:'Standup deleted!'}); //return success message
                        }
                    });
                }
            });
        }
    });

}