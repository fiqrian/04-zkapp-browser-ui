import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FC, ReactElement, useState } from "react";
import Footer from "./components/Footer.component";
import Header, {
  HeaderCenter,
  HeaderEnd,
  HeaderStart,
} from "./components/Header";
import Navbar from "./components/Navbar";

import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavLink from "./components/NavLink";
import { NextLinkComposed } from "../../components/Link.component";
import Sidebar from "./components/Sidebar";
import Typography from "@mui/material/Typography";
import {
  SidebarState,
  SidebarStateEnum,
} from "./components/Sidebar/Sidebar.component";

interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props;

  const [sidebarState, setSidebarState] = useState<SidebarState>(
    SidebarStateEnum.Closed
  );
  const handleCloseSidebar = (event: any) =>
    setSidebarState(SidebarStateEnum.Closed);
  const handleOpenSidebar = (event: any) =>
    setSidebarState(SidebarStateEnum.Opened);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Header>
        <HeaderStart>
          <Button component={NextLinkComposed} to="/">
            ZkApp
          </Button>
        </HeaderStart>
        <HeaderCenter />
        <HeaderEnd>
          <Navbar
            spx={1}
            mobileButton={
              <Button onClick={handleOpenSidebar}>
                <MenuIcon />
              </Button>
            }
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/404">Oracle</NavLink>
            <NavLink to="/404" target="_blank" startIcon={<GitHubIcon />}>
              Source Code
            </NavLink>
          </Navbar>
        </HeaderEnd>
      </Header>
      <Sidebar drawerState={sidebarState} onClose={handleCloseSidebar}>
        <NavLink to="">Home</NavLink>
        <NavLink to="/404">Not Found</NavLink>
        <NavLink
          to="https://github.com/fiqrian"
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          Source Code
        </NavLink>
      </Sidebar>
      {children}

      <Footer />
    </Box>
  );
};

export default MainLayout;
