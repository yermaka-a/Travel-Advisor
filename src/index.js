import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { YMaps } from "@pbe/react-yandex-maps"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
	<React.StrictMode>
		<YMaps>
			<App />
		</YMaps>
	</React.StrictMode>,
)
