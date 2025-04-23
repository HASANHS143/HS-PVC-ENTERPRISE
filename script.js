// Sample product data with categories
const products = [
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
    { name: "StarFlex 4ft 50m", price: 5688, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744282141/StarFlex_hyzesd.png", category: "StarFlex" },
    { name: "Cold 3ft 200 GSM 70m", price: 3076, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold200GSM_f3oz1k.png", category: "Cold Lamination" },
    { name: "Cold 4ft 200 GSM 70m", price: 3980, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold200GSM_f3oz1k.png", category: "Cold Lamination" },
    { name: "Cold 5ft 200 GSM 70m", price: 4912, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold200GSM_f3oz1k.png", category: "Cold Lamination" },
    { name: "Cold 6ft 200 GSM 70m", price: 5820, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold200GSM_f3oz1k.png", category: "Cold Lamination" },
    { name: "Cold 8ft 200 GSM 70m", price: 7656, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold200GSM_f3oz1k.png", category: "Cold Lamination" },
    { name: "Cold 10ft 200 GSM 70m", price: 9644, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold200GSM_f3oz1k.png", category: "Cold Lamination" },
    { name: "Hot 3ft 240 GSM 70m", price: 3460, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold240GSM_xzpf0q.png", category: "Hot Lamination" },
    { name: "Hot 4ft 240 GSM 70m", price: 4477, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold240GSM_xzpf0q.png", category: "Hot Lamination" },
    { name: "Hot 5ft 240 GSM 70m", price: 5526, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold240GSM_xzpf0q.png", category: "Hot Lamination" },
    { name: "Hot 6ft 240 GSM 70m", price: 6547, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold240GSM_xzpf0q.png", category: "Hot Lamination" },
    { name: "Hot 8ft 240 GSM 70m", price: 8613, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold240GSM_xzpf0q.png", category: "Hot Lamination" },
    { name: "Hot 10ft 240 GSM 70m", price: 10849, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold240GSM_xzpf0q.png", category: "Hot Lamination" },
    { name: "Black 3ft 50m", price: 2745, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744370592/Black_u9flma.png", category: "Black" },
    { name: "Black 4ft 50m", price: 3555, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744370592/Black_u9flma.png", category: "Black" },
    { name: "Black 5ft 50m", price: 4385, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744370592/Black_u9flma.png", category: "Black" },
    { name: "Black 6ft 50m", price: 5195, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744370592/Black_u9flma.png", category: "Black" },
    { name: "Black 8ft 50m", price: 6840, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744370592/Black_u9flma.png", category: "Black" },
    { name: "Black 10ft 50m", price: 8610, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744370592/Black_u9flma.png", category: "Black" }
];

// Cart management
let cartItems = {};

// Function to update the cart count and textarea
function updateCart() {
    const cartCountElement = document.getElementById('cart-count');
    const itemsTextarea = document.getElementById('items');

    // Calculate total quantity
    let totalQuantity = 0;
    for (let product in cartItems) {
        if (cartItems[product] > 0) {
            totalQuantity += cartItems[product];
        }
    }
    cartCountElement.textContent = totalQuantity;

    // Update textarea with current cart items
    itemsTextarea.value = '';
    for (let product in cartItems) {
        if (cartItems[product] > 0) {
            itemsTextarea.value += `${product} - Quantity: ${cartItems[product]}\n`;
        }
    }
}

// Function to search products
function searchProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// FAQ accordion functionality
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const p = item.nextElementSibling;
        p.style.display = p.style.display === 'block' ? 'none' : 'block';
    });
});

// Function to display products
function displayProducts(filteredProducts = products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const quantity = cartItems[product.name] || 0;
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <div class="quantity-container">
                <button class="quantity-btn" onclick="decreaseQuantity(this, '${product.name}')">-</button>
                <span class="quantity-display">${quantity}</span>
                <button class="quantity-btn" onclick="increaseQuantity(this, '${product.name}')">+</button>
            </div>
            <button class="buy-btn" onclick="addToCart('${product.name}', this)">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Quantity management functions
function increaseQuantity(button, productName) {
    let quantityElement = button.previousElementSibling;
    let currentValue = parseInt(quantityElement.textContent);
    let newValue = currentValue + 1;
    quantityElement.textContent = newValue;

    // Update cart
    if (!cartItems[productName]) {
        cartItems[productName] = 0;
    }
    cartItems[productName] = newValue;
    updateCart();
}

function decreaseQuantity(button, productName) {
    let quantityElement = button.nextElementSibling;
    let currentValue = parseInt(quantityElement.textContent);
    if (currentValue > 0) {
        let newValue = currentValue - 1;
        quantityElement.textContent = newValue;

        // Update cart
        if (!cartItems[productName]) {
            cartItems[productName] = 0;
        }
        cartItems[productName] = newValue;
        updateCart();
    }
}

// Add to cart function
function addToCart(productName, button) {
    let quantity = parseInt(button.parentElement.querySelector('.quantity-display').textContent);
    if (quantity > 0) {
        if (!cartItems[productName]) {
            cartItems[productName] = 0;
        }
        cartItems[productName] = quantity;
        updateCart();
    }
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    displayProducts();
}

// Go to Home section (Homepage)
function goToHome() {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Hero section not found');
    }
}

// Show specific section
function showSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    if (sectionId === 'products') {
        displayProducts();
    }
}

// Filter products based on category
function filterProducts() {
    const filterValue = document.getElementById('product-filter').value;
    if (filterValue === 'all') {
        displayProducts();
    } else {
        const filteredProducts = products.filter(product => product.category === filterValue);
        displayProducts(filteredProducts);
    }
}

// Contact Overlay Functions
function showContactOverlay() {
    console.log('showContactOverlay called');
    const overlay = document.getElementById('contact-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
    } else {
        console.error('Contact overlay element not found');
    }
}

function hideContactOverlay() {
    const overlay = document.getElementById('contact-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// About Us Overlay Functions
function showAboutOverlay(event) {
    event.preventDefault();
    const overlay = document.getElementById('about-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
    } else {
        console.error('About overlay element not found');
    }
}

function hideAboutOverlay() {
    const overlay = document.getElementById('about-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// Handle form submission for WhatsApp
document.getElementById('inquiry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const items = document.getElementById('items').value;

    const phoneNumber = '8143254224';
    const whatsappMessage = `Name: ${name}\nMobile: ${mobile}\nItems: ${items}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    this.reset();
    document.getElementById('items').value = '';
    cartItems = {};
    updateCart();
    displayProducts();
});

// Initial load
window.onload = function() {
    displayProducts();
};

// Show cart function - Scroll to Data & Selected Products section
function showCart() {
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
        inquirySection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Inquiry section not found');
    }
}

// Toggle Menu Function
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    } else {
        console.error('Sidebar element not found');
    }
}