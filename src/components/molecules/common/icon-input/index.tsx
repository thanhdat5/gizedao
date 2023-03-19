import {
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  FormLabel,
  Text,
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
  optional?: boolean;
  onValueChange?: any;
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
  optional = false,
  onValueChange,
}: GZIconInputProps) => {
  return (
    <Stack spacing={0.5} marginBottom="10px">
      {label ? (
        <FormLabel
          color="#BFCFE8"
          fontWeight="400"
          fontSize="16px"
          lineHeight="140%"
          letterSpacing="0.01em"
        >
          {label}
          {optional && (
            <Text
              fontSize="16px"
              color="rgba(255,255,255,0.6)"
              display="inline-block"
              ml="6px"
            >
              (optional)
            </Text>
          )}
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
          onChange={onValueChange}
        />
      </InputGroup>
    </Stack>
  );
};
export default GZIconInput;
