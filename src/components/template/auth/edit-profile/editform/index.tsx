import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import { UserModal } from "types/user";
import GZIconDiscord from "components/atoms/icons/Discord";
import GZIconInstagram from "components/atoms/icons/Instagram";
import GZIconLinked from "components/atoms/icons/Linked";
import GZIconSocial from "components/atoms/icons/Social";
import GZIconTelegram from "components/atoms/icons/Telegram";
import GZIconTweeter from "components/atoms/icons/Twitter";
import GZIconYoutube from "components/atoms/icons/Youtube";
import GZFieldGroup from "components/molecules/common/field-group";
import GZUserAvatar from "components/organisms/common/avatar";
import GZUserCover from "components/organisms/common/cover";

type GZEditProfileProps = {
  isEdit?: boolean;
  setisEdit?: any;
  initialValues: UserModal;
  onSubmit: any;
  validationSchema: any;
};

const GZEditProfile = ({
  isEdit,
  setisEdit,
  initialValues,
  onSubmit,
  validationSchema,
}: GZEditProfileProps) => {
  const CustomFieldDisplayName = ({ field, form }: any) => (
    <StyledInput
      pl="14px"
      type="text"
      placeholder="Enter your display name"
      value={field.value}
      onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
    />
  );

  const CustomFieldWalletAddress = ({ field, form }: any) => (
    <StyledInput
      pl="14px"
      type="text"
      placeholder="Enter your Move Wallet address"
      value={field.value}
      onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
    />
  );

  const CustomFieldERCWalletAddress = ({ field, form }: any) => (
    <StyledInput
      pl="14px"
      type="text"
      placeholder="Enter your ERC-20 Wallet address"
      value={field.value}
      onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
    />
  );

  const CustomFieldPublicUrl = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement
        color="#fff"
        pl="14px"
        w="auto"
        children="app.gizedao.com/users/"
      />
      <StyledInput
        pl="210px"
        placeholder="Enter your public URL"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldBio = ({ field, form }: any) => (
    <StyledTextarea
      placeholder="Enter your bio"
      value={field.value}
      onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
    />
  );

  const CustomFieldPersionalWebsite = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconSocial />} />
      <StyledInput
        placeholder="Persional site link"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldTwitter = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconTweeter />} />
      <StyledInput
        placeholder="Twitter link or username"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldTelegram = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconTelegram />} />
      <StyledInput
        placeholder="Telegram link or username"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldDiscord = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconDiscord />} />
      <StyledInput
        placeholder="Discord server link"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldLinkedIn = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconLinked />} />
      <StyledInput
        placeholder="Discord server link"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldYoutube = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconYoutube />} />
      <StyledInput
        placeholder="Youtube link or username"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  const CustomFieldInstagram = ({ field, form }: any) => (
    <InputGroup>
      <InputLeftElement children={<GZIconInstagram />} />
      <StyledInput
        placeholder="Instagram link or username"
        value={field.value}
        onChange={(e: any) => form.setFieldValue(field.name, e.target.value)}
      />
    </InputGroup>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, action) => onSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <Box
            flex="1"
            background="#1B2332"
            boxShadow="0px 4px 4px rgba(191, 207, 232, 0.04)"
            borderRadius="12px"
          >
            <GZUserCover src={initialValues.coverImage} />
            <Box mt="-72px" ms="32px" position="relative">
              <GZUserAvatar size="140px" src={initialValues.avatar} />
            </Box>
            <Box p="32px 32px 40px">
              <GZFieldGroup
                name="displayName"
                label="Display Name"
                invalid={errors.displayName && touched.displayName}
                errorMessage={errors.displayName}
                component={CustomFieldDisplayName}
              />

              <GZFieldGroup
                name="walletAddr"
                label="Move Wallet Address"
                invalid={errors.displayName && touched.displayName}
                errorMessage={errors.displayName}
                component={CustomFieldWalletAddress}
              />

              <GZFieldGroup
                name="ercWalletAddr"
                label="ERC-20 Wallet Address"
                invalid={errors.displayName && touched.displayName}
                errorMessage={errors.displayName}
                component={CustomFieldERCWalletAddress}
              />

              <GZFieldGroup
                name="publicUrl"
                label="Public URL"
                mb="24px"
                component={CustomFieldPublicUrl}
              />

              <GZFieldGroup
                name="bio"
                label="Bio"
                // invalid={errors.about && touched.about}
                // errorMessage={errors.about}
                component={CustomFieldBio}
              />

              <Box mt="22px">
                <GZFieldGroup
                  name="persionalSite"
                  component={CustomFieldPersionalWebsite}
                />
              </Box>

              <GZFieldGroup name="twitter" component={CustomFieldTwitter} />
              <GZFieldGroup name="telegram" component={CustomFieldTelegram} />
              <GZFieldGroup name="discord" component={CustomFieldDiscord} />
              <GZFieldGroup name="linkedIn" component={CustomFieldLinkedIn} />
              <GZFieldGroup name="youtube" component={CustomFieldYoutube} />
              <GZFieldGroup name="instagram" component={CustomFieldInstagram} />
            </Box>
          </Box>
          <Flex justifyContent="end" alignItems="center" marginTop="24px">
            {isEdit ? (
              <Button
                type="button"
                color="#0E1420"
                width="144px"
                onClick={() => setisEdit(false)}
              >
                Edit profile
              </Button>
            ) : (
              <Button type="submit" color="#0E1420" width="144px">
                Save
              </Button>
            )}
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
export default GZEditProfile;

const StyledInput = styled(Input)`
  background: #242e42 !important;
  border: 1px solid rgba(78, 95, 131, 0.7) !important;
  padding-top: 9px !important;
  padding-bottom: 9px !important;
  padding-right: 14px !important;
  line-height: 150% !important;
  height: 42px !important;
  &::placeholder {
    color: #94a7c699 !important;
  }
`;

const StyledTextarea = styled(Textarea)`
  background: #242e42 !important;
  border: 1px solid rgba(78, 95, 131, 0.7) !important;
  padding: 9px 14px !important;
  line-height: 150% !important;
  height: 66px;
  &::placeholder {
    color: #94a7c699 !important;
  }
`;
