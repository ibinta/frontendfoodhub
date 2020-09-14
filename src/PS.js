import React, { useState, useEffect } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn } from "mdbreact";
import "./App.css";
import {
  MDBCard,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import { Pr } from "./Components/Pr";
import { BrowserRouter as Router, Route, Switch , useParams} from "react-router-dom";
import axios from 'axios'
import "./App.css";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBIcon,
  MDBContainer,
} from "mdbreact";
import "./index.css";
import { CardExample } from "./Components/Comp";
import { FooterPage } from "./Components/Foot";
 
export const PS = (prop) => {
  const { id } = useParams
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const dataRequest = await axios.get(
        `https://smarthub-ecommerce.herokuapp.com/product/${id}` // prop.productId
      );

      setProduct(dataRequest.data.product);
    };
    fetchData();
  }, {});
  
    

    
  
  return (
    <div class="containr">
      <img
        src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
        className=" pi img-fluid"
        alt=""
        height="40"
      />

      <h4 className="PN">{product.name}</h4>

      <br />

      <h4 className="PR">$ {product.price}</h4>
      <div className="btncon">
        <div className="b1">
          <MDBBtn color="white" className="font-weight-bold rounded strong">
            Call
            <MDBIcon className="pl-1" icon="phone" size="1x" />
          </MDBBtn>
        </div>
        <div className="b2">
          <MDBBtn color="white" className="font-weight-bold rounded strong">
            Chat
            <MDBIcon className="pl-1" icon="message" size="1x" />
          </MDBBtn>
        </div>
      </div>
      <br />
      <hr
        className="#c4c4c4 d-flex justify-content-center text-center accent-2 mb-4 mt-0 d-inline-block mx-auto"
        style={{ width: "250px" }}
      />

      <div className="pd"></div>
      <p className="des">
        {product.description}
      </p>
    </div>
  );
};
/*
state = {
    product: null
  }
  
    const { id } = this.props.match.params

    fetch(`https://smarthub-ecommerce.herokuapp.com/product/${id}`)
      .then((product) => {
        this.setState(() => ({ product }))
      })
  
  return(
      <div class="containr">
      <img
        src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
        className=" pi img-fluid"
        alt=""
        height="40"
      />

      <h4 className="PN">{product.name}</h4>

      <br />

      <h4 className="PR">$ {product.price}</h4>
      <div className="btncon">
        <div className="b1">
          <MDBBtn color="white" className="font-weight-bold rounded strong">
            Call
            <MDBIcon className="pl-1" icon="phone" size="1x" />
          </MDBBtn>
        </div>
        <div className="b2">
          <MDBBtn color="white" className="font-weight-bold rounded strong">
            Chat
            <MDBIcon className="pl-1" icon="message" size="1x" />
          </MDBBtn>
        </div>
      </div>
      <br />
      <hr
        className="#c4c4c4 d-flex justify-content-center text-center accent-2 mb-4 mt-0 d-inline-block mx-auto"
        style={{ width: "250px" }}
      />

      <div className="pd"></div>
      <p className="des">
        {product.description}
      </p>
    </div>
  );
}*/
