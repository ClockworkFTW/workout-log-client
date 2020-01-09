import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "reset-css";

import store from "./store";

import App from "./App";

library.add(fas, far);

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-family: 'Source Sans Pro', sans-serif;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
`;

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<App />
	</Provider>,
	document.getElementById("root")
);
