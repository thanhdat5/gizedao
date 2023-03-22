import GZHeaderTable from 'components/organisms/common/header-table';
import GZTablePrimary from 'components/organisms/common/table-primary';

// ChevronDownIcon

const GZUserMembersPage = () => {
	return (
		<>
			<GZHeaderTable />
			<GZTablePrimary header={['Member', 'Role', 'Member Since', '']} />
		</>
	);
};
export default GZUserMembersPage;
