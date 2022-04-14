import topics from "@lib/topics";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import _Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface Props {
  open: boolean;
  handleClose: MouseEventHandler;
}

export default function Drawer({ open, handleClose }: Props) {
  return (
    <_Drawer open={open} onClose={handleClose}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <Link href="/" passHref key="home">
            <ListItem sx={{ my: 1 }} button onClick={handleClose}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText
                primary="HOME"
                primaryTypographyProps={{ fontWeight: "bold" }}
              />
            </ListItem>
          </Link>
          <Divider />
          {topics.map((topic) => (
            <Link href={topic.url} passHref key={topic.name}>
              <ListItem button onClick={handleClose}>
                <ListItemIcon>
                  <Image src={topic.img} height={30} width={30} />
                </ListItemIcon>
                <ListItemText
                  primary={topic.name}
                  primaryTypographyProps={{ noWrap: true }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </_Drawer>
  );
}
