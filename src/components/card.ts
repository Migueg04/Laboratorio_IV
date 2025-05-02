import { State, store } from '../flux/store';

class Card extends HTMLElement {
  idPeleador: string = '';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.idPeleador = this.getAttribute('nombreCompleto') || ''; // Usamos el nombre como ID
    store.subscribe((state: State) => this.handleChange(state));
    this.render();
  }

  handleChange(state: State) {
    this.render(state);
  }

  render(state = store.getState()) {
    const edad = this.getAttribute('edad') || '';
    const serie = this.getAttribute('serie') || '';
    const imagen = this.getAttribute('imagen') || '';

    const votos = state.counts[this.idPeleador] || 0;

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
          color: #ffffff;
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
        <p>Votos: ${votos}</p>
        <div id="bar">
            <bar-chart value="${votos}"></bar-chart>

        </div>
        <button-component peleador-id="${this.idPeleador}"></button-component>
      </div>
    `;
  }
}

export default Card;
