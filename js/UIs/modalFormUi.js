function schowModal(data) {
    const langue = localStorage.getItem('langue');
    console.log(langue);
    if(langue == 'fr') {
        return `
                <div id="maModal" class="modal" >
                    <div class="modal-container">
                        <span class="lock" id="fermerModal">
                        &times;
                        </span>
                        <div class="modal-container-title">
                         <h2 >
                           Remerciements pour votre prise de contact
                         </h2>
                        </div>
                        <hr>
                        <div class="modal-container-message">
                        <p >
                         &nbsp; &nbsp;Cher/Chère ${data.name}, </br>
                         &nbsp; &nbsp;Je tenais à vous remercier chaleureusement pour avoir pris le temps de me contacter via mon
                         portfolio. 
                         Votre message ayant pour objet <b>"${data.subject}"</b> a été reçu avec gratitude.</br>
                         &nbsp; &nbsp; Votre intéret pour <b>"${data.subject}"</b> est précieux pour moi. je vais examiner
                         soigneusement chaque détail de votre message et je m'engage à vous répondre dans les plus brefs délais,
                         utilisant l'adresse e-mail que vous avez aimablement partagée: ${data.email}.</br>
                         &nbsp; &nbsp; Votre contact est un privilège et je suis impatient de poursuivre nos échanges.</br></br>
    
                         &nbsp; &nbsp;
                         Cordialement,</br>
                         &nbsp; &nbsp;&nbsp; &nbsp; SIELINOU NOUBISSIE ERIC ROMUALD
                         
                        </p>
                        <div class="btn-modal">
                        <div class="btn" id="ok-modal">
                         ok
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
        `
    } else if(langue == 'en') {
        return `
                <div id="maModal" class="modal" >
                    <div class="modal-container">
                        <span class="lock" id="fermerModal">
                        &times;
                        </span>
                        <div class="modal-container-title">
                         <h2 >
                           Thank you for contacting us
                         </h2>
                        </div>
                        <hr>
                        <div class="modal-container-message">
                        <p >
                         &nbsp; &nbsp; Dear ${data.name}, </br>
                         &nbsp; &nbsp; I would like to thank you warmly for taking the time to contact me via my portfolio. 
                         Your message with the subject <b>"${data.subject}"</b> was gratefully received</br>
                         &nbsp; &nbsp; Your interest in <b>"${data.subject}"</b> is precious to me. I will carefully examine
                          every detail of your message and undertake to reply as soon as possible using the email address you
                           havekindly shared: ${data.email}.</br>
                           &nbsp; &nbsp; your contact is a privilege and i look forward to continuing our exchanges.</br></br>

                           &nbsp; &nbsp; Sincerely, </br>
                           &nbsp; &nbsp;&nbsp; &nbsp; SIELINOU NOUBISSIE ERIC ROMUALD
                         
                        </p>
                        <div class="btn-modal">
                        <div class="btn" id="ok-modal">
                         ok
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
        `
    }
}