import {useFormik} from 'formik';
import React, {useState} from 'react';
import {Button, Container, Form, Modal} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const initialValues = {
  email: '',
  password: '',
};
function FormValidation() {
  const dispatch = useDispatch();
  const {values, errors, handleBlur, handleChange, handleSubmit, touched} =
    useFormik({
      initialValues: initialValues,

      onSubmit: (values) => {
        console.log('values:-', values);
        const payload = {email: values.email, password: values.password};
        axios
          .post(
            'https://alkemapi.indusnettechnologies.com/api/employee/login',
            payload
          )
          .then((res) => dispatch({type: 'LOGIN', payload: res.data.token}));
      },
    });
  const Auth = useSelector((state) => state.Auth);
  console.log('Auth:-', Auth);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Inter your Login details</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>{' '}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Group>
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  );
}

export default FormValidation;
