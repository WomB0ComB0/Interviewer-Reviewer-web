import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../Global/Components/App';
// Fix this
// import reportWebVitals from 'Interviewer-Reviewer/Client/Pages/Global/Components/reportWebVitals.js';

import './../Global'; //This could be used?

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


/*If you want to start measuring performance in your app, pass a function
to log results (for example: reportWebVitals(console.log))
or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
// reportWebVitals();