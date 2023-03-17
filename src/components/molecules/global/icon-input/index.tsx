import {
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  FormLabel,
} from "@chakra-ui/react";

type GZIconInputProps = {
  icon?: JSX.Element;
  placeholder?: string;
  fontSize?: string;
  color?: string;
  value?: string;
  isDisabled?: boolean;
  label?: string;
  name?: string;
};
const GZIconInput = ({
  icon,
  placeholder,
  fontSize,
  color,
  value,
  isDisabled,
  label,
  name,
}: GZIconInputProps) => {
  return (
    <Stack spacing={0.5} marginBottom="10px">
      {label ? (
        <FormLabel
          color="#BFCFE8"
          fontWeight="400"
          fontSize="14px"
          lineHeight="140%"
          letterSpacing="0.01em"
        >
          {label}
        </FormLabel>
      ) : (
        <></>
      )}
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color={color}
          fontSize={fontSize}
          children={icon}
        />
        <Input
          placeholder={placeholder}
          value={value}
          isDisabled={isDisabled}
          name={name}
        />
      </InputGroup>
    </Stack>
  );
};
export default GZIconInput;
