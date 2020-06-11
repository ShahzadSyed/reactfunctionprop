import React from 'react';

function Dinner(props){
    return(
        <div>
            <h2> Today we are serving  <i>{props.dishName} </i> with  <i>{props.meat}</i> </h2>
        </div>
    )
}

export default Dinner;