import React, { Component } from 'react';

/**
 * App class runs entire application
 */
class App extends Component {
   /**
   * Represents a book.
   * @constructor
   */
   constructor() {
      super();
   }

   render() {
      return (
      <div className="App">
         <button className="btn btn-primary">Add Item</button>
         <ul>
            <li>
               <div class="card" style={{width: '18rem'}}>
                  <div class="card-body">
                     <h5 class="card-title">Go Shopping</h5>
                     <h6 class="card-subtitle mb-2 text-muted">January 5, 2021</h6>
                     <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                     </p>
                  </div>
               </div>
            </li>

            <li>
               <div class="card" style={{width: '18rem'}}>
                  <div class="card-body">
                     <h5 class="card-title">Go Shopping</h5>
                     <h6 class="card-subtitle mb-2 text-muted">January 5, 2021</h6>
                     <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of 
                        the card's content.
                     </p>
                  </div>
               </div>
            </li>

            <li>
               <div class="card" style={{width: '18rem'}}>
                  <div class="card-body">
                     <h5 class="card-title">Go Shopping</h5>
                     <h6 class="card-subtitle mb-2 text-muted">January 5, 2021</h6>
                     <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of 
                        the card's content.
                     </p>
                  </div>
               </div>
            </li>
         </ul>
      </div>
    );
  }
}

export default App;
