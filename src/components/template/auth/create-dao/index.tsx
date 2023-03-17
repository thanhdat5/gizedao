import { Dispatch, SetStateAction } from "react";
import GZDAOModal from "./check-code";
import GZDAOCreateForm from "./form";

type GZCreateDAOProps = {
  isCodeValid: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
};

const GZCreateDAO = ({ isCodeValid, onClose }: GZCreateDAOProps) => {
  return (
    <>
      {isCodeValid ? (
        <GZDAOModal isOpen={isCodeValid} onClick={() => onClose(false)} />
      ) : (
        <GZDAOCreateForm />
      )}
    </>
  );
};

export default GZCreateDAO;
