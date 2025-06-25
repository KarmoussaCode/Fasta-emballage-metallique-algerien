// Navigation
const navbar = document.getElementById('header');
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
    if (aboutImage) {
        const elementTop = aboutImage.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            aboutImage.classList.add('visible');
        }
    }
}

window.addEventListener('scroll', checkMissionImage);
window.addEventListener('load', checkMissionImage);

/////////////////////to call the mobile menu button/////////////////////
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-menu');

    if (button && navLinks) {
        button.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});

// product cards
const products = [
    {id: 1, name: "Boîte A", image: "./static/product-images/oustowana_boxes.png", material: "Fer blanc", capacity: "16 L"},
    {id: 2, name: "Boîte B", image: "./static/product-images/bidounat.jpg", material: "Aluminium", capacity: "18 L"},
    {id: 3, name: "Boîte C", image: "./static/product-images/stack.jpg", material: "Acier", capacity: "20 L"},
    {id: 4, name: "Boîte D", image: "./static/product-images/bidounat.jpg", material: "Fer blanc", capacity: "25 L"},
    {id: 5, name: "Boîte E", image: "./static/product-images/bonbon.jpg", material: "Plastique", capacity: "10 L"}
];

const container = document.getElementById("productContainer");
let visibleCount = 3;

function displayProducts() {
    if (container) {
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
}

const showMoreButton = document.getElementById("showMore");

if (showMoreButton) {
    showMoreButton.addEventListener("click", () => {
        visibleCount += 3;
        if (visibleCount >= products.length) {
            showMoreButton.style.display = "none";
        }
        displayProducts();
    });
}

// Contact Form with EmailJS
document.addEventListener("DOMContentLoaded", () => {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("VU8nbJFfMchRUJ_Ab");
    }

    const form = document.getElementById("contact-form");

    // ✅ تأكد أن الفورم موجود قبل نكمل
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const params = {
            name: document.getElementById("name-input").value,
            email: document.getElementById("email-input").value,
            phone: document.getElementById("phone-input").value,
            message: document.getElementById("message-input").value,
        };

        const serviceID = "service_i0rmo78";
        const templateID = "template_6ru58aq";

        if (typeof emailjs !== 'undefined') {
            emailjs.send(serviceID, templateID, params)
                .then((res) => {
                    form.reset();
                    alert("Message envoyé avec succès !");
                    console.log("SUCCESS", res);
                })
                .catch((err) => {
                    console.error("FAILED...", err);
                    alert("Une erreur s'est produite. Veuillez réessayer.");
                });
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
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

