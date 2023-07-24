import React, { useReducer } from 'react'



const reducer = (state,action) => {

switch(action.type)
{
    case "agechange" :
    return(
        {
        ...state,
        age : state.age + 1
        }  
    )
    case "namechange":
        return(
            {
                ...state,
                name : action.payload
            }
        )
        default : 
        return state
}

}





function UseReducer() {

let intoduction = {
    name : "Meet",
    email : "meet@gmail.com",
    password : 65413,
    contact : 9212121545,
    age : 18
}

    const [state , dispatch] = useReducer(reducer , intoduction);


    const handleagechange = () => {
        dispatch({type : "agechange"});
    }

    const handlename = (e) => {
         dispatch({type : "namechange",payload:e.target.value});
    }
  return (
   

    <div>

<input type="text" onChange={handlename} placeholder='Name'/>




        <h1>name : 
            {
                state.name
            }
        </h1>
        <h2> email : 
            {
                state.email
            }
        </h2>
        <h3> password : 
            {
                state.password
            }
        </h3>
        <h4>
            contact :
            {
                state.contact
            }
        </h4>
        <h4>
            Age : 
            {
                state.age
            }
        </h4>
        <button onClick={handleagechange}>Inc Age</button>
       
    </div>



  )
}

export default UseReducer