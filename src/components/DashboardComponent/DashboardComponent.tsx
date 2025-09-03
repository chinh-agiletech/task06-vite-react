import React from "react";
import { UserOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const DashboardComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState<string>("");
  const { t } = useTranslation("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  React.useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <UserOutlined style={{ marginRight: 4 }} />
          <span className={styles.username}>{username}</span>
          <span className={styles.logout} onClick={handleLogout}>
            {t("logout")}
          </span>
        </div>
        <div className={styles.title}>{t("title")}</div>
        <div className={styles.list}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.item}>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
