import React from 'react';
import { Button, Form, Input} from 'antd';


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
  <Form
    {...layout}
    name="contact-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
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
      <Input/>
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
      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </Form.Item>
  </Form>
);
export default FormContact;