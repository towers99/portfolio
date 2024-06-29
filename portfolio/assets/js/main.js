import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import updateCopyrightYear from "./helpers/date_updater.js";
import resetToHome from "./helpers/reload_page.js";
import sendEmail from "./helpers/send__form.js";

parallax()

activeMenu()

resetToHome()

updateCopyrightYear()

sendEmail()

document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('language-toggle');
    const languageLabel = document.getElementById('language-label');

    const texts = {
        es: {
            home: 'Inicio',
            about: 'Acerca de Mí',
            skills: 'Habilidades',
            projects: 'Portafolio',
            contact: 'Contacto',
            welcome: 'Hey, soy Jeison',
            description: 'Soy desarrollador web, apasionado por la tecnología y la programación.',
            downloadCV: 'Descargar CV',
            aboutTitle: 'Acerca de Mí',
            aboutDescription: 'La programación no solo es un conjunto de reglas y sintaxis; es la capacidad de imaginar, diseñar y construir de manera colaborativa. Es la satisfacción de ver cómo algo que has creado puede mejorar la vida de otros, y eso, para mí, es una fuente inagotable de motivación y pasión',
            skillsTitle: 'Habilidades',
            skillsDescription: 'Desarrollador web con conocimientos en HTML, CSS, JavaScript y React. Mis habilidades se dividen en cuatro áreas clave: desarrollo front-end, programación, frameworks y resolución de problemas. Además, poseo conocimiento en backend, SQL, PostgreSQL, Node.js y MySQL y puedo decir que este es mi punto fuerte.',
            textHtml: `Tengo un sólido conocimiento en HTML5, el estándar más reciente del lenguaje de marcado para la
                    creación de páginas web.
                    Mis habilidades incluyen el uso de etiquetas semánticas, integración de multimedia, creación de
                    gráficos con Canvas y SVG, implementación de formularios avanzados, manejo de APIs de HTML5 y
                    técnicas para asegurar
                    compatibilidad entre navegadores y optimización del rendimiento`,
            textPostgreSQL: `Tengo un profundo conocimiento en PostgreSQL, un sistema de gestión de bases de datos relacional y
                    orientado a objetos. Mis habilidades incluyen diseño y normalización de bases de datos, escritura de
                    consultas SQL complejas, optimización del rendimiento mediante índices y ajustes de configuración,
                    implementación de procedimientos almacenados y triggers, gestión de transacciones y concurrencia, y
                    uso de herramientas avanzadas de PostgreSQL para análisis y seguridad de datos.`,
            textJavascript: `Tengo un amplio conocimiento en JavaScript, un lenguaje de programación esencial para el desarrollo
                    web. Mis habilidades incluyen la creación de interfaces de usuario interactivas mediante
                    manipulación del DOM y eventos, uso de características modernas de ES6+, realización de solicitudes
                    asíncronas con AJAX y Fetch API, experiencia con frameworks como React, desarrollo de aplicaciones
                    del lado del servidor con Node.js.`,
            textNodeJs: `Tengo un amplio conocimiento en Node.js, una plataforma de desarrollo que permite ejecutar
                    JavaScript del lado del servidor. Mis habilidades incluyen la creación de APIs RESTful, gestión de
                    paquetes y dependencias con npm, desarrollo de aplicaciones web utilizando frameworks como Express,
                    manejo de bases de datos NoSQL y SQL, implementación de autenticación y autorización, y uso de
                    herramientas para pruebas y despliegue continuo.`,
            habilidadesBlandas: `Habilidades Blandas`,
            habilidad1: `Responsable`,
            habilidad2: `Trabajo en equipo`,
            habilidad3: `Creativo`,
            habilidad4: `Puntual`,
            habilidad5: `Proactivo`,
            habilidad6: `Autodidacta`,
            habilidad7: `Adaptabilidad`,
            projectsTitle: 'Proyectos',
            Formulario: `Formulario`,
            proyect: `Este proyecto tiene como funcion crear, editar y eliminar formularios. Echo en react y su Api es echa con NodeJs, SQL.`,
            infoContact : `Información de contacto`,
            contactTitle: 'Contacto',
            titleMensage : `Enviar mensaje`,
            name : `Nombre`,
            correo : `Correo`,
            asunto : `Asunto`,
            mensaje : `Mensaje`,
            aviso : `Formulario enviado con éxito!`,
            description : `Soy desarrollador web, apasionado por la tecnología y la programación. Quiero ser una pieza fundamental de tu equipo de trabajo.`,
            redes : `Redes De Trabajo`,
            contactDescription: 'Para contactarme, por favor elija cualquiera de los siguientes medios',
            sendMessage: 'Enviar mensaje'
        },
        en: {
            home: 'Home',
            about: 'About Me',
            skills: 'Skills',
            projects: 'Portfolio',
            contact: 'Contact',
            welcome: 'Hey, I am Jeison',
            description: 'I am a web developer, passionate about technology and programming.',
            downloadCV: 'Download CV',
            aboutTitle: 'About Me',
            aboutDescription: 'Programming is not just a set of rules and syntax; it is the ability to imagine, design, and build collaboratively. It is the satisfaction of seeing how something you have created can improve the lives of others, and that, for me, is an inexhaustible source of motivation and passion.',
            skillsTitle: 'Skills',
            skillsDescription: 'Web developer with knowledge in HTML, CSS, JavaScript, and React. My skills are divided into four key areas: front-end development, programming, frameworks, and problem-solving. Additionally, I have knowledge in backend, SQL, PostgreSQL, Node.js, and MySQL, and I can say that this is my strong point.',
            textHtml: `I have a solid knowledge of HTML5, the latest standard of the markup language for creating web pages. My skills include the use of semantic tags, multimedia integration, creating graphics with Canvas and SVG, implementing advanced forms, handling HTML5 APIs, and techniques for ensuring cross-browser compatibility and performance optimization.`,
            textPostgreSQL: `I have a deep knowledge of PostgreSQL, a relational and object-oriented database management system. My skills include database design and normalization, writing complex SQL queries, performance optimization through indexing and configuration tuning, implementing stored procedures and triggers, managing transactions and concurrency, and using advanced PostgreSQL tools for data analysis and security.`,
            textJavascript: `I have extensive knowledge of JavaScript, an essential programming language for web development. My skills include creating interactive user interfaces through DOM manipulation and event handling, using modern ES6+ features, making asynchronous requests with AJAX and Fetch API, experience with frameworks like React, and developing server-side applications with Node.js.`,
            textNodeJs: `I have extensive knowledge of Node.js, a development platform that allows JavaScript to be executed on the server side. My skills include creating RESTful APIs, managing packages and dependencies with npm, developing web applications using frameworks like Express, handling NoSQL and SQL databases, implementing authentication and authorization, and using tools for testing and continuous deployment.`,
            habilidadesBlandas: `Soft Skills`,
            habilidad1: `responsible`,
            habilidad2: `teamwork`,
            habilidad3: `creative`,
            habilidad4: `punctual`,
            habilidad5: `proactive`,
            habilidad6: `autodidact`,
            habilidad7: `adaptability`,
            projectsTitle: 'Projects',
            Formulario: `Form`,
            proyect: `This project functions to create, edit, and delete forms.
            It is made with React, and its API is made with NodeJs and SQL.`,
            infoContact : `Contact information`,
            contactTitle: 'Contact',
            titleMensage : `Send message`,
            name : `Name`,
            correo : `Email`,
            asunto : `Subject`,
            mensaje : `Message`,
            aviso : `Form submitted successfully!`,
            description : `I'm a web developer passionate about technology and programming. I want to be a key member of your team.`,
            redes : `Work networks`,
            contactDescription: 'To contact me, please choose any of the following means',
            sendMessage: 'Send Message'
        }
    };

    function setLanguage(language) {
        document.querySelector('.navbar__link[href="#home"]').textContent = texts[language].home;
        document.querySelector('.navbar__link[href="#about"]').textContent = texts[language].about;
        document.querySelector('.navbar__link[href="#skills"]').textContent = texts[language].skills;
        document.querySelector('.navbar__link[href="#projects"]').textContent = texts[language].projects;
        document.querySelector('.navbar__link[href="#contact"]').textContent = texts[language].contact;
        document.querySelector('.home__title').textContent = texts[language].welcome;
        document.querySelector('.home__description').textContent = texts[language].description;
        document.querySelector('.btn--primary').textContent = texts[language].downloadCV;
        document.querySelector('#about .section__title').textContent = texts[language].aboutTitle;
        document.querySelector('.about__description').textContent = texts[language].aboutDescription;
        document.querySelector('#skills .section__title').textContent = texts[language].skillsTitle;
        document.querySelector('.skills__description').textContent = texts[language].skillsDescription;
        document.querySelector('.texto1').textContent = texts[language].textHtml;
        document.querySelector('.texto2').textContent = texts[language].textPostgreSQL;
        document.querySelector('.texto3').textContent = texts[language].textJavascript;
        document.querySelector('.texto4').textContent = texts[language].textNodeJs;
        document.querySelector('.skills__tags-title').textContent = texts[language].habilidadesBlandas;
        document.querySelector('.text-1').textContent = texts[language].habilidad1;
        document.querySelector('.text-2').textContent = texts[language].habilidad2;
        document.querySelector('.text-3').textContent = texts[language].habilidad3;
        document.querySelector('.text-4').textContent = texts[language].habilidad4;
        document.querySelector('.text-5').textContent = texts[language].habilidad5;
        document.querySelector('.text-6').textContent = texts[language].habilidad6;
        document.querySelector('.text-7').textContent = texts[language].habilidad7;
        document.querySelector('#projects .section__title').textContent = texts[language].projectsTitle;
        document.querySelector('.projects__name').textContent = texts[language].Formulario;
        document.querySelector('.projects__description').textContent = texts[language].proyect;
        document.querySelector('.contact__info-title').textContent = texts[language].infoContact;
        document.querySelector('#contact .section__title').textContent = texts[language].contactTitle;
        document.querySelector('.contact__form-title').textContent = texts[language].titleMensage;
        document.querySelector('.name--I').textContent = texts[language].name;
        document.querySelector('.correo--i').textContent = texts[language].correo;
        document.querySelector('.asunto--i').textContent = texts[language].asunto;
        document.querySelector('.mensaje--i').textContent = texts[language].mensaje;
        document.querySelector('#modal').textContent = texts[language].aviso;
        document.querySelector('.footer__description').textContent = texts[language].description;
        document.querySelector('.title--1').textContent = texts[language].redes;
        document.querySelector('.contact__info-description').textContent = texts[language].contactDescription;
        document.querySelector('.contact__form-button').textContent = texts[language].sendMessage;
        languageLabel.textContent = language.toUpperCase();
    }

    languageToggle.addEventListener('change', (event) => {
        if (event.target.checked) {
            setLanguage('en');
        } else {
            setLanguage('es');
        }
    });
});


    // Cargar tema actual desde localStorage
