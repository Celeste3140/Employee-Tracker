const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

function questions() {
inquirer.prompt ({
    name: 'choice',
    message: 'Select an option!',
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
}