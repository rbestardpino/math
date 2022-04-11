import BugReportIcon from "@mui/icons-material/BugReport";
import GitHubIcon from "@mui/icons-material/GitHub";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function Footer() {
  return (
    <AppBar position="sticky">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        textAlign="center"
      >
        <Grid item xs>
          <Tooltip title="Github repo">
            <IconButton
              href="https://github.com/rbestardpino/math"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs>
          <Tooltip title="Report a bug">
            <IconButton
              href="https://github.com/rbestardpino/math/issues"
              target="_blank"
            >
              <BugReportIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </AppBar>
  );
}
