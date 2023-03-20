import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import GZIcon3Dot from "../../../atoms/icons/3dots";
import GZIconDot from "../../../atoms/icons/Dot";

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
  return (
    <>
      {/* <TableContainer>
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
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td isNumeric>
                <GZIcon3Dot />
              </Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>30.48</Td>
              <Td isNumeric>
                <GZIcon3Dot />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer> */}
      <DataTable columns={columns} data={data} />
    </>
  );
};
export default GZTablePrimary;
