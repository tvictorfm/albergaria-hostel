// JavaScript para o carrossel de relatos com auto-slide
const carousel = document.querySelector(".carousel");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const totalCards = carousel.children.length;

let currentIndex = 0;
let interval;

// Função para atualizar a posição do carrossel
function updateCarousel() {
  const cardWidth = carousel.querySelector(".carousel-card").offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Função para ir para o próximo card
function nextSlide() {
  currentIndex = currentIndex < totalCards - 1 ? currentIndex + 1 : 0;
  updateCarousel();
}

// Função para iniciar o auto-slide
function startAutoSlide() {
  interval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
}

// Função para pausar o auto-slide quando o usuário navega manualmente
function stopAutoSlide() {
  clearInterval(interval);
  startAutoSlide(); // Reinicia o auto-slide após a navegação manual
}

// Eventos para os botões de navegação
prevButton.addEventListener("click", () => {
  stopAutoSlide();
  currentIndex = currentIndex > 0 ? currentIndex - 1 : totalCards - 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
});

// Redimensionar ao ajustar a tela
window.addEventListener("resize", updateCarousel);

// Iniciar o carrossel automaticamente
startAutoSlide();

const textoAlternante = document.getElementById("texto-alternante");
const textos = [
  "BEM-VINDO",
  "WELCOME",
  "BIENVENUE",
  "BIENVENIDOS",
  "WITAMY",
  "добро пожаловать",
];
let i = 0;

setInterval(() => {
  textoAlternante.textContent = textos[i];
  i = (i + 1) % textos.length;
}, 2000);

// Função para alternar a visibilidade do menu de navegação em dispositivos móveis
document.getElementById("menu-toggle").addEventListener("click", function () {
  const navigation = document.getElementById("navigation");
  navigation.classList.toggle("show");
});

// Função para atualizar a classe do link ativo na navegação
function updateActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
}

// Função para adicionar efeito de fade in nas sections
function fadeInSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionTop < screenPosition) {
      section.classList.add("active");
    }
  });
}

// Função para reduzir o tamanho da logo ao rolar a página
function resizeHeaderOnScroll() {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Eventos de rolagem e de carregamento
window.addEventListener("scroll", () => {
  updateActiveLink();
  fadeInSections();
  resizeHeaderOnScroll();
});

window.addEventListener("load", fadeInSections);

const footerSections = document.querySelectorAll(".footer .fade-in");

function animateFooter() {
  footerSections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", animateFooter);
