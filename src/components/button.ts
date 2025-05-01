class Button extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        
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
        if (!this.shadowRoot) return;

        const randomNumber = Math.floor(Math.random() * 20) + 1;
        
        this.shadowRoot.querySelector('#inc')?.addEventListener('click', () => {
            CounterActions.increment(randomNumber);
        });
    
    }
}
export default Button