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

//added eventListener: {name} sold {number} products.
const orders = getOrders()

/* 
loop through employees, 先给每个 employee object 添加一个ordernum key, 并设值为0；
然后用每一个 employee 去 loop through orders, 每找到一个matching order， 就employee.ordernum += 1，
由此找到每个 employee 的订单量。
*/
for (const employee of employees) {
    employee.ordernum = 0
    for (const order of orders) {
        if (employee.id === order.employeeId) {
            employee.ordernum += 1
        }
    }
}

document.addEventListener(
    "click", clickEvent => {
        for (const employee of employees) {
            if (clickEvent.target.id === `employee--${employee.id}`) {
                window.alert(`${employee.name} sold ${employee.ordernum} products.`)
            }
        }
    }
)