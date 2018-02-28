import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Icon, Image, Grid, GridColumn, List} from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className="topmenu">
        <Container>
          <Menu.Item fitted><Image src="http://murphyshawaii.com/media/2014/04/murphyshawaii.png"></Image></Menu.Item>
          <Menu.Item fitted position="right">Home</Menu.Item>
          <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>Getting here/ Parking</Dropdown.Item>
                <Dropdown.Item>Catering and Private events</Dropdown.Item>
                <Dropdown.Item>Upcoming events</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          <Menu.Item fitted>St. Patrick's Day</Menu.Item>
          <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>Lunch Menu</Dropdown.Item>
                <Dropdown.Item>Dinner Menu</Dropdown.Item>
                <Dropdown.Item>Desserts</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          <Menu.Item fitted>Bar</Menu.Item>
          <Menu.Item><Icon name="search"/></Menu.Item>
        </Container>
      </Menu>
    );
  }
}

class MiddleSection extends React.Component {
  render() {
    return (
      <footer className="grad-background">
        <Container>
          <Grid centered columns="2">
              <GridColumn>
                <Image src="http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"></Image>
              </GridColumn>
              <GridColumn>
                <div className="midtext">
                A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.
                </div>
              </GridColumn>
          </Grid>
        </Container>
      </footer>
    );
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <footer className="green-background">
          <Container>
            <Grid centered columns="3">
                <GridColumn>
                  <List>
                    Lunch
                    <hr/>
                    <List.Item>Monday-Friday: 11:00am - 2:30pm</List.Item>
                    <List.Item>Saturday-Sunday: Not open for lunch</List.Item>
                  </List>
                </GridColumn>
                <GridColumn>
                  <List>
                    Bar
                    <hr/>
                    <List.Item>Monday-Friday from 11:00am</List.Item>
                    <List.Item>Saturday-Sunday from 4:00pm</List.Item>
                  </List>
                </GridColumn>
              <GridColumn>
                <List>
                  Dinner
                  <hr/>
                  <List.Item>Monday-Saturday: 5:30pm to 10:00pm</List.Item>
                  <List.Item>Sunday: 5:00pm to 9:30pm</List.Item>
                </List>
              </GridColumn>
            </Grid>
          </Container>
        </footer>


    );
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleSection/>
          <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
