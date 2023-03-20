import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import GZIconUpload20px from "components/atoms/icons/Upload";
import GZCover from "components/molecules/common/cover";

type Props = {
  src: string;
  alt?: string;
  w?: string;
  h?: string;
  editable?: boolean;
  onUpload?: () => void;
};

const GZCoverImage = ({ src, alt = "", w, h, editable, onUpload }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      position="relative"
      w={w}
      h={h}
      overflow="hidden"
      onMouseEnter={() => {
        if (editable) setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
      cursor="pointer"
    >
      <GZCover src={src} alt={alt} w={w} h={h} />
      {editable ? (
        <Flex
          position="absolute"
          top="0"
          left="0"
          h="100%"
          w="100%"
          alignItems="center"
          justifyContent="center"
          bg="rgba(36, 46, 66, 0.4)"
          backdropBlur="3.5px"
          transition="all ease-in-out .3s"
          opacity={isHover ? 1 : 0}
          cursor="pointer"
          onClick={onUpload}
        >
          <GZIconUpload20px />
        </Flex>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default GZCoverImage;
