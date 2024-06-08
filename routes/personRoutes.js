const express=require('express');
const router=express.Router();
const Person=require('../Person');
const { findByIdAndUpdate } = require('../MenuItem');
router.post('/', async (req,res) => {
  try{
    const data=req.body;
    
    const newPerson= new Person(data);

    const response=await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error occured'});

  }
})

router.get('/', async (req,res) => {
  try{
    const data=await Person.find();

    console.log("data fetched");
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error occured'});

  }
})

router.get('/:workType', async (req,res) =>{
  try{
      const workType=req.params.workType;
      if(workType=="chef" || workType=="waiter" || workType=="manager"){
          const response=await Person.find({work: workType});
          res.status(200).json(response);
      }
      else {
        res.status(404).json({error:"Internal server error"});
      }
  }
  catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error occured'});
  }
})


router.put('/:id',async (req,res) => {
  try{
      const personId=req.params.id;
      const updateData=req.body;

      const response=await Person.findByIdAndUpdate(personId,updateData, {
        new:true,
        runValidators:true,
      });

      if(!response){
        res.status(404).json({error:"person not found"});
      }

      console.log("data updated");
      res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error occured'});
  }
})


router.delete('/:id', async (req,res) => {
  try{
    const personId=req.params.id;

    const response= await Person.findByIdAndDelete(personId);

    
    if(!response){
      res.status(404).json({error:"person not found"});
    }

    console.log("data deleted");
    res.status(200).json({message: "person removed successfully"});

  }
  catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error occured'});
  }
})















module.exports=router;