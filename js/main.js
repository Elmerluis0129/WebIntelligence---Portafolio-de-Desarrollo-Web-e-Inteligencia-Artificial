document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuFlotante = document.getElementById("menu-flotante"); // Referencia al botón flotante
    const menuLateral = document.getElementById("menu-lateral");
    const closeMenu = document.getElementById("close-menu");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Alternar el menú al hacer clic en el botón de menú
    menuToggle.addEventListener("click", function () {
        menuLateral.classList.toggle("open");
        menuFlotante.classList.toggle("menu-open"); // Cambia el estado del botón flotante
    });

    // Cerrar el menú al hacer clic en el botón de cerrar dentro del menú
    if (closeMenu) {
        closeMenu.addEventListener("click", function () {
            menuLateral.classList.remove("open");
            menuFlotante.classList.remove("menu-open"); // Remueve la clase cuando se cierra el menú
        });
    }

    // Alternar Modo Oscuro
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        // Cambia el texto del botón según el estado del modo oscuro
        darkModeToggle.textContent = body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
    });

    // Funcionalidad del Modal de Cookies
    if (!sessionStorage.getItem("cookiesAcknowledged")) {
        // Mostrar el modal si no se ha aceptado o rechazado aún
        $('#cookieModal').modal('show');

        // Aceptar Cookies
        document.getElementById("acceptCookies").addEventListener("click", function () {
            // Guardar el estado de aceptación en sessionStorage
            sessionStorage.setItem("cookiesAcknowledged", "accepted");
            // Cerrar el modal
            $('#cookieModal').modal('hide');
        });

        // Rechazar Cookies
        document.getElementById("rejectCookies").addEventListener("click", function () {
            // Guardar el estado de rechazo en sessionStorage
            sessionStorage.setItem("cookiesAcknowledged", "rejected");
            // Cerrar el modal
            $('#cookieModal').modal('hide');
        });
    }
});
