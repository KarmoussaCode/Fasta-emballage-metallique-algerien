// Fonction globale qu'on appelle depuis le HTML
document.addEventListener("DOMContentLoaded", function() {
    const devisLink = document.getElementById("demander-devis-link");
    if (devisLink) {
        devisLink.addEventListener("click", function(event) {
            const productName = this.dataset.productName;
            const productMaterial = this.dataset.productMaterial;
            const productCapacity = this.dataset.productCapacity;
            const productPackaging = this.dataset.productPackaging;

            const message = `🔹 Bonjour, je suis intéressé par le produit ${productName}.\nMatière: ${productMaterial}\nCapacité: ${productCapacity}\nConditionnement: ${productPackaging}\nPourriez-vous m\\'envoyer un devis avec les prix et conditions ?\nMerci.`;
            
            // Encode le message pour l\\'URL
            const encodedMessage = encodeURIComponent(message);
            
            // Construit l\\'URL avec le message en paramètre
            this.href = `./index.html?message=${encodedMessage}#contact-form`;
        });
    }
});

window.choisirHauteur = function(hauteur) {
    console.log(`Hauteur ${hauteur} sélectionnée`);
    // Logique pour changer la hauteur du produit
}
