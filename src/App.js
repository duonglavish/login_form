import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';

function App() {
  const [form] = Form.useForm();
  const initialValues = {
        email: '',
        password: '',
  };

  const handleSubmit = async value => {
    alert('login successfully')
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={initialValues}
      autoComplete="off"
      requiredMark={false}
      form={form}
      onFinish={handleSubmit}
      style={{ width:' 50%', margin: 'auto', marginTop: 20 }}
    >
      <Form.Item
        label={'email'}
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
          {
            pattern: new RegExp(
              /^[\w]+@([\w]+\.)+[\w]{2,4}$/,
            ),
            message: 'Please input valid email!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          id="email"
          name="email"
          size="large"
          placeholder={'email'}
          autoFocus
          autoComplete="off"
        />
      </Form.Item>

      <Form.Item
        label={'password'}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          id="password"
          name="password"
          size="large"
          placeholder={'password'}
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
          style={{marginTop: 10}}
        >
          {'login'}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App;
