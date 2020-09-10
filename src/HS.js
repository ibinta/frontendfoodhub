import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom'
import { MDBBtn } from "mdbreact";
import './App.css';
import {  MDBCard, MDBRow,MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Pr} from './Components/Pr'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask,MDBIcon, MDBContainer } from
"mdbreact";
import './index.css'
import {CardExample} from './Components/Comp'
import {FooterPage} from './Components/Foot'

export const HS=()=>{
  return(
    <div>

    
<CardExample/>
 
 
 <h3 className="text-center
 h1-responsive
 font-weight-bold head
 ">
 LATEST
 </h3>
 <hr className="orange d-flex justify-content-center text-center accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "40px" }} />
       
 
<Pr/>
<MDBContainer>
<Link to={'/allmenu'}>
<MDBBtn rounded className="justify-content-center text-center" tag="a" floating gradient="peach">
        <MDBIcon icon="angle-right"/>
        </MDBBtn>
        </Link>
          </MDBContainer>
    </div>
    
   
    );
}
