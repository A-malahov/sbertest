import {useEffect} from "react";
import styles from './Userinfo.module.css'

function UserInfo({setUserInfoIndex, userIndex, usersList, comments, setComments}) {

    useEffect(() => {
        setComments(usersList[userIndex].comment);
    }, [comments]);
    const commentsElement = comments.map((item, index) => {
        return (
            <div key={index} className={styles.comments}>
                <div><img alt={'ds'} className={styles.avatarPreview}
                          src={item.avatar === null ? ('/avatar.png') : (item.avatar)}/></div>
                <div>
                    <div>{item.name}</div>
                    <div>{item.text}</div>
                </div>

            </div>
        )
    });
    return (
        <div className={styles.pagewrapper}>
            <div style={{cursor: 'pointer'}} onClick={() => {
                setUserInfoIndex(null);
            }}> {'<-'}Назад
            </div>
            <h1>{usersList[userIndex].name} {usersList[userIndex].surname}</h1>
            <div className={styles.infowrapper}>

                <div>
                    <div><img className={styles.avatar}
                              src={usersList[userIndex].avatar === null ? ('/avatar.png') : (usersList[userIndex].avatar)}
                              alt={'avatar'}/></div>
                </div>

                <div className={styles.infoblock}>
                    <div>E-Mail: {usersList[userIndex].email}</div>
                    <div>Номер телефона: {usersList[userIndex].phoneNumber}</div>
                    <div>id:{usersList[userIndex].id}</div>
                    <div>Рейтинг:{usersList[userIndex].rate.reduce((a, b) => (a + b)) / usersList[userIndex].rate.length}</div>

                </div>


            </div>
            <div className={'divider'}>Комментарии</div>
            {commentsElement}
        </div>
    )
}

export default UserInfo;
