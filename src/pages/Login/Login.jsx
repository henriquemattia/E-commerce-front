import React from 'react';
import { useForm } from 'react-hook-form'


import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';




function Login() {

    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const submitForm = (data) => {



            const body = {
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
            fetch('http://localhost:5000/login', reqOptions)
            .then(res => res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err))

            console.log(data)
            reset()
    }


    return (
        <>
            <Container>
                <h1 className='centro'>Login</h1>
                <br />
                <Form>


                    {/* EMAIL */}


                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="Email"
                            {...register("email", { required: true, maxLength: 70 })}
                        />

                        {errors.email && <p style={{ color: "red" }}><small>Email obrigatório</small></p>}
                        {errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Máximo de caracteres 70</small></p>}
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



                    <Form.Group>
                        <Button type='submit' variant="primary" onClick={handleSubmit(submitForm)}>SingUp</Button>
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