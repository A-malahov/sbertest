import {Dropdown} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import styles from './NavBar.module.css'
import Form from "react-bootstrap/Form";


function NavBar(props) {
    const {userInfoIndex, usersList, userData, setComments} = props;
    const inputRef = useRef();
    const [comment, setComment] = useState();
    const [rate, setRate] = useState(0);
    const changeRate = (rateValue) => {
        setRate(rateValue)
        usersList[userInfoIndex].rate.push(rateValue);
        usersList[userInfoIndex].yourRate = rateValue;
        usersList[userInfoIndex].rated = true;
    }

    const addComment = () => {
        usersList[userInfoIndex].comment.push({text: comment, name: userData.name, avatar: userData.image})

        setComments((prevComments) => [
            ...prevComments,
            {text: comment, name: userData.name, avatar: userData.image}
        ]);
        inputRef.current.value = '';
    }


    useEffect(() => {
        if (userInfoIndex !== null) {
            setRate(usersList[userInfoIndex].yourRate);
        }

    }, [userInfoIndex]);


    return (
        <div className={styles.navBar}>
            {userInfoIndex !== null && (<>
                    <div className={styles.addCommentWrapper}>
                        <Form.Group style={{width: '75%'}}>

                            <Form.Control
                                ref={inputRef}
                                onKeyPress={(e) => {

                                    if (e.key === 'Enter') {
                                        addComment();
                                    }
                                }} onChange={(e) => setComment(e.target.value)}
                                type={'text'} placeholder={'Добавить комментарий'}/>

                        </Form.Group>


                    </div>
                    <div className={styles.rateButton}>
                        <Dropdown>
                            <Dropdown.Toggle
                                disabled={usersList[userInfoIndex].rated}
                                variant={usersList[userInfoIndex].rated ? ('success') : ('secondary')}
                                id="dropdown-basic">
                                Ваша оценка: {rate}
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
                    </div>
                </>
            )}
        </div>
    )
}

export default NavBar;
