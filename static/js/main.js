// Navigation
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Mission Image Animation
function checkMissionImage() {
    const aboutImage = document.querySelector('.about-image');
    const elementTop = aboutImage.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
        aboutImage.classList.add('visible');
    }
}

window.addEventListener('scroll', checkMissionImage);
window.addEventListener('load', checkMissionImage);

// Mobile Menu
// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
// }
// Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


// product cards
const products = [
    {id: 1, name: "Boîte A", image: "/images/oustowana_boxes.png", material: "Fer blanc", capacity: "16 L"},
    {id: 2, name: "Boîte B", image: "/images/bidounat.jpg", material: "Aluminium", capacity: "18 L"},
    {id: 3, name: "Boîte C", image: "/images/stack.jpg", material: "Acier", capacity: "20 L"},
    {id: 4, name: "Boîte D", image: "/images/bidounat.jpg", material: "Fer blanc", capacity: "25 L"},
    {id: 5, name: "Boîte E", image: "/images/bonbon.jpg", material: "Plastique", capacity: "10 L"}
];

const container = document.getElementById("productContainer");
let visibleCount = 3;

function displayProducts() {
    container.innerHTML = "";
    for (let i = 0; i < visibleCount && i < products.length; i++) {
        const product = products[i];
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p><strong>Matériau:</strong> ${product.material}</p>
                <p><strong>Capacité:</strong> ${product.capacity}</p>
                <button>Demander un devis</button>
            </div>`;
    }
}

document.getElementById("showMore").addEventListener("click", () => {
    visibleCount += 3;
    if (visibleCount >= products.length) {
        document.getElementById("showMore").style.display = "none";
    }
    displayProducts();
});

displayProducts();


// Contact Form
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    alert('Merci pour votre message. Nous vous contacterons bientôt !');
    event.target.reset();
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.product-card, .industry-card, .sustainability-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}
// Function to copy phone number to clipboard
function copyPhoneNumber() {
    const phoneNumber = "+213 661 77 40 79";
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert("Numéro de téléphone copié: " + phoneNumber);
    }).catch(err => {
        console.error("Erreur lors de la copie du numéro de téléphone: ", err);
    });
}
window.addEventListener('scroll', revealOnScroll);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkMissionImage();
});