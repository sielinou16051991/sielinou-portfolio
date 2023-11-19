function loadLanguage(lang) {
    console.log(lang);
    document.addEventListener('DOMContentLoaded', function () {
        let fr_en = document.getElementById('fr_en');
        console.log(lang);
        if (lang == 'en') {
            console.log(lang);
            fr_en.innerHTML = `<button class="" onclick="changeLanguage('fr')" id="Français">Français</button>`
        } else if (lang == 'fr') {
            console.log(lang);
            fr_en.innerHTML = `<button class="" onclick="changeLanguage('en')" id="English">English</button>`;
        }
    });
    return fetch(`public/i18n/${lang}.json`)
        .then(response => response.json());
}

    // Mettre à jour le contenu de la page en fonction de la langue
function updateContent(data) {
    console.log(data);
    document.getElementById('Accueil').innerText = data.Accueil;
    document.getElementById('Apropos_1').innerText = data.Apropos_1;
    document.getElementById('Services_1').innerText = data.Services_1;
    document.getElementById('Portfolio_1').innerText = data.Portfolio_1;
    document.getElementById('Contact_1').innerText = data.Contact_1;
    document.getElementById('SALUT').innerText = data.SALUT;
    document.getElementById('NOM_PRENOM').innerText = data.NOM_PRENOM;
    //document.getElementById('JE_SUIS').innerText = data.JE_SUIS;
    document.getElementById('RESAU_SOCIAL').innerText = data.RESAU_SOCIAL;
    document.getElementById('CV').innerText = data.CV;
    document.getElementById('Apropos_2').innerText = data.Apropos_2;
    //console.log('moi', document.querySelector("#MOI"));
    document.getElementById('MOI').innerText = data.MOI;
   // document.getElementById('Frontend_Developer').innerText = data.Frontend_Developer;
    document.getElementById('DEMARQUATION').innerText = data.DEMARQUATION;
    document.getElementById('PARCOURS').innerText = data.PARCOURS;
    document.getElementById('VOIR_PLUS_1').innerText = data.VOIR_PLUS_1;
    document.getElementById('Mes').innerText = data.Mes;
    document.getElementById('Services_2').innerText = data.Services_2;
    document.getElementById('Developement_Web').innerText = data.Developement_Web;
    document.getElementById('JEUNE_DEV_1').innerText = data.JEUNE_DEV_1;
    document.getElementById('VOIR_PLUS_2').innerText = data.VOIR_PLUS_2;
    document.getElementById('Graphiste').innerText = data.Graphiste;
    document.getElementById('DEBUTANT').innerText = data.DEBUTANT;
    document.getElementById('VOIR_PLUS_3').innerText = data.VOIR_PLUS_3;
    document.getElementById('UI_UX').innerText = data.UI_UX;
    document.getElementById('JEUNE_TALENT').innerText = data.JEUNE_TALENT;
    document.getElementById('VOIR_PLUS_4').innerText = data.VOIR_PLUS_4;
    document.getElementById('Mes_dernier').innerText = data.Mes_dernier;
    document.getElementById('Projets_1').innerText = data.Projets_1;
    document.getElementById('Mes_projets').innerText = data.Mes_projets;
    document.getElementById('Personnel').innerText = data.Personnel;
    document.getElementById('Web_Design_1').innerText = data.Web_Design_1;
    document.getElementById('HEBERGEMENT').innerText = data.HEBERGEMENT;
    document.getElementById('Web_Design_2').innerText = data.Web_Design_2;
    document.getElementById('RESTEAURANT').innerText = data.RESTEAURANT;
    document.getElementById('Web_Design_3').innerText = data.Web_Design_3;
    document.getElementById('PHOTOGRAPHE').innerText = data.PHOTOGRAPHE;
    document.getElementById('Web_Design_4').innerText = data.Web_Design_4;
    document.getElementById('PETITS_PLATS').innerText = data.PETITS_PLATS;
    document.getElementById('PROJET').innerText = data.PROJET;
    console.log(document.getElementById('PROJET').firstChild);
    document.getElementById('PROFESSIONNEL').innerText = data.PROFESSIONNEL;
    document.getElementById('CONTACT_FORM').innerText = data.CONTACT_FORM;
    document.getElementById('Me_').innerText = data.Me_;
    //document.getElementById('Français').innerText = data.Français;
    //document.getElementById('English').innerText = data.English;
}
                // Changer la langue et mettre à jour le contenu
                function changeLanguage(lang) {
                    let fr_en = document.getElementById('fr_en');
                    console.log(lang);
                    if (lang == 'en') {
                        console.log(lang);
                        fr_en.innerHTML = `<button class="" onclick="changeLanguage('fr')" id="Français">Français</button>`
                    } else if (lang == 'fr') {
                        console.log(lang);
                        fr_en.innerHTML = `<button class="" onclick="changeLanguage('en')" id="English">English</button>`;
                    }
                    loadLanguage(lang)
                        .then(data => updateContent(data))
                        .catch(error => console.error('Erreur de chargement du fichier JSON', error));
                }
// Chargement initial en français
    changeLanguage('fr');
