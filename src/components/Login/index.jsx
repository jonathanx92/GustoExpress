import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const FormLogin = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const { username, password } = values;
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, username, password);
      console.log('Usuario autenticado con éxito');
      navigate('/homelogin'); 
    } catch (error) {
      console.error('Error al autenticar al usuario:', error);
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{ width: 300, height: 400, margin: 'auto', textAlign: 'center', paddingTop: 100 }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Introduzca usuario',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Introduzca contraseña ',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Recordar</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Entrar</Button>
        <a href="./signup"> Registrate ahora!</a>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
