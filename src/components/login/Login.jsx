import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import axiosFunction from '../../helpers/axios';
import './login.css';

const Login = () => {

    // using useContext
    const { setUser, setPathName } = useContext(DataContext);
    const [ userFormInformation, setUserFormInformation ] = useState({
        'username': 'cramirez',
        'clave': 'PrismaD2022'
    });

    useEffect(() => {
      setPathName('/')
    }, [setPathName])
    
    // destructuring the object 
    const  {username, clave} = userFormInformation

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await axiosFunction( 'login', userFormInformation, 'post' )
        setUser(res.data);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormInformation({ ...userFormInformation, [name]: value });
    }


  return (
  
 <div className="hero is-info is-large fondo">
    <div className='hero-body' >
        <div className='container'>
            <div className='columns is-centered'>
                <div className='column is-4'>   

                    <form className='box' onSubmit={handleSubmit}>
                        <div className='field'>
                            <label className='label is-size-4'>
                                Email
                            </label>
                            <div className="control has-icons-left">
                                <input 
                                    type="text" 
                                    className="input" 
                                    placeholder="john@example.com" 
                                    name="username" 
                                    value={username}
                                    onChange={handleInputChange}
                                />
                                <span className="icon is-small is-left">
                                        <i className="fa fa-envelope"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label is-size-4">
                                Password
                            </label>
                            <div className="control has-icons-left">
                                <input 
                                    type="password" 
                                    className="input" 
                                    placeholder="password" 
                                    name="clave" 
                                    value={clave}
                                    onChange={handleInputChange}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <button className="button is-centered login-btn " type="submit" > <strong>Login </strong></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  
  )
}
export default Login;