
function genereCodeHTMLFr() {
    return `
        
    <!-- Header design -->
    <header class="header">
        <a href="#" class="logo">Portfolio</a>

        <i class="bx bx-menu" id="menu-icon"></i>
        <!-- <i class="bx bx-x" id="bx-x" ></i> -->

        <nav class="navbar">
            <a href="#home" class="active" id="Accueil">Accueil</a>
            <a href="#about" id="Apropos_1">Apropos</a>
            <a href="#services" id="Services_1">Services</a>
            <a href="#portfolio" id="Portfolio_1">Portfolio</a>
            <a href="#contact" id="Contact_1">Contact</a>
        </nav>
    </header>

    <!--    home section    -->
    <section class="home" id="home">
        <div class="home-content">
            <h3 id="SALUT">Salut! c'est moi !</h3>
            <h1 id="NOM_PRENOM">SIELINOU NOUBISSIE ERIC ROMUALD</h1>
            <h3 class="home-functions"> Et je suis un <span class="multiple-text"></span> </h3>
            
            <p id="RESAU_SOCIAL">
                Vous pouvez me joindre sur les médias suivant
            </p>
            <div class="social-media">
                <a href="#"><i class="bx bxl-facebook"></i></a>
                <a href="#"><i class="bx bxl-twitter"></i></a>
                <a href="#"><i class="bx bxl-instagram"></i></a>
                <a href="#"><i class="bx bxl-linkedin"></i></a>
            </div>
            <a href="public/pdf/CV-ERIC.pdf" class="btn" id="CV" download="SIELINOU_1605.pdf" target="_blank">CV<i class="bx bx-download" ></i></a>
            <a href="public/pdf/CV-ERIC.pdf" class="btn" id="CV_preview" target="_blank">CV<i class="bx bx-low-vision"></i></a>
        </div>
        <div class="home-img">
            <img src="images/home-img.png" alt="Erreur de chargement">
        </div>
    </section>

    <!--    about section design    -->
    <section class="about" id="about">
        <div class="about-img">
            <img src="images/about-img.jpg" alt="Erreur de chargement">
        </div>
        <div class="about-content">
            <div class="title-portfolio-container">
                <h2 class="heading" id="Apropos_2"> Apropos De </h2>
                <span id="MOI">Moi</span>
            </div>
            <!-- <h3 id="Frontend_Developer"></h3> --->
            <p id="DEMARQUATION">
                Jeune professionnel passionné par son travail, doté d’un grand sens de l’organisation et
                m’adaptant facilement à différents environnements et faisant preuve de détermination dans 
                la réalisation de mes objectifs. Je souhaite m’impliquer dans un nouveau projet au sein d’une
                organisation dynamique et ambitieuse.
            </p>
            <p id="PARCOURS">
                Je suis un développeur frontend avec une maîtrise en Système d'Information et
                Génie Logiciel obtenue à l'Université de Yaoundé 1 en 2022. Depuis le 8 août 2022, je fais partie 
                de l'équipe d'Advance-it, une entreprise innovante où j'ai eu l'opportunité de travailler sur des 
                projets d'envergure. Parmi mes réalisations figurent des logiciels de gestion tels que "AURORE SIC" 
                pour les établissements scolaires, "AURORE HIS" pour les hôpitaux, et "DIGEST" pour la gestion 
                bancaire, qui sont actuellement en production. Au fil de ces expériences, j'ai développé une solide 
                expertise dans des langages tels que HTML5, Sass, Less et JavaScript. Mon framework de prédilection 
                est Angular, et j'ai également une maîtrise de React en tant que framework secondaire. De plus, j'ai 
                acquis des compétences dans la conception d'états imprimables grâce à l'outil de reporting Jasper Report. 
                Mon parcours professionnel m'a permis de devenir un développeur frontend polyvalent, prêt à relever de 
                nouveaux défis et à apporter des solutions créatives dans le monde de la programmation web.
            </p>
            <button class="btn btn-VOIR_PLUS_1" id="VOIR_PLUS_1" onclick="toggleText()">Voir plus</button>
        </div>
    </section>

    <!--    service section design    -->
    <section class="services" id="services">
        <div class="title-portfolio-container">
            <h2 class="heading" id="Mes"> Mes </h2>
            <h2><span id="Services_2"> Services </span></h2>
        </div>
        <div class="services-container">

            <div class="services-box">
                <i class="bx bx-code-alt"></i>
                <h3 id="Developement_Web">Dévelopement Web</h3>
                <p id="JEUNE_DEV_1">
                    Jeune développeur web passionné, offrant des compétences émergentes pour la 
                    création de sites interactifs et la résolution de problèmes.
                </p>
                <a href="#" class="btn" id="VOIR_PLUS_2">Voir plus</a>
            </div>


            <div class="services-box">
                <i class="bx bxs-paint"></i>
                <h3 id="Graphiste">Graphiste</h3>
                <p id="DEBUTANT">
                    débutant, passionné par la création visuelle, offrant des designs créatifs et uniques pour
                     divers besoins artistiques
                </p>
                <a href="#" class="btn" id="VOIR_PLUS_3">Voir plus</a>
            </div>


            <div class="services-box">
                <i class="bx bx-bar-chart-alt"></i>
                <h3 id="UI_UX">UI/UX Desiner</h3>
                <p id="JEUNE_TALENT">
                    Jeune talent UI/UX offrant des designs intuitifs, centrés sur l'utilisateur,
                    et des expériences visuelles engageantes pour votre projet.
                </p>
                <a href="#" class="btn" id="VOIR_PLUS_4">Voir plus</a>
            </div>

        </div>
    </section>

    <!--    portfolio section design    -->

    <section class="portfolio" id="portfolio">
        
        <div class="title-portfolio-container">
            <h2 class="heading" id="Mes_dernier"> Mes dernier </h2>
            <h2><span id="Projets_1">Projets</span></h2>
        </div>
        <div class="title-portfolio-container">
            <h3 class="heading" id="Mes_projets"> Mes projets </h3> 
            <span id="Personnel"> Personnels </span>
        </div>

        <div class="portfolio-container">
            <div class="portfolio-box">
                <img src="images/img-portfolio/portfolio_booki.png" alt="">
                <div class="portfolio-layer">
                    <h4 id="Web_Design_1"> Voir plus </h4>
                    <p id="HEBERGEMENT">
                        Site de presentation des hébergements et activitées
                    </p>
                    <a href="https://sielinou16051991.github.io" target="_blank"><i class="bx bx-link-external"></i></a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="images/img-portfolio/portfolio_ohmyfood.png" alt="">
                <div class="portfolio-layer">
                    <h4 id="Web_Design_2"> Voir plus </h4>
                    <p id="RESTEAURANT">
                        Site de présentation des restaurants et de leurs différents menus
                    </p>
                    <a href="https://sielinou16051991.github.io/projet2HtmlCss" target="_blank"><i
                            class="bx bx-link-external"></i></a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="images/img-portfolio/portfolio_photographes.png" alt="">
                <div class="portfolio-layer">
                    <h4 id="Web_Design_3"> Read More </h4>
                    <p id="PHOTOGRAPHE">
                        Site de photographes et leurs différents schefs-d'oeuvre.
                    </p>
                    <a href="https://sielinou16051991.github.io/projet-3-html-css-js" target="_blank"><i
                            class="bx bx-link-external"></i></a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="images/img-portfolio/portfolio_les_petits_plats.png" alt="">
                <div class="portfolio-layer">
                    <h4 id="Web_Design_4"> Voir plus </h4>
                    <p id="PETITS_PLATS">
                        site de présentant des plats et leurs modes de cuisson
                    </p>
                    <a href="https://sielinou16051991.github.io/projet-4-js-bootstrapp-5" target="_blank"><i
                            class="bx bx-link-external"></i></a>
                </div>
            </div>
        </div>
        <div class="title-portfolio-container">
            <h3 class="heading" id="PROJET"> Projets </h3>
            <span id="PROFESSIONNEL"> Professionnel </span>
        </div>
        <div class="portfolio-container">

        </div>
    </section>

    <section class="contact" id="contact">
        
        <div class="title-portfolio-container">
            <h2 class="heading" id="CONTACT_FORM"> Contactez </h2>
            <h2><span id="Me_"> Moi ! </span></h2>
            
        </div>
        
        <form action="#">
            <div class="input-box">
                <input type="text" id="FullName" placeholder="Nom(s)">
                <input type="mail" id="EmailAddress" placeholder="Email">
            </div>
            <div class="input-box">
                <input type="number" id="MobileNumber" placeholder="Tel">
                <input type="text" id="EmailSubject" placeholder="Objet">
            </div>
            <textarea name="" id="YourMessage" cols="30" rows="10" placeholder="Votre message"></textarea>
            <input type="submit" onclick="SendEmail()" value="Send Message" class="btn">
        </form>
    </section>

    <div class="internationnalisation" id="fr_en">
        
        
    </div>

    <!--    footer design   -->
    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023 de Siélinou Noubissié Eric Romuald | Tous droits réservés.</p>
        </div>

        <div class="footer-iconTop">
            <a href="#home"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </footer>
    `;
}