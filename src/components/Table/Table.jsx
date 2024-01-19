import Table from "react-bootstrap/Table";

function UsersTable({userList}) {
   const usersElement = userList.map((item,index)=>{
       return(
           <tr key={index}>
           <td>{item.name}</td>
           <td>{item.surname}</td>
           <td>{item.email}</td>
           <td>{item.phoneNumber}</td>
           </tr>
       )
   });

return(
    <>

        <Table striped bordered hover variant="dark">
            <thead>
            <tr>

                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
            </thead>
            <tbody>
            {usersElement}
            </tbody>
        </Table>
    </>
)
}

export default UsersTable;