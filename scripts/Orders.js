import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
// 找到某一个order的 matching product
const findProduct = (order, products) => {
    let orderProduct = null

    for (const product of products) {
        if (product.id === order.productId) {
            orderProduct = product
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
//找到某个order的 matching employee
const findEmployee = (order, employees) => {
    let orderEmployee

    for (const employee of employees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee
        }
    }

    return orderEmployee
}


// 通过上面的 function1 找到了某一个order的 matching product；function2 找到了某一个order的 matching employee；
// 然后使用上面两个function 来 print order HTML 所需要的信息。
export const Orders = () => {
    let orderHtml = ""
    orderHtml = "<ul>"

    for (const order of orders) {
        const theEmployee = findEmployee(order, employees) //changed varible name
        const theProduct = findProduct(order, products) //changed varible name

        orderHtml += `<li> ${theProduct.name} was sold by ${theEmployee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    orderHtml += "</ul>"

    return orderHtml
}