import { Flex } from '@chakra-ui/react';
import GZLabel from 'components/atoms/form-element/commonLabel';
import GZTitleHeading from 'components/atoms/form-element/title-heading';
import GZSearch from 'components/molecules/common/search';
import GZSelectLabel from 'components/molecules/common/select-label';
import GZPrimaryBtn from '../primary-button';

const GZHeaderTable = () => {
	return (
		<>
			<GZTitleHeading
				label="Organization Members"
				color={'#fff'}
				size={'xl'}
				as={'h1'}
			/>
			<Flex flexShrink={0} marginBottom={'24px'}>
				<Flex
					gap="16px"
					className="header-table"
					direction="row"
					alignItems="center"
					flex={'0 0 100%'}
				>
					<Flex maxW="10%" flex={'0 0 10%'} gap={2}>
						<GZLabel label="129" labelColor="#05E46B" /> member
					</Flex>
					<Flex
						maxW="70%"
						flex={'0 0 70%'}
						gap={2}
						alignItems="center"
						justifyItems="center"
					>
						<GZSelectLabel
							label="display role:"
							listOptions={['Admin', 'User']}
							selectWidth={'80px'}
							selectStyle={'unstyled'}
							fontSize={14}
						/>
						<GZSearch w="239px" placeholder="Search" />
					</Flex>
					<Flex className="test" marginLeft="auto">
						<GZPrimaryBtn label="Add Member" onClick={() => {}} />
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
export default GZHeaderTable;
