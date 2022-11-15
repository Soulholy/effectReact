import { useEffect, useState } from 'react';
import './App.css';

function App() {
   
    const [users,setUsers] = useState([])

    useEffect(function(){
        fetch('https://reqres.in/api/users?page=2')
        .then(function(data){
          return data.json()
        })
        .then(function(infoData){
          // console.log(infoData);
          setUsers(infoData.data)
        })
    },[
    // ค่าที่เปลี่ยนแปลงจะทำงาน
    ])

    return (
        <section className="app-section">
            <div className="app-container">
              <h1>Test useEffect</h1>             
                {users.map(function(data){
                  return (<p key={data.id}>
                  {data.email}
                  </p>)                               
                })}
              
              
            </div>
        </section>
    );
}

export default App;
