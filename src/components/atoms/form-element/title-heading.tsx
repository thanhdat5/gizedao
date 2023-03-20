import { Heading } from "@chakra-ui/react";

type GZHeadingProps = {
  label: string;
  color?: string;
  size?: string;
  as?: string;
};
const GZTitleHeading = ({ label, color, as, size }: GZHeadingProps) => {
  return (
    <Heading as={"h1"} size={size} color={color} mb={"48px"}>
      {label}
    </Heading>
  );
};
export default GZTitleHeading;
