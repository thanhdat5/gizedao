import { Button, Card, CardBody, Flex, Image, Stack, Text } from "@chakra-ui/react"


type GIZCardItemProps = {
    src?: string,
    text?: string,
    alt?: string

}
const GIZCardItem = ({ src, text, alt }: GIZCardItemProps) => {
    return <>
        <Card maxW='sm' backgroundColor='#1B2332'>
            <CardBody padding='4px 4px 12px 4px'>
                <Image
                    src={src}
                    alt={alt}
                    borderRadius='lg'
                    w='100%'
                />
                <Stack mt='6' spacing='3' mb='4'>
                    <Text textAlign='center' color='#BFCFE8' fontSize='16px' fontWeight='500'>
                        {text}
                    </Text>
                </Stack>
                <Flex justifyContent='center' >
                    <Button variant='solid' border='1px' backgroundColor='#1B2332'>
                        See More
                    </Button>
                </Flex>
            </CardBody>            
        </Card>
    </>
}

export default GIZCardItem