// Creare l’array di oggetti con le informazioni fornite.
const row = document.querySelector('.row');
const users = [
    {
        nome: 'Wayne Barnet',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
    
];

for(let user of users){
    let card = `
        <div class="col-4 py-3">
            <div class="card" style="width: 18rem;">
                <img src="img/${user.foto}" class="card-img-top" alt="${user.foto}">
                <div class="card-body">
                    <p class="card-text">${user.nome}</p>
                    <p class="card-text">${user.ruolo}</p>
                </div>
            </div>
        </div>`;
    row.innerHTML += card;
}


console.log(users);