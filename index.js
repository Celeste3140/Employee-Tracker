const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const Connection = require('mysql2/typings/mysql/lib/Connection');

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
        'Add Department',
        'Exit'
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
    else if(answers.choice === 'Exit') {
        connection.end();
        console.log('Bye!');
    }
})
}

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'LeviButters24',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

  function viewEmployees() {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, employee.role_id`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });   
}

function addEmployee() {
   inquirer.prompt ([
    {
        name: 'firstname',
        type: 'input',
        message: "Employee's first name?" 
    },
    {
        name: 'lastname',
        type: 'input',
        message: "Employee's last name?"
    },
    {
        name: 'role',
        type: 'list',
        message: "Employee's role?",
        choices: 
        [
            'Sales Lead',
            'Sales Person',
            'Lead Engineer',
            'Software Engineer',
            'Account Manager',
            'Accountant',
            'Legal Team Lead',
            'Lawyer'
            
        ]
    },
    {
        name: 'manager',
        type: 'input',
        message: "Employee's manager?"
    }
   ])   
}

function updateEmployee() {
    db.query(`SELECT FROM employee`, (err, result) => {
        if (err) {
          console.log(err);
        }
        inquirer.prompt ([
        {
            name: 'pick employee',
            type: 'list',
            message: "Which Employee is being update?"
        }
        ])
      });    
}
function viewRoles() {
    db.query(`SELECT role.id, role.title, role.salary, role.department_id`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });      
}
function viewDepartments() {
    db.query(`SELECT department_id, department.name`, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });   
}

function addDepartments() {
    inquirer.prompt ([
        {
            name: 'department id',
            type: 'input',
            message: "New department id?"
        },
        {
            name: 'department name',
            type: 'input',
            message: 'New department name?'
        }
    ])   
}

