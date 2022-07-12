/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

import {
  Button,
  Card,
  Image,
  Form,
  Input,
  Typography,
  Spin,
  notification,
} from 'antd'

import './styles.css'
import { useAuth } from '@redwoodjs/auth'

const LoginPage: React.FC = () => {
  const { logIn } = useAuth()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    console.log('Success:', values)
    try {
      setLoading(true)
      const { error } = await logIn({ email: values.email })
      if (error) throw error
      notification.open({
        message: 'Login successful',
        description: 'Check your email for the login link!',
      })
    } catch (error) {
      notification.open({
        message: 'Login Failed',
        description: error.error_description || error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const signInWithGoogle = async () => {
    const { user, session, error } = await logIn({
      provider: 'google',
    })

    console.log({ user, session, error })
  }

  return (
    <Spin tip="Loading..." spinning={loading}>
      <div className="login-form">
        <Card>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="logo">
              <Image width={80} src="/images/logo.svg" preview={false} />
            </div>
            <Typography style={{ margin: '10px' }}>
              Register/Login using your email
            </Typography>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Send Me Link
            </Button>
            <Typography style={{ margin: '20px' }}>OR</Typography>
            <button
              type="button"
              className="social-button"
              onClick={signInWithGoogle}
            >
              <img
                src="/images/btn_google_light_normal_ios.svg"
                title="google"
              />
              <Typography className="social-text">
                Signin using Google
              </Typography>
            </button>
          </Form>
        </Card>
      </div>
    </Spin>
  )
}

export default LoginPage
