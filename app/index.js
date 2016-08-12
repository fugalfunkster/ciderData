import './main.css';
import React    from 'react';
import ReactDOM from 'react-dom';
import Graph    from './components/graph.js';

const App = props => (
  <div>
    <h1 style={{textAlign: 'center'}}>WSU Extension Cider Apple Data</h1>
    <h2 style={{textAlign: 'center'}}>Juice Analysis of Varietal Ciders in Western Washington</h2>
    <Graph/>
    <p style={{lineHeight: 1.2}}>Apples are categorized for cider making based on their tannin and acid contents (Table 1). At
harvest, 15-25 ripe fruit were collected for each cultivar. From 2002 to 2012, fruit were milled and
pressed in a basket cider press. After 2013 fruit samples were chopped in a shredder and pressed in a
bladder press. Juice samples were collected in 500 mL plastic bottles and analyzed for soluble solids
concentration (&deg;Brix), pH, specific gravity (not shown), malic acid (g.L<sup>-1</sup>), and tannins (%).</p>
    <div>C. Miles, E. Scheenstra, A. Zimmerman, T. Alexander, and J. King</div>
    <div>WSU Mount Vernon NWREC</div>
    <div> 16650 State Route 536, Mount Vernon, WA 98273</div>
    <div><a href="www.cider.wsu.edu">www.cider.wsu.edu</a></div>
    <p><a href="http://ext100.wsu.edu/maritimefruit/wp-content/uploads/sites/36/2016/05/CiderJuiceAnalysis.pdf"> Data Published on 5/2016</a></p>
  </div>
);

const mountingPoint = document.createElement('div');
mountingPoint.className = 'react-app';
document.body.appendChild(mountingPoint);
ReactDOM.render(<App/>, mountingPoint);
