import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import ChannelList from './containers/ChannelList';
import MessageList from './containers/MessageList';
import SendMessage from './containers/SendMessage';

const LeftPanel = styled(Col)`
  background-color: #3D3B3C;
  min-height: 100vh;
`;

const RightPanel = styled(Col)`
  display: grid;
  grid-template-rows: 1fr 50px;
  min-height: 100vh;
  padding: 20px;
`;

const App = () => {
  return (
    <Container fluid>
      <Row>
        <LeftPanel xs="3">
          <ChannelList />
        </LeftPanel>

        <RightPanel xs="9">
          <MessageList />
          <SendMessage />
        </RightPanel>
      </Row>
    </Container>
  );
}

export default App;
