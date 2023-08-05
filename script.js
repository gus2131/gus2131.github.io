// Colores disponibles
const colors = {
    color1: {
        text: '0e101a',
        background: '#f2f2f2',
        primaryButton: '#aff2ea',
        secondaryButton: '#f0f2fc',
        accent: '#0d8065',
    },
    color2: {
        text: '#d6d6d6',
        background: '#272727',
        primaryButton: '#10f49c',
        secondaryButton: '#424242',
        accent: '#ffe401',
    },
    color3: {
        text: '#333',
        background: '#D9D9D9',
        primaryButton: '#800080',
        secondaryButton: '#999',
        accent: '#FFC0CB',
    },
    color4: {
        text: '#333',
        background: '#F5F5F5',
        primaryButton: '#FF6347',
        secondaryButton: '#777',
        accent: '#00CED1',
    },
};

// Función para cambiar los colores
function changeColors(color) {
    const { text, background, primaryButton, secondaryButton, accent } = colors[color];
    document.body.style.backgroundColor = background;
    document.body.style.color = text;
    document.querySelector('.barra-superior').style.backgroundColor = 'transparent';
    document.querySelector('.barra-superior').style.borderColor = primaryButton;
    document.querySelector('.pie-de-pagina').style.backgroundColor = primaryButton;
    document.querySelectorAll('.color-buttons button').forEach((button) => {
        button.style.backgroundColor = secondaryButton;
        button.style.color = text;
    });
    document.querySelectorAll('a').forEach((link) => {
        link.style.color = accent;
    });

    // Mostrar u ocultar el pie de página después de cambiar los colores
    togglePieVisible();
}

// Asignar eventos de clic a los botones
document.getElementById('color1').addEventListener('click', () => changeColors('color1'));
document.getElementById('color2').addEventListener('click', () => changeColors('color2'));
document.getElementById('color3').addEventListener('click', () => changeColors('color3'));
document.getElementById('color4').addEventListener('click', () => changeColors('color4'));

// Mostrar u ocultar el pie de página cuando el usuario llega al final de la página
function togglePieVisible() {
    const pieDePagina = document.querySelector('.pie-de-pagina');
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition + windowHeight >= documentHeight) {
        pieDePagina.classList.add('pie-visible');
    } else {
        pieDePagina.classList.remove('pie-visible');
    }
}

document.addEventListener('scroll', togglePieVisible);

// Mostrar u ocultar el pie de página al cargar la página
document.addEventListener('DOMContentLoaded', togglePieVisible);

// Inicializar carrusel como vertical
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
        slidesPerView: 2, // Muestra 2 blogs al mismo tiempo (ajusta este valor según tus necesidades)
        
        mousewheel: true, // Habilitar el scroll del mouse
        keyboard: {
            enabled: true, // Habilitar navegación con teclado
        },
        navigation: {
            nextEl: '.swiper-button-up', // Selector de la flecha de navegación siguiente
            prevEl: '.swiper-button-down', // Selector de la flecha de navegación anterior
        },
        initialSlide: 0, // Mostrar el primer blog al cargar el carrusel
    });

    // Mostrar u ocultar el pie de página después de cambiar los colores
    togglePieVisible();
});


// Inicializar AtroposJS
document.addEventListener("DOMContentLoaded", function() {
    const atropos = Atropos.create({
        targets: ".parallax-element", // Efecto de paralaje para elementos con la clase .parallax-element
        offsetEffect: 50, // Ajusta este valor para controlar la intensidad del efecto de paralaje
        duration: 800, // Ajusta la duración de la animación
    });

    // Mostrar u ocultar el pie de página después de cambiar los colores
    togglePieVisible();
});
