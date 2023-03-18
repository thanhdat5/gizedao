import { Box, Input, Text } from "@chakra-ui/react";

type GZDAOImageProps = {
  label?: string;
  type?: "avatar" | "cover";
};

const GZDAOImage = ({ label, type }: GZDAOImageProps) => {
  return (
    <>
      {type === "avatar" ? (
        <>
          <Text
            fontSize="16px"
            fontWeight="400"
            color="#BFCFE8"
            textTransform="capitalize"
            mb="2px"
          >
            avatar
          </Text>
          <Box
            bg="#242E42"
            w="80px"
            p={4}
            h="80px"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            <Box>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 7.3C2.5 5.61984 2.5 4.77976 2.82698 4.13803C3.1146 3.57354 3.57354 3.1146 4.13803 2.82698C4.77976 2.5 5.61984 2.5 7.3 2.5H16.7C18.3802 2.5 19.2202 2.5 19.862 2.82698C20.4265 3.1146 20.8854 3.57354 21.173 4.13803C21.5 4.77976 21.5 5.61984 21.5 7.3V16.7C21.5 18.3802 21.5 19.2202 21.173 19.862C20.8854 20.4265 20.4265 20.8854 19.862 21.173C19.2202 21.5 18.3802 21.5 16.7 21.5H7.3C5.61984 21.5 4.77976 21.5 4.13803 21.173C3.57354 20.8854 3.1146 20.4265 2.82698 19.862C2.5 19.2202 2.5 18.3802 2.5 16.7V7.3ZM17.9 4.5H6.1C5.53995 4.5 5.25992 4.5 5.04601 4.60899C4.85785 4.70487 4.70487 4.85785 4.609 5.04601C4.5 5.25992 4.5 5.53995 4.5 6.1V16L6.30294 14.1971C6.89697 13.603 7.19398 13.306 7.53647 13.1947C7.83774 13.0968 8.16226 13.0968 8.46353 13.1947C8.80602 13.306 9.10303 13.603 9.69706 14.1971L10.5 15L13.8029 11.6971C14.397 11.103 14.694 10.806 15.0365 10.6947C15.3377 10.5968 15.6623 10.5968 15.9635 10.6947C16.306 10.806 16.603 11.103 17.1971 11.6971L19.5 14V6.1C19.5 5.53995 19.5 5.25992 19.391 5.04601C19.2951 4.85785 19.1422 4.70487 18.954 4.60899C18.7401 4.5 18.4601 4.5 17.9 4.5ZM8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                  fill="#94A7C6"
                />
              </svg>
            </Box>

            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              accept="image/*"
            />

            <Box position="absolute" bottom="0" right="0">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="22" height="22" rx="11" fill="#BFCFE8" />
                <path
                  d="M6.33333 15.6666H7.26667L13.0167 9.91658L12.0833 8.98325L6.33333 14.7333V15.6666ZM15.8667 8.94992L13.0333 6.14992L13.9667 5.21659C14.2222 4.96103 14.5362 4.83325 14.9087 4.83325C15.2807 4.83325 15.5944 4.96103 15.85 5.21659L16.7833 6.14992C17.0389 6.40547 17.1722 6.71392 17.1833 7.07525C17.1944 7.43614 17.0722 7.74436 16.8167 7.99992L15.8667 8.94992ZM14.9 9.93325L7.83333 16.9999H5V14.1666L12.0667 7.09992L14.9 9.93325ZM12.55 9.44992L12.0833 8.98325L13.0167 9.91658L12.55 9.44992Z"
                  fill="black"
                />
              </svg>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Text
            fontSize="16px"
            fontWeight="400"
            color="#BFCFE8"
            // textTransform="capitalize"
            mt="10px"
            mb="6px"
          >
            {label}
          </Text>
          <Box
            bg="#242E42"
            w="240px"
            h="38px"
            borderRadius="10px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            position="relative"
            paddingX="25px"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 2.5V12.5M10.0001 2.5L6.66675 5.83333M10.0001 2.5L13.3334 5.83333M1.66675 14.1667L2.18425 16.2375C2.27438 16.5981 2.48243 16.9182 2.77536 17.1469C3.06828 17.3757 3.42926 17.4999 3.80091 17.5H16.1992C16.5709 17.4999 16.9319 17.3757 17.2248 17.1469C17.5177 16.9182 17.7258 16.5981 17.8159 16.2375L18.3334 14.1667"
                stroke="#94A7C6"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Text fontSize="14px" color="#BFCFE8">
              Choose files to upload
            </Text>

            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              accept="string"
              onChange={() => {}}
            />
          </Box>
        </>
      )}
    </>
  );
};

export default GZDAOImage;
