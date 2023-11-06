import React, { useState } from "react";

export const FormHook = () =>{
    const [name, setName] = useState({firstName:"", lastName:""})
    return(
        <div>
            <p>FirstName: - {name.firstName}</p>
            <p>lastName: - {name.lastName}</p>
            
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({...name, firstName:e.target.value})}>
                </input>
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({...name, lastName:e.target.value})}>
                </input>
            </form>
        </div>
    
    )
}