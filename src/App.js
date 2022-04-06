import React, {useState,useEffect} from "react";
import Errors from './Error'

function App() {
  const[resp,setResp]=useState([])
  const[username,SetUsername]=useState()   //mojombo
  const[name,setName]=useState('')
  const[name1,setName1]=useState('false')
  

  useEffect(()=>{
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response=>{
      if (!response.ok) {
        throw Error(<h3></h3>);
    }else{
    return response.json()}
    })
    .then(data=>setResp(data))
  
  },[username])


   function handle(){
    SetUsername(name)
   }

    return (
    <div>

    <h3>Enter github username:</h3>
    <input type='text' onChange={e=>{setName(e.target.value)}}/>
    <button onClick={handle}>Submit</button>
    
     <table border='1'>
      <tr>
      <th>Repo Name</th>
      <th>Language</th>
      <th>Description</th>
      </tr>
      <tr>
      <td>
     {resp.map(list=>{return<pre>{JSON.stringify(list.name)}</pre>})}
     </td>
     <td>
     {resp.map(list=>{return<pre>{JSON.stringify(list.language)}</pre>})}
     </td>
     <td>
     {resp.map(list=>{return<pre>{JSON.stringify(list.name)}</pre>})}
     </td>
     </tr>
     </table>
     </div>
  );
}

      
export default App;
