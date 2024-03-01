import React from 'react'

export const ListUserComponent = () => {

    const dummyData = [
        {
            "id" : 1,
            "username" : "Coolguy1923",
            "password" : "ramesh1236969"
        },
        {
            "id" : 2,
            "username" : "brayag",
            "password" : "helloadele177"
        },
        {
            "id" : 3,
            "username" : "sandycheeks777",
            "password" : "camerondiazishot092"
        },


    ]
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
                    dummyData.map(user => 
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

