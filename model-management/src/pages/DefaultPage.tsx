import { Navigate } from "react-router-dom";

function DefaultPage() {
  return <Navigate to="/login" replace={true} />;
}

export default DefaultPage;
