import React, {Component} from 'react'
import './Blogs.css'
import Blog1 from '../../images/blog/blog1.jpg'
import Blog2 from '../../images/blog/blog2.jpg'


class Blogs extends Component{
    render(){
        return(
          <section className="blogs">
          <div className="pageContainer">
          <div className="container pt-4">
          <div className="text-center"> 
          <h1>Blogs</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="row">
          <div className="col-md-6 blog-content">
            <img alt="" className="imageBlog img-fluid" src={Blog1} />
            <h3><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h3>
            <p className="blogContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <button className="btn btn-primary">Read more...</button>
          </div>

          <div className="col-md-6 blog-content">
            <img alt="" className="imageBlog img-fluid" src={Blog2} />
            <h3><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h3>
            <p className="blogContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <button className="btn btn-primary">Read more...</button>
          </div>

          </div>
          </div>
          </div>
          </section>
        );
    }
}

export default Blogs;