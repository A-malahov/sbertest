import './App.css';
import UsersTable from "./components/Table/Table";
import {Button} from "react-bootstrap";
import ProfileBar from "./components/ProfileBar/ProfileBar";
import {useState} from "react";
import AddNewUser from "./components/AddNewUser/AddNewUser";

function App() {
    const [userData,setUserData] = useState({
        name:'Sasha',
        surname:'Malahoov',
        email:'mcalexrus@gmail.com',
        phoneNumber:'89042622606',
    });
    const [usersList,setUsersList] = useState([
        {name:'mark', surname:'brown',email:'test@test.test',phoneNumber:'8999999999',comment:'Null'}
    ])

    const [modal,setModal] = useState(false);
    const [firstLaunch,setFirstLaunch] = useState(false);

    document.addEventListener('keydown',(e)=>{
        if(e.key === 'Escape' && modal === true){
            setModal(false)
            console.log('test')
        }
    })
  return (
    <div className="App">
        {modal && (<AddNewUser setModal={setModal} setUsersList={setUsersList}/>)}
        {firstLaunch && (<AddNewUser setModal={setModal} setUsersList={setUsersList}/>)}
        <div><Button onClick={()=> setModal(true)}>Добавить пользователя</Button></div>
        <div className={'bodyWrapper'}>
           <ProfileBar userData={userData}/>
           <UsersTable userList={usersList}/>
        </div>
        <div>Footer</div>

    </div>
  );
}

export default App;
