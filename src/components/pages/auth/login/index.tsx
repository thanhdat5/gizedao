import { Box, Button, Flex, Heading, Image, Link, Stack, Text, useDisclosure } from "@chakra-ui/react";
import GZIconGoogleColorful from "../../../atoms/icons/GoogleColorful";
import GZIconMail20px from "../../../atoms/icons/Mail";
import GZIconTwitterColorful from "../../../atoms/icons/TwitterColorful";
import GZFormGroup from "../../../molecules/global/form-group";
import GZSocialLogin from "../../../molecules/global/login-social";
import GZMessageDialog from "../../../molecules/global/message-dialog";

const GZLoginPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing={0} bg="#0E1420">
        <Flex minH={["auto", "100vh"]} w={["100%", "100%", "50%"]} p="24px 27px 24px 50px" direction="column" position="relative">
          <Box mb="67px">
            <Image src="/images/logo-full.svg" alt="GizeDAO" height="68px" />
          </Box>
          <Box textAlign="center" w="360px" maxW="100%" mx="auto">
            <Heading as="h1" fontSize="30px" fontWeight={500} lineHeight="125%" letterSpacing="0.01em" color="#00CE6B" mb="12px">
              Sign In or Sign Up
            </Heading>
            <Text fontSize="16px" fontWeight={500} lineHeight="150%" letterSpacing="0.01em" color="#BFCFE8" mt="0" mb="32px">
              Welcome back! Please enter your details.
            </Text>
            <Box>
              <Button size="lg" w="166px">
                Connect Wallet
              </Button>
            </Box>
            <Box my="8px">
              <Text color="#BFCFE8">or</Text>
            </Box>
            <GZFormGroup label="Email" type="email" placeholder="Enter your email" />
            <Box mb="16px">
              <Button w="100%" size="lg" onClick={onOpen}>
                Continue with email
              </Button>
            </Box>
            <Box mb="16px">
              <GZSocialLogin label="Sign In With Twitter" icon={<GZIconTwitterColorful />} />
            </Box>
            <Box>
              <GZSocialLogin label="Sign In With Google" icon={<GZIconGoogleColorful />} />
            </Box>
          </Box>
          <Box mt="auto" position="absolute" top="calc(max(100vh, 700px) - 40px)" right="27px">
            <Link color="#94A7C6" display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center" href="mailto:Support@espstarter.com" _hover={{ color: "#fff" }}>
              <GZIconMail20px />
              <Text as="span" ms="10px" fontSize="14px" lineHeight="140%">
                Support@espstarter.com
              </Text>
            </Link>
          </Box>
        </Flex>
        <Box
          p="159px 100px 50px"
          display={["none", "none", "flex"]}
          flexDirection="column"
          justifyContent="center"
          minH="100vh"
          w="50%"
          borderRadius="80px 0px 0px 80px"
          backgroundImage="url(/images/welcome.png)"
          backgroundSize="cover"
        >
          <Heading as="h2" fontFamily="'Readex Pro'" fontWeight="500" fontSize="48px" lineHeight="60px" color="#fff" textShadow="0px 4px 4px rgba(0, 0, 0, 0.7)" mb="26px">
            WELCOME to Our Community
          </Heading>
          <Box fontSize="14px" letterSpacing="0.03em" color="#fff" fontWeight="400" lineHeight="150%" mb="40px">
            <Text fontWeight="500" fontFamily="Chakra Petch" as="span" color="#0075C4">
              GizeDAO
            </Text>{" "}
            is an all-in-one platform for starting, managing, and growing your decentralized autonomous organization (DAO). Our platform provides a comprehensive suite of tools to help you launch and
            manage your own DAO, including features such as creating and selling NFTs, managing treasury, setting governance, and more. Our mission is to empower individuals and organizations to take
            control of their communities and assets through decentralized technology.
          </Box>
          <Box flex={1}>
            <Image src="/images/logo.svg" alt="" mx="auto" />
          </Box>
        </Box>
      </Stack>
      {/* <GZMessageDialog
            isOpen={isOpen}
            title="Verify Email"
            body="Thank you. Your email was verified. Please log-in to use the service"
            closeText="Confirm"
            onClose={onClose}
        /> */}
      {/* <GZMessageDialog
            isOpen={isOpen}
            title="Sign Up Success"
            body="You has been signed up successfully. Check your email to verify your account. If you do not see the email in your mailbox, try checking Promotional or Spam section."
            closeText="Confirm"
            onClose={onClose}
        /> */}
      {/* <GZMessageDialog
            isOpen={isOpen}
            title="Login Success"
            body="You are in."
            closeText="Close"
            onClose={onClose}
        /> */}
      <GZMessageDialog isOpen={isOpen} title="🚀 Login link sent!" body="Check your spams if you didn't received anything" closeText="Confirm" onClose={onClose} />
    </>
  );
};
export default GZLoginPage;
