import Drawer from "@components/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { asPath } = useRouter();

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(open);
    };

  const titles = asPath.split("/");
  titles.shift();

  const current = titles.pop();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setOpenDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={openDrawer} handleClose={() => setOpenDrawer(false)} />
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            {titles.map((title) => {
              const path = asPath.slice(0, asPath.indexOf(title)) + title;
              return (
                <Link underline="hover" color="inherit" href={path} key={title}>
                  {title.replace(/_/g, " ").toUpperCase()}
                </Link>
              );
            })}
            {current && (
              <Typography color="text.primary">
                {current.replace(/_/g, " ").toUpperCase()}
              </Typography>
            )}
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
