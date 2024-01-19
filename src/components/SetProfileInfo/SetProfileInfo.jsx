import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
function SetProfileInfo({setUsersList,setModal}) {
    const [name,setName] = useState();
    const [surname,setSurname] = useState();
    const [email,setEmail] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
return(
    <div className={'modalWrapper'}>
        <div className={'modalContent'}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control onChange={(e)=>setName(e.target.value)} type="name" placeholder="Введите имя" />
                    <Form.Control onChange={(e)=>setSurname(e.target.value)} type="name" placeholder="Введите фамилия" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="E-Mail" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control onChange={(e)=>setPhoneNumber(e.target.value)} type="phone" placeholder="Введите номер телефона" />
                </Form.Group>

                <Button onClick={()=>{

                    setUsersList((prevUsers) => [
                        ...prevUsers,
                        {
                            name: name,
                            surname: surname,
                            email: email,
                            phoneNumber: phoneNumber
                        },
                    ]);
                    setModal(false)
                }}>
                    Добавить
                </Button> <Button onClick={()=> setModal(false)}>
              Отмена
            </Button>
            </Form>
        </div>
    </div>
)
}

export default SetProfileInfo;