import React, { Component } from 'react'
import Slider1 from '../../images/banner.jpg'
import Slider2 from '../../images/banner2.jpg'
import './home.css'

class Home extends Component {
  render() {
    return (
      <div className="pageContainer">

        {/*--------------------- carasual html starts here---------------------*/}

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={Slider1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slider2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slider1} alt="Third slide" />
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>

          <ol className="carousel-indicators">
            <li data-target="#carouselExampleSlidesOnly" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleSlidesOnly" data-slide-to="1"></li>
            <li data-target="#carouselExampleSlidesOnly" data-slide-to="2"></li>
          </ol>
        </div>

        {/*--------------------- carasual html ends here---------------------*/}



        <section id="features" className="features">

          <div className="container text-center pt-4">

            <h2>Features</h2>

            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4">

                <div className="features-wrap">
                  <i className="fa fa-laptop"></i>
                  <h2>Freash and clean</h2>
                  <p>Lorem ipsum sit amet,
                  lorem ipsum sit amet.
      </p>
                </div>
              </div>
              <div className="col-md-4">

                <div className="features-wrap">
                  <i className="fa fa-download"></i>
                  <h2>Freash and clean</h2>
                  <p>Lorem ipsum sit amet,
                  lorem ipsum sit amet.
      </p>
                </div>
              </div>

              <div className="col-md-4">

                <div className="features-wrap">
                  <i className="fa fa-leaf"></i>
                  <h2>Freash and clean</h2>
                  <p>Lorem ipsum sit amet,
                  lorem ipsum sit amet.
      </p>
                </div>
              </div>

              <div className="col-md-4">

                <div className="features-wrap">
                  <i className="fa fa-comments"></i>
                  <h2>Retina ready</h2>
                  <p>Lorem ipsum sit amet,
                  lorem ipsum sit amet.
      </p>
                </div>
              </div>


              <div className="col-md-4">

                <div className="features-wrap">
                  <i className="fa fa-heart"></i>
                  <h2>Freash and clean</h2>
                  <p>Lorem ipsum sit amet,
                  lorem ipsum sit amet.
      </p>
                </div>
              </div>


              <div className="col-md-4">

                <div className="features-wrap">
                  <i className="fa fa-comments"></i>
                  <h2>Freash and clean</h2>
                  <p>Lorem ipsum sit amet,
                  lorem ipsum sit amet.
      </p>
                </div>
              </div>

            </div>


          </div>


        </section>


        <section className="portfolio">

          <div className="container text-center pt-4">

            <h2>Portfolio</h2>

            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          </div>

          <div className="container">

            <input type="checkbox" id="pic-1" />
            <label htmlFor="pic-1" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=1" /></label>
            <input type="checkbox" id="pic-2" />
            <label htmlFor="pic-2" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=20" /></label>
            <input type="checkbox" id="pic-3" />
            <label htmlFor="pic-3" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=21" /></label>
            <input type="checkbox" id="pic-4" />
            <label htmlFor="pic-4" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=42" /></label>
            <input type="checkbox" id="pic-5" />
            <label htmlFor="pic-5" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=48" /></label>
            <input type="checkbox" id="pic-6" />
            <label htmlFor="pic-6" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=60" /></label>
            <input type="checkbox" id="pic-7" />
            <label htmlFor="pic-7" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=201" /></label>
            <input type="checkbox" id="pic-8" />
            <label htmlFor="pic-8" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=7" /></label>
            <input type="checkbox" id="pic-9" />
            <label htmlFor="pic-9" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=119" /></label>
            <input type="checkbox" id="pic-10" />
            <label htmlFor="pic-10" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=180" /></label>
            <input type="checkbox" id="pic-11" />
            <label htmlFor="pic-11" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=96" /></label>
            <input type="checkbox" id="pic-12" />
            <label htmlFor="pic-12" className="lightbox"><img alt="" src="http://unsplash.it/800/600?image=24" /></label>
            <div className="grid">
              <label htmlFor="pic-1" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=1" /></label>
              <label htmlFor="pic-2" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=20" /></label>
              <label htmlFor="pic-3" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=21" /></label>
              <label htmlFor="pic-4" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=42" /></label>
              <label htmlFor="pic-5" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=48" /></label>
              <label htmlFor="pic-6" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=60" /></label>
              <label htmlFor="pic-7" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=201" /></label>
              <label htmlFor="pic-8" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=7" /></label>
              <label htmlFor="pic-9" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=119" /></label>
              <label htmlFor="pic-10" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=180" /></label>
              <label htmlFor="pic-11" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=96" /></label>
              <label htmlFor="pic-12" className="grid-item"><img alt="" src="http://unsplash.it/400/300?image=24" /></label>
            </div>


          </div>



        </section>

        <section id="faqSection" className="faqSection">

          <div className="container text-center pt-4">
            <h2>Faq's</h2>
            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>


          </div>


          <div className="container mt-10">
            <h4>Accordion Style : Demo-3</h4>
            <div className="col-md-12">


              <div className="panel-group" id="accordion3" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne3">
                    <h4 className="panel-title">
                      <a role="button" className="collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                        Section 1
                                    </a>
                    </h4>
                  </div>
                  <div id="collapseOne3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne3">
                    <div className="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo3">
                    <h4 className="panel-title">
                      <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion3" href="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
                        Section 2
                                    </a>
                    </h4>
                  </div>
                  <div id="collapseTwo3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo3">
                    <div className="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree3">
                    <h4 className="panel-title">
                      <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion3" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                        Section 3
                                    </a>
                    </h4>
                  </div>
                  <div id="collapseThree3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree3">
                    <div className="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



        </section>

      </div>
    );
  }
}

export default Home;