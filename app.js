//require mongoose
const mongoose = require("mongoose");
// connecting to mongoose database server
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true});
// adding data

// step1- create a new schema
const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});
// step 2- create a mongoose model
const Fruit = mongoose.model("Fruit",fruitSchema);

//creating a new document
const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid"
});
const kiwi= new Fruit ({
  name: "Kiwi",
  rating: 9,
  review: "Nice"
});
const orange = new Fruit ({
  name: "orange",
  rating: 8,
  review: "Pretty solid!!"
});
const  banana = new Fruit ({
  name: "banana",
  rating: 8.5,
  review: "Nice!!!"
});

//saving the document to our database uncomment the below mentioned line
fruit.save();
//suppose first we saved apple then we wish to save the other three
//after performing the following once comment it else it will be saved everytime we save the file
Fruit.insertMany([kiwi, orange, banana],function(err){
  if(err) console.log(err);
  else console.log("Successfully saved");
})


// creating a new schema(2)
const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});
const Person = mongoose.model("Person",personSchema);
const person = new Person ({
  name: "John",
  age:37
});
//after performing the following once comment it else it will be saved everytime we save the file
//person.save();

// Reading From database

Fruit.find(function(err, fruits){
  // if error log error
  if(err) console.log(err);
  // else log the results
  else {
      console.log(fruits);
    }
});
// everything is saved in an array in json format so dot notation can be used to access the data
//log only name
Fruit.find(function(err, fruits){
  // if error log error
  if(err) console.log(err);
  // else log the results
  // we can use normal for loop also
  else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
    }
});

// Closing the connection
// add the following just before the last instruction when no error
// moongoose.connection.close();
