import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";

type GZFormGroupProps = {
    type?: 'text' | 'number' | 'email' | 'password';
    label?: string;
    placeholder?: string;
    helpText?: string;
    value?: string | number;
    isError?: boolean;
    customPlaceholder?: boolean;
    customPlaceholderText?: string;
    onValueChange?: (newValue: string | number) => void;
    isDisabled?:boolean;
    name?: string,
    field?:any
}


const GZFormGroup = ({ type = 'text', label, placeholder, helpText, value, isError, customPlaceholder,customPlaceholderText,isDisabled,name,field, onValueChange }: GZFormGroupProps) => {
    return <FormControl mb="24px" isInvalid={isError} isDisabled={isDisabled}>
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
        {!customPlaceholder ? <Input _placeholder={{ fontSize: '13px' }}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onValueChange!(e.target.value)}
            name={name}
            {...field}
        /> : <InputGroup>
            <InputLeftElement width='190px'
                pointerEvents='none'
                children={<Text fontSize='13px' fontWeight='400' color='#FFFFFF' >{customPlaceholderText}</Text>}
            />
            <Input _placeholder={{ fontSize: '13px' }} paddingStart='173px' type='text' placeholder={placeholder} value={value}  name={name} onChange={(e) => onValueChange!(e.target.value)}/>
        </InputGroup>}
        {!isError ?
            (helpText ? <FormHelperText>{helpText}</FormHelperText> : <></>) :
            <FormErrorMessage>{label} is required.</FormErrorMessage>}
    </FormControl>
}
export default GZFormGroup;