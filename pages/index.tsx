import TopicList from "@components/TopicList";
import topics from "@lib/topics";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Grid
      container
      direction="column"
      rowSpacing={2}
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item xs>
        <Paper sx={{ p: 2 }}>
          <Typography variant="body1">
            This website is my personal math playground. It contains
            math-related things (simulations mainly) that I find interesting to
            make or learn about. This is NOT an educational website, it was made
            solely for the purpose of learning about certain topics, so bare in
            mind that it may contain bugs or mathematical inaccuracies. But
            please if you find one let me now{" "}
            <Link href="https://github.com/rbestardpino/math/issues" passHref>
              here
            </Link>
            . If you want to learn about any of these topics please refere to
            the bibliography or just Google it.
          </Typography>
        </Paper>
      </Grid>
      <TopicList topics={topics} />
    </Grid>
  );
};

export default Home;

