import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";

type GZFormGroupProps = {
    type?: 'text' | 'number' | 'email' | 'password';
    label?: string;
    placeholder?: string;
    helpText?: string;
    value?: string | number;
    isError?: boolean;
    onValueChange?: (newValue: string | number) => void;
}
const GZFormGroup = ({ type = 'text', label, placeholder,helpText, value, isError, onValueChange }: GZFormGroupProps) => {
    return <FormControl mb="24px" isInvalid={isError}>
        <FormLabel
            mb="6px"
            color="#fff"
            fontWeight="400"
            fontSize="14px"
            lineHeight="140%"
            letterSpacing="0.01em"
        >
            {label}
        </FormLabel>
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onValueChange!(e.target.value)}
        />
        {!isError ? 
            (helpText ? <FormHelperText>{helpText}</FormHelperText> : <></>) : 
            <FormErrorMessage>{label} is required.</FormErrorMessage>}
    </FormControl>
}
export default GZFormGroup;