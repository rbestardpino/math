import TopicAbstract from "@components/TopicAbstract";
import TopicList from "@components/TopicList";
import { useTopic } from "@lib/hooks";
import Grid from "@mui/material/Grid";
import { NextPage } from "next";

const Chaos: NextPage = () => {
  const topic = useTopic();
  return (
    <Grid
      container
      direction="column"
      rowSpacing={2}
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item xs>
        <TopicAbstract topic={topic} />
      </Grid>
      <TopicList topics={topic.suptopics!} />
    </Grid>
  );
};

export default Chaos;
