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

// Product list (still needed for the main page)
const products = [
    {id: 1, name: "Boîte A", image: "static/images/oustowana_boxes.png", material: "Fer blanc", capacity: "16 L"},
    {id: 2, name: "Boîte B", image: "static/images/Metal_Piggy-Banks.png", material: "Aluminium", capacity: "18 L"},
    {id: 3, name: "Boîte C", image: "static/images/PARFUM.png", material: "Acier", capacity: "20 L"}
];

const container = document.getElementById("productContainer");
const showMoreBtn = document.getElementById("showMore");
let visibleCount = 3; // Only show 3 products initially

function displayProducts() {
    container.innerHTML = ""; // Clear previous content
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

// Modify "Show More" button to redirect to all-products.html
showMoreBtn.addEventListener("click", () => {
    window.location.href = "all-products.html"; // Open new page with all products
});

// Show initial products
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


function sendMail() {
    var params = {
        name: document.getElementById("name-input").value,
        email: document.getElementById("email-input").value,
        phone: document.getElementById("phone-input").value,
        message: document.getElementById("message-input").value
    };

    const serviceID = "service_i0rmo78"
const templateID = "template_6ru58aq"

emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name-input").value = "";
            document.getElementById("email-input").value = "";
            document.getElementById("phone-input").value = "";
            document.getElementById("message-input").value = "";
            console.log(res);
            alert("messege sent successfully");
        }
    )
    .catch(err => console.log(err));
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