import TopicAbstract from "@components/TopicAbstract";
import { updateConfig } from "@lib/gameOfLife/config";
import { draw, mouseClicked, setup } from "@lib/gameOfLife/sketch";
import { useTopic } from "@lib/hooks";
import { Topic } from "@lib/topics";
import LaunchIcon from "@mui/icons-material/Launch";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SpeedIcon from "@mui/icons-material/Speed";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

const Sketch = dynamic(import("react-p5"), { ssr: false });

const GameOfLife: NextPage = () => {
  const topic = useTopic();

  return (
    <Grid
      container
      direction="column"
      rowSpacing={2}
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item xs>
        <TopicAbstract topic={topic!} />
      </Grid>

      <Grid item xs>
        <Explanation />
      </Grid>

      <Grid item xs>
        <Game />
      </Grid>

      <Grid item xs>
        <References topic={topic!} />
      </Grid>
    </Grid>
  );
};

export default GameOfLife;

const Explanation = () => {
  return (
    <Grid
      container
      direction="column"
      rowSpacing={2}
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item xs>
        <Typography variant="h6">Explanation & Rules</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body2">
          The game is simple, it consist in only 3 rules and it requires no
          input when playing. The rules are as follows:
        </Typography>
        <Typography variant="subtitle2">Rule 1:</Typography>
        <Typography variant="body2">
          If a cell is alive and it has one or no neighbors the cell dies, as if
          by solitude.
        </Typography>
        <Typography variant="subtitle2">Rule 2:</Typography>
        <Typography variant="body2">
          If a cell is alive and it has four or more neighbors the cell dies, as
          if by overpopulation.
        </Typography>
        <Typography variant="subtitle2">Rule 3:</Typography>
        <Typography variant="body2">
          If a cell is dead and it has exactly three neighbors the cell becomes
          alive.
        </Typography>
        <Typography variant="body2">
          In any other case the cell stays as it is.
        </Typography>
      </Grid>
    </Grid>
  );
};

const Game = () => {
  return (
    <Grid
      container
      direction="column"
      columnSpacing={2}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs>
        <Typography variant="h6">Play</Typography>
      </Grid>
      <Grid
        item
        xs
        container
        direction="row"
        columnSpacing={2}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs="auto">
          <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} />
        </Grid>
        <Grid item xs>
          <ControlPanel />
        </Grid>
      </Grid>
    </Grid>
  );
};

const ControlPanel = () => {
  const [config, setConfig] = useState(updateConfig({}));
  return (
    <Grid
      container
      direction="column"
      rowSpacing={2}
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item xs>
        <Button
          variant="contained"
          disableRipple
          fullWidth
          color={config.play ? "error" : "success"}
          onClick={(e) => {
            const newConfig = updateConfig({
              play: !config.play,
            });
            setConfig(newConfig);
          }}
          startIcon={config.play ? <PauseIcon /> : <PlayArrowIcon />}
        >
          {config.play ? "Pause" : "Start"} simulation
        </Button>
      </Grid>
      {/* <Grid item xs>
        <Button
          variant="outlined"
          color="inherit"
          onClick={(e) => {
            const newConfig = updateConfig({
              play: !config.play,
            });
            setConfig(newConfig);
            const newConfig2 = updateConfig({
              play: !newConfig.play,
            });
            setConfig(newConfig2);
          }}
          startIcon={<SkipNextIcon />}
        >
          Next state
        </Button>
      </Grid> */}
      <Grid item xs>
        <Stack direction="row" spacing={2} sx={{ mb: 1 }} alignItems="center">
          <SpeedIcon />
          <Slider
            min={1}
            defaultValue={10}
            max={30}
            color="secondary"
            valueLabelFormat={(val) => "Simulation speed: " + val}
            valueLabelDisplay="auto"
            onChange={(_, value) => {
              const newConfig = updateConfig({
                frameRate: value as number,
              });
              setConfig(newConfig);
            }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

const References = ({ topic }: { topic: Topic }) => {
  return (
    <Grid
      container
      direction="column"
      rowSpacing={2}
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item xs>
        <Typography variant="h6">References & Interesting articles</Typography>
      </Grid>
      <Grid item xs>
        <Paper variant="outlined">
          <List>
            {topic.references.map((reference) => (
              <ListItem key={reference.title}>
                <IconButton href={reference.url} sx={{ mr: 2 }} target="_blank">
                  <LaunchIcon />
                </IconButton>
                <ListItemText primary={reference.title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};
