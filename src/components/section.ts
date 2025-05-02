import { getPeleadores } from "../data/data";

class Section extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            #cards-container {
                margin: 50px;
                display: grid;
                grid-template-columns: repeat(2, 1fr); 
                grid-gap: 80px;
                justify-items: center;
                width: 1200px;
            }

            name-bar {
                grid-column: 1 / -1;
                display: flex;
                justify-content: center;
            }
        </style>
        <div id="cards-container"></div>
        `;

        const container = this.querySelector('#cards-container');
        const peleadores = getPeleadores();

        for (let i = 0; i < peleadores.length; i += 2) {
            const pairId = `pair-${i / 2 + 1}`;

            const p1 = peleadores[i];
            const p2 = peleadores[i + 1];

            const namebar = document.createElement('name-bar');
            namebar.setAttribute('nombre1', p1.nombreCompleto);
            namebar.setAttribute('nombre2', p2 ? p2.nombreCompleto : '');
            container?.appendChild(namebar);

            const card1 = document.createElement('card-component');
            card1.setAttribute('id', p1.id.toString());
            card1.setAttribute('nombreCompleto', p1.nombreCompleto);
            card1.setAttribute('edad', p1.edad.toString());
            card1.setAttribute('serie', p1.serie);
            card1.setAttribute('imagen', p1.imagen);
            card1.setAttribute('pair-id', pairId);
            container?.appendChild(card1);

            if (p2) {
                const card2 = document.createElement('card-component');
                card2.setAttribute('id', p2.id.toString());
                card2.setAttribute('nombreCompleto', p2.nombreCompleto);
                card2.setAttribute('edad', p2.edad.toString());
                card2.setAttribute('serie', p2.serie);
                card2.setAttribute('imagen', p2.imagen);
                card2.setAttribute('pair-id', pairId);
                container?.appendChild(card2);
            }
        }
    }
}

export default Section;
