const program = require('commander');
const {addCustomer, findCustomer, listOfCustomers, removeCustomer, updateCustomer} = require('./index');
const { prompt } = require('inquirer');

program
     .version('1.0.0')
     .description('Customer Managment CLI');

/* program
     .command('Add <firstName> <lastName> <phone> <email>')
     .alias('a')
     .description('Add New Customer')     
     .action((firstName, lastName, phone, email) =>{
          let customer = {firstName, lastName, phone, email};
          addCustomer(customer);
     }); 
     program
     .command('find <name>')
     .alias('f')
     .description('Find A Customer')
     .action(name => findCustomer(name));
     */
     // questions for adding new Customer
const questions = [
     {
          type: 'input',
          name: 'firstName',
          message: 'FirstName of Customer'
     },
     {
          type: 'input',
          name: 'lastName',
          message: 'LastName of Customer'   
     },
     {
          type: 'input',
          name: 'phone',
          message: 'Contact of Customer'
     },
     {
          type: 'input',
          name: 'email',
          message: 'Email of Customer'
     }
];

program
     .command('add')
     .alias('a')
     .description('Add New Customer')
     .action(() => {
          prompt(questions).then(answers => addCustomer(answers));
     });

const Name =[
     {
          type: 'Input',
          name: 'firstName',
          message: 'Enter Name Find A Customer'
     }
];
program
     .command('find')
     .alias('f')
     .description('Find A Customer')
     .action(() =>{
          prompt(Name).then(answer => findCustomer(answer));
     });

program
     .command('list')
     .alias('l')
     .description('All Customers')
     .action(() =>listOfCustomers());

const updateQuestions = [
     {
          type: 'input',
          name: 'firstName',
          message: 'FirstName of Customer'
     },
     {
          type: 'input',
          name: 'lastName',
          message: 'LastName of Customer'   
     },
     {
          type: 'input',
          name: 'phone',
          message: 'Contact of Customer'
     },
     {
          type: 'input',
          name: 'email',
          message: 'Email of Customer'
     }
];

program
     .command('update <id>')
     .alias('u')
     .description('Update Record')
     .action((id) =>{
          prompt(updateQuestions).then(answer => updateCustomer(id, answer))
     });

program
     .command('remove <id>')
     .alias('r')
     .description('Remove Particular Field')
     .action(id => removeCustomer(id));

program.parse(process.argv);