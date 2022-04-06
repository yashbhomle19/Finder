import React from 'react'

function Todo({dispatch,list}) {
    return ( 
        <div>
        {list.name}
        <button onClick={()=> dispatch({type:'delete',payload:{id:list.id}})}>Delete</button>
        </div>
     );
}

export default Todo;