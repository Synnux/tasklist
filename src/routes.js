import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routesConfig from 'pages';

const routeComponents =	Object.keys(routesConfig)
	.map((key) => {
		const route = {
			...routesConfig[key],
			component: routesConfig[key].default
		};

		return <Route key={key} {...route} />;
	});

const Routes = () => (
	<Switch>
		{routeComponents}
	</Switch>
);

export default Routes;
