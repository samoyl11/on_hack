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
import Clock from './Clock.js';

const osname = platform();
function FormattedDate(props) {
  return <h2>long: {props.data.long}, lat: {props.data.lat}.</h2>
}

class Geo_online extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 111,
      available: 0,
      lat: 0,
      long: 0,
    };
    // this.state = {date: new Date()};
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
    connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGeodataResult':
					this.setState({ available: e.detail.data.available,
            lat: e.detail.data.lat,
            long: e.detail.data.long});
					break;
				default:
					console.log(e.detail.type);
			}
		});
    connect.send("VKWebAppGetGeodata", {});
  }

  render() {
    return (
      <div>
        <h1>Твое время:</h1>
        <FormattedDate data = {this.state} />
      </div>
    );
  }
}

export default Geo_online;
