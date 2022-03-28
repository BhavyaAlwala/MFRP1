const employee = require('../../model/standup')
const Employee = require('../../model/standup')
// const standup = require('../../model/standup')
module.exports = function(router){


 // post data
    router.post('/employee', function (req,res){
        let note = new Employee(req.body)
        note.save(function (err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//get data which we posted
    
    router.get('/employee',function(req,res){
        Employee.find({},(err,employee)=>{
            if(err){
                res.json({success:false, message :err});
            }else{
                if(!employee){
                    res.json({success:false, message:'no standup found'});
                }
                else{
                    //res.json({success:true,standup:standup});
                    res.json(employee)

                }
            }
        })
    })

    //specific get
    router.get('/employee/:_id', async(req,res)=>{
        try{
            const post = await Employee.findById(req.params._id);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
    })
    //update data which we posted  put verb

    router.put('/updateEmployee/:_id',(req,res)=>{
        // check if id was provided
        if(!req.body._id){
            res.json({success:false,message:'No standup id provided'}); //return error message
        }else{
            //check if it's exist in database
            Employee.findOne({_id:req.body._id},(err,employee)=>{
                //check if id is a valid ID
                if(err){
                    res.json({success:false,message:'not a valid standupid'});
                } else{
                    employee.employeeId= req.body.employeeId;
                    employee.firstName= req.body.firstName;
                    employee.lastName = req.body.lastName;
                    employee.address = req.body.address;
                    employee.phoneNumber = req.body.phoneNumber;
                    employee.location = req.body.location;
                  
                    employee.save((err) => {
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
    
    router.delete('/deleteemployee/:employeeId',(req,res) => {
        //check if id was provided in parameters
        if(!req.params.employeeId){
            res.json({ success:false,message:'No id provided'}); //return error message
        } else {
            //check id id is found in database
            Employee.findOne({employeeId: req.params.employeeId},(err,employee) => {
                //check if error was found
                if (err) {
                    res.json({success:false,message:'Invalid id'}); // return error message
                } else {
                    //remove the standup from database
                    employee.remove((err) => {
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