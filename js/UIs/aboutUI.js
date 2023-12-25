
function toggleText(voir) {
    let about = document.getElementById('about');
    if(voir === 'READ_MORE') {
        about.innerHTML = `
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
                has enabled me to become a versatile front-end developer, ready to take on new challenges. developer, ready to take on new 
                challenges and bring creative solutions to the world of web world of web programming.
            </p>
            <button class="btn btn-VOIR_PLUS_1" id="VOIR_PLUS_1" onclick="toggleText('VIEW_LESS')">View less</button>
        </div>
        `
        return about ;
    } else if (voir === 'VIEW_LESS') {
        about.innerHTML = `
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
        `
        return about ;
    } else if(voir === 'VOIR_PLUS') {
        about.innerHTML = `
                    <div class="about-content voir-plus">
                        <div class="title-portfolio-container">
                            <h2 class="heading" id="Apropos_2"> Apropos De </h2>
                            <span id="MOI">Moi</span>
                        </div>
                        <!-- <h3 id="Frontend_Developer"></h3> --->
                        <p id="DEMARQUATION">
                            &nbsp; &nbsp; Jeune professionnel passionné par son travail, doté d’un grand sens de l’organisation et
                            m’adaptant facilement à différents environnements et faisant preuve de détermination dans 
                            la réalisation de mes objectifs. Je souhaite m’impliquer dans un nouveau projet au sein d’une
                            organisation dynamique et ambitieuse.
                        </p>
                        <p id="PARCOURS">
                            &nbsp; &nbsp; Je suis un développeur frontend avec une maîtrise en Système d'Information et
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
                        <button class="btn btn-VOIR_PLUS_1" id="VOIR_PLUS_1" onclick="toggleText('VOIR_MOINS')">Voir moins</button>
                    </div>
        `
    } else if (voir === 'VOIR_MOINS') {
        about.innerHTML = `
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
                            &nbsp; &nbsp; Jeune professionnel passionné par son travail, doté d’un grand sens de l’organisation et
                            m’adaptant facilement à différents environnements et faisant preuve de détermination dans 
                            la réalisation de mes objectifs. Je souhaite m’impliquer dans un nouveau projet au sein d’une
                            organisation dynamique et ambitieuse.
                        </p>
                        <p id="PARCOURS">
                            &nbsp; &nbsp; Je suis un développeur frontend avec une maîtrise en Système d'Information et
                            Génie Logiciel obtenue à l'Université de Yaoundé 1 en 2022. Depuis le 8 août 2022, je fais partie 
                            de l'équipe d'Advance-it, une entreprise innovante où j'ai eu l'opportunité de travailler sur des 
                            projets d'envergure. Parmi mes réalisations figurent des logiciels de gestion tels que "AURORE SIC" 
                            pour les établissements scolaires, "AURORE HIS" pour les hôpitaux, et "DIGEST" pour la gestion 
                            bancaire, qui sont actuellement en production. Au fil de ces expériences, j'ai développé une solide 
                            expertise dans des langages tels que HTML5, Sass, Less et JavaScript. Mon framework de prédilection 
                            est Angular, et j'ai également une maîtrise de React en tant que framework secondaire. De plus, j'ai 
                            acquis des compétences dans la conception d'états imprimables grâce à l'outil de reporting Jasper Report. 
                            Mon parcours professionnel m'a permis de devenir un ...
                        </p>
                        <button class="btn btn-VOIR_PLUS_1" id="VOIR_PLUS_1" onclick="toggleText('VOIR_PLUS')">Voir plus</button>
                    </div>
        `

    }

}