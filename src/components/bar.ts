import {
    Chart as ChartJS,
    ChartConfiguration,
    BarElement,
    CategoryScale,
    LinearScale,
    BarController,
    Tooltip,
    Legend
  } from 'chart.js';
  
  // Registrar los elementos necesarios para que Chart.js funcione
  ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  
  class BarChart extends HTMLElement {
    private canvas = document.createElement('canvas');
    private chart: ChartJS | null = null;
    private value: number = 0;
  
    // Hacer que el componente observe el atributo "value"
    static get observedAttributes() {
      return ['value'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' })!.appendChild(this.canvas);
    }
  
    // Escuchar cambios en el atributo "value"
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      if (name === 'value') {
        this.value = parseFloat(newValue) || 0;
        this.updateChart();
      }
    }
  
    connectedCallback() {
      this.canvas.height = 20;
  
      const ctx = this.canvas.getContext('2d');
      if (!ctx) return;
  
      this.chart = new ChartJS(ctx, {
        type: 'bar',
        data: {
          labels: ['A'],
          datasets: [
            {
              label: 'Valor único',
              data: [this.value],
              backgroundColor: '#ffff4f',
            },
          ],
        },
        options: {
          indexAxis: 'y', // Hace que la barra sea horizontal
          responsive: true,
          plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
          },
          scales: {
            x: {
              display: false,
              min: 0,
              max: 10,
            },
            y: {
              display: false,
            },
          },
          elements: {
            bar: {
              borderWidth: 0,
              borderRadius: 10,
              
            },
          },
        },
      });
    }
  
    private updateChart() {
      if (this.chart) {
        this.chart.data.datasets[0].data = [this.value];
        this.chart.update();
      }
    }
  }
  
  export default BarChart;
  