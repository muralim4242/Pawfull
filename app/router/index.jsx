import React from 'react';
import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';

import Login from 'Login';

import Main from 'Main';


// import SearchScreen from "SearchScreen";
import SearchTabAndContent from "SearchTabAndContent";
import SearchResultList from "SearchResultList";
//import firebase from 'app/firebase/';

// var requireLogin = (nextState, replace, next) => {
//   if (!firebase.auth().currentUser) {
//     replace('/');
//   }
//   next();
// };
//
// var redirectIfLoggedIn = (nextState, replace, next) => {
//   if (firebase.auth().currentUser) {
//     replace('/todos');
//   }
//
//   next();
// };

export default(
    <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={SearchTabAndContent}/>
                <Route path="/SearchResultList/:searchType" component={SearchResultList}/>
            </Route>
    </Router>
);
