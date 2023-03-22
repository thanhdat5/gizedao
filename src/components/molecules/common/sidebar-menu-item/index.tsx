import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Link, Text } from "@chakra-ui/react"
import GZIconArrowDown from "components/atoms/icons/ArrowDown"
import GIZLockIcon from "components/atoms/icons/Lock"
type Props = {
    iconLeft?: JSX.Element,
    label?: string,
    isLock?: boolean,
    children?: []
}
const GZSidebarMenuItem = ({ iconLeft, label, isLock, children }: Props) => {
    console.log(isLock);

    return <>
        {!children ? <Flex pb='26px' justifyContent='space-between'>
            <Flex>
                <Box>{iconLeft}</Box>
                <Link>
                    <Text marginLeft='8px'>
                        {label}
                    </Text>
                </Link>
            </Flex>
            {isLock ? <GIZLockIcon /> : <></>}
        </Flex> : <Accordion allowMultiple borderStyle='none' >
            <AccordionItem border='none'>
                <AccordionButton paddingInlineStart='0px' paddingBottom='26px' paddingTop='0px' paddingInlineEnd='0px' justifyContent='space-between'>
                    <Flex>
                        <Box>{iconLeft}</Box>
                        <Text marginLeft='8px' paddingLeft='6px' color='#94A7C6' fontSize='14px' fontWeight='400'>
                            {label}
                        </Text>
                    </Flex>
                    <GZIconArrowDown />
                </AccordionButton>
                <AccordionPanel pb={3}>
                    {children?.map((item: any, idx) => (
                        <GZSidebarMenuItem key={idx} iconLeft={item.iconLeft} label={item.label} />
                    ))}
                </AccordionPanel>
            </AccordionItem>

        </Accordion>}

    </>

}

export default GZSidebarMenuItem

