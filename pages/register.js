import React, {useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'
import valid from '../utils/valid'

function Register() {
  const initialState={name:'', email:'', password:'', cf_password:''}
  const [userData, setUserData] = useState(initialState)
  const {name, email, password, cf_password} = userData

  const handleChangeInput = e =>{
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
  }
  
  const handleSubmit = e =>{
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if(errMsg) console.log(errMsg)
  }
  return (
  <div>
   <Head>
   <title>Register Page</title>
   </Head>
   <form className='mx-auto my-4' style={{maxWidth:'500px'}} onSubmit={handleSubmit}>
   <div className="form-group">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' value={name} onChange={handleChangeInput}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={email} onChange={handleChangeInput}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={password} onChange={handleChangeInput}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2" name='cf_password' value={cf_password} onChange={handleChangeInput}/>
  </div>
  <button type="submit" className="btn btn-primary mt-3">Register</button>
  <p className='pt-2' >Already have an account? <Link href='/signin' ><a style={{color:'crimson'}}>Login Now</a></Link></p>
</form>
  </div>
  );
}   

export default Register;
