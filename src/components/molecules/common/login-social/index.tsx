import { Button, Text } from "@chakra-ui/react"

type GZSocialLoginProps = {
    icon?: JSX.Element;
    label: string;
    onClick?: () => void;
}
const GZSocialLogin = ({ icon, label, onClick }: GZSocialLoginProps) => {
    return <Button
        onClick={onClick}
        type="button"
        height='48px'
        gap='12px'
        fontFamily='Inter'
        fontWeight='400'
        fontSize='16px'
        lineHeight='150%'
        letterSpacing='0.02em'
        color='#FFFFFF'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='1px solid #4E5F83'
        borderRadius='5px'
        padding='10px 20px'
        w='100%'
        bg='transparent'
        _hover={{ 
            bg: 'rgba(191, 207, 232, 0.1)',
            borderColor: 'rgba(191, 207, 232, 0.1)'
        }}
        _active={{
            bg: '#394662',
            borderColor: '#394662',
        }}
        _focus={{
            bg: '#394662',
            borderColor: '#394662',
        }}
    >
        {icon ? icon : <></>}
        <Text>{label}</Text>
    </Button>
}
export default GZSocialLogin