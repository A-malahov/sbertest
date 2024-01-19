import {Button, Dropdown} from "react-bootstrap";
import {useEffect, useState} from "react";
import styles from './NavBar.module.css'


function NavBar(props) {
    const {userInfoIndex,usersList,userData,setComments} = props;
    const [comment, setComment] = useState([]);
    const [rate, setRate] = useState(0);
    const changeRate=(rateValue)=>{
        setRate(rateValue)
        usersList[userInfoIndex].rate = rateValue;
    }

    const addComment=()=>{
        usersList[userInfoIndex].comment.push({text:comment, name:userData.name})
        setComments((prevComments) => [
            ...prevComments,
            comment
        ]);
        setComment('')

    }


    useEffect(()=>{
        if(userInfoIndex !== null){
            setRate(usersList[userInfoIndex].rate);
        }

    },[userInfoIndex]);



return(
    <div className={styles.navBar}>
        {userInfoIndex !== null && (<><div> <input className={'userComment'} placeholder={'Комментарий'} value={comment}
                                                 onChange={(e) => setComment(e.target.value)} type={'text'}/>
            <Button className={styles.addCommentButton} onClick={()=>{
               addComment();
            }}>Добавить комментарий</Button>
        </div>
        <div className={styles.rateButton}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Рейтинг: {rate}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => changeRate(0)}>0</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeRate(1)}>1</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeRate(2)}>2</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeRate(3)}>3</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeRate(4)}>4</Dropdown.Item>
                        <Dropdown.Item onClick={() => changeRate(5)}>5</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
        </div></>
        )}
    </div>
)
}

export default NavBar;
