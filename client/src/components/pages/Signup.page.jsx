import { Link, useNavigate } from "react-router-dom"
import { Button, Form, Input } from 'antd'
import axios from 'axios'
import { errorHandler, successMessageHandler } from "../../helpers/toastMessageHelper"
import {COMMON_URL} from '../../../security/config.json'
import { COMMON_ROUTES } from '../../../../server/security/allRoutes.json'

function Signup() {

    const navigate = useNavigate()
    const [form] = Form.useForm()

    const onFinish = async (values) => {
        const {
            nickname,
            email,
            password,
            confirmPassword
        } = values

        try {
            // SIGNUP POST API CALL : 
            const { data } = await axios.post(`${COMMON_URL}${COMMON_ROUTES.USER_SIGNUP}`, {
                nickname,
                email,
                password,
                confirmPassword
            })

            if (data.message) successMessageHandler("user registered")
            setTimeout(() => {
                navigate("/signin", {
                    state: {
                        id: email
                    }
                })
            }, 3000)

        } catch (error) {
            if (error.response.data) errorHandler(error.response.data)
        }
    }

    return (
        <>
            <div className='h-screen w-screen flex items-center justify-center'>
                <div className='border px-16 py-20 rounded-lg shadow-lg shadow-gray-500'>
                    <h1 className='text-3xl mb-9 ms-3 font-extrabold'>Signup form </h1>

                    <Form
                        form={form}
                        onFinish={onFinish}
                        style={{ maxWidth: 600, minWidth: 300 }}
                        layout='vertical'
                    >
                        <Form.Item name="nickname" label="Nickname" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name="confirmPassword" label="Confirm Password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">
                                Sign Up
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className='rounded-lg my-2'>
                        <Link to="/signin" className='text-sm underline'>already have account?</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup