import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './styles.css'

function Login() {
    const history = useHistory();
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const Logar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch('http://localhost:5555/users/login',{
            method : 'POST',
            body : JSON.stringify({
                email : email,
                password : senha
            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }

            alert('Dados Inválidos');
        })
        .then(data => {
            console.log(data)
            // localStorage.setItem('token', data.token);

            // let usuario = jwt_decode(data.token);

            // if(usuario.role === 'Admin')
            history.push('/admin/dashboard');
            // else
            //     history.push('/eventos');
        })
        .catch(err => console.error(err));
    }
    return (
        <div className="login">
            <div className="title">
                <h2>SauceShare</h2>
                <h4>producers help producers</h4>
            </div>
            <div className="forms">
                <form onSubmit={(e) => Logar(e)} className="forms">
                    <TextField 
                        id="outlined-basic" 
                        InputLabelProps={{style: {color:'white'}}} 
                        InputProps={{ style: {marginTop: '25px', color:'white'} }} 
                        label="Digite seu e-mail:" 
                        required
                        variant="outlined" 
                        value={email} 
                        onChange={event => setEmail(event.target.value)}
                        />
                    <TextField 
                        id="outlined-basic" 
                        InputLabelProps={{style: {color:'white'}}} 
                        InputProps={{ style: {marginTop: '25px', color:'white'} }} 
                        label="Digite sua senha:" 
                        required
                        variant="outlined" 
                        value={senha} 
                        onChange={event => setSenha(event.target.value)}
                        />
                    <Button type="submit" variant="contained" color="primary" style={{marginTop: '15px', width: '200px'}}>
                        Entrar 
                    </Button>
                </form>
            </div>

        </div>
        
    );
}

export default Login