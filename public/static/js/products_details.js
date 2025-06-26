// Fonction globale qu'on appelle depuis le HTML
function demanderDevis(nomProduit, materiau, capacite, conditionnement) {
  const message = `🔹 Bonjour, je suis intéressé par le produit ${nomProduit}.
Matière: ${materiau}
Capacité: ${capacite}
Conditionnement: ${conditionnement}
Pourriez-vous m’envoyer un devis avec les prix et conditions ?
Merci.`;

  localStorage.setItem("demandeProduit", message);
}

// Ce bloc s'exécutera uniquement sur index.html
document.addEventListener("DOMContentLoaded", function () {
  // Attendre que le script soit entièrement chargé
  window.addEventListener("load", function () {
    const messageInput = document.getElementById("message-input");
    const savedMessage = localStorage.getItem("demandeProduit");

    if (savedMessage && !messageInput) {
      setTimeout(() => {
        const messageInput = document.getElementById("message-input");
        if (messageInput) {
          messageInput.value = savedMessage;
          localStorage.removeItem("demandeProduit");
          messageInput.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // 0.5 second delay
    }
  });
});