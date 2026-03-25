// =============================================
// Header loader
// =============================================
function loadHeader() {
    fetch("header.html")
        .then(r => r.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Mark the current page's nav link as active
            const currentFile = location.pathname.split("/").pop() || "index.html";
            document.querySelectorAll(".nav-item").forEach(link => {
                const linkFile = link.getAttribute("href").split("/").pop();
                link.classList.toggle("active", linkFile === currentFile);
            });

            // Wire up hamburger toggle
            const toggle = document.querySelector(".nav-toggle");
            const nav = document.querySelector(".nav");
            if (toggle && nav) {
                toggle.addEventListener("click", () => {
                    const isOpen = nav.classList.toggle("open");
                    toggle.setAttribute("aria-expanded", isOpen);
                });
            }
        });
}

// =============================================
// Image zoom modal
// =============================================
function zoomImage(img) {
    const src = img.src.replace("-small", "-large");
    document.getElementById("zoomedImg").src = src;
    document.getElementById("modal").classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modal").classList.remove("open");
    document.body.style.overflow = "";
}

// Close modal on Escape key
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});

// =============================================
// Init
// =============================================
document.addEventListener("DOMContentLoaded", loadHeader);