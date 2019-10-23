import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import CourseItem from "../components/CourseItem";
import CoursesAppBar from "./CoursesAppBar";

const useStyles = {
  container: {
    padding: "15px"
  }
};

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.refreshCourses = this.refreshCourses.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  state = {
    count: 5,
    offset: 0,
    loadingState: false,
    courses: []
  };

  componentDidMount() {
    const { offset, count } = this.state;

    const courselist = this.refreshCourses(offset, count);

    this.setState({
      courses: courselist,
      loadingState: false
    });

    window.addEventListener("scroll", this.onScroll);
  }

  onScroll() {
    const { offset, count } = this.state;

    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;

    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 1) {
      console.log("at the bottom");
      this.refreshCourses(offset + 1, count);

      //fetch new data (api call)and append to existing list
    } else {
      console.log("not at the bottom");
      //don’t do anything
    }
  }

  async refreshCourses(offset, count) {
    const { courses } = this.state;
    const hasCourses = !!courses && courses.length > 0;

    const INSTRUCTOR = "sbansal";
    const COURSE_API_URL = "http://localhost:8080";
    const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;

    try {
      const response = await fetch(
        `${INSTRUCTOR_API_URL}/courses?offset=${offset}&count=${count}`
      );
      const responseJson = await response.json();
      this.setState({
        courses: hasCourses
          ? Object.assign({}, courses, responseJson)
          : responseJson,
        loadingState: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  renderItem(course) {
    return <CourseItem key={course.id} course={course} />;
  }

  renderEmpty() {
    const { loadingState } = this.state;

    if (loadingState) return "Loading...";

    return "No Results!";
  }

  render() {
    const { courses } = this.state;
    const hasCourses = !!courses && courses.length > 0;

    return (
      <React.Fragment>
        <CoursesAppBar />
        <main>
          <div style={useStyles.container}>
            {!hasCourses && this.renderEmpty()}

            {hasCourses && (
              <Grid container direction="column" spacing={2}>
                {courses.map(course => this.renderItem(course))}
              </Grid>
            )}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default CourseList;
