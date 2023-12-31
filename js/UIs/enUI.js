function genereCodeHTMLEn(){
    return `
    <!-- Header design -->
    <header class="header">
        <a href="#" class="logo">Portfolio</a>

        <i class="bx bx-menu" id="menu-icon"></i>
        <!-- <i class="bx bx-x" id="bx-x" ></i> -->

        <nav class="navbar">
            <a href="#home" class="active" id="Accueil">Home</a>
            <a href="#about" id="Apropos_1">Adout</a>
            <a href="#services" id="Services_1">Services</a>
            <a href="#portfolio" id="Portfolio_1">Portfolio</a>
            <a href="#contact" id="Contact_1">Contact</a>
        </nav>
    </header>

    <!--    home section    -->
    <section class="home" id="home">
        <div class="home-content">
            <h3 id="SALUT">Hi! It's me!</h3>
            <h1 id="NOM_PRENOM">SIELINOU NOUBISSIE ERIC ROMUALD</h1>
            <h3 class="home-functions">And I'm a<span class="multiple-text"></span> </h3>
            
            <p id="RESAU_SOCIAL">
                You can reach me on the following media
            </p>
            <div class="social-media">
                <a href="#"><i class="bx bxl-facebook"></i></a>
                <a href="#"><i class="bx bxl-twitter"></i></a>
                <a href="#"><i class="bx bxl-instagram"></i></a>
                <a href="#"><i class="bx bxl-linkedin"></i></a>
            </div>
            <a href="public/pdf/CV-ERIC.pdf" class="btn" id="CV" download="SIELINOU_1605.pdf" target="_blank">Download CV<i class="bx bx-download" ></i></a>
            <a href="public/pdf/CV-ERIC.pdf" class="btn" id="CV_preview" target="_blank">Preview CV<i class="bx bx-low-vision"></i></a>
        </div>
        <div class="home-img">
            <img src="images/home-img.png" alt="">
        </div>
    </section>

    <!--    about section design    -->
    <section class="about" id="about">
        <div class="about-img">
            <img src="images/about-img.jpg" alt="">
        </div>
        <div class="about-content">
            <div class="title-portfolio-container">
                <h2 class="heading" id="Apropos_2"> About </h2>
                <span id="MOI">Me</span>
            </div>
            <!-- <h3 id="Frontend_Developer"></h3> --->
            <p id="DEMARQUATION">
                &nbsp; &nbsp; I'm a young professional with a passion for my work, great organisational skills and the ability to adapt 
                easily to new situations. adapt easily to different different environments and determined to achieve my goals.
                goals. I would like to to get involved in a new project within a dynamic and ambitious ambitious organisation
            </p>
            <p id="PARCOURS">
            &nbsp; &nbsp; I'm a front-end developer with a master's degree in Information Systems and Software Engineering from the University 
            of Yaoundé 1 in 2022. Since 8 August 2022, I've been part of the Advance-it team, an innovative company 
            where I've had the opportunity to work on a number of large-scale projects. My achievements include management software 
            such as "AURORE SIC" for schools, "AURORE HIS" for hospitals, and "DIGEST" for banking management, which are currently 
            in production. Over the course of this experience, I have developed solid expertise in languages such as HTML5, Sass, 
            Less and JavaScript. My preferred framework is Angular, and I've also mastered React as a secondary framework. In addition, 
            I have acquired skills in designing printable reports using the reporting tool Jasper Report reporting tool. My career path 
            has enabled me to become a ...
            </p>
            <button class="btn btn-VOIR_PLUS_1" id="VOIR_PLUS_1" onclick="toggleText('READ_MORE')">Read More</button>
        </div>
    </section>

    <!--    service section design    -->
    <section class="services" id="services">
        <div class="title-portfolio-container">
            <h2 class="heading" id="Mes"> My </h2>
            <h2><span id="Services_2"> Services </span></h2>
        </div>
        <div class="services-container">

            <div class="services-box">
                <i class="bx bx-code-alt"></i>
                <h3 id="Developement_Web">Web development</h3>
                <p id="JEUNE_DEV_1">
                    Passionate young web developer with emerging skills in interactive and problem-solving skills.
                </p>
                <a href="#" class="btn" id="VOIR_PLUS_2">Read More</a>
            </div>


            <div class="services-box">
                <i class="bx bxs-paint"></i>
                <h3 id="Graphiste">Graphic designer</h3>
                <p id="DEBUTANT">
                    Beginner with a passion for visual creation, offering creative and unique designs for various artistic needs
                </p>
                <a href="#" class="btn" id="VOIR_PLUS_3">Read More</a>
            </div>


            <div class="services-box">
                <i class="bx bx-bar-chart-alt"></i>
                <h3 id="UI_UX">UI/UX Desiner</h3>
                <p id="JEUNE_TALENT">
                    Young UI/UX talent offering intuitive, user-centred designs and engaging visual experiences for your project.
                </p>
                <a href="#" class="btn" id="VOIR_PLUS_4">Read More</a>
            </div>

        </div>
    </section>

    <!--    portfolio section design    -->

    <section class="portfolio" id="portfolio">
        
        <div class="title-portfolio-container">
            <h2 class="heading" id="Mes_dernier"> My latest </h2>
            <h2><span id="Projets_1">Projects</span></h2>
        </div>
        <div class="title-portfolio-container">
            <h3 class="heading" id="Mes_projets"> Personnal </h3>
            <span id="Personnel"> projects </span> 
        </div>

        <div class="portfolio-container">
            <div class="portfolio-box">
                <img src="images/img-portfolio/portfolio_booki.png" alt="">
                <div class="portfolio-layer">
                    <h4 id="Web_Design_1"> Read More </h4>
                    <p id="HEBERGEMENT">
                        Website presenting accommodation and activities
                    </p>
                    <a href="https://sielinou16051991.github.io" target="_blank"><i class="bx bx-link-external"></i></a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="images/img-portfolio/portfolio_ohmyfood.png" alt="">
                <div class="portfolio-layer">
                    <h4 id="Web_Design_2"> Read More </h4>
                    <p id="RESTEAURANT">
                        Website presenting accommodation and activities
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
                        Website presenting accommodation and activities
                    </p>
                    <a href="https://sielinou16051991.github.io/projet-3-html-css-js" target="_blank"><i
                            class="bx bx-link-external"></i></a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="images/img-portfolio/portfolio_les_petits_plats.png" alt="">
                <div class="portfolio-layer">
                    <h4 id="Web_Design_4"> Read More </h4>
                    <p id="PETITS_PLATS">
                        Website presenting accommodation and activities
                    </p>
                    <a href="https://sielinou16051991.github.io/projet-4-js-bootstrapp-5" target="_blank"><i
                            class="bx bx-link-external"></i></a>
                </div>
            </div>
        </div>
        <div class="title-portfolio-container">
            <h3 class="heading" id="PROJET"> Professional </h3>
            <span id="PROFESSIONNEL"> Project </span>
        </div>
        
        <div class="portfolio-container">
        <div class="portfolio-box">
            <img src="images/img-portfolio/portfolio_les_petits_plats.png" alt="">
            <div class="portfolio-layer">
                <h4 > Voir plus </h4>
                <p >
                    AURORE SIS
                </p>
                <a href="https://pixel.cm/advance-it/products-and-services/" target="_blank"><i
                        class="bx bx-link-external"></i></a>
            </div>
        </div>
        </div>
    </section>

    <section class="contact" id="contact">
        
        <div class="title-portfolio-container">
            <h2 class="heading" id="CONTACT_FORM"> Contact </h2>
            <h2><span id="Me_"> Me ! </span></h2>
            
        </div>
        
        <form action="#" id="form-contact">
            <div class="input-box">
                <div class="input-box-helft">
                    <input type="text" id="FullName" placeholder="Full Name">
                    <label class="error" id="error-fullName">Please enter your full name</label>
                </div>
                <div class="input-box-helft">
                    <input type="mail" id="EmailAddress" placeholder="Email Address">
                    <label class="error" id="error-EmailAddress">Please enter your valid Email Address</label>
                </div>
            </div>
            <div class="input-box">
                <div class="input-box-helft">
                    <input type="number" id="MobileNumber" placeholder="Mobile Number">
                    <label class="error" id="error-MobileNumber">Please enter your Please enter your Mobile Number</label>
                </div>
                <div class="input-box-helft">
                    <input type="text" id="EmailSubject" placeholder="Email Subject">
                    <label class="error" id="error-EmailSubject">Email Subject</label>
                </div>
            </div>
            <div class="input-box-textarea">
                <textarea name="" id="YourMessage" cols="30" rows="10" placeholder="Your Message"></textarea>
                <label class="error" id="error-YourMessage">Please enter your Please enter your Your Message</label>
            </div>
            <input type="submit" onclick="SendEmail()" value="Send Message" class="btn">
        </form>
    </section>

    <div class="internationnalisation" id="fr_en">
        
    </div>
    <div class="inner-modal" id="innerModal">
        
    </div>

    <!--    footer design   -->
    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023 by Siélinou Noubissié Eric Romuald | All Rights Reserved.</p>
        </div>

        <div class="footer-iconTop">
            <a href="#home"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </footer>
    `;
}