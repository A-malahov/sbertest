
import {useEffect} from "react";
import styles from './Userinfo.module.css'
function UserInfo({setUserInfoIndex, userIndex, usersList,comments,setComments}) {



    useEffect(() => {
        setComments(usersList[userIndex].comment);
console.log(usersList[userIndex].comment)
    }, []);
    const commentsElement = comments.map((item,index)=>{
        console.log(item)
        return(
            <div key={index} className={styles.comments}>

                    <div>{item.name}</div>
                    <div>{item.text}</div>


            </div>
        )
    });
    return (
        <div className={styles.pagewrapper}>
            <div style={{cursor:'pointer'}} onClick={() => {
                setUserInfoIndex(null);
            }}> {'<-'}Назад</div>
            <div className={'divider'}>{usersList[userIndex].name} {usersList[userIndex].surname}</div>
            <div className={styles.infowrapper} >

                <div>
                    <div><img className={styles.avatar} src={usersList[userIndex].avatar === null ? ('/avatar.png') : (usersList[userIndex].avatar)} alt={'avatar'}/></div>
                </div>

                <div>
                    <div>E-Mail: {usersList[userIndex].email}</div>
                    <div>Номер телефона: {usersList[userIndex].phoneNumber}</div>
                    <div>id:{usersList[userIndex].id}</div>

                </div>


            </div>
            <div className={'divider'}>Комментарии</div>
            {commentsElement}
        </div>
    )
}

export default UserInfo;
