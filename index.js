const mongoose = require('mongoose');
const Customer = require('./models/customer');
require('dotenv').config();

var obj = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect("mongodb://localhost:27017/"+process.env.DATABASE_NAME, obj);
var db = mongoose.connection;

     // Add Customer
const addCustomer = (customer) =>{

     Customer.create(customer).
     then(custom =>{
          console.info("Customer added ");
          db.close();
     }).
     catch(err =>{
          return console.log(err);
     });
};

     // Find a particular customer with first name
const findCustomer = (name) =>{

     var search = new RegExp(name.firstName,'i');
     Customer.findOne({firstName: search}).then(result =>{
          console.log('Customer is : ' +  result);
          //console.log(`${result.length} matches`);
          db.close();
     }).
     catch(err =>{
          return console.log(err);
     });
};

const updateCustomer = (_id, customer) =>{

     Customer.updateOne({_id}, customer)
     .then(data =>{
          console.log('Record Updated ');
     })
     .catch(err =>{
          return console.log("Error");
     });
};

     // Remove particular Record
const removeCustomer = (_id) =>{

     Customer.deleteOne({_id})
     .then(data =>{
         console.log('Deleted Record is : ' + data); 
         db.close();
     })
     .catch(err =>{
          return console.log("Error");
     });
};

     // display all customers
const listOfCustomers = ()=>{
     Customer.find().then(customers =>{
          console.log(`Total Customers : ${customers.length}`);
          console.log('List Of All Customers : ' + customers);
          db.close();
     })
};

module.exports = {
     addCustomer,
     findCustomer,
     removeCustomer,
     updateCustomer,
     listOfCustomers
};