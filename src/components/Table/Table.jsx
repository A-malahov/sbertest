import Table from "react-bootstrap/Table";
import styles from './Table.module.css'
import {Button} from "react-bootstrap";

function UsersTable({userList,setUserInfoIndex, setModal, setSearch, search}) {
   const usersElement = userList.map((item,index)=>{
       return(
           <tr className={styles.tableElement} onClick={()=>setUserInfoIndex(item.id)} key={index}>
           <td>{item.name}</td>
           <td>{item.surname}</td>
           <td>{item.email}</td>
           <td>{item.phoneNumber}</td>
           </tr>
       )
   });

return(
    <div>
        <div>
        <Button onClick={()=> setModal(true)}>Добавить пользователя</Button>
        <input onChange={(e)=> setSearch(e.target.value)} value={search} type={'text'} />
        </div>

        <div className={styles.tableWrapper}>
        <Table striped bordered hover variant="white">
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
        </div>
    </div>
)
}

export default UsersTable;
