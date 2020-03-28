import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import ChannelList from './containers/ChannelList';
import MessageList from './containers/MessageList';
import SendMessage from './containers/SendMessage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentUser } from './actions';

const LeftPanel = styled(Col)`
  background-color: #3D3B3C;
  min-height: 100vh;
`;

const RightPanel = styled(Col)`
  display: grid;
  grid-template-rows: 1fr 50px;
  height: 100vh;
  padding: 20px;
`;

class App extends React.Component {
  componentDidMount () {
    // ask user for name
    // const username = prompt("what is your name?");
    this.props.setCurrentUser('Tice');  
  }

  render () {
    return (
      <Container fluid>
        <Row>
          <LeftPanel xs="3">
            <ChannelList channelFromParams={this.props.match.params.channel} />
          </LeftPanel>

          <RightPanel xs="9">
            <MessageList channelFromParams={this.props.match.params.channel} />
              <SendMessage channelFromParams={this.props.match.params.channel} />
          </RightPanel>
        </Row>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCurrentUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
