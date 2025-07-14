document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.getElementById("message-input");
  
  // Lire le message depuis les paramètres d\\\'URL
  const urlParams = new URLSearchParams(window.location.search);
  const savedMessage = urlParams.get("message");

  if (savedMessage && messageInput) {
    messageInput.value = decodeURIComponent(savedMessage); // Décode le message
    // Pas besoin de supprimer le message de localStorage ici
    messageInput.scrollIntoView({ behavior: 'smooth' });
  }
});
