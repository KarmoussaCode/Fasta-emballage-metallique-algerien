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

// Translations
const translations = {
    en: {
        home: "Home",
        about: "About Us",
        products: "Products",
        industries: "Industries",
        sustainability: "Sustainability",
        contact: "Contact",
        hero_title: "Innovation in Metal Packaging",
        hero_subtitle: "Leading the way in sustainable metal packaging solutions across Algeria",
        get_started: "Get Started",
        about_title: "About FASTA",
        about_text: "Since our establishment, FASTA has been at the forefront of metal packaging innovation in Algeria. We combine traditional craftsmanship with modern technology to deliver exceptional packaging solutions.",
        mission_title: "Our Mission",
        mission_text: "To provide sustainable, high-quality metal packaging solutions that meet our clients' needs while maintaining the highest standards of environmental responsibility.",
        products_title: "Our Products",
        industrial_containers: "Metal Boxes (250 g to 20 kg)",
        industrial_desc: "Sturdy boxes for various capacities, ideal for storage and transport",
        food_packaging: "Decorative Boxes",
        food_desc: "Elegant metal packaging for a unique and aesthetic presentation",
        specialty_containers: "Metal Piggy Banks",
        specialty_desc: "Durable and customizable coin banks for practical or decorative use",
        industries_title: "Industries We Serve",
        paint_industry: "Paint Industry",
        toy_industry: "Toy Industry",
        decoration_industry: "Decoration Industry",
        sustainability_title: "Our Commitment to Sustainability",
        recyclable_title: "Recyclable Materials",
        recyclable_text: "100% recyclable metal packaging solutions",
        energy_title: "Energy Efficient",
        energy_text: "Modern production processes to reduce energy consumption",
        waste_title: "Waste Reduction",
        waste_text: "Optimized manufacturing to minimize waste",
        contact_title: "Contact Us",
        get_in_touch: "Get in Touch",
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        send_message: "Send Message",
        thank_you: "Thank you for your message. We will contact you soon!"
    },
    fr: {
        home: "Accueil",
        about: "À Propos",
        products: "Produits",
        industries: "Industries",
        sustainability: "Durabilité",
        contact: "Contact",
        hero_title: "Innovation en Emballage Métallique",
        hero_subtitle: "Leader des solutions d'emballage métallique durables en Algérie",
        get_started: "Commencer",
        about_title: "À Propos de FASTA",
        about_text: "Depuis notre création, FASTA est à l'avant-garde de l'innovation en matière d'emballage métallique en Algérie. Nous combinons l'artisanat traditionnel et la technologie moderne pour offrir des solutions d'emballage exceptionnelles.",
        mission_title: "Notre Mission",
        mission_text: "Fournir des solutions d'emballage métallique durables et de haute qualité qui répondent aux besoins de nos clients tout en maintenant les plus hauts standards de responsabilité environnementale.",
        products_title: "Nos Produits",
        industrial_containers: "Boîtes Métalliques (250 g à 20 kg)",
        industrial_desc: "Boîtes robustes de différentes capacités, idéales pour le stockage et le transport",
        food_packaging: "Boîtes Décoratives",
        food_desc: "Emballages métalliques élégants pour une présentation unique et esthétique",
        specialty_containers: "Tirelires Métalliques",
        specialty_desc: "Tirelires durables et personnalisables pour un usage pratique ou décoratif",
        industries_title: "Industries Servies",
        paint_industry: "Industrie de Peinture",
        toy_industry: "Industrie du Jouet",
        decoration_industry: "Industrie de Décoration",
        sustainability_title: "Notre Engagement pour la Durabilité",
        recyclable_title: "Matériaux Recyclables",
        recyclable_text: "Solutions d'emballage métallique 100% recyclables",
        energy_title: "Efficacité Énergétique",
        energy_text: "Processus de production modernes pour réduire la consommation d'énergie",
        waste_title: "Réduction des Déchets",
        waste_text: "Fabrication optimisée pour minimiser les déchets",
        contact_title: "Contactez-nous",
        get_in_touch: "Prenez Contact",
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        message: "Message",
        send_message: "Envoyer le Message",
        thank_you: "Merci pour votre message. Nous vous contacterons bientôt !"
    },
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        products: "المنتجات",
        industries: "الصناعات",
        sustainability: "الاستدامة",
        contact: "اتصل بنا",
        hero_title: "الابتكار في التعبئة المعدنية",
        hero_subtitle: "نقود الطريق في حلول التعبئة المعدنية المستدامة في الجزائر",
        get_started: "ابدأ الآن",
        about_title: "عن فاستا",
        about_text: "منذ تأسيسنا، كانت فاستا في طليعة الابتكار في مجال التعبئة المعدنية في الجزائر. نجمع بين الحرفية التقليدية والتكنولوجيا الحديثة لتقديم حلول تعبئة استثنائية.",
        mission_title: "مهمتنا",
        mission_text: "تقديم حلول تعبئة معدنية مستدامة وعالية الجودة تلبي احتياجات عملائنا مع الحفاظ على أعلى معايير المسؤولية البيئية.",
        products_title: "منتجاتنا",
        industrial_containers: "صناديق معدنية (250 جم إلى 20 كجم)",
        industrial_desc: "صناديق متينة بسعات مختلفة، مثالية للتخزين والنقل",
        food_packaging: "صناديق مزخرفة",
        food_desc: "عبوات معدنية أنيقة لعرض فريد وجمالي",
        specialty_containers: "حصالات معدنية",
        specialty_desc: "حصالات متينة وقابلة للتخصيص للاستخدام العملي أو الديكور",
        industries_title: "الصناعات التي نخدمها",
        paint_industry: "صناعة الدهانات",
        toy_industry: "صناعة الألعاب",
        decoration_industry: "صناعة الديكور",
        sustainability_title: "التزامنا بالاستدامة",
        recyclable_title: "مواد قابلة لإعادة التدوير",
        recyclable_text: "حلول تعبئة معدنية قابلة لإعادة التدوير 100%",
        energy_title: "كفاءة الطاقة",
        energy_text: "عمليات إنتاج حديثة لتقليل استهلاك الطاقة",
        waste_title: "تقليل النفايات",
        waste_text: "تصنيع محسن لتقليل النفايات",
        contact_title: "اتصل بنا",
        get_in_touch: "تواصل معنا",
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        message: "الرسالة",
        send_message: "إرسال الرسالة",
        thank_you: "شكراً لرسالتك. سنتواصل معك قريباً!"
    }
};

