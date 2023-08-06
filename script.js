let menuVisible = false;
//Function to show or hide the menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive"
        menuVisible = true;
    }
}

function seleccionar() {
    //Hide Menu when choose everyone
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Define the translation data for each language
const translations = {
    es: {
        // Menu
        home: "INICIO",
        aboutMe: "ACERCA DE MI",
        contact: "CONTACTO",
        languageBtn: "EN",
        // About Me Section
        aboutMeText: "Hola soy Juan Sebastian Gracia, un apasionado Full Stack Developer. Mi amor por el diseño y la tecnología me ha llevado a explorar el mundo del desarrollo web, mi objetivo es combinar mi creatividad y habilidades técnicas para construir interfaces web hermosas y funcionales que generen un impacto positivo en los usuarios.<br><br>Con conocimientos en HTML, CSS y JavaScript, junto con experiencia en el uso de framework como React, por el Backend con Node js, Express, MongoDb, mi objetivo es seguir creciendo como Full Stack Developer, abrazando nuevas tecnologías y prácticas, y contribuyendo al éxito de proyectos que hagan una diferencia en la vida de las personas.",
        personalData: "Datos Personales",
        phone: "Telefono:",
        location: "Ubicacion:",
        interests: "Intereses",
        videogames: "VIDEJUEGOS",
        music: "MUSICA",
        travel: "VIAJAR",
        cinema: "CINE",
        read: "LEER",
        exercise: "EJERCICIO",
        photography: "FOTOGRAFIA",
        cars: "AUTOS",
        downloadCV: "Descargar CV",
        communicativeSkills: "Habilidades Comunicativas",
        adaptability: "Capacidad de Adaptacion",
        abilityToSolveProblems: "Capacidad para Resolver Problemas",
        creativityInnovation: "Creatividad e Innovacion",
        teamWork: "Trabajo en Equipo",
        honestyIntegrity: "Honestidad e Integridad",
        initiative: "Iniciativa",
        proyectWeather:"Proyecto realizado en React JS consumiendo una Api y manejo de estados",
        proyectRickMorty: "Proyecto en Html, CSS y React JS consumiendo Api del clima y manejo de Estados",
        proyectEcommerce: "Proyecto en Html, CSS y React JS consumiendo Api y manejo de Estados",
        proyectQuotes: "Proyecto en Hmtl, CSS y React JS consumiendo Api de generacion de citas",
        proyectToDoList: "Proyecto en HTML, CSS y Javascript Vanilla",
        proyectRgbColors: "Proyecto en Html, CSS y Javascript Vanilla",
        yourName: "Tu Nombre",
        phoneNumber: "Numero Telefonico",
        email: "Correo Electronico",
        message: "Mensaje",
        sendmessage: "Enviar Mensaje",
             

  
    },
    en: {
        // Menu
        home: "HOME",
        aboutMe: "ABOUT ME",
        contact: "CONTACT",
        languageBtn: "ES",
        // About Me Section
        aboutMeText: "Hello, I am Juan Sebastian Gracia, a passionate Full Stack Developer. My love for design and technology has led me to explore the world of web development. My goal is to combine my creativity and technical skills to build beautiful and functional web interfaces that have a positive impact on users. With knowledge in HTML, CSS, and JavaScript, along with experience in using frameworks like React, and working with Node.js, Express, MongoDB for the backend, my aim is to continue growing as a Full Stack Developer. I embrace new technologies and best practices while contributing to the success of projects that make a difference in people's lives.",
        personalData: "Personal Data",
        phone: "Phone:",
        location: "Location:",
        interests: "Interests",
        videogames: "VIDEOGAMES",
        music: "MUSIC",
        travel: "TRAVEL",
        cinema: "CINEMA",
        read: "READ",
        exercise: "EXERCISE",
        photography: "PHOTOGRAPHY",
        cars: "CARS",
        downloadCV: "Download CV",
        communicativeSkills: "Communicative Skills",
        adaptability: "Adaptability",
        abilityToSolveProblems: "Ability to Solve Problems",
        creativityInnovation: "Creativity and Innovation",
        teamWork: "Teamwork",
        honestyIntegrity: "Honesty and Integrity",
        initiative: "Iniciative",
        proyectWeather:"Project developed in React JS, consuming an API, and managing states",
        proyectRickMorty: "Project in HTML, CSS, and React JS, consuming weather API, and state management",
        proyectEcommerce: "Proyecto en Html, CSS y React JS consumiendo Api y manejo de Estados",
        proyectQuotes: "Project in HTML, CSS, and React JS, consuming a quote generation API",
        proyectToDoList: "Project in HTML, CSS, and Vanilla JavaScript",
        proyectRgbColors: "Project in HTML, CSS, and Vanilla JavaScript",
        yourName: "Your Name",
        phoneNumber: "Phone Number",
        email: "Email",
        message: "Message",
        sendmessage: "Send Message",
        
    }
}



// Función para cambiar el idioma
function changeLanguage() {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === "es" ? "en" : "es";

    // Obtener todos los elementos con el atributo data-translate
    const elements = document.querySelectorAll("[data-translate]");

    // Actualizar el texto de los elementos con las traducciones correspondientes
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[newLanguage][key]) {
            element.innerHTML = translations[newLanguage][key];
            // Actualizar el placeholder si el elemento es un campo de texto o textarea
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.setAttribute("placeholder", translations[newLanguage][key]);
            }
        }
    });

    // Cambiar el atributo lang del documento para reflejar el nuevo idioma
    document.documentElement.lang = newLanguage;
}