import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function Navbar() {
  const { asPath } = useRouter();

  const titles = asPath.split("/");
  titles.shift();

  const current = titles.pop();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              HOME
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