// Current language
let currentLang = 'en';

// Language Selector
function changeLanguage(lang) {
    const buttons = document.querySelectorAll('.language-selector button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
    
    currentLang = lang;
    updateContent();
    
    // Update HTML dir attribute for RTL support
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// Update content based on selected language
function updateContent() {
    // Navigation links
    document.querySelector('a[href="#home"]').textContent = translations[currentLang].home;
    document.querySelector('a[href="#about"]').textContent = translations[currentLang].about;
    document.querySelector('a[href="#products"]').textContent = translations[currentLang].products;
    document.querySelector('a[href="#industries"]').textContent = translations[currentLang].industries;
    document.querySelector('a[href="#sustainability"]').textContent = translations[currentLang].sustainability;
    document.querySelector('a[href="#contact"]').textContent = translations[currentLang].contact;

    // Hero section
    document.querySelector('.hero h1').textContent = translations[currentLang].hero_title;
    document.querySelector('.hero p').textContent = translations[currentLang].hero_subtitle;
    document.querySelector('.hero .cta-button').textContent = translations[currentLang].get_started;

    // About section
    document.querySelector('#about h2').textContent = translations[currentLang].about_title;
    document.querySelector('.about-text p:first-child').textContent = translations[currentLang].about_text;
    document.querySelector('.about-text h3').textContent = translations[currentLang].mission_title;
    document.querySelector('.about-text p:last-child').textContent = translations[currentLang].mission_text;

    // Products section
    document.querySelector('#products h2').textContent = translations[currentLang].products_title;
    const productCards = document.querySelectorAll('.product-card');
    productCards[0].querySelector('h3').textContent = translations[currentLang].industrial_containers;
    productCards[0].querySelector('p').textContent = translations[currentLang].industrial_desc;
    productCards[1].querySelector('h3').textContent = translations[currentLang].food_packaging;
    productCards[1].querySelector('p').textContent = translations[currentLang].food_desc;
    productCards[2].querySelector('h3').textContent = translations[currentLang].specialty_containers;
    productCards[2].querySelector('p').textContent = translations[currentLang].specialty_desc;

    // Industries section
    document.querySelector('#industries h2').textContent = translations[currentLang].industries_title;
    const industryCards = document.querySelectorAll('.industry-card h3');
    industryCards[0].textContent = translations[currentLang].paint_industry;
    industryCards[1].textContent = translations[currentLang].toy_industry;
    industryCards[2].textContent = translations[currentLang].decoration_industry;

    // Sustainability section
    document.querySelector('#sustainability h2').textContent = translations[currentLang].sustainability_title;
    const sustainabilityCards = document.querySelectorAll('.sustainability-card');
    sustainabilityCards[0].querySelector('h3').textContent = translations[currentLang].recyclable_title;
    sustainabilityCards[0].querySelector('p').textContent = translations[currentLang].recyclable_text;
    sustainabilityCards[1].querySelector('h3').textContent = translations[currentLang].energy_title;
    sustainabilityCards[1].querySelector('p').textContent = translations[currentLang].energy_text;
    sustainabilityCards[2].querySelector('h3').textContent = translations[currentLang].waste_title;
    sustainabilityCards[2].querySelector('p').textContent = translations[currentLang].waste_text;

    // Contact section
    document.querySelector('#contact h2').textContent = translations[currentLang].contact_title;
    document.querySelector('.contact-info h3').textContent = translations[currentLang].get_in_touch;
    
    // Update form placeholders
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const phoneInput = document.getElementById('phone-input');
    const messageInput = document.getElementById('message-input');
    
    if (nameInput) nameInput.placeholder = translations[currentLang].name;
    if (emailInput) emailInput.placeholder = translations[currentLang].email;
    if (phoneInput) phoneInput.placeholder = translations[currentLang].phone;
    if (messageInput) messageInput.placeholder = translations[currentLang].message;
    
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) submitButton.textContent = translations[currentLang].send_message;
}

// Mobile Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}

// Contact Form
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form submitted:', data);
    alert(translations[currentLang].thank_you);
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

window.addEventListener('scroll', revealOnScroll);

// Initialize content in default language
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});