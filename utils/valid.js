const valid=(name, email, password, cf_password)=>{
if(!name || !email || !password )
return 'Please fill up all fields.'

if(!validateEmail(email))
return 'Invalid email.'

if(password.length<6)
return 'Password must be atleast 6 characters.'

if (password !==cf_password)
return 'Confirm password did not match.'
}

function validateEmail(email) 
    {
     const re =
     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    }
    
export default valid