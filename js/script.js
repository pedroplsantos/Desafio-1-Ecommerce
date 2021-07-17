const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //alert("Holla word!")
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData);

//teste
//console.log(nome, email); 



})
