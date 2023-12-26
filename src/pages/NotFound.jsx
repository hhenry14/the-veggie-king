import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-red-300">
      <h1>Nose encontro la pagina xd : !!!</h1>
      <Link to="/">Regresar a home</Link>
    </div>
  );
};

export default NotFound;
