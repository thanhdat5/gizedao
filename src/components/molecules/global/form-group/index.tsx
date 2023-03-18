import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

type GZFormGroupProps = {
  type?: "text" | "number" | "email" | "password";
  label?: string;
  placeholder?: string;
  helpText?: string;
  value?: string | number;
  isError?: boolean;
  onValueChange?: (newValue: string | number) => void;
  labelColor?: string;
  required?: boolean;
  name?: string;
  optional?: boolean;
};
const GZFormGroup = ({
  type = "text",
  label,
  placeholder,
  helpText,
  value,
  isError,
  onValueChange,
  labelColor,
  required = false,
  name,
  optional = false,
}: GZFormGroupProps) => {
  return (
    <FormControl mb="24px" isInvalid={isError} isRequired={required}>
      <FormLabel
        mb="6px"
        color={labelColor ? labelColor : "#fff"}
        fontWeight="400"
        fontSize="14px"
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
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange!(e.target.value)}
        name={name}
      />
      {!isError ? (
        helpText ? (
          <FormHelperText>{helpText}</FormHelperText>
        ) : (
          <></>
        )
      ) : (
        <FormErrorMessage>{label} is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};
export default GZFormGroup;
