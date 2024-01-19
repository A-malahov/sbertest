import styles from './ProfileBar.module.css'

function ProfileBar({userData}) {
    return (
        <div className={styles.profileBar}>
            <div><img className={styles.avatar} src={userData.image === null ? ('/avatar.png') : (userData.image)}
                      alt={'avatar'}/></div>
            <div>{userData.name} {userData.surname}</div>
            <div>{userData.email}</div>
            <div>{userData.phoneNumber}</div>
        </div>
    )
}

export default ProfileBar;
