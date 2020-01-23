import React, {Component} from 'react'

class Contact extends Component{
    render(){
        return(
          <section className="contactUs">
          <div className="pageContainer">
            <div className="container pt-4">
            <div className="text-center">
             <h1>Contact Us</h1>
             <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             
          </div>

          <div className="text-center">

          <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSd5Z0oW2-jn8frFl-2v2OrpHrJ1ILNV1dtwZ8vh4v-SW0kAEg/viewform?embedded=true" width="640" height="487" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

          </div>

          </div>
          </div>

          </section>
        );
    }
}

export default Contact;