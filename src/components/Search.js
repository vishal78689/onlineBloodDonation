import React from 'react'
import './Search.css'

function Search() {
    return (
        <div>
          <h2 >Look for donors</h2>  
          <form className="search">
          <select >
		<option value="0">--Blood Group--</option>
		<option value="2">A-</option>
		<option value="1">A+</option>
		<option value="6">AB-</option>
		<option value="5">AB+</option>
		<option value="4">B-</option>
		<option value="3">B+</option>
		<option value="8">O-</option>
		<option value="7">O+</option>

	</select> 
          <div>
              <div className="searcho">
              <div className="searchButton">Search by Pin </div>
              <div className="searchButton">Search by District</div>
              </div>
              <input placeholder="Enter your Pin" 
          maxLength="6" numbersonly/>
          </div>
          
        
          <div>
              <button>Search</button>
          </div>
          </form>
            
        </div>
    )
}

export default Search
