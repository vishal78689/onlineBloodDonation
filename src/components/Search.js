import React from 'react'
import './Search.css'
import useVisiblityToggler from "./useVisiblityToggler";

function Search() {

 const [contactFormComponent, toggleFormVisibility] = useVisiblityToggler(
  <div className="sc">
      <div class="form-row">
        <div class="form-group col-md-4">
            <label for="inputState">Blood Group</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
                <div class="form-group col-md-4">
            <label for="inputCity">Select District</label>
            <select id="inputCity" class="form-control">
              <option selected>...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Select City</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
         
        </div>
        <button type="button" class="btn btn-success btn-search">Search</button>
        </div>,false);



    return (
        <div className="search-t">
          <button onClick={toggleFormVisibility} type="button" class="btn btn-outline-success mt-5">Look For Donor</button>
        
        {contactFormComponent}
    
        </div>
    )
}

export default Search
