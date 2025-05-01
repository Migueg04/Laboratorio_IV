class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const nombreCompleto = this.getAttribute('nombreCompleto') || '';
        const edad = this.getAttribute('edad') || '';
        const serie = this.getAttribute('serie') || '';
        const imagen = this.getAttribute('imagen') || '';

        this.shadowRoot!.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 5px;
                    width: 400px;
                    text-align: center;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 0 20px 4px rgba(255, 0, 0, 0.7);
                    background-color: rgb(143, 17, 17);
                    color: #ffffff
                }

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                }


            </style>
            
            <div class="card">
                <img src="${imagen}">
                <p>Serie: <strong>${serie}</strong></p>
                <p>Edad: ${edad}</p>
                <button-component></button-component>
            </div>
        `;
    }
}

export default Card;
