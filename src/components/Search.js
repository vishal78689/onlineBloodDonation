import React from 'react'
import './Search.css'

function Search() {
    return (
        <div className="search-t">
          <h2 >Look for donors</h2>  
          <div className="search-m">
          <form className="search">
          <div>
          <select className="select-s">
		<option value="0">Blood Group</option>
		<option value="2">A-</option>
		<option value="1">A+</option>
		<option value="6">AB-</option>
		<option value="5">AB+</option>
		<option value="4">B-</option>
		<option value="3">B+</option>
		<option value="8">O-</option>
		<option value="7">O+</option>
	</select> 
    </div>
          <div>
              <div className="searcho">
              <button type="button" class="btn btn-outline-success">Search by Pin </button>
              <button type="button" class="btn btn-outline-success">Search by District</button>
              </div>
              <input className="inp" placeholder="Enter your Pin" 
          maxLength="6" numbersonly/>
          </div>
          
        
          <div>
              <button className="btn-t">Search</button>
          </div>
          </form>
            </div>
        </div>
    )
}

export default Search
