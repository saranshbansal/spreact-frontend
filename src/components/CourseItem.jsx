import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

class CourseItem extends Component {
  render() {
    const { course } = this.props;

    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {course.id}
            </Typography>
            <Typography>{course.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Info
            </Button>
            <Button size="small" color="secondary">
              Enroll
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default CourseItem;
