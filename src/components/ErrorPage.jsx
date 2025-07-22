import ErrorImage from "../images/404/404.gif";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={ErrorImage} alt="" />
    </div>
  );
};

export default ErrorPage;
