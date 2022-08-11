const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

function questions() {
inquirer.prompt ({
    name: 'choice',
    message: 'Select an option!',
    type: 'list',
    choices: 
    [
        'View All Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'View All Departments',
        'Add Department'
    ]
})

.then((answers) => {
    console.log(answers);
    if (answers.choice === 'View All Employees') {
        viewEmployees();
    }
    else if(answers.choice === 'Add Employee') {
        addEmployee();
    }
    else if(answers.choice === 'Update Employee Role') {
        updateEmployee();
    }
    else if(answers.choice === 'View All Roles') {
        viewRoles();
    }
    else if(answers.choice === 'View All Departments') {
        viewDepartments();
    }
    else if(answers.choice === 'Add Department') {
        addDepartments();
    }
})
.catch((error) => {
  if (error.isTtyError) {

  } else {
    
  }
});
}