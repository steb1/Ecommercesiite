import React from 'react';
import Article from './Article';

import axios from 'axios';

export default class Articles extends React.Component {
  state = {
    Produits: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const Produits = res.data;
        this.setState({ Produits });
      })
  } 

  render() {
    return (
      <ul class='ul1'>
        { this.state.Produits.map(Produit => (<Article 
        key={Produit.id} 
        nom={Produit.name} 
        prenom={Produit.username}/>))}
      </ul>
    )
  }
}