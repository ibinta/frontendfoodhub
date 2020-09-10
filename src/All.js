


import React, { useState, useEffect } from 'react'
import axios from 'axios';
import{ MDBBtn } from "mdbreact";
import { MDBContainer, MDBCard, MDBRow,MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom'


export const All=(props)=>{
  const [products, setProducts] = useState([]);

useEffect(() => {

const fetchData = async () => {

const dataRequest =await axios.get(
"https://smarthub-ecommerce.herokuapp.com/all-products");


setProducts(dataRequest.data.products);
};
fetchData();

}, []);
  return(
    
     <MDBContainer>
      <h3 className="text-center
 h1-responsive
 font-weight-bold head
 ">
 LATEST
 </h3>
 <hr className="orange d-flex justify-content-center text-center accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "40px" }} />
       
  <MDBRow>
  
  {products.map((products) => (
 <MDBCol md="4" class="padd" key={products._id}>
 <Link to={'/products/' + products._id}>
     <MDBCard class="padd">
        <MDBCardImage className="img-fluid" src={products.image}
          waves />
        <MDBCardBody>
          <MDBCardTitle>{products.name}</MDBCardTitle>
          <MDBCardText>{products.price}</MDBCardText>
          <MDBBtn href="#"
          color="black">order <MDBIcon className="pl-1" icon='arrow-right'size='1x'/></MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </Link>
      </MDBCol>
      
      ))}

      </MDBRow>
      </MDBContainer>
    
    
    
    );
}