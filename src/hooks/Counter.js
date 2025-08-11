import React, { useState } from "react";


import React from 'react'



function useCounter(initial=0){


    const[state,setState]=useState(0);

    const increment=()=>setState(prev=prev+1);

    const decrement=()=>setState(prev=prev-1);

    const reset=()=>setState(0);

    return{increment,decrement,reset,state}

}


export default useCounter
