import { Flex } from '@chakra-ui/react'
import React from 'react'
import GZIconProfile from '../../../../molecules/profile/icon-profile'
import GZNavProfile from '../../../../molecules/profile/nav-profile'


const GZListProfile = () => {
  return (
    <Flex gap="20px" justifyContent="space-between" alignItems="end">
        <GZNavProfile />
        <GZIconProfile  />
    </Flex>
  )
}

export default GZListProfile