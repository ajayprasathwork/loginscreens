import React,{useState} from 'react'
import {GoogleOutlined,FacebookOutlined,AppleOutlined} from '@ant-design/icons';
function Login(){
    const[formData,setFormData]=useState({
        email:'',
        password:'',
        ischecked:false
    })
    const [erros,setErrors]=useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors=formValidation(formData)
        setErrors(newErrors)
      }

      const valueChang=(e)=>{
        console.log(e)
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
      }

      const formValidation=(data)=>{
       const errors={}
       if(!data.email) errors.email="email is required"
       if(!data.password) errors.password="password is required"
         return errors
      }


    return(
        <div className='login'>
            <form className='login-card' onSubmit={handleSubmit}>
                <h1 className='card-titel'>Login</h1>
                    <input className={erros.email ?'custom-input-error':'custom-input'} placeholder='Email' type="text" name="email" value={formData.email} onChange={valueChang}>
                    </input>
                    {erros.email && <p className='formerror'>{erros.email}</p>}
                    <input className={erros.password ?'custom-input-error':'custom-input'} placeholder='Password' type="password" name="password" value={formData.password} onChange={valueChang}/>
                    {erros.password && <p className='formerror'>{erros.password}</p>}
                   <div className='Remamber'>
                       <input type="checkbox" value={formData.ischecked} onChange={valueChang}/>
                         <span> Remamber Me </span>
                     </div>
                    <button className='custom-button' type="submit">LOGIN</button>
                    <p className='forgetpassword'>Forgot Password?</p>
                    <div className='social-icons'>
                    <GoogleOutlined  className='icons googel'  />
                    <FacebookOutlined className='icons facebook' />
                    <AppleOutlined className='icons apple' />
                    </div>
                    <div>
                      Need an Account? SIGNUP
                    </div>
                    
            </form>
        </div>
    )
}

export default Login;