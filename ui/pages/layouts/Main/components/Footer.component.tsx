import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import Package from "../../../../package.json";

interface FooterProps {}

const Footer: FC<FooterProps> = (props) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography>MINA X AURO, &amp; ❤️</Typography>
          <Button
            component="a"
            href=" https://github.com/fiqrian"
            target="_blank"
          >
            Created by Fiqrian
          </Button>
          <Typography variant="caption">v{Package.version}</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
