import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ListPage from "./Pages/ListPage";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/list/:id" component={ListPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
