function LandingMain(){

    return(
        <div>
            {/* El contenido principal. 
            Generé cuatro secciones dentro del contenido de la página:  */}
            <section id="banner">
            {/* Divido el contenido principal en secciones. A la primera sección la identifico con un atributo id para después trabajar con ella por medio de JS o CSS.  */}
                <div class="banner-card container"> {/* Nomenclatura tipo BEM  */}
                    <h1>Compumundo Hr </h1> {/* Las etiquetas h1 a h6 son etiquetas para hacer títulos y subtítulos. */}
                    <h2>Portátiles, celulares y mucho más.</h2>
                </div>
            </section> 
        </div>
    );
}

export default LandingMain;