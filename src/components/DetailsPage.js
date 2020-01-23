import React, {Component} from 'react'


const datailsCounts = ["Dtails list1", "Dtails list2", "Dtails list3", "Dtails list4", "Dtails list5", "Dtails list6", "Dtails list7", "Dtails list8"]

var myStyle ={
    display: "none"
}

class DetailsPage extends Component{
    render(){
        return(
       
            <div className="mainCntent">
            <h3>Dtails content of the page</h3>

            <ul>
           { datailsCounts.map((abc, index) => 
               <li key={index}>{abc}</li>
            )
        } 

            </ul>

           <div className="accHead" id="acc" onClick={fnAccordian}>Click Here to see product details</div>
           <div className="accDetails" id="myDiv" style={myStyle}>Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet</div>

          

            </div>

        )
    }
}

function fnAccordian(){
  //alert();
  //var element = document.getElementsByClassName("accDetails");
  //alert(element)
  //element.classList.toggle("active");
  var element = document.getElementById("acc");
  element.classList.toggle("active");
  var x = document.getElementById("myDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


export default DetailsPage;