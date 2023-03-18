import { Box, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import GIZCardItem from "../../../molecules/dao/dao-card-item";
import GZNumberButton from "../../../molecules/global/number-button";
type GIZExploreOrganiztionProps = {
    exploreItemInfo?: any[];
}
const GIZExploreDAO = ({ exploreItemInfo = [] }: GIZExploreOrganiztionProps) => {
    return <>
        <Box>
            <Flex justifyContent='space-between'>
                <Box marginRight='200px' >
                    <Text fontSize='24px' fontWeight='400'>587 Organization</Text>
                </Box>
                <Flex gap='4'>
                    <GZNumberButton text="All" number='100' />
                    <GZNumberButton text="DAO" number='1' />
                    <GZNumberButton text="Service" number='9' />
                    <GZNumberButton text="Social" number='1' />
                    <GZNumberButton text="Investment" number='50' />
                    <GZNumberButton text="Collector" number='7' />
                    <GZNumberButton text="Grants" number='77' />
                    <GZNumberButton text="Creator" number='100' />
                </Flex>
            </Flex>
            <SimpleGrid columns={5} spacing={5} marginTop='29px'>
                {exploreItemInfo.map((item: any, idx: any) => (
                    <GridItem w='100%'>
                        <GIZCardItem key={idx} src={item.src ? item.src : '/images/item-2.png'} alt={item.alt} text={item.text} />
                    </GridItem>
                ))}
            </SimpleGrid >
        </Box>
    </>
}

export default GIZExploreDAO