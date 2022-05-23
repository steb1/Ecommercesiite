import React, { Component } from 'react'
import caroussel1 from '../caroussel1.jpg' 
import caroussel3 from '../caroussel3.jpg' 
import caroussel2 from '../carossel2.jpg' 

export default class Caroussel extends Component {
  render() {
    return (
      <div>
          <div id="carouselExemple" class="carousel slide" data-ride="carousel" data-interval="3000">

          <ol class="carousel-indicators">
              <li data-target="#carouselExemple" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExemple" data-slide-to="1"></li>
              <li data-target="#carouselExemple" data-slide-to="2"></li>
          </ol>
                <div class="carousel-inner">

                    <div class="carousel-item active">
                        <img src={caroussel1}
                            class="d-block"/>
                    </div>

                    <div class="carousel-item">
                        <img src={caroussel2}
                            class="d-block"/>
                    </div>

                    <div class="carousel-item">
                        <img src={caroussel3}
                            class="d-block"/>
                    </div>

                </div>

                <a href="#carouselExemple" class="carousel-control-prev" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="ture"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a href="#carouselExemple" class="carousel-control-next" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

        </div>
      </div>
    )
  }
}
