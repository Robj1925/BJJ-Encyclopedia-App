import React, {useEffect, useState} from 'react'
import { listUsers }  from '../service/UserService'

export const ListUserComponent = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])
  return (
    <div className='container'>
        <h2 className='text-center'>List of Users</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

