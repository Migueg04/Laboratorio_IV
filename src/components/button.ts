import { CounterActions } from '../flux/actions';

class Button extends HTMLElement {
  static get observedAttributes() {
    return ['peleador-id'];
  }

  peleadorId: string = '';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'peleador-id') {
      this.peleadorId = newValue;
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        button {
          background-color:rgb(143, 17, 17);
          width: 300px;
          padding: 12px 20px;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          color:rgb(255, 255, 255);
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          background-color:rgb(99, 12, 12);
          color: #ffffff;
          box-shadow: 0 0 15px rgb(255, 39, 39);
          transform: scale(1.05);
        }
      </style>
      <button id="inc">VOTAR</button>
    `;

    this.shadowRoot!.querySelector('#inc')?.addEventListener('click', () => {
      CounterActions.increment(this.peleadorId);
    });
  }
}

export default Button;
