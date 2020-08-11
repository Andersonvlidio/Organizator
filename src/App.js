import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";

import Routes from "./routes";

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Routes />
		</Fragment>
	);
};

export default App;
