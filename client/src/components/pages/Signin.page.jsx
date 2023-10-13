import { Link, useNavigate } from "react-router-dom"
import { Button, Form, Input } from 'antd'
import axios from 'axios'

import { errorHandler, successMessageHandler } from "../../helpers/toastMessageHelper"
import { COMMON_URL }  from '../../../security/config.json'
import { COMMON_ROUTES } from '../../../../server/security/allRoutes.json'

function Signin() {

    const navigate = useNavigate()
    const [form] = Form.useForm()

    const onFinish = async (values) => {
        const {
            email,
            password
        } = values

        try {
            // SIGNIN API CALL :
            debugger
            const { data } = await axios.post(`${COMMON_URL}${COMMON_ROUTES.USER_SIGNIN}`,{
                email,
                password
            })
    
            if(data.message && data.token) {
                localStorage.setItem("JwtToken", data.token)
                successMessageHandler("login successfully")
                navigate('/home',{
                    state:{
                        id:email    
                    }
                })
            }else{
                console.log("something missings..")
            }
        } catch (error) {
            if(error.response.data.error) errorHandler(error.response.data.error)
            navigate("/")
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="border px-16 py-20 rounded-lg shadow-lg shadow-gray-500">
                <h1 className="text-3xl mb-9 ms-3 font-extrabold">Signin form </h1>
                <Form form={form}
                    onFinish={onFinish}
                    style={{ maxWidth: 600, minWidth: 300 }}
                    layout='vertical'
                >
                    <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">sign in</Button>
                    </Form.Item>
                </Form>
                <div className="rounded-lg my-2">
                    <Link to="/"
                        className="text-sm underline flex justify-center">
                        create account first!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signin