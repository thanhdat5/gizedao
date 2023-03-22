import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

type GZPrimaryBtnProps = {
  label: string;
  onClick: () => void;
};
const GZPrimaryBtn = ({ label, onClick }: GZPrimaryBtnProps) => {
  return (
    <Button w="144px" type="button" color="#0E1420" px={3} onClick={onClick}>
      {label}
    </Button>
  );
};
export default GZPrimaryBtn;
