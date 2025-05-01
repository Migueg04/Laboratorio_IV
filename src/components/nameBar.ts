class NameBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const nombre1 = this.getAttribute('nombre1') || '';
        const nombre2 = this.getAttribute('nombre2') || '';

        this.shadowRoot!.innerHTML = `
            <style>
                .versus-bar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(255, 255, 255, 0.29);
                    color: white;
                    border-radius: 20px;
                    padding: 10px 30px;
                    font-family: sans-serif;
                    font-size: 1.5rem;
                    gap: 20px;
                    width: 1000px;
                    height: 40px;
                }

                .name-container {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .name {
                    font-weight: 500;
                    text-align: center;
                }

                .vs {
                    font-weight: bold;
                }
            </style>
            <div class="versus-bar">
                <div class="name-container">
                    <p class="name">${nombre1}</p>
                </div>
                <p class="vs">Vs.</p>
                <div class="name-container">
                    <p class="name">${nombre2}</p>
                </div>
            </div>
        `
    }
}

export default NameBar;
