import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setChannels, setSelectedChannel } from '../actions';

const ListContainer = styled.div`
  padding: 20px;
`;

const Ul = styled.ul`

`;

const MenuItem = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
  &.active {
    background-color: rgba(255,255,255,.1);
  }
  &:hover {
    background-color: rgba(255,255,255,.1);
  }
`;

class ChannelList extends React.Component {
  componentDidMount() {
    this.props.setChannels();
  }

  render () {
    const { channels, selectedChannel, setSelectedChannel } = this.props;
    return (
      <ListContainer>
        <h3>Channels</h3>
        <Ul>
          {channels.map(channel => (
            <MenuItem 
              key={channel.id}
              onClick={() => setSelectedChannel(channel)}
              className={channel === selectedChannel}>
                # {channel.name}
            </MenuItem>
          ))}
        </Ul>
      </ListContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setChannels, setSelectedChannel }, dispatch);
}

function mapStateToProps(state) {
  return { 
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
