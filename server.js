// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("textfile.txt","hi hello" + user.username + "!\n", () =>{console.log("file updated")});



//**************************************************************


// const notes=require('./notes.js');

// console.log("server started");

// console.log(notes.age);
// console.log(notes.add(10,87));


//**************************************************************

// var _=require('lodash');

// var arr=["pankaj" , "Mandeep" ,"Harsh",1 ,8 ,9,1,2,2,3,'8'];

// let filter=_.reverse(arr);
// console.log(filter);
//  filter=_.uniq(arr);
//  console.log(filter);






//*****************************************************************

// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Welcome to our hotel');
// })

// app.get('/roti', function (req, res) {
//   res.send('Yes how many you want ?');
// })

// app.get('/sabji',function(req,res){
//   res.send("All type of green vegies are available");
// })

// app.listen(3000)


//lec 7 *****************************************************
/* const express = require('express')
const app = express()
const db=require('./db')


const Person=require('./Person');

const MenuItem=require('./MenuItem');

const bodyParser=require('body-parser');

app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Welcome to our hotel.....Have a look on our Menu');
})

//POST method to add person



app.post('/menu', async (req,res) => {
  try{
    const data=req.body;
    
    const newMenu= new MenuItem(data);

    const response=await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error occured'});

  }
})

app.get('/menu', async (req,res) => {
  try{
    const data=await MenuItem.find();

    console.log("data fetched");
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error :'Internal server error occured'});

  }
})





app.listen(3000,() =>{
  console.log("listening on port 3000");
})
*/


// lec*******************************************************

const express = require('express')
const app = express()
const db=require('./db')





const bodyParser=require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Welcome to our hotel.....Have a look on our Menu');
})

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);




app.listen(3000,() =>{
  console.log("listening on port 3000");
})