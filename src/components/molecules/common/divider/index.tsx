import { Box } from "@chakra-ui/react"
type GZDividerProps = {
    spacing?: string;
}
const GZDivider = ({ spacing = '8px' }: GZDividerProps) => {
    return <Box height="1px" w='100%' bg="#4E5F83" my={spacing}></Box>
}
export default GZDivider