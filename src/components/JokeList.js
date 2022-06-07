import React, { Component } from "react";
import axios from "axios";
import { Container, Grid, Segment, Loader } from "semantic-ui-react";
import ReactHtmlParser from "react-html-parser";

class JokeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
      loaded: false
    };
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://api.icndb.com/jokes/random/100');

      this.setState({
        jokes: response.data.value,
        loaded: true
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { jokes, loaded } = this.state;

    return (
      <Container className="joke-container" style={{ width: "570px" }}>
        {!loaded && (
          <Loader active inline="centered">
            Loading
          </Loader>
        )}
        <Grid style={{ paddingTop: "20px" }} columns={1} container>
          {jokes.map(joke => (
            <Grid.Column key={joke.id}>
              <Segment className="joke-box">
                <p className="joke-txt">{ReactHtmlParser(joke.joke)}</p>
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default JokeList;
