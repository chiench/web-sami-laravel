import React from 'react'
import {
    Alert,
    Button,
    Form,
    Input,
    Row,
    Typography,
    Space,
    Card,
    Image,
    Checkbox,
} from "antd";
import { LockOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const { Title } = Typography;

const Login = () => {
    const isLoading = false
    const onFinish = (values: any) => {
        const payload = {
            username: parseInt(values.username)
        }
        console.log('payload: ', payload);

    };
    return (
        <Row justify="center" align="middle" style={{ height: "100%" }}>
            <Space direction="vertical" size={16}>
                <Card style={{ background: "#ffff", minWidth: "27vw", maxHeight: "70vh" }}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Image src="/static/logo.png" preview={false} />
                        </div>
                        <Title
                            className="login-title"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "3px 0",
                            }}
                            level={3}
                        >
                            Đăng nhập hệ thống
                        </Title>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password
                                placeholder="input password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button className="set-height"
                                block
                                loading={isLoading}
                                style={{ background: "#F3C309" }} htmlType="submit">
                                Đăng nhập
                            </Button>

                        </Form.Item>
                        <p style={{ textAlign: "center", paddingTop: "5px" }}>
                            <a href="">Quên mật khẩu</a>
                        </p>
                    </Form>
                </Card>
            </Space>
        </Row>
    )
}

export default Login