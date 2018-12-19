import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

export default class NavBar extends Component {

  render() {
    return (
      <React.Fragment>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={12}><Header as="h1" color="red"><a href="/" id="logo">{'RUNANDRE'}</a></Header></Grid.Column>
            <Grid.Column width={4}>
            {'Portfolio'}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Header size="large" color="grey">{"PHOTOGRAPHY"}</Header>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}
