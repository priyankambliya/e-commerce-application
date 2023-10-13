import { Button, Form, Input } from "antd";
import axios from "axios";

import { ADMIN_URL } from "../../../../security/config.json";

import { ADMIN_ROUTES } from "../../../../../server/security/allRoutes.json";

import { useNavigate } from "react-router-dom";

import {
  errorHandler,
  successMessageHandler,
} from "../../../helpers/toastMessageHelper";

function AdminsigninPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values;

    try {
      debugger;
      const { data } = await axios.post(
        `${ADMIN_URL}${ADMIN_ROUTES.ADMIN_SIGNIN}`,
        {
          email,
          password,
          type: 1
        }
      );

      if (data.message && data.token) {
        localStorage.setItem("JwtToken", data.token);
        successMessageHandler(data.message);
        navigate("/home");
      }
    } catch (error) {
      errorHandler;
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="border px-16 py-20 rounded-lg shadow-lg shadow-gray-500">
          <h1 className="text-3xl mb-9 ms-3 font-extrabold">
            Admin SignIn form
          </h1>

          <Form
            form={form}
            onFinish={onFinish}
            style={{ maxWidth: 600, minWidth: 300 }}
            layout="vertical"
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
              <Button htmlType="submit">Sign In</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default AdminsigninPage;
