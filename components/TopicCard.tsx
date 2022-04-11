import { Topic } from "@lib/topics";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface Props {
  topic: Topic;
}

export default function TopicCard({ topic }: Props) {
  return (
    <CardActionArea href={topic.url}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Grid
          container
          direction="row"
          columnSpacing={2}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs="auto">
            <Image src={topic.img} width={100} height={100}></Image>
          </Grid>
          <Grid
            item
            xs
            container
            direction="column"
            rowSpacing={1}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs>
              <Typography variant="h4">{topic.name}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2">{topic.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </CardActionArea>
  );
}
