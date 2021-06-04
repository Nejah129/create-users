import  { React,useState } from 'react'
import {Form,  Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { register } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';



const SigneUp =()=>{
    const {loading,users} = useSelector(state => state)
    const dispatch=useDispatch();
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [phone, setPhone] = useState('')
 const [password, setPassword] = useState('')

const reg= ()=>{
    dispatch(register({name,email,phone,password}))
}
const handleSubmit = (e) => {
    e.preventDefaul()
}

    return(
<div>
    {loading?(
      <h1>loading...</h1>
    )
   
: users ?<Redirect to='/login'/>:(
    
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="string" placeholder="FUll Name" value={name} onChange={(e)=>setName(e.target.value)} />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="string" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={reg}>
    Submit
  </Button>
</Form>
)}
</div>
)

    }
    

export default SigneUp