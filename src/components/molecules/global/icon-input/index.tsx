import {Stack,Input, InputGroup, InputLeftElement,} from "@chakra-ui/react";

type GZIconInputProps = {
    icon?: JSX.Element;
    placeholder?:string;
    fontSize?:string;
    color?:string;
    value?:string,
    isDisabled?:boolean
}
const GZIconInput = ({
    icon,placeholder,fontSize,color,value,isDisabled
}: GZIconInputProps) => {
    return <Stack spacing={4} marginBottom='10px'>
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                color= {color}
                fontSize={fontSize}
                children={icon}
            />
            <Input placeholder={placeholder} value={value} isDisabled={isDisabled} />
        </InputGroup>
    </Stack>
}
export default GZIconInput