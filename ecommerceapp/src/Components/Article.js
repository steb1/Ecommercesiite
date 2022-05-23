import React, { Component } from 'react'
import image1 from '../image1.jpeg'

export default class Article extends Component {
  render() {
    return (
      <div>
        <div class='container'>
          <div class='row'>
          <div class="col">
          <div class="card col-4 border border-white">
            <img class="card-img-top" src={image1} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">{this.props.nom}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a><a href="#" class="btn btn-secondary">Panier</a>
            </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
