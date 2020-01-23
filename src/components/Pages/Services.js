import React, {Component} from 'react'
import './Services.css'
import Icon1 from '../../images/services/services1.png'
import Icon2 from '../../images/services/services2.png'
import Icon3 from '../../images/services/services3.png'
import Icon4 from '../../images/services/services4.png'
import Icon5 from '../../images/services/services5.png'
import Icon6 from '../../images/services/services6.png'

class Services extends Component{
    render(){
        return(
          <section id="services" className="services p-4">
          <div className="pageContainer">
          <div className="container pt-4">
            <div className="text-center">
          <h1>Our Services</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="row">
         <div className="col-md-4">
          <div className="media serviceWrap">
          <div className="serviceIcon">
           <img className="pr-3" alt="" src={Icon1} />
          </div>

          <div className="media-body">
         
         <h3 className="mt-0">Digital Marketing</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       

          </div>


          </div>
         </div>

         <div className="col-md-4">
          <div className="media serviceWrap">
          <div className="serviceIcon">
           <img className="pr-3" alt="" src={Icon2} />
          </div>

          <div className="media-body">
         
         <h3 className="mt-0">Email Marketing</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       

          </div>


          </div>
         </div>

         <div className="col-md-4">
          <div className="media serviceWrap">
          <div className="serviceIcon">
           <img className="pr-3" alt="" src={Icon3} />
          </div>

          <div className="media-body">
         
         <h3 className="mt-0">Offline Marketing</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       

          </div>


          </div>
         </div>

         <div className="col-md-4">
          <div className="media serviceWrap">
          <div className="serviceIcon">
           <img className="pr-3" alt="" src={Icon4} />
          </div>

          <div className="media-body">
         
         <h3 className="mt-0">Online Marketing</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       

          </div>


          </div>
         </div>



         <div className="col-md-4">
          <div className="media serviceWrap">
          <div className="serviceIcon">
           <img className="pr-3" alt="" src={Icon5} />
          </div>

          <div className="media-body">
         
         <h3 className="mt-0">How to grow Marketing</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       

          </div>


          </div>
         </div>


         <div className="col-md-4">
          <div className="media serviceWrap">
          <div className="serviceIcon">
           <img className="pr-3" alt="" src={Icon6} />
          </div>

          <div className="media-body">
         
         <h3 className="mt-0">Do Marketing</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
       

          </div>


          </div>
         </div>

          </div>
          </div>

          </div>
          </section>
        );
    }
}

export default Services;