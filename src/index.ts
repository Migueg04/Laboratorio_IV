import Card from "./components/card";
import Section from "./components/section";
import Button from "./components/button"
import NameBar from "./components/nameBar";
import BarChart from "./components/bar"

customElements.define("card-component", Card);
customElements.define("section-component", Section);
customElements.define("button-component", Button)
customElements.define("name-bar", NameBar)
customElements.define('bar-chart', BarChart);