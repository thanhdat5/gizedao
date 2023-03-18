import { useState } from "react";
import GZCreateDAO from "../../../template/auth/create-dao";

const GZCreateDAOPage = () => {
  const [isCodeValid, setIsCodeValid] = useState(true);

  return <GZCreateDAO isCodeValid={isCodeValid} onClose={setIsCodeValid} />;
};

export default GZCreateDAOPage;
