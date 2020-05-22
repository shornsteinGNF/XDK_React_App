import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bar from './Bar'
import ChartTemp from './ChartTemp'
import ChartHumidity from './ChartHumidity'
import CurrentTemp from './CurrentTemp'
import CurrentHumidity from './CurrentHumidity'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Bar />
    <ChartTemp />
    <ChartHumidity />
    <CurrentTemp />
    <CurrentHumidity /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();