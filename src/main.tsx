import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MetasMemoria, AuthMemoria } from "./memoria";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthMemoria>
			<MetasMemoria>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</MetasMemoria>
		</AuthMemoria>
	</React.StrictMode>,
);
