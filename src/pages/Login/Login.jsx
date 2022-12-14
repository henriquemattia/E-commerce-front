import React from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';


import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TopBar from '../../components/NavBar/NavBar'

import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api/Api';

import './styles.css'



function Login() {

    const navigate = useNavigate()

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const submitForm = (data) => {


        const getProduts = async () => {
                
            try {
              const url = '/login'
              const res = await api.post(url, {
                email: data.email,
                password: data.password,
            })
            

            
            if(!res.data.token){
                alert("Usuario ou senha incorretos")
            }else{
                localStorage.setItem("token", res.data.token)
                navigate("/")
                }
              console.log(res);
            } catch (err) {
              console.log(err);
            }
          } 
          getProduts()
        reset()
 
    }

    


    return (
        <>  
            <TopBar />
            <Container>
                <h1 className='title'>Login</h1>
                <br />
                <Form>


                    {/* EMAIL */}


                    <Form.Group className="mb-3 " controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            className='rounded-0'
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true, maxLength: 70 })}
                        />

                        {errors.email && <p style={{ color: "red" }}><small>Email obrigatório</small></p>}
                        {errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Máximo de caracteres 70</small></p>}
                    </Form.Group>



                    {/* SENHA */}

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                            className='rounded-0'
                            type="password"
                            placeholder="Senha"
                            {...register("password", { required: true, minLength: 8 })}
                        />
                        {errors.password && <p style={{ color: "red" }}><small>Senha é Obrigatório</small></p>}
                        {errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>O minimo de caracteres para uma senha é 8</small></p>}
                    </Form.Group>



                    <Form.Group>
                        <button className='login_button' type='submit'onClick={handleSubmit(submitForm)}>Login</button>
                    </Form.Group>

                    <Form.Group>
                        <br />
                        <small>Nãso possui uma conta? clique <Link to='/register'>aqui</Link> para se cadastrar!</small>
                    </Form.Group>

                </Form>
            </Container>
        </>
    );
}

export default Login;