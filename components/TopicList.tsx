import TopicCard from "@components/TopicCard";
import { Topic } from "@lib/topics";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {
  topics: Topic[];
}

export default function TopicList({ topics }: Props) {
  return (
    <>
      <Grid item xs>
        <Typography variant="h4">Topics</Typography>
      </Grid>
      {topics.map((topic) => (
        <Grid item xs key={topic.name}>
          <TopicCard topic={topic} />
        </Grid>
      ))}
    </>
  );
}
