import {
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr
} from '@chakra-ui/react';
import GZHeaderTable from 'components/organisms/common/header-table';
import GZTablePrimary from 'components/organisms/common/table-primary';

// ChevronDownIcon

const GZUserMemberPage = () => {
	return (
		<>
			<GZHeaderTable />
			<GZTablePrimary header={['Member', 'Role', 'Member Since', '']} />
		</>
	);
};
export default GZUserMemberPage;
