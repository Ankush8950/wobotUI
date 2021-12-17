import React from 'react'
import "./Card.css"

function Card() {
    return (
        <>
           <div className='cardContainer'>
              <div className='logo'>
                 <img src="image/Solid_lines.png" alt="logo" /> 
                 <h2 className='logotext'>It’s a delight to have you onboard</h2>  
              </div>  

              <div className='para'>
                <p>Help us know you better.<br/>
                 (This is how we optimize Wobot as per your business needs)</p>
              </div>
              <div className='from'>
              <form>
                <label>Company name</label><br/>
                <input type="text" name="name" placeholder='e.g Example Inc' autoComplete='off' /><br/><br/>

                <label>Company name</label><br/>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Select</option>
                </select><br/><br />
                <label>Company size</label> <br/>
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" className="btn">1-20</button>
                    <button type="button" className="btn">21-50</button>
                    <button type="button" className="btn">51-200</button>
                    <button type="button" className="btn">201-500</button>
                    <button type="button" className="btn">500+</button>
                </div>

                <input className='btn_sumb' type="submit" value="Submit" />
                </form>
              </div>
           </div> 
        </>
    )
}

export default Card
