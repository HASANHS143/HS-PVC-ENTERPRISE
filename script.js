const products = [
    { name: "Cold 200-GSM", price: 8180, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold200GSM_f3oz1k.png" },
    { name: "Cold 220-GSM", price: 9999, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold220GSM_rsc45x.png" },
    { name: "Cold 240-GSM", price: 11150, image: "https://res.cloudinary.com/dxzpud3hq/image/upload/v1744183796/Cold240GSM_xzpf0q.png" }
];

let inquiryItems = [];

// Populate products
function displayProducts() {
    const container = document.querySelector(".product-container");
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToInquiry('${product.name}')">Add to Inquiry</button>
        `;
        container.appendChild(card);
    });
}

// Add item to inquiry
function addToInquiry(item) {
    inquiryItems.push(item);
    updateInquiryForm();
}

// Update inquiry form
function updateInquiryForm() {
    const textarea = document.getElementById("items");
    textarea.value = inquiryItems.join(", ");
}

// Scroll to products
function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Handle form submission
document.getElementById("inquiry-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const items = document.getElementById("items").value;
    alert(`Inquiry Submitted!\nName: ${name}\nEmail: ${email}\nItems: ${items}`);
    inquiryItems = [];
    e.target.reset();
    updateInquiryForm();
});

// Load products on page load
window.onload = displayProducts;