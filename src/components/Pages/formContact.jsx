import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
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

const FormContact = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { name, surnames, email, issue, message: userMessage } = values.user;
    const subject = issue || 'Sin asunto';
    const body = `Nombre: ${name} ${surnames}\nCorreo: ${email}\nMensaje: ${userMessage}`;


    const mailtoLink = `mailto:support@gustoexpress.es?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    
    message.success('Correo enviado correctamente');
    form.resetFields();
    setTimeout(() => {
      navigate('/home');
    }, 2000); 
  };

  return (
    <div className="form-container">
      <Form
        {...layout}
        form={form}
        name="contact-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        style={{ width: '100%' }} 
      >
        <h1>Adelante, cuéntanos lo que necesites!</h1>
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
};

export default FormContact;
