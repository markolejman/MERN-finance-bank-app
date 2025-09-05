import { Box } from "@mui/material";
import Navbar from "@/scenes/navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
