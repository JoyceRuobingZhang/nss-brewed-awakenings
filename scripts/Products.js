import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let productHtml = "<ul>"

    for (const product of products) {
        productHtml += `<li id="product--${product.id}">${product.name}</li>`
    }

    productHtml += "</ul>"

    return productHtml
}


document.addEventListener(
    "click", clickEvent => {
        for (const product of products) {
            if (clickEvent.target.id === `product--${product.id}`) {
                window.alert(`${product.name} costs $${product.price.toFixed(2)}`)
            }
        }
    }
)