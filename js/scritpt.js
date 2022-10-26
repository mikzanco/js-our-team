// Creare l’array di oggetti con le informazioni fornite.
const row = document.querySelector('.row');
const users = [
    {
        nome: 'Wayne Barnet',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
        aggettivi: [
            'Estroversa',
            'Solare',
            'Ottimista',
        ]
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
        aggettivi: [
            'Vivace',
            'Entusiasta',
        ]
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
        aggettivi: [
            'Autorevole',
            'Tranquillo',
            'Chiacchierone',
        ]
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
        aggettivi: [
            'Entusista',
            'Ottimista',
        ]
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
        aggettivi: [
            'Solare',
            'Tranquillo',
            'Coinvolgente',
        ]
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
        aggettivi: [
            'Solare',
            'Irrefrenabile',
        ]
    },
    
];



for(let user of users){

    let listaAggettivi = '';

    for(let agg of user.aggettivi){
        listaAggettivi += `<li>${agg}</li>`;
    }
    let card = `
        <div class="col-4 py-3">
            <div class="card text-center border-light" style="width: 18rem;">
                <img src="img/${user.foto}" class="card-img-top" alt="${user.foto}">
                <div class="card-body">
                    <h3 class="card-text">${user.nome}</h3>
                    <p class="card-text">${user.ruolo}</p>
                    <ol>
                        ${listaAggettivi}
                    </ol>
                </div>
            </div>
        </div>`;
    row.innerHTML += card;
}


console.log(users);