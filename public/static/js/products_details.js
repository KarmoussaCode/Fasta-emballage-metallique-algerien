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
  