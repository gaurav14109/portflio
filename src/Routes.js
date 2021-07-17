import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Home from './core/Home'
const Routes = ()=>{
    
    return (

        <BrowserRouter>
      
            <Switch>    
                <Route path = "/" exact component={Home} />
             </Switch>
        
        </BrowserRouter>
)
//withRouter to access props history by default Router pass props to the called component
//which have some property
}

export default Routes;