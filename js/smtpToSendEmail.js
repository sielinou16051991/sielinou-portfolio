function SendEmail() {
    console.log('Sending email');
    let contentModal = document.getElementById('innerModal');
    let name = document.getElementById('FullName').value;
    let address = document.getElementById('EmailAddress').value;
    let number = document.getElementById('MobileNumber').value;
    let subject = document.getElementById('EmailSubject').value;
    let message = document.getElementById('YourMessage').value;

    setTimeout(function() {
      if (name == '') {
        const errorFullName = document.getElementById('error-fullName');
        errorFullName.style.display = 'block';
        document.getElementById('form-contact').scrollIntoView({ behavior: 'smooth'});
        return;
      }
      if (subject == '') {
        const errorSubject = document.getElementById('error-EmailSubject');
        errorSubject.style.display = 'block';
        document.getElementById('form-contact').scrollIntoView({ behavior: 'smooth'});
        return;
      }
      if (address == '') {
        const errorAddress = document.getElementById('error-EmailAddress');
        errorAddress.style.display = 'block';
        document.getElementById('form-contact').scrollIntoView({ behavior: 'smooth'});
        return;
      }
    
      let emailInput = document.getElementById('EmailAddress');
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);
      console.log(isValid);
    if(!isValid) {
      console.log(isValid);
      const errorAddress = document.getElementById('error-EmailAddress');
      errorAddress.style.display = 'block';
      document.getElementById('form-contact').scrollIntoView({ behavior: 'smooth'});
      // emailInput.setCustomValidity('ERROR: email invalide');
        return;
  
    }
    }, 1000);

    let data = {
      name: name,
      address: address,
      number: number,
      subject: subject
    }

    contentModal.innerHTML = schowModal(data);
    let modal = document.getElementById('maModal');
    modal.style.display = 'block';

    /* si on click sur ok, la modale se ferme*/
let okModal = document.getElementById('ok-modal');
okModal.addEventListener("click",
    function() {
     modal.style.display = 'none';
    })
    
         /* si on click sur la croix, la modale se ferme*/
    let fermerModal = document.getElementById('fermerModal');
    fermerModal.addEventListener("click",
         function() {
          modal.style.display = 'none';
         })

         /* si on click hors de la modale elle se ferme*/
    window.addEventListener("click",
         function(event) {
          if(event.target == modal) {
            modal.style.display = 'none';
          }
         })

    let body = "Nom: " + name + "</br> Email: " + address + "</br> Tel: " + number + "</br> Objet: " + subject + "</br> Message:" + message;
    console.log(body);
    
    Email.send({
        SecureToken : "10c66707-80dd-4f52-96bf-5d8b93480acf",
        To : 'sielinou1605@gmail.com',
        From : "sielinou1605@gmail.com",
        Subject : 'MESSAGE DE MON PORTFOLIO',
        Body : body
    }).then(
      message => console.log(message)
    );
    
    Email.send({
        SecureToken : "3c0503c4-5c1e-4c62-b5e8-a08df7dc225b",
        To : 'sielinounoubissieericromuald@gmail.com',
        From : "sielinounoubissieericromuald@gmail.com",
        Subject : 'MESSAGE DE MON PORTFOLIO',
        Body : body
    }).then(
      message => console.log(message)
    );
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sielinounoubissieericromuald@gmail.com",
        Password : "273A50FCD099E8A2B818A193DFC3A932356F",
        To : 'sielinounoubissieericromuald@gmail.com',
        From : "sielinounoubissieericromuald@gmail.com",
        Subject : 'MESSAGE DE MON PORTFOLIO',
        Body : body
    }).then(
      message => alert(message)
    );
    /*
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sielinou1605@gmail.com",
        Password : "534B9F8E6E26C91AE3DBB765BAD45010B8D6",
        To : 'sielinou1605@gmail.com',
        From : "sielinou1605@gmail.com",
        Subject : 'MESSAGE DE MON PORTFOLIO',
        Body : body
    }).then(
      message => alert(message)
    );*/
    
}