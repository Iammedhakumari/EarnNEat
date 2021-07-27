import React,{ Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns } from "react-bootstrap";
import {Input,CardTitle, MDBCol, MDBIcon} from "mdbreact";


import data from "./Data.json";

class CardA extends Component {
  state = {
    search: ""
  };

  renderJob = job  => {
    const { search } = this.state;
    // eslint-disable-next-line
    var code = job.code.toLowerCase();

    return (

     
      <div className="col-md-3" style={{ marginTop: "20px" }}>

      <CardColumns>
    
     
        <Card>
        <Card.Img variant="top" src= {job.image}/>
 <Card.Body>
             <CardTitle title={job.name}>
              {job.name.substring(0, 50)}
              {job.name.length > 50 && "..."}
            </CardTitle>
            <Card.Title>{job.shop}</Card.Title>
            <Card.Text >
              Contact Info:{job.Contact}
              <br/>
              Email-id:{job.EmailId}
              <br/>
              Looking For:{job.Looking}
              <br/>
              {" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        
      
      </CardColumns>
      </div>
    

      
    );
  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredJobs = data.filter(job => {
      return job.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
<div className="col">
           <MDBCol md="6">
                  <form className="form-inline mt-4 mb-4">
                    <MDBIcon icon="search" />
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Enter your Address" aria-label="Search" onChange={this.onchange} />
                    
                  </form>
                </MDBCol>
               
                  
              
              </div>
              <div className="col" />
            </div>
            <div className="row">
              {filteredJobs.map(job  => {
                return this.renderJob (job);
              })}
            </div>
          </div>
        </main>
        
      </div>
      
    );
  }
}

export default CardA ;

