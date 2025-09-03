import React from "react";
import { Form, Input, Button } from "antd";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../UI/SwitcherLanguage";
import styles from "./index.module.css";

const LoginComponent = () => {
  const { t } = useTranslation("login"); // <-- use 'login' namespace
  const navigate = useNavigate();

  const loginApi = async (values: { username: string }) =>
    new Promise<{ username: string }>((resolve) =>
      setTimeout(() => resolve(values), 1000)
    );

  const { run, loading } = useRequest(
    async (values: { username: string }) => loginApi(values),
    {
      manual: true,
      onSuccess: (data) => {
        localStorage.setItem('username', data.username);
        navigate("/dashboard");
      },
    }
  );

  const handleSubmit = (values: { username: string }) => run(values);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formLogin}>
        <LanguageSwitcher />

        <h1 className="flex justify-center mb-4 font-bold text-xl">
          {t("title")}
        </h1>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label={t("username")}
            name="username"
            rules={[{ required: true, message: t("username") }]}
          >
            <Input
              placeholder={t("username")}
              className={styles.formItemInput}
            />
          </Form.Item>
          <Form.Item>
            <div className={styles.submitButton}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-[82px] bg-[#BCBCBC] border-none"
              >
                {t("login")}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginComponent;
