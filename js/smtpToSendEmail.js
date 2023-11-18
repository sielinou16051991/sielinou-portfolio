function SendEmail() {
    console.log('Sending email');
    let name = document.getElementById('FullName').value;
    let address = document.getElementById('EmailAddress').value;
    let number = document.getElementById('MobileNumber').value;
    let subject = document.getElementById('EmailSubject').value;
    let message = document.getElementById('YourMessage').value;
    
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