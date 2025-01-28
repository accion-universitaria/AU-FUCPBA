document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownList = document.querySelector(".dropdown-list");

    // Toggle la visibilidad de la lista cuando se hace clic en el botón
    dropdownButton.addEventListener("click", function() {
        // Si la lista está visible, se oculta, si no, se muestra
        dropdownList.style.display = dropdownList.style.display === "block" ? "none" : "block";
    });
});
