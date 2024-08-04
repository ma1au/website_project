// Define an array of products
const products = [
    { name: 'Product 1', price: '#10' },
    { name: 'Product 2', price: '#20' },
    { name: 'Product 3', price: '#30' },
];

// Function to add products to the shop section
function addProductsToShop() {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productItem = document.createElement('li');
        productItem.textContent = `#{product.name} - #{product.price}`;
        productList.appendChild(productItem);
    });
}

// Call the function to add products when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addProductsToShop);
