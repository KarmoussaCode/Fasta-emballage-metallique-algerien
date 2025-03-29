document.addEventListener("DOMContentLoaded", function() {
    // Charger le header
    fetch("static/header.html") //  Assure-toi que le chemin est correct
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Erreur lors du chargement du header:", error));

    // Charger le footer
    fetch("static/footer.html") // Assure-toi que le chemin est correct
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("Erreur lors du chargement du footer:", error));
});
