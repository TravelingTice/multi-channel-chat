import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setChannels } from '../actions';

const Ul = styled.ul`

`;

const MenuItem = styled.li`

`;

class ChannelList extends React.Component {
  componentDidMount() {
    this.props.setChannels();
  }

  render () {
    const { channels } = this.props;
    return (
      <Ul>
        {channels.map(channel => (
          <MenuItem key={channel.id}>{channel.name}</MenuItem>
        ))}
      </Ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setChannels }, dispatch);
}

function mapStateToProps(state) {
  return { channels: state.channels }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
