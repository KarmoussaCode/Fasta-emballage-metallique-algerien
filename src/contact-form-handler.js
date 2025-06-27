document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const savedMessage = localStorage.getItem("demandeProduit");

    if (savedMessage && messageInput) {
    messageInput.value = savedMessage;
    localStorage.removeItem("demandeProduit");
    messageInput.scrollIntoView({ behavior: 'smooth' });
    }
});
