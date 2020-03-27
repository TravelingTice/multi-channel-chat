import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChannelList from './containers/ChannelList';
import MessageList from './containers/MessageList';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs="3">
          <ChannelList />
        </Col>

        <Col xs="9">
          <MessageList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
