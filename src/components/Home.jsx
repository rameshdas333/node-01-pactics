import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then (data=>setUsers(data))
    },[])

    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email}
        console.log(user);
        fetch('http://localhost:5000/users',)
        .then(res => res.json())
        .then(data=>setUsers(data))
    }
    return (
        <div>
            <h1>data length:{users.length}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' /><br />
                <input type="email" name='email' /><br />
                <input type="submit" value="Submit" />
            </form>
           {
            users.map(user =>(
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))
           }
        </div>
    );
};

export default Home;