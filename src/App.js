import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HS } from './HS'
import { All } from './All'
import { PS } from './PS'
import {NavbarPage} from './Components/Nav'

import {FooterPage} from './Components/Foot'

function App() {
  return (
    

    
   <React.Fragment>
        <Router>
        <NavbarPage/>
          
      <Route path="/product/:id" component={PS} />
      <Route path="/allmenu" component={All} />
<Route path="/" exact={true} component={HS} />
            
           
          <FooterPage/>
        </Router>
      </React.Fragment>

    
  
  );
}

export default App;
