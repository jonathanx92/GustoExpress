/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Form, Input } from 'antd';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const FormSignup = () => {
  const onFinish = async (values) => {
    try {
      const { name, lastname, secondname, age, email, address } = values.user;
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, values.password);
      console.log('Usuario registrado con éxito');
      // Aquí podrías redirigir al usuario a la página deseada después del registro
    } catch (error) {
      console.error('Error al registrar al usuario:', error);
    }
  };

  return (
    <Form
      onFinish={onFinish}
      style={{ width: 500, height: 500, margin: 'auto', textAlign: 'center', paddingTop: 100 }}
    >
      <Form.Item
        name={['user', 'name']}
        label="Nombre"
        rules={[
          {
            required: true,
            message: 'Por favor, introduce tu nombre!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'lastname']}
        label="Primer Apellido"
        rules={[
          {
            required: true,
            message: 'Por favor, introduce tu primer apellido!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'secondname']}
        label="Segundo Apellido:"
        rules={[
          {
            required: true,
            message: 'Por favor, introduce tu segundo apellido!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Edad"
        rules={[
          {
            type: 'number',
            message: 'Por favor, introduce una edad válida!',
            transform: (value) => parseFloat(value),
          },
          {
            required: true,
            message: 'Por favor, introduce tu edad!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Correo"
        rules={[
          {
            type: 'email',
            message: 'Por favor, introduce un correo válido!',
          },
          {
            required: true,
            message: 'Por favor, introduce tu correo!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'address']}
        label="Dirección"
        rules={[
          {
            required: true,
            message: 'Por favor, introduce tu dirección!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Contraseña"
        rules={[
          {
            required: true,
            message: 'Por favor, introduce tu contraseña!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormSignup;
