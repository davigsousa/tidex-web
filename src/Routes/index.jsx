import { Redirect, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Route from './Route';

function Routes() {
	return (
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/painel" isPrivate component={Dashboard} />
			<Route exact path="/*" component={() => <Redirect to="/painel" />} />
		</Switch>
	);
}

export default Routes;
