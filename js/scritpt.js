// Creare l’array di oggetti con le informazioni fornite.
const row = document.querySelector('.row');
const users = [
    {
        nome: 'Wayne Barnet',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
        aggettivi: [
            'estroversa',
            'solare',
            'ottimista',
        ]
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
        aggettivi: [
            'vivace',
            'entusiasta',
        ]
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
        aggettivi: [
            'autorevole',
            'tranquillo',
            'chiacchierone',
        ]
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
        aggettivi: [
            'entusista',
            'ottimista',
        ]
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
        aggettivi: [
            'solare',
            'tranquillo',
            'coinvolgente',
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
                    <p class="card-text">${user.nome}</p>
                    <p class="card-text">${user.ruolo}</p>
                    <ul>
                        ${listaAggettivi}
                    </ul>
                </div>
            </div>
        </div>`;
    row.innerHTML += card;
}


console.log(users);