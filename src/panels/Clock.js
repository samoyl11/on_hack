import React from 'react';
import connect from '@vkontakte/vk-connect';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, Group,Cell, PanelHeader, HeaderButton,
  ListItem, Tabs, TabsItem, HorizontalScroll,
  Counter, platform, IOS} from '@vkontakte/vkui';
import './Persik.css';
import persik from '../img/persik.png';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';

const osname = platform();
function FormattedDate(props) {
  return <h2>lihsdgl {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Твое время:</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;
