import React, { useContext } from 'react';
import { form, formContainer, inputDev, label } from './LoginStyle';
import { input, inputButton } from './FooterComponents/inputStyle';
import { AuthContext } from '../context/AuthContextProvider';
import { UserDetails } from '../context/UserDetails';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const { userDetails, setUserDetails } = useContext(UserDetails);
    const navigate = useNavigate()
    const formSubmit = (e) => {
        e.preventDefault();
        if(userDetails.userName!=''&&userDetails.password!=''){
            setIsLoggedIn(true);
            navigate('/');
        }
    }
    const formFilling = (e) => {
        let value = e.target.value;
        setUserDetails({ ...userDetails, [e.target.name]: value });
    }
    const logOut = ()=>{
        setIsLoggedIn(false);
        setUserDetails({...userDetails, userName:'', password:''})
    }
    return (
        <>
            <div style={formContainer}>
                {
                    isLoggedIn?<button onClick={logOut} style={{...inputButton, width: '100%'}}>Log Out</button>:
                <form style={form} action="">
                    <div style={inputDev}>
                        <label style={label} htmlFor="userName">Name :</label>
                        <input onChange={formFilling} style={input} type="text" name='userName' placeholder='Enter your Name' />
                    </div>
                    <div style={inputDev}>
                        <label style={label} htmlFor="password">Password :</label>
                        <input onChange={formFilling} style={input} type="password" name='password' placeholder='Enter your Password' />
                    </div>
                    <div>
                        <input onClick={formSubmit} style={{ ...inputButton, width: '100%' }} type="submit" value='Login' />
                    </div>
                    <p>&lt;Here You can write anything and do submit/&gt;</p>
                </form>
                }
            </div>
        </>
    )
}

export default LoginPage
