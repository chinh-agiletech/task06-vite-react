import React from "react";
import { Form, Input, Button } from "antd";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
// import { toast } from "../UI/Toast/toast";

const LoginComponent = () => {
  const navigate = useNavigate();

  const loginApi = async (values: { username: string }): Promise<{ username: string }> => {
    return new Promise((resolve) => setTimeout(() => resolve(values), 1000));
  };

  const { run, loading } = useRequest(
    async (values: { username: string }) => {
      return await loginApi(values);
    },
    {
      manual: true,
      onSuccess: () => {
        navigate("/dashboard");
        // toast.success("Login successful"); // nếu muốn dùng lại thì mở comment
      },
    }
  );

  const handleSubmit = (values: { username: string }) => {
    run(values);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formLogin}>
        <h1 className="flex justify-center mb-4 font-bold text-xl">LOGIN</h1>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter username" className={styles.formItemInput} />
          </Form.Item>
          <Form.Item>
            <div className={styles.submitButton}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-[82px] bg-[#BCBCBC] border-none"
              >
                Login
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
