import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Flex, Link, Text } from "@chakra-ui/react";
import GZIconArrowDown from "components/atoms/icons/ArrowDown";
import GZSidebarMenuItem from "components/molecules/common/sidebar-menu-item";
import { FaPlus } from "react-icons/fa";
type GIZSideBarMenuExpandInfo = {
  menuConfigItems?: []
}
const GIZSideBarMenuExpand = ({ menuConfigItems }: GIZSideBarMenuExpandInfo) => {

  return (
    <Accordion defaultIndex={[0]} allowMultiple borderStyle='none'>
      <AccordionItem border='none'>
        <AccordionButton paddingInlineStart='0px' paddingBottom='0px'>
          <GZIconArrowDown />
          <Box as="span" flex='1' textAlign='left' paddingLeft='6px' color='#94A7C6' fontSize='12px' fontWeight='400'> Offical
          </Box>
        </AccordionButton>
        <AccordionPanel pb={3}>
          {menuConfigItems?.map((item: any, idx) => (
            <GZSidebarMenuItem key={idx} iconLeft={item.iconLeft} label={item.label} children={item.children} isLock={item.isLock} />
          ))}
          <Link>
            <Flex alignItems='center' justifyContent='center'>
              <Text color='#94A7C6' fontSize='12px' fontWeight='400' paddingRight='12px'>Add Category</Text>
              <FaPlus fontSize='7px' />
            </Flex>
          </Link>
        </AccordionPanel>
      </AccordionItem>

    </Accordion>
  )
}
export default GIZSideBarMenuExpand