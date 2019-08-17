
import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import HomePage from './container/HomePage';
import SearchPage from './container/SearchPage';

const RouterComponent =()=> {

return (
<Router>

<Scene key="root">
<Scene key="home" component={HomePage}  hideNavBar="false"  initial/>
<Scene key="search" component={SearchPage}  titile="Search Data"/>

</Scene>

</Router>


);

};



export default RouterComponent;