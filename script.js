// Sample product data with categories
const products = [
    { name: "Cold 200-GSM", price: 8180, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold200GSM_f3oz1k.png", category: "Cold Lamination" },
    { name: "Cold 220-GSM", price: 9999, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold220GSM_rsc45x.png", category: "Cold Lamination" },
    { name: "Cold 240-GSM", price: 11150, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold240GSM_xzpf0q.png", category: "Cold Lamination" },
    { name: "Lotus Blue Ink 1L", price: 850, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744279254/Lotus_Ink_vhg18d.png", category: "Ink" },
    { name: "Lotus Cian Ink 1L", price: 850, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744279254/Lotus_Ink_vhg18d.png", category: "Ink" },
    { name: "Lotus Magenta Ink 1L", price: 850, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744279254/Lotus_Ink_vhg18d.png", category: "Ink" },
    { name: "Lotus Black Ink 1L", price: 850, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744279254/Lotus_Ink_vhg18d.png", category: "Ink" },
    { name: "King Z Solvent 1L", price: 500, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744280167/solvent_King_Z_slf7yk.png", category: "Solvent" },
    { name: "Solvent 1L", price: 600, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744280181/Solvent_Ink_mtaar1.png", category: "Solvent" },
    { name: "Foam Sheet 3mm (15Pc, ₹400/ea, 4x8)", price: 6000, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744280550/FoamSheet3mm_d02s1g.png", category: "Foam Sheets" },
    { name: "Foam Sheet 5mm (10Pc, ₹600/ea, 4x8)", price: 6000, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744280550/FoamSheet5mm_zcumep.png", category: "Foam Sheets" },
    { name: "BackLit 3ft 50m", price: 5490, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744281360/Backlit_ffgjjh.png", category: "Backlit" },
    { name: "BackLit 4ft 50m", price: 7110, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744281360/Backlit_ffgjjh.png", category: "Backlit" },
    { name: "Vinyl 3ft 50m", price: 4392, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744281824/Vinyl_eqgwrz.png", category: "Vinyl" },
    { name: "Vinyl 4ft 50m", price: 5688, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744281824/Vinyl_eqgwrz.png", category: "Vinyl" },
    { name: "StarFlex 3ft 50m", price: 4392, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744282141/StarFlex_hyzesd.png", category: "StarFlex" },
    { name: "StarFlex 4ft 50m", price: 5688, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744282141/StarFlex_hyzesd.png", category: "StarFlex" }
    // Add more products with appropriate categories and images
];

// Function to display products
function displayProducts(filteredProducts = products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear existing products
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p> <!-- Added currency symbol -->
            <div class="quantity-container">
                <button class="quantity-btn" onclick="decreaseQuantity(this)">-</button>
                <span class="quantity-display">0</span> <!-- Default value set to 0 -->
                <button class="quantity-btn" onclick="increaseQuantity(this)">+</button>
            </div>
            <button class="buy-btn" onclick="addToCart('${product.name}', this)">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Quantity management functions
function increaseQuantity(button) {
    let quantity = button.previousElementSibling;
    let currentValue = parseInt(quantity.textContent);
    if (currentValue === 0) {
        quantity.textContent = 1; // Change to 1 when + is clicked from 0
    } else {
        quantity.textContent = currentValue + 1; // Increment further if already > 0
    }
}

function decreaseQuantity(button) {
    let quantity = button.nextElementSibling;
    let currentValue = parseInt(quantity.textContent);
    if (currentValue > 0) {
        quantity.textContent = currentValue - 1;
    }
}

// Cart management
let cartCount = 0;

function addToCart(productName, button) {
    let quantity = button.parentElement.querySelector('.quantity-display').textContent;
    if (parseInt(quantity) > 0) { // Only add to cart if quantity is greater than 0
        let itemsTextarea = document.getElementById('items');
        itemsTextarea.value += `${productName} - Quantity: ${quantity}\n`;
        cartCount += parseInt(quantity); // Increment cart count by the quantity
        document.getElementById('cart-count').textContent = cartCount; // Update the cart count display
    }
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    displayProducts(); // Ensure products are displayed when scrolling
}

// Show specific section
function showSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    if (sectionId === 'products') {
        displayProducts(); // Display all products when Products is clicked
    }
}

// Filter products based on category
function filterProducts() {
    const filterValue = document.getElementById('product-filter').value;
    if (filterValue === 'all') {
        displayProducts(); // Show all products
    } else {
        const filteredProducts = products.filter(product => product.category === filterValue);
        displayProducts(filteredProducts); // Show filtered products
    }
}

// Contact Overlay Functions
function showContactOverlay() {
    console.log('showContactOverlay called'); // Debug log
    const overlay = document.getElementById('contact-overlay');
    if (overlay) {
        overlay.style.display = 'flex'; // Show overlay
    } else {
        console.error('Contact overlay element not found');
    }
}

function hideContactOverlay() {
    const overlay = document.getElementById('contact-overlay');
    if (overlay) {
        overlay.style.display = 'none'; // Hide overlay
    }
}

// About Us Overlay Functions
function showAboutOverlay(event) {
    event.preventDefault(); // Prevent default link behavior
    const overlay = document.getElementById('about-overlay');
    if (overlay) {
        overlay.style.display = 'flex'; // Show overlay
    } else {
        console.error('About overlay element not found');
    }
}

function hideAboutOverlay() {
    const overlay = document.getElementById('about-overlay');
    if (overlay) {
        overlay.style.display = 'none'; // Hide overlay
    }
}

// Handle form submission for WhatsApp
document.getElementById('inquiry-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const items = document.getElementById('items').value;

    // WhatsApp phone number (with country code, e.g., +91 for India)
    const phoneNumber = '8143254224'; // Update with appropriate country code if needed (e.g., +918143254224)
    const whatsappMessage = `Name: ${name}\nMobile: ${mobile}\nItems: ${items}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp chat
    window.open(whatsappUrl, '_blank');

    // Clear the form
    this.reset();
    document.getElementById('items').value = '';
    cartCount = 0; // Reset cart count after submission
    document.getElementById('cart-count').textContent = cartCount; // Update the cart count display
});

// Initial load
window.onload = function() {
    displayProducts(); // Load products on page load
};

// Placeholder for showCart function (to be implemented if needed)
function showCart() {
    console.log('Cart functionality to be implemented');
}