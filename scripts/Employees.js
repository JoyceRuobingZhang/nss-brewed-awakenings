import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"


const employees = getEmployees()

export const Employees = () => {
    let employeeHtml = "<ul>"

    for (const employee of employees) {
        employeeHtml += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    employeeHtml += "</ul>"

    return employeeHtml
}

//added eventlistener
// const orders = getOrders()

// document.addEventListener(
//         "click", clickEvent => {
//             for (const emloyee of employees) {
//                 const numOfOrderArr = orders.filter(order => {
//                         return order.employeeId === employee.id
//                     }

//                     if (clickEvent.target.id === `${employee.id}`) {

//                     )


//                 }
//             )