import React from 'react';
import { useForm } from 'react-hook-form'

import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link, useNavigate } from 'react-router-dom';




function Registro() {

    const navigate = useNavigate()


    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const submitForm = (data) => {



        if (data.password === data.confirmPassword) {

            const body = {
                username: data.username,
                email: data.email,
                password: data.password,
            }
            const reqOptions =
            {
                method: "POST",
                headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            }
             

            fetch('http://localhost:5050/auth/register', reqOptions)
                .then(res => res.json())
                .then((data)=>{
                    if(!data.token){
                        alert("Email já cadastrado!")
                    }else{
                    navigate("/login")

                    }
                })
                // .then(data => console.log(data))
                .catch(err => console.log(err))
            reset()
        }
        else {
            alert("AS SENHAS DEVEM SER IGUAIS!")
        }

    }


    return (
        <>
            <Container>
                <h1 className='centro'> Cadastre-se</h1>
                <br />
                <Form>

                    {/* USERNAME */}

                    <Form.Group className="mb-3 asda" controlId="formGroupEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
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
                        <Form.Control type="email"
                            placeholder="Insira seu melhor email!!"
                            {...register("email", { required: true, maxLength: 70 })}
                        />

                        {errors.email && <p style={{ color: "red" }}><small>Email obrigatório</small></p>}
                        {errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Máximo de caracteres 80</small></p>}
                    </Form.Group>



                    {/* SENHA */}

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password"
                            placeholder="Senha"
                            {...register("password", { required: true, minLength: 8 })}
                        />
                        {errors.password && <p style={{ color: "red" }}><small>Senha é Obrigatório</small></p>}
                        {errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>O minimo de caracteres para uma senha é 8</small></p>}
                    </Form.Group>



                    {/* COMFIMAÇÃO DE SENHA */}


                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Confime sua Senha</Form.Label>
                        <Form.Control type="password" placeholder="A senha deve ser igual a senha acima"
                            {...register("confirmPassword", { required: true, minLength: 8 })}
                        />

                        {errors.confirmPassword && <p style={{ color: "red" }}><small>Confirmar sua senha é Obrigatório</small></p>}
                        {errors.confirmPassword?.type === "minLength" && <p style={{ color: "red" }}><small>Mínimo de caracteres deve ser 8</small></p>}
                    </Form.Group>



                    <Form.Group>
                        <Button type='submit' variant="primary" onClick={handleSubmit(submitForm)}>SingUp</Button>
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