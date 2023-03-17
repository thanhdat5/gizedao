import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Switch,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik, Field } from "formik";
import GZIconDiscord from "../../../../atoms/icons/Discord";
import GZIconGithub from "../../../../atoms/icons/Github";
import GZIconInstagram from "../../../../atoms/icons/Instagram";
import GZIconSocialWebsite from "../../../../atoms/icons/SocialWebsite";
import GZIconTelegram from "../../../../atoms/icons/Telegram";
import GZIconTwitter from "../../../../atoms/icons/Twitter";
import GZDAOImage from "../../../../molecules/dao/dao-image";
import GZFormGroup from "../../../../molecules/global/form-group";
import GZIconInput from "../../../../molecules/global/icon-input";
import GZSelect from "../../../../molecules/global/select";

const GZDAOCreateForm = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values, action) => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <Box
            w="800px"
            background="#1B2332"
            margin="auto"
            borderRadius="10px"
            overflow="hidden"
          >
            <Text
              w="100%"
              paddingX="24px"
              paddingY="16px"
              background="#242E42"
              color="#fff"
              fontSize="16px"
              fontWeight="600"
            >
              Profile
            </Text>
            <Box paddingX="24px" paddingY="24px">
              <GZDAOImage type="avatar" />
              <GZDAOImage type="cover" label="Cover image * (1208x380)" />

              <Box my="10px">
                <GZSelect
                  data={["Option 1", "Option 2", "Option 3"]}
                  label="Chain"
                  placeholder="Choose your network"
                  name="chain"
                  onChangeValue={handleChange}
                />
              </Box>

              <Box my="10px">
                <GZFormGroup
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Name of your organization"
                  labelColor="#BFCFE8"
                  // required
                  onValueChange={handleChange}
                />
              </Box>

              <Box my="10px">
                <FormControl isRequired>
                  <FormLabel mb="6px" fontSize="16px" color="#BFCFE8">
                    About
                  </FormLabel>
                  <Textarea
                    // {...field}
                    name="about"
                    onChange={handleChange}
                    background="#242E42"
                    placeholder="What is your organization about?"
                  ></Textarea>
                </FormControl>
              </Box>

              <Box my="10px">
                <GZSelect
                  data={["Option 1", "Option 2", "Option 3"]}
                  label="Categorie(s)"
                  placeholder="Choose your category"
                  name="category"
                  // required
                />
              </Box>

              <Box my="10px">
                <GZIconInput
                  label="Website (optional)"
                  icon={<GZIconSocialWebsite />}
                  placeholder="e.g.https://espstarter.com"
                  name="website"
                />
              </Box>

              <Box my="10px">
                <GZFormGroup
                  label="Public URL (optional)"
                  type="text"
                  placeholder="Enter your public URL"
                  labelColor="#BFCFE8"
                  name="url"
                />
              </Box>
              <Box my="26px">
                <Text
                  fontSize="20px"
                  color="#BFCFE8"
                  textTransform="capitalize"
                >
                  Community Links
                </Text>
                <Box my="16px">
                  <GZIconInput
                    icon={<GZIconTwitter />}
                    placeholder="Enter your Twitter link"
                    name="twitter"
                  />
                </Box>
                <Box my="16px">
                  <GZIconInput
                    icon={<GZIconDiscord />}
                    placeholder="Enter your Discord link"
                    name="discord"
                  />
                </Box>
                <Box my="16px">
                  <GZIconInput
                    icon={<GZIconGithub />}
                    placeholder="Enter your Github link"
                    name="github"
                  />
                </Box>

                <Box my="16px">
                  <GZIconInput
                    icon={<GZIconTelegram />}
                    placeholder="Enter your Telegram link"
                    name="telegram"
                  />
                </Box>

                <Box my="16px">
                  <GZIconInput
                    icon={<GZIconInstagram />}
                    placeholder="Enter your Instagram link"
                    name="instagram"
                  />
                </Box>
              </Box>

              <Box my="26px" display="flex">
                <FormControl display="flex" alignItems="center">
                  <Switch
                    id="email-alerts"
                    marginRight="10px"
                    colorScheme="green"
                  />
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Hide space from homepage
                  </FormLabel>
                </FormControl>
              </Box>

              <Box display="flex" justifyContent="flex-end" gap={4}>
                <Button
                  w="84px"
                  onClick={() => {}}
                  type="button"
                  variant="ghost"
                  colorScheme="gray"
                  color="#BFCFE8"
                  marginLeft="10px"
                >
                  Back
                </Button>
                <Button w="84px" type="submit" color="#222222">
                  Next
                </Button>
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default GZDAOCreateForm;
