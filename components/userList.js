import React from "react";
import Header from "./header";
import Link from 'next/link';

function UserList({userData}){
    return(
        <>
            <Header />
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {userData.map((usrData, index)=>(
                            <tr key={index}>
                                <td>{usrData.UserID}</td>
                                <td>{usrData.UserName}</td>
                                <td>{usrData.UserEmail}</td>
                                <td>{usrData.UserPassword}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button href={`/addUser`} type="submit" id='createUser' className="btn btn-primary">
                <Link href={`/addUser`} style={{color:"#ffffff", textDecoration:'None'}}>Create User</Link>
            </button>
            
            
               
        </>
    )
}

export default UserList;