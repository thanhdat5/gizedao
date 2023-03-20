import { Flex } from '@chakra-ui/react'
import GZIconProfile from 'components/molecules/profile/icon-profile'
import GZNavProfile from 'components/molecules/profile/nav-profile'


const GZListProfile = () => {
  return (
    <Flex gap="20px" justifyContent="space-between" alignItems="end">
        <GZNavProfile />
        <GZIconProfile  />
    </Flex>
  )
}

export default GZListProfile