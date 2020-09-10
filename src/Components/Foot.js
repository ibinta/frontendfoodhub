
import React from "react"; import { MDBCol, MDBContainer, MDBRow, MDBFooter ,MDBIcon} from "mdbreact";
import '../index.css'


export const FooterPage = () => { return ( <MDBFooter color="black" className="font-small pt-4 mt-4"> 
<MDBContainer fluid className="text-center text-md-left"> 
<MDBRow>
    <MDBCol md="6"  className="pb-2"border-0  >
       <MDBIcon  icon='phone-square'size='2x'/>
    <h3>Contact us</h3>
     <hr className="orange d-flex justify-content-center " style={{ width: "40px" }} />
    <p>Sheila-08928dhd
    <br/> Vera-0764679976</p>
    </MDBCol>
    
    <MDBCol md="6" >
         <MDBIcon  icon='location-arrow'size='2x'/>
       <h3>Find us</h3> <hr className="orange d-flex justify-content-center " style={{ width: "40px" }} />
       <p>
       suite 16 emaab plaza
       wuse zone 6
       </p>
    </MDBCol>
    <MDBCol md="6" >
         <MDBIcon  icon='podcaselt'size='2x'/>
       <h3>Follow us on</h3> <hr className="orange d-flex justify-content-center " style={{ width: "40px" }} />
       
       </MDBCol>
       
       <MDBCol>
    <a href="#">
      <MDBIcon color="white" icon='twitter'size='2x'/>
      </a>
      </MDBCol>
  
    
       
       <MDBCol>
           <a href="#">
      <MDBIcon  color="white"icon='instagram-alt'size='2x'/>
    </a>
      </MDBCol>
   
    
       
       <MDBCol>
           <a href="#">
      <MDBIcon color="white" icon='facebook'size='2x'/>
      </a>
      </MDBCol>
  
    
    
  </MDBRow>
</MDBContainer>
<div className="footer-copyright text-center py-3"> <MDBContainer fluid> &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> TheFoodhub.com</a> </MDBContainer> </div> </MDBFooter> ); }

