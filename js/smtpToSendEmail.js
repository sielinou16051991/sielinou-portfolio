function SendEmail() {
    console.log('Sending email');
    let contentModal = '';
    let name = '';
    let address = '';
    let number = '';
    let subject = '';
    let message = '';
     contentModal = document.getElementById('innerModal');
     name = document.getElementById('FullName').value;
     address = document.getElementById('EmailAddress').value;
     number = document.getElementById('MobileNumber').value;
     subject = document.getElementById('EmailSubject').value;
     message = document.getElementById('YourMessage').value;
     
    let errorFullName = document.getElementById('error-fullName');
    let errorSubject = document.getElementById('error-EmailSubject');
    let errorAddress = document.getElementById('error-EmailAddress');
    errorFullName.style.display = 'none';
    errorSubject.style.display = 'none';
    errorAddress.style.display = 'none';
    
    let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address);
    let emailAddress = document.getElementById('EmailAddress');

    setTimeout(function() {
      if (name == '') {
        errorFullName.style.display = 'block';
        document.getElementById('form-contact').scrollIntoView({ behavior: 'smooth'});
        return;
      }else {
        errorFullName.style.display = 'none';
      }
      if (subject == '') {
        errorSubject.style.display = 'block';
        document.getElementById('form-contact').scrollIntoView({ behavior: 'smooth'});
        return;
      }else {
        errorSubject.style.display = 'none';
      }
      if (address == '') {
        errorAddress.style.display = 'block';
        document.getElementById('form-contact').scrollIntoView({ behavior: 'smooth'});
        return;
      }else {  
        errorAddress.style.display = 'none';
        console.log(isValid);
        emailAddress.addEventListener('input', 
          function(event) {
            if(!isValid) {
              console.log(isValid);
              document.getElementById('form-contact').scrollIntoView({ behavior: 'smooth'});
              emailAddress.setCustomValidity('ERROR: email invalide');
                return;
            }else {
              emailAddress.setCustomValidity('');
              return;
            }
          }
        
        )
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
    modal.style.display = 'none';
    if(name !== '' && subject !== '' && isValid) {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }

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