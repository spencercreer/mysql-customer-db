require('dotenv').config()
require('console.table')

const inquirer = require('inquirer')
const connection = require('./config/connection')

function init() {
    loadMainPrompts()

}

function loadMainPrompts() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Customers",
                    value: "VIEW_CUSTOMERS"
                },
                {
                    name: "View All Parts",
                    value: "VIEW_PARTS"
                },
                {
                    name: "View All Parts By Customer",
                    value: "VIEW_PARTS_BY_CUSTOMER"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        // Call the appropriate function depending on what the user chose
        switch (choice) {
            case "VIEW_CUSTOMERS":
                viewCustomers();
                break;
            case "VIEW_PARTS":
                viewParts();
                break;
            case "VIEW_PARTS_BY_CUSTOMER":
                viewPartsByCustomer();
                break;
            default:
                quit();
        }
    })
}

function findAllCustomers() {
    return connection.promise().query('SELECT * FROM customers')
}

function findAllParts() {
    return connection.promise().query('SELECT * FROM parts')
}

function viewCustomers() {
    findAllCustomers()
        .then(([rows]) => {
            console.table(rows)
        })
        .then(() => loadMainPrompts())
}

function viewParts() {
    findAllParts()
        .then(([rows]) => {
            console.table(rows)
        })
        .then(() => loadMainPrompts())
}

function viewPartsByCustomer() {
    console.log('do something')
    quit()
}

// Exit the application
function quit() {
    console.log("Goodbye!");
    process.exit();
}

init()