import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

function Signin() {
  return (
  <div>
   <Head>
   <title>SignIn Page</title>
   </Head>
   <form className='mx-auto my-4' style={{maxWidth:'500px'}}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
  <p className='pt-2'>You don't have an account? <Link href='/register'>Register</Link></p>
</form>
  </div>
  );
}

export default Signin;
