import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import RegisterCard from './RegisterCard.js';
import Main from './main.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={RegisterCard} />
				<Route path="register" component={RegisterCard} />
				<Route path="main" component={Main} />
			</Route>
		</Router>),
	document.getElementById('root'));
registerServiceWorker();
