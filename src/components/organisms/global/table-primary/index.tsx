import { Box, Menu, MenuButton, MenuList, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import GZIcon3Dot from "../../../atoms/icons/3dots";
import GZIconIntegrations from "../../../atoms/icons/Integrations";
import GZIconSettings from "../../../atoms/icons/Settings";
import GZDaoInfoAvatar from "../../../molecules/dao/dao-info-avatar";
import GZMenuItem from "../../../molecules/global/menu-item";

const columns = [
  {
    name: "Title",
    // prettier-ignore
    // selector: row => row.title,
  },
  {
    name: "Year",
    // prettier-ignore
    // selector: row => row.year,
  },
];
const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

type GZTablePrimaryProps = {
  header: string[];
  onValueChange?: (newValue: string | number) => void;
};
const GZTablePrimary = ({ header }: GZTablePrimaryProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TableContainer>
        <Table variant="simple" border={0} padding={0}>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              {header.map((v) => (
                <Th color={"#fff"} paddingBottom={5} paddingLeft={0} borderBottom={"none"}>
                  {v}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            <Tr paddingBottom={5} paddingLeft={0} borderBottom={"none"}>
              <Td paddingBottom={0} paddingLeft={0} borderBottom={"none"}>
                <GZDaoInfoAvatar
                  image="https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"
                  name="2parts"
                  address="0xF28BA7525...76117749330"
                />
              </Td>
              <Td paddingBottom={0} paddingLeft={0} borderBottom={"none"}>
                millimetres (mm)
              </Td>
              <Td paddingBottom={0} paddingLeft={0} borderBottom={"none"}>
                25.4
              </Td>
              <Td paddingBottom={0} paddingLeft={0} borderBottom={"none"} textAlign="right">
                <Menu placement="left">
                  <MenuButton>
                    <GZIcon3Dot />
                  </MenuButton>
                  <MenuList
                    minW="168px"
                    borderRadius="5px"
                    mb="20px"
                    pt="0"
                    pb="0"
                    border="none"
                    _dark={{
                      bg: "#1B2332",
                    }}
                  >
                    <Box>
                      <GZMenuItem icon={<GZIconSettings />} label="Settings" onClick={onOpen} />
                    </Box>
                    <Box>
                      <GZMenuItem icon={<GZIconIntegrations />} label="Integrations" />
                    </Box>
                    <Box>
                      <GZMenuItem icon={<GZIconSettings />} label="Settings" />
                    </Box>
                    <Box>
                      <GZMenuItem icon={<GZIconIntegrations />} label="Integrations" />
                    </Box>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
            <Tr paddingBottom={5} paddingLeft={0} borderBottom={"none"}>
              <Td paddingBottom={5} paddingLeft={0} borderBottom={"none"}>
                <GZDaoInfoAvatar
                  image="https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"
                  name="2parts"
                  address="0xF28BA7525...76117749330"
                />
              </Td>
              <Td paddingBottom={0} paddingLeft={0} borderBottom={"none"}>
                centimetres (cm)
              </Td>
              <Td paddingBottom={0} paddingLeft={0} borderBottom={"none"}>
                30.48
              </Td>
              <Td paddingBottom={0} paddingLeft={0} borderBottom={"none"} textAlign="right">
                <Menu placement="left">
                  <MenuButton>
                    <GZIcon3Dot />
                  </MenuButton>
                  <MenuList
                    minW="168px"
                    borderRadius="5px"
                    mb="20px"
                    pt="0"
                    pb="0"
                    border="none"
                    _dark={{
                      bg: "#1B2332",
                    }}
                  >
                    <Box>
                      <GZMenuItem icon={<GZIconSettings />} label="Settings" />
                    </Box>
                    <Box>
                      <GZMenuItem icon={<GZIconIntegrations />} label="Integrations" />
                    </Box>
                    <Box>
                      <GZMenuItem icon={<GZIconSettings />} label="Settings" />
                    </Box>
                    <Box>
                      <GZMenuItem icon={<GZIconIntegrations />} label="Integrations" />
                    </Box>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      {/* <DataTable columns={columns} data={data} /> */}
    </>
  );
};
export default GZTablePrimary;
