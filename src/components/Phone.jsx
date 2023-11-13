import React from 'react';
import { useState } from "react";
import "../phone.css"
function Phone() {

    const [country, setCountry] = useState("");

    const handleCountryChange = ({user}) => {
        setCountry()
    }

    return (
        <div className="field">
                        {/* <BsFillTelephoneFill size={19}/> */}
                        <select name="" id="" value={country} onChange={()=> setCountry()}>
                            <option value="+92" >+92</option>
                        </select>
                        <input placeholder="Phone Number" className="input-field"name='phone' value={user.phone} type='text' onChange={handleChange}/>
                    </div>
    );
}

export default Phone;
