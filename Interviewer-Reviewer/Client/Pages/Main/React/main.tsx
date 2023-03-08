import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../Global/Components/App";
import reportWebVitals from "../../Global/Components/reportWebVitals";
import "./../Global*{.css,.scss}";
 
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
			<App />
	</React.StrictMode>,
);
reportWebVitals(console.log);