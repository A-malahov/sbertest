import './App.css';
import UsersTable from "./components/Table/Table";
import ProfileBar from "./components/ProfileBar/ProfileBar";
import {useEffect, useState} from "react";
import AddNewUser from "./components/AddNewUser/AddNewUser";
import SetProfileInfo from "./components/SetProfileInfo/SetProfileInfo";
import UserInfo from "./components/UserInfo/UserInfo";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {

    const [userData,setUserData] = useState({
        name:'',
        surname:'',
        email:'',
        phoneNumber:'',
    });
    const [usersList,setUsersList] = useState([
        {name:'Steve', surname:'Jobs',email:'test@test.test',phoneNumber:'8999999999',comment:[{text:'Коммент 1',name:'Алексей'}],avatar:'/jobs.png', rate:0, id:0},
        {name:'Stephen', surname:'Wozniak',email:'test@test.test',phoneNumber:'8999999999',comment:[{text:'Коммент 2',name:'Steve'}], avatar:'/Wozniak.png', rate:0,id:1},
        {name:'Алексей', surname:'Пажитнов',email:'test@test.test',phoneNumber:'8999999999',comment:[{text:'Коммент 3',name:'Steve'}], avatar:'/aleksey.png', rate:0,id:2}
    ])
    const [userInfoIndex,setUserInfoIndex] = useState(null)
    const [modal,setModal] = useState(false);
    const [firstLaunch,setFirstLaunch] = useState(true);
    const [search,setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([])
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        if(search !== null){
            usersList.forEach((item)=>{
                if(item.name === search || item.surname === search || item.email === search || item.phoneNumber === search){
                    setSearchResult((prevUsers) => [
                        ...prevUsers,
                        item,
                    ])
                }
            })
        }
        if(search === ''){
            setSearchResult([])
        }

    },[search])

    document.addEventListener('keydown',(e)=>{
        if(e.key === 'Escape' && modal === true){
            setModal(false)
            console.log('test')
        }
    })
  return (
    <div className="App">

        {modal && (<AddNewUser setModal={setModal} setUsersList={setUsersList}/>)}
        {firstLaunch && (<SetProfileInfo  setFirstLaunch={setFirstLaunch} setUserData={setUserData}/>)}


        <div><NavBar setComments={setComments} userInfoIndex={userInfoIndex} usersList={usersList} userData={userData}/></div>
        <div className={'bodyWrapper'}>
           <ProfileBar userData={userData}/>
            {userInfoIndex === null ? (  <UsersTable setSearch={setSearch} search={search} setModal={setModal} setUserInfoIndex={setUserInfoIndex} userList={searchResult.length === 0 ? usersList : searchResult}/> ): (<UserInfo comments={comments} setComments={setComments} setUserInfoIndex={setUserInfoIndex} userIndex={userInfoIndex} usersList={usersList}/>)}

        </div>
<div><Footer/></div>

    </div>
  );
}

export default App;
