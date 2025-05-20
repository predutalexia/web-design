document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("openSide");
    const closeBtn = document.getElementById("closeSide");
    const sideMenu = document.getElementById("sideMenu");

    openBtn.addEventListener("click", () => {
        sideMenu.style.width = "250px"; // Partial width
    });

    closeBtn.addEventListener("click", () => {
        sideMenu.style.width = "0";
    });

    // Optional: close when clicking a link
    document.querySelectorAll(".side-content a").forEach(link => {
        link.addEventListener("click", () => {
            sideMenu.style.width = "0";
        });
    });
});
