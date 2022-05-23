
import React from 'react'

import image1 from '../image1.jpeg'
import image2 from '../image2.jpg'
import image3 from '../image3.jpg'
import image4 from '../image4.jpg'
import image5 from '../image5.jpg'
import image6 from '../image6.jpg'
export default function () {

  

  
    
  return (
    <div>
      <div class='nouveautes'>Nouveautes</div>
      <div class='container'>
      <div class='row'>
          <div class="card col-4 border border-white">
            <img class="card-img-top" src={image1} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a><a href="#" class="btn btn-secondary">Panier</a>
            </div>
          </div>
          <div class="card col-4 border border-white" >
            <img class="card-img-top" src={image2} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a><a href="#" class="btn btn-secondary">Panier</a>
            </div>
          </div>
          <div class="card col-4 border border-white" >
            <img class="card-img-top" src={image3} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a><a href="#" class="btn btn-secondary">Panier</a>
            </div>
          </div>
          <div class="card col-4 border border-white" >
            <img class="card-img-top" src={image4} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a><a href="#" class="btn btn-secondary">Panier</a>
            </div>
          </div>
          <div class="card col-4 border border-white" >
            <img class="card-img-top" src={image5} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a><a href="#" class="btn btn-secondary">Panier</a>
            </div>
          </div>
          <div class="card col-4 border border-white" >
            <img class="card-img-top" src={image6} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Details</a><a href="#" class="btn btn-secondary">Panier</a>
            </div>
          </div>
      </div>
      </div>
    </div>
  )

  }

