// Fonction globale qu'on appelle depuis le HTML
window.demanderDevis = function(nomProduit, materiau, capacite, conditionnement) {
    const message = `🔹 Bonjour, je suis intéressé par le produit ${nomProduit}.
Matière: ${materiau}
Capacité: ${capacite}
Conditionnement: ${conditionnement}
Pourriez-vous m'envoyer un devis avec les prix et conditions ?
Merci.`;
    
    localStorage.setItem("demandeProduit", message);
}

window.choisirHauteur = function(hauteur) {
    console.log(`Hauteur ${hauteur} sélectionnée`);
    // Logique pour changer la hauteur du produit
}

// Ce bloc s'exécutera dans index.html UNIQUEMENT !
document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const savedMessage = localStorage.getItem("demandeProduit");

    if (savedMessage && messageInput) {
        messageInput.value = savedMessage;
        localStorage.removeItem("demandeProduit");
        messageInput.scrollIntoView({ behavior: 'smooth' });
    }
});

