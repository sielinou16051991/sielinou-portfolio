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
                           Remerciements pour prise de contact
                        </h2>
                    </div>
                        <hr>
                    <div class="modal-container-message">
                        <p >
                         &nbsp; &nbsp;Cher/Chère ${data.name}, </br>
                         &nbsp; &nbsp;Je tenais à vous remercier chaleureusement pour avoir pris le temps de me contacter via mon
                         portfolio. 
                         Votre message ayant pour objet <b>"${data.subject}"</b> a été reçu avec gratitude.</br>
                         &nbsp; &nbsp; je vous contacterais via: ${data.email}.</br>
                         &nbsp; &nbsp; Votre contact est un privilège et je suis impatient de poursuivre nos échanges.</br></br>
    
                         &nbsp; &nbsp;
                         Cordialement,</br>
                         &nbsp; &nbsp;&nbsp; &nbsp; SIELINOU NOUBISSIE ERIC ROMUALD
                         
                        </p>
                    </div>
                    <div class="btn-modal">
                        <div class="btn" id="ok-modal">
                        ok
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
                         &nbsp; &nbsp; I will contact you via : ${data.email}.</br>
                           &nbsp; &nbsp; your contact is a privilege and i look forward to continuing our exchanges.</br></br>

                           &nbsp; &nbsp; Sincerely, </br>
                           &nbsp; &nbsp;&nbsp; &nbsp; SIELINOU NOUBISSIE ERIC ROMUALD
                         
                        </p>
                    </div>
                    <div class="btn-modal">
                        <div class="btn" id="ok-modal">
                        ok
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}