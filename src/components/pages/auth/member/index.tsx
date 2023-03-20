import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import GZHeaderTable from "../../../organisms/global/header-table";
import GZTablePrimary from "../../../organisms/global/table-primary";
// ChevronDownIcon

const GZUserMemberPage = () => {
  return (
    <>
      <GZHeaderTable />
      <GZTablePrimary header={["Member", "Role", "Member Since", ""]} />
    </>
  );
};
export default GZUserMemberPage;
