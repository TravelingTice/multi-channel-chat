import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import ChannelList from './containers/ChannelList';
import MessageList from './containers/MessageList';

const LeftPanel = styled(Col)`
  background-color: #3D3B3C;
  min-height: 100vh;
`;

const RightPanel = styled(Col)`
  min-height: 100vh;
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
        </RightPanel>
      </Row>
    </Container>
  );
}

export default App;
