import  { React,useState } from 'react'
import {Form,  Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { login} from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';



const Login =()=>{
    const {loading,token} = useSelector(state => state)
    const dispatch=useDispatch();
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

const log= ()=>{
    dispatch(login({email,password}))
}
const handleSubmit = (e) => {
    e.preventDefaul()
}

    return(
<div>
    {loading?
<h1>loading...</h1>   
: token?<Redirect to='/profile'/>
:(
    
<Form onSubmit={handleSubmit}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    
  
    
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={log}>
    Submit
  </Button>
</Form>
)}
</div>
)

    }
    

export default Login