//Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
//Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

let membriTeam = [
    {
        immagine: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO'
    },
    {
        immagine: 'img/walter-gordon-office-manager.jpg',
        nome: 'Walter Gordon',
        ruolo: 'Manager'
    },
    {
        immagine: 'img/scott-estrada-developer.jpg',
        nome: 'Scott Estrada',
        ruolo: 'Developer'
    },
    {
        immagine: 'img/barbara-ramos-graphic-designer.jpg',
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer'
    },
    {
        immagine: 'img/angela-lopez-social-media-manager.jpg',
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager'
    },
    {
        immagine: 'img/angela-caroll-chief-editor.jpg',
        nome: 'Angela Carol',
        ruolo: 'Chief Editor'
    },  
]
let teamCard = ''
function stampaCard(){
    for (i=0; i < membriTeam.length; i++){
        teamCard += `<div class="team-card">
        <div class="card-image">
          <img
            src=${membriTeam[i].immagine}
            alt=${membriTeam[i].nome}
          />
        </div>
        <div class="card-text">
          <h3>${membriTeam[i].nome}</h3>
          <p>${membriTeam[i].ruolo}</p>
        </div>
      </div>`
    }
}
stampaCard()
let pippo = document.querySelector('.team-container')
pippo.innerHTML = teamCard



document.getElementById('addMemberButton').addEventListener('click', addPerson)

function addPerson(){
nome = document.getElementById('name').value.toString();

role = document.getElementById('role').value.toString();

image = document.getElementById('image').value.toString();
   let person = 
   {
    immagine: image,
    nome: nome,
    ruolo: role,
   }
   membriTeam.push(person)
}

