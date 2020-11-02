import React, { Component } from "react";
import axios from "axios";


export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
// constructor(){
//   super();
//   useState ={
//     plants: []
//   }
// }

state = {
  plants: []
}



//   // when the component mounts:
  componentDidMount(){
    this.fetchPlantData();
  }
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  fetchPlantData = () => {
    fetch('http://localhost:3333/plants')
    .then((response)=> response.json())
    .then((response)=> {
      //   - set the returned plants array to this.state.plants
      // console.log("pre: ",this.state.plants)
      this.state.plants = response.plantsData
      console.log("Plants Array: ", this.state.plants);
    })
    .catch((error)=>{
      console.log("error: ", error);
    })
    

  }

      // .then((response)=>{
    //   
    //   // this.state.plants = response;
    //   console.log("Plants Array: ", response)
    // })



  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
