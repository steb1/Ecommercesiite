import React from 'react'


export default function Contact() {
  return (
    
    <div className='container form'>
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Envoyer</button>
  <button type="submit" class="btn btn-secondary mb-2">Annuler</button>
</form>
    </div>
  )
}
