// import { logo } from './assets/src/favicon.ico';

function Head(){
    return(
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Compumundo-Hr</title>

            {/* La descripción de nuestra página para Google */}
            <meta name="description" content="Venta de artículos de computación "/>
            {/* Para el SEO de Google u otros buscadores, le indico a Google que entre al index y siga los enlaces */}
            <meta name="robots" content="index, follow"/>
            {/* Para el color de la barra del navegador en la Pc o en móviles, con la relación "theme-color" y el atributo content genero el color que quiero. */}
            <meta name="theme-color" content="#21213b"/>
                
            {/* OPEN GRAPH:
                Un conjunto de etiquetas que creó Facebook para que cuando compartimos contenido de nuestra página en una red social se vea correctamente:
                Hay etiquetas para Meta, Twitter, etc. Para cotejar una URL ver: https://www.opengraph.xyz  */}

            <meta property="og:title" content="Compumundo Hr - Venta de artículos de informática, celulares y mucho más."/>
            <meta property="og:description" content=""/>
            {/* Nota: Para ver más, ingresar a "The Open Graph protocol", es importante compartir y renderizar correctamente en distintas plataformas nuestra página.  */}

            {/* SEO  */}
            {/* Para enlazar a un recurso externo alternativo a la página  */}
            <link rel="alternate" href="#/en" hreflang="en-GB"/>
            {/* Para que el navegador detecte cuál es la página principal entre dos páginas duplicadas.  */}
            <link rel="canonical" href="#"/>

            {/* Favicon: */}
            {/* <link rel="Compumundo Hr icon" href={logo} type="image/x-icon"/> */}
            {/* Con la etiqueta link y la relación "icon" dentro del atributo rel, podemos establecer el favicon.ico para el logo de la pestaña. */}

            {/* Google Fonts:  */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:wght@200..1000&display=swap" rel="stylesheet"/>

            {/* Agregar Fontawesome: */}
            {/* <script src="https://kit.fontawesome.com/f7fb471b65.js" crossorigin="anonymous"></script> */}

        </head>
    );
}

export default Head;