import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import Appbar from "./Appbar";

const useStyles = {
  container: {
    padding: '15px',
  },
};

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.refreshCourses = this.refreshCourses.bind(this);
  }

  state = {
    courses: []
  };

  componentDidMount() {
    this.refreshCourses();
  }

  async refreshCourses() {
    const INSTRUCTOR = "sbansal";
    const COURSE_API_URL = "http://localhost:8080";
    const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;

    try {
      const response = await fetch(`${INSTRUCTOR_API_URL}/courses`);
      const responseJson = await response.json();

      this.setState({
        courses: responseJson
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { courses } = this.state;

    return (
      <React.Fragment>
        <Appbar />
        <main>
          <div style={useStyles.container}>
            <Grid container direction="row" spacing={2}>
              {courses.map(course => (
                <Grid item key={course.id} xs={12} sm={6} md={4}>
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
              ))}
            </Grid>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default CourseList;
