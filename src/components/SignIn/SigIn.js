import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './SignIn.css';

const SigIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
      const onSubmit = data => console.log(data);
    return (
        <div className="sign-in py-lg-5">
            <Container>
                <div  className=" sign-in-content">
                    <Row>
                    <Col lg={6}>
                        <img src="https://i.ibb.co/vLX41t8/doctor-1.png" alt="" />
                    </Col>
                        <Col lg={6}>
                            <div>
                                <h3>Family Health Care</h3>
                                <h2>Welcome Back</h2>
                                <button>Sign In With Google</button>
                                <h4>or sign In with email</h4>

                                <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>





                            </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default SigIn;