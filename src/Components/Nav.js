import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import '../index.css'
export class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="White"  expand="md" light>
        <MDBNavbarBrand>
          <strong bold color="black" >FoOdHuB</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active className="navb">
              <MDBNavLink to="#">
              Home 
                 </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">products</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="navb">
              
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            
                
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

