function ProfileBar({userData}) {
    return(
        <div>
            <div>{userData.name} {userData.surname}</div>
            <div>{userData.email}</div>
            <div>{userData.phoneNumber}</div>
        </div>
    )
}

export default ProfileBar;