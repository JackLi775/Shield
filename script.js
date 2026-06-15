// Shield - JavaScript Functionality

// Simple shopping cart
let cart = [];

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listeners to all buttons
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Get product information from the card
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;

        // Add to cart
        const cartItem = {
            name: productName,
            price: productPrice,
            id: index
        };

        cart.push(cartItem);

        // Show confirmation message
        alert(`${productName} added to cart!`);

        // Update cart count
        updateCartCount();

        // Log cart for debugging
        console.log('Current cart:', cart);
    });
});

// Update cart count in navbar
function updateCartCount() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.textContent = `🛒 Cart (${cart.length})`;
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#cart') {
            showCart();
        } else {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Show cart function
function showCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let cartSummary = 'Your Cart:\n\n';
    let total = 0;

    cart.forEach((item, index) => {
        const price = parseFloat(item.price.replace('$', ''));
        cartSummary += `${index + 1}. ${item.name} - ${item.price}\n`;
        total += price;
    });

    cartSummary += `\nTotal: $${total.toFixed(2)}`;
    alert(cartSummary);
}

// Shop Now button functionality
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', function() {
    const productsSection = document.querySelector('#products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    console.log('Shield website loaded!');
});