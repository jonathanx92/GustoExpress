import React from 'react';
import { Button, Form, Input } from 'antd';
import './contact.css';

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} es requerido!',
};

const onFinish = (values) => {
  console.log(values);
};

const FormContact = () => (
  <div className="form-container">
    
    <Form
      {...layout}
      name="contact-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={{ width: '100%' }} 
    >
      <h1>Adelante, cuentanos lo que necesites!</h1>
      <Form.Item
        name={['user', 'name']}
        label="Nombre"
        rules={[
          { required: true }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'surnames']}
        label="Apellidos"
        rules={[
          { required: true }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['user', 'email']}
        label="Correo"
        rules={[
          { type: 'email', required: true }
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item name={['user', 'issue']} label="Asunto">
        <Input />
      </Form.Item>
      
      <Form.Item name={['user', 'message']} label="Mensaje">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 10,
        }}
      >
        <Button className='btn-form-cont' type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default FormContact;
