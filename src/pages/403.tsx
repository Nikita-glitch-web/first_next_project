import style from "./UserProfile.module.css";

const Custom403 = () => {
  return (
    <div className={style.error_wrapper}>
      <h1 className={style.error_title}>403 - Access Denied</h1>
      <p className={style.error_text}>
        You do not have permission to view this page. Please login first
      </p>
    </div>
  );
};

export default Custom403;
