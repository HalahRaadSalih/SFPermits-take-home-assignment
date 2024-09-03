import { AppBar, Box, Typography } from "@mui/material";

/**
 * MobileFoodFacilityPermitAppBar component
 * @returns {JSX.Element}
 */
export const MobileFoodFacilityPermitAppBar = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          color: "white",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mobile Food Facility Permits
        </Typography>
      </Box>
    </AppBar>
  );
};
