import React from 'react';
import { MDBCard, MDBContainer, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import '../index.css'
export const CardExample = () => {
  return (

      
   
            <div>
              
          <div className="containr">
<div className="header
">
  
  <div className="descr"></div>
  <h1 className="txt">
    Stay Home
    <br/>
    and order now.
  </h1>
  <p className="description">
    order and get your food delivered right to your doorstep
  </p>

   <MDBBtn color='white' className=" font-weight-bold rounded strong">
           order now
                <MDBIcon className="pl-1" icon='arrow-right'size='1x'/>
              </MDBBtn>
</div>
</div>
  

<MDBContainer>
<MDBRow className="w-100">
<MDBCol size="2">
<MDBIcon icon="shopping-cart" className="grey-text" size="2x"/>
</MDBCol>
<MDBCol size="9" >
<h3 className="stat font-weight-bold">fast delivery</h3>

<p className="sta" color="grey">we'll get your goods delivered right to your doorstep</p>
</MDBCol>
<MDBCol size="2">
<MDBIcon icon="wallet" className="grey-text" size="2x"/>
</MDBCol>
<MDBCol size="9" >
<h3 className="stat font-weight-bold">Affordable</h3>

<p className="sta" color="grey">all our products are really affordable, which means you don't have to break your bank to get a bite.</p>
</MDBCol>
<MDBCol size="2">
<MDBIcon icon="phone" className="grey-text" size="2x"/>
</MDBCol>
<MDBCol size="9" >
<h3 className="stat font-weight-bold">Fast Response Time</h3>

<p className="sta" color="grey">we are always on standby,ready to take your orders.</p>
</MDBCol>
</MDBRow>
</MDBContainer>
</div>
  )
}

