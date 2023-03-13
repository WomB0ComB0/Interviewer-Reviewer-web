import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../Global/Components/App";
import reportWebVitals from "../Global/Components/reportWebVitals";
import "./../Global*{.css,.scss}";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
reportWebVitals(console.log);