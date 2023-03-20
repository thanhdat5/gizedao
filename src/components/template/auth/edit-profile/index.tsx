import { Box, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import GZIconBellActive from "../../../atoms/icons/BellActive";
import GZIconIntegrations from "../../../atoms/icons/Integrations";
import GIZProfile2 from "../../../atoms/icons/Profile-2";
import GZDivider from "../../../molecules/common/divider";

const GZEditUserProfile = () => {
  return (
    <Grid
      h="200px"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={5}
    >
      <GridItem rowSpan={2} colSpan={2}>
        <Flex>
          <Spacer />
          <Box w="204px">
            <Text padding="8px 0px 8px 8px">Personal</Text>
            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#242E42" : "",
                display: "block",
                borderRadius: "5px",
              })}
              className={(isActive) => (isActive ? "active" : "")}
              to="/edit-profile"
            >
              <Flex padding="8px">
                <GIZProfile2 />
                <Text marginLeft="11px">My profile</Text>
              </Flex>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#242E42" : "",
                display: "block",
                borderRadius: "5px",
              })}
              className={(isActive) => (isActive ? "active" : "")}
              to="/notification"
            >
              <Flex padding="8px">
                <GZIconBellActive />
                <Text marginLeft="11px">Notification</Text>
              </Flex>
            </NavLink>
            <GZDivider spacing="16px" />
            <Text padding="0px 0px 8px 8px">Product</Text>
            <NavLink
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#242E42" : "",
                display: "block",
                borderRadius: "5px",
              })}
              className={(isActive) => (isActive ? "active" : "")}
              to=""
            >
              <Flex padding="8px">
                <GZIconIntegrations />
                <Text marginLeft="11px">Integrations</Text>
              </Flex>
            </NavLink>
          </Box>
          <Spacer />
        </Flex>
      </GridItem>
      <GridItem colSpan={4} borderRadius="10px">
        <Outlet
        // context={[isEdit, setisEdit, initialValues, onSave, validationSchema]}
        />
      </GridItem>
      <GridItem colSpan={1}></GridItem>
    </Grid>
  );
};
export default GZEditUserProfile;
