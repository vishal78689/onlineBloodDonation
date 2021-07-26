import React ,{useState}from 'react'
import './Search.css'
import useVisiblityToggler from "./useVisiblityToggler";
import { STATES } from "../States";

function Search() {
  const [stat, setstat] = useState("");
  const [city, setcity] = useState("");


 const [contactFormComponent, toggleFormVisibility] = useVisiblityToggler(
  <div className="sc">
      <div class="form-row">
        <div class="form-group col-md-4">
            <label for="inputState">Blood Group</label>
            <select id="inputState" class="form-control">
            <option selected disabled>
                --Blood Group--
              </option>
              <option>A-</option>
              <option>A+</option>
              <option>AB-</option>
              <option>AB+</option>
              <option>B-</option>
              <option>B+</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
                <div class="form-group col-md-4">
            <label for="inputCity">Select State</label>
            <select id="inputCity" class="form-control"
            value={stat}
            onChange={e => setstat(e.target.value)}>
            <option selected disabled>
                Select State
              </option>
              {Object.keys(STATES).map((state) => {
        return <option key={state}>{state}</option>;
      })}
            
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Select City</label>
            <select id="inputState" class="form-control"
            value={city}
            onChange={e => setcity(e.target.value)}>
            <option selected disabled name="dist" >
                Select City
              </option>
              { stat && STATES[stat].map((city) => {
            return <option key={city}>{city}</option>;
      })} </select>
          </div>
         
        </div>
        <button type="button" class="btn btn-success btn-search bts">Search</button>
        </div>,false);



    return (
        <div className="search-t">
          <button onClick={toggleFormVisibility} type="button" class="btn btn-outline-success mt-5">Look For Donor</button>
        
        {contactFormComponent}
    
        </div>
    )
}

export default Search
