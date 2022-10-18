import React from 'react';
import { useForm } from 'react-hook-form'

import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api/Api';

import TopBar from '../../components/NavBar/NavBar'

function Registro() {

    const navigate = useNavigate()


    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const submitForm = (data) => {

        if (data.password === data.confirmPassword) {

                const getProduts = async () => {
                    
                    try {
                    const url = '/register'
                    const res = await api.post(url, {
                        name: data.username,
                        email: data.email,
                        password: data.password,
                    })
                if(!res.data.token){
                    alert("Email já cadastrado!")
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
        else {
            alert("AS SENHAS DEVEM SER IGUAIS!")
        }

    }


    return (
        <>
            <TopBar />
            <Container>
                <h1 className='title'> Cadastre-se</h1>
                <br />
                <Form>

                    {/* USERNAME */}

                    <Form.Group className="mb-3 asda" controlId="formGroupName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                            className='rounded-0'
                            type="text"
                            placeholder="Nome completo"
                            {...register("username", { required: true, maxLength: 25 })}
                        />
                        {errors.username && <small style={{ color: "red" }}>Nome é Obrigatório</small>}
                        {errors.username?.type === "maxLength" && <p style={{ color: "red" }}><small>Máximo de caracteres é 25 </small></p>}

                    </Form.Group>



                    {/* EMAIL */}


                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            className='rounded-0'
                            type="email"
                            placeholder="Insira seu melhor email!!"
                            {...register("email", { required: true, maxLength: 70 })}
                        />

                        {errors.email && <p style={{ color: "red" }}><small>Email obrigatório</small></p>}
                        {errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Máximo de caracteres 80</small></p>}
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



                    {/* COMFIMAÇÃO DE SENHA */}


                    <Form.Group className="mb-3">
                        <Form.Label>Confime sua Senha</Form.Label>
                        <Form.Control 
                        className='rounded-0'
                        type="password" 
                        placeholder="A senha deve ser igual a senha acima"
                            {...register("confirmPassword", { required: true, minLength: 8 })}
                        />

                        {errors.confirmPassword && <p style={{ color: "red" }}><small>Confirmar sua senha é Obrigatório</small></p>}
                        {errors.confirmPassword?.type === "minLength" && <p style={{ color: "red" }}><small>Mínimo de caracteres deve ser 8</small></p>}
                    </Form.Group>



                    <Form.Group>
                        <button className='login_button' type='submit' variant="primary" onClick={handleSubmit(submitForm)}>Cadastrar-se</button>
                    </Form.Group>

                    <Form.Group>
                        <br />
                        <small>Já possui uma conta? clique <Link to='/login'>aqui</Link> para entrar!</small>
                    </Form.Group>

                </Form>
            </Container>
        </>
    );
}

export default Registro;