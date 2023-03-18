import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Textarea
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { Outlet } from "react-router-dom";
import GZIconDiscord from "../../../../atoms/icons/Discord";
import GZIconInstagram from "../../../../atoms/icons/Instagram";
import GZIconLinked from "../../../../atoms/icons/Linked";
import GZIconSocial from "../../../../atoms/icons/Social";
import GZIconTelegram from "../../../../atoms/icons/Telegram";
import GZIconTweeter from "../../../../atoms/icons/Tweeter";
import GZIconYoutube from "../../../../atoms/icons/Youtube";
import GZFormGroup from "../../../../molecules/global/form-group";
import GZIconInput from "../../../../molecules/global/icon-input";
import GZUserAvatar from "../../../../organisms/user/avatar";
import GZUserCover from "../../../../organisms/user/cover";
import { useOutletContext } from 'react-router-dom';

const GZSubUserProfileEdit = () => {
    const [isEdit,
        setisEdit,
        initialValues,
        onSave]: any = useOutletContext();

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                onSave(values);
            }}
        >
            {({ values, handleChange }) => (
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
                            <Field name="displayName" render={( field:any ) => (
                            <GZFormGroup
                                        field={field}
                                        label="Display Name"
                                        type="text"
                                        placeholder="Enter your display name"                                        
                                        isDisabled={isEdit}                                        
                                        onValueChange={handleChange}
                                    ></GZFormGroup>
                                    )}>
                               
                            </Field>
                            <GZFormGroup
                                label="Move Wallet Address"
                                type="text"
                                placeholder="Enter your Move Wallet address"
                                value={initialValues.moveWalletAddress}
                                isDisabled={isEdit}
                            ></GZFormGroup>
                            <GZFormGroup
                                label="ERC-20 Wallet Address"
                                type="text"
                                placeholder="Enter your ERC-20 Wallet address"
                                value={initialValues.eRCWalletAddress}
                                isDisabled={isEdit}
                            ></GZFormGroup>
                            <GZFormGroup
                                label="Public URL"
                                type="text"
                                placeholder="Enter your display name"
                                value={initialValues.publicURL}
                                customPlaceholder
                                customPlaceholderText="app.gizedao.com/users/"
                                isDisabled={isEdit}
                            ></GZFormGroup>
                            <Field>
                                {(field: any) => (
                                    <FormControl mb="24px">
                                        <FormLabel
                                            mb="6px"
                                            color="#fff"
                                            fontWeight="400"
                                            fontSize="14px"
                                            lineHeight="140%"
                                            letterSpacing="0.01em"
                                        >
                                            Bio
                                        </FormLabel>
                                        <Textarea
                                            {...field}
                                            name="bio"
                                            _placeholder={{ fontSize: "13px" }}
                                            placeholder="Enter your bio"
                                            isDisabled={isEdit}
                                            value={values.bio}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                )}
                            </Field>
                            <GZIconInput
                                icon={<GZIconSocial />}
                                value={initialValues.personalSite}
                                isDisabled={isEdit}
                            ></GZIconInput>
                            <GZIconInput
                                icon={<GZIconTweeter />}
                                value={initialValues.tweeterLink}
                                isDisabled={isEdit}
                            ></GZIconInput>
                            <GZIconInput
                                icon={<GZIconTelegram />}
                                value={initialValues.telegramLink}
                                isDisabled={isEdit}
                            ></GZIconInput>
                            <GZIconInput
                                icon={<GZIconDiscord />}
                                value={initialValues.discordLink}
                                isDisabled={isEdit}
                            ></GZIconInput>
                            <GZIconInput
                                icon={<GZIconLinked />}
                                value={initialValues.linkedLink}
                                isDisabled={isEdit}
                            ></GZIconInput>
                            <GZIconInput
                                icon={<GZIconYoutube />}
                                value={initialValues.youTubeLink}
                                isDisabled={isEdit}
                            ></GZIconInput>
                            <GZIconInput
                                icon={<GZIconInstagram />}
                                value={initialValues.instagramLink}
                                isDisabled={isEdit}
                            ></GZIconInput>
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
export default GZSubUserProfileEdit;
