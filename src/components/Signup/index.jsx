import React from 'react';

import { Button, Form, Input } from 'antd';
const layout = {
  labelCol: {
    span: 6                 ,
  },
  wrapperCol: {
    span: 14,
  },
  width: '100vh',
  display: 'flex'
};

const validateMessages = {
  required: 'Por favor, introduce tu ${label}!',
  types: {
    email: '¡Introduce un correo válido!',
    number: '¡Introduce un número válido!',
  },
  
};

const onFinish = (values) => {
  console.log(values);
};

const FormSignup = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ width: 500, height: 500, margin: 'auto', textAlign: 'center', paddingTop: 100 }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'name']}
      label="Nombre"
      rules={[
        {
          required: true,
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
         transform: (value) => parseFloat(value),
         required: true
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
          required: true
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
        },
      ]}
    >
      <Input />
    </Form.Item>
  
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 5,
      }}
    >
      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </Form.Item>
  </Form>
);
export default FormSignup;