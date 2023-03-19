import { Button, Text } from '@chakra-ui/react'
import React from 'react'
type GZButtonProfileProps = {
    h?:string,
    w?:string,
    p?:string,
    bg?:string,
    text:string,
    fs?:string
    onClick?: () => void;
}
const GZButtonProfile = ({h,w,p,bg,text,fs,onClick}: GZButtonProfileProps)  => {

  return (
    <>
    <Button 
    type="button" 
    color="#0E1420"
    h={h}
     p={p}
     onClick={onClick}
    >
       <Text fontSize={fs} p={p}>
        {text}
       </Text>
    </Button>
    </>
  )
}

export default GZButtonProfile