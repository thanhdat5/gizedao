import { Flex } from '@chakra-ui/react'
import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'
import GZIconButton from '../../common/icon-button'

type GZIconProfileProps = {
    w?: string,
    h?:string,
    p?:string,
    size?:string,
}
const GZIconProfile = ({w = '30px' ,h = '30px' , p = '8px',size='15px'} :GZIconProfileProps) => {
  return (
    <Flex gap="12px">
        <GZIconButton w={w} h={h} p={p} icon={<FaTwitter size={size} />} />
        <GZIconButton w={w} h={h} p={p} icon={<FaTelegram size={size} />} />
        <GZIconButton w={w} h={h} p={p} icon={<FaYoutube size={size} />} />
        <GZIconButton w={w} h={h} p={p} icon={<FaDiscord size={size} />} />
        <GZIconButton w={w} h={h} p={p} icon={<FaGithub size={size} />} />
        <GZIconButton w={w} h={h} p={p} icon={<FaInstagram size={size} />} />
    </Flex>
  )
}

export default GZIconProfile