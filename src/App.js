import React, {Component}  from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Title from './components/Title'
import List from './components/List'
import DetailsPage from './components/DetailsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Services from './components/Pages/Services'
import Blogs from './components/Pages/Blogs'
import Contact from './components/Pages/Contact'


 

class App extends Component{

  constructor(){
    super();

    this.state = {
      names: []
    }
  this.removeName = this.removeName.bind(this);
  }

  removeName(nameRemoved){
     console.log(nameRemoved);
     this.setState((state) => ({
      names: state.names.filter(name => name !== nameRemoved)
      //console.log(this.studentList);
     }))
  }

  componentDidMount(){
    const data = simulateFetchFromDatabase();

    this.setState({
      names:data
    })
  }

  render(){
      return(
      <div className="">
        
        <Router>
        <Navbar />
        <Route exact path="/" component = {Home} />
        <Route exact path="/About" component = {About} />
        <Route exact path="/Services" component = {Services} />
        <Route exact path="/Blogs" component = {Blogs} />
        <Route exact path="/Contact" component = {Contact} />
        </Router>
        
        <div className="container noDisplay">
          <Title title={"List of the students"}/>
          <List studentList={this.state.names} onRemoveName = {this.removeName}/>
          {/* <Title title={"New List of the students"}/> */}
          {/* <List studentList={["Vishal", "Jatin"]}/> */}
          <DetailsPage />
           </div>
          <Footer />



      </div>
      )
  }
}

function simulateFetchFromDatabase(){
  return ["Nikhil", "Asif", "Vishal", "Test"];
}



export default App