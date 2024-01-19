import Table from "react-bootstrap/Table";
import styles from './Table.module.css'
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";

function UsersTable({userList, setUserInfoIndex, setModal, setSearch, search}) {
    const usersElement = userList.map((item, index) => {
        return (
            <tr className={styles.tableElement} onClick={() => setUserInfoIndex(item.id)} key={index}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
            </tr>
        )
    });

    return (
        <div className={styles.tableWrapper}>

            <div className={styles.controlsBar}>
                <Form.Group style={{width: '75%'}}>

                    <Form.Control onChange={(e) => setSearch(e.target.value)} value={search}
                                  type={'text'} placeholder={'Поиск'}/>

                </Form.Group>
                <div className={styles.addUserButton}><Button onClick={() => setModal(true)}>Добавить
                    пользователя</Button></div>
            </div>

            <div>
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
