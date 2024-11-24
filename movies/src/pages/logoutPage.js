import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 清除本地存储中的 sessionId
    localStorage.removeItem("tmdbSessionId");

    // 跳转到登录页面
    navigate("/movies/login", { replace: true });
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
      <p>You will be redirected to the login page shortly.</p>
    </div>
  );
};

export default LogoutPage;
