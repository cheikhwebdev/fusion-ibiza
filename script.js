/* ===== CAMBIO DE IDIOMA ===== */
const CLAVE_STORAGE = "idiomaFusion";
const IDIOMAS_VALIDOS = ["es", "en", "fr", "it", "de"];
const botonesIdioma = document.querySelectorAll("#hero nav button");

// Sustituye cada texto con data-i18n por su traducción
function cambiarIdioma(idioma) {
    const diccionario = traducciones[idioma];
    if (!diccionario) return;

    document.querySelectorAll("[data-i18n]").forEach((elemento) => {
        const texto = diccionario[elemento.dataset.i18n];
        if (texto !== undefined) {
            elemento.textContent = texto;
        }
    });

    document.documentElement.lang = idioma;
    localStorage.setItem(CLAVE_STORAGE, idioma);
    marcarBotonActivo(idioma);
}

function marcarBotonActivo(idioma) {
    botonesIdioma.forEach((boton) => {
        const idiomaBoton = boton.textContent.trim().toLowerCase();
        boton.classList.toggle("active", idiomaBoton === idioma);
    });
}

botonesIdioma.forEach((boton) => {
    boton.addEventListener("click", () => {
        cambiarIdioma(boton.textContent.trim().toLowerCase());
    });
});

// Idioma inicial: el guardado, si no el del navegador, si no inglés
function detectarIdioma() {
    const guardado = localStorage.getItem(CLAVE_STORAGE);
    if (guardado && IDIOMAS_VALIDOS.includes(guardado)) return guardado;

    const idiomasNavegador = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || ""];

    for (const idiomaNav of idiomasNavegador) {
        const codigo = String(idiomaNav).toLowerCase().slice(0, 2);
        if (IDIOMAS_VALIDOS.includes(codigo)) return codigo;
    }

    return "en";
}

cambiarIdioma(detectarIdioma());


/* ===== CARRUSEL DEL HERO ===== */
const slides = document.querySelectorAll(".slide");
let slideActual = 0;

setInterval(() => {
    slides[slideActual].classList.remove("active");
    slideActual = (slideActual + 1) % slides.length; // vuelve a 0 al llegar al final
    slides[slideActual].classList.add("active");
}, 5000);


/* ===== MENÚ HAMBURGUESA (MÓVIL) ===== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("#navbar .nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Cierra el menú al elegir una sección
navLinks.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


/* ===== BOTÓN VOLVER ARRIBA ===== */
const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("visible", window.scrollY > 400);
});

btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ===== GALERÍA (LIGHTBOX) ===== */
const fotos = Array.from(document.querySelectorAll("#galeria .galeria-item img"));
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lb-img");
let fotoActual = 0;

function mostrarFoto(indice) {
    fotoActual = indice;
    lightboxImg.src = fotos[indice].src;
    lightboxImg.alt = fotos[indice].alt;
}

function abrirLightbox(indice) {
    mostrarFoto(indice);
    lightbox.classList.add("abierto");
    document.body.style.overflow = "hidden"; // bloquea el scroll de la página
}

function cerrarLightbox() {
    lightbox.classList.remove("abierto");
    document.body.style.overflow = "";
}

// direccion: -1 = anterior, 1 = siguiente (da la vuelta al llegar al final)
function moverFoto(direccion) {
    const nuevo = (fotoActual + direccion + fotos.length) % fotos.length;
    mostrarFoto(nuevo);
}

fotos.forEach((foto, indice) => {
    foto.addEventListener("click", () => abrirLightbox(indice));
});

lightbox.querySelector(".lb-cerrar").addEventListener("click", cerrarLightbox);

lightbox.querySelector(".lb-prev").addEventListener("click", (evento) => {
    evento.stopPropagation();
    moverFoto(-1);
});

lightbox.querySelector(".lb-next").addEventListener("click", (evento) => {
    evento.stopPropagation();
    moverFoto(1);
});

// Clic en el fondo oscuro = cerrar
lightbox.addEventListener("click", (evento) => {
    if (evento.target === lightbox) cerrarLightbox();
});

// Teclado: Escape cierra, flechas cambian de foto
document.addEventListener("keydown", (evento) => {
    if (!lightbox.classList.contains("abierto")) return;

    if (evento.key === "Escape") cerrarLightbox();
    if (evento.key === "ArrowLeft") moverFoto(-1);
    if (evento.key === "ArrowRight") moverFoto(1);
});