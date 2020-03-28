import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setChannels } from '../actions';

const ListContainer = styled.div`
  padding: 20px;
`;

const Ul = styled.ul`

`;

const MenuItem = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
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
    const { channels, channelFromParams } = this.props;
    return (
      <ListContainer>
        <h3>Channels</h3>
        <Ul>
          {channels.map(channel => (
            <Link key={channel.id} to={`/${channel.name}`}>
              <MenuItem 
                className={(channel.name === channelFromParams) && 'active'}>
                  # {channel.name}
              </MenuItem>
            </Link>
          ))}
        </Ul>
      </ListContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setChannels }, dispatch);
}

function mapStateToProps(state) {
  return { 
    channels: state.channels
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
