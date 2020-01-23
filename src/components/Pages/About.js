import React, {Component} from 'react'
import client from './Client.js'
import BlackLoader from '../../images/loader2.gif'

class About extends Component{
  constructor(){
    super()
    this.state = {aboutpage:[]}
  }

  componentDidMount(){
    client.getEntries({
     'content_type': "about"
    })
    .then((entries) =>  {
     this.setState({aboutpage: entries.items[0]})
    })
  }
    render(){
        return(
          <div className="pageContainer">
            <div className="container text-center pt-4">
          <h1>About Us</h1>
          {/* {this.state.aboutpage.fields.aboutDescription} */}
          

          {this.state.aboutpage.length === 0 ? 
            
            <div className="loader"><img alt="" src={BlackLoader}></img></div>
          :
          <p>{this.state.aboutpage.fields.aboutDescription}</p>
        }

         

          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
          </div>
          </div>
         

        );
    }
}

export default About;