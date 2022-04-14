import { Topic } from "@lib/topics";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface Props {
  topic: Topic;
}

export default function TopicAbstract({ topic }: Props) {
  return (
    <Grid
      item
      xs
      container
      direction="row"
      columnSpacing={2}
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid
        item
        xs
        container
        direction="column"
        rowSpacing={2}
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs>
          <Typography variant="h3">{topic.name}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1">{topic.description}</Typography>
        </Grid>
      </Grid>
      <Grid item xs="auto">
        <Image src={topic.img} width={150} height={150} />
      </Grid>
    </Grid>
  );
}
