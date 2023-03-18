import { Stack, Input, InputGroup, InputLeftElement, Button, Text, } from "@chakra-ui/react";

type GZIconInputProps = {
    number?: string | number;
    text?: string
}
const GZNumberButton = ({
    number, text
}: GZIconInputProps) => {
    return <Button backgroundColor='#242E42' colorScheme='blue' variant='outline' color='#BFCFE8'>
        {text}
        <Text  marginLeft='14px' borderRadius='45%' backgroundColor='#BFCFE8' color='#1B2332' padding='0px 4px' minHeight='20px' minWidth='20px' >{number}</Text>
    </Button>
}
export default GZNumberButton