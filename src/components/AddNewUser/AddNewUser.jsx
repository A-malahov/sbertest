
import {useState} from "react";
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";

function AddNewUser({setUsersList,setModal}) {
    const [name,setName] = useState();
    const [surname,setSurname] = useState();
    const [email,setEmail] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [image, setImage] = useState(null)
    const [errorEmail,setErrorEmail] = useState(false)
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }
    let handleOnChange = ( email ) => {

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(email) ) {
            setErrorEmail(false)
        }
        else {
            setErrorEmail(true)
        }

    }
    const validation = !!name && !!surname && !!email && !!phoneNumber && !errorEmail;
return(
    <div className={'modalWrapper'}>
        <div className={'modalContent'}>
            <div className={'divider'}>Введите ваши данные</div>

            <Form>


                <Form.Group className="mb-3" >
                    <Form.Label>Имя и фамилия</Form.Label>
                    <Form.Control style={{marginTop:'5px'}} onChange={(e) => setName(e.target.value)} placeholder={'Введите имя'}/>
                    <Form.Control style={{marginTop:'5px'}} onChange={(e) => setSurname(e.target.value)} placeholder={'Введите фамилию'}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control style={{border:`1px solid ${errorEmail === false ? ('black') : ('red')}`}} onChange={(e) => {
                        setEmail(e.target.value)
                        handleOnChange(e.target.value);
                    }
                    } type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control style={{marginTop:'5px'}}  onChange={(e) => setPhoneNumber(e.target.value)} type={'number'} placeholder={'Номер телефона'}/>

                </Form.Group>


            </Form>

            <div>
                <div>Ваш Аватар</div>
                <input type="file" onChange={onImageChange} className="inputText" />
            </div>

                <Button
                    disabled={(!validation)}
                    onClick={()=>{

                    setUsersList((prevUsers) => [
                        ...prevUsers,
                        {
                            name: name,
                            surname: surname,
                            email: email,
                            phoneNumber: phoneNumber,
                            rate:0,
                            comment:[],
                            avatar: image,
                            id: prevUsers.length
                        },
                    ]);
                    setModal(false)
                }}>
                    Добавить
                </Button> <Button onClick={()=> setModal(false)}>
              Отмена
            </Button>

        </div>
    </div>
)
}

export default AddNewUser;
