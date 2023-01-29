import React from 'react'


const UserItem = ({user}) => {
    return (
    <tr>
        <td>
            {user.firstname}
        </td>
        <td>
            {user.lastname}
        </td>
        <td>
            {user.username}
        </td>
        <td>
            {user.email}
        </td>
    </tr>
    )
}

const UserList = ({user}) => {
    return (
        <table>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Username
            </th>
            <th>
                E-mail:
            </th>
            {user.map((user) => <UserItem user={user} />)}
        </table>
    )
}


export default UserList