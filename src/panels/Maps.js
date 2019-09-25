import React from 'react';
import connect from '@vkontakte/vk-connect';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, Div, Group,Cell, PanelHeader, HeaderButton, ListItem, platform, IOS} from '@vkontakte/vkui';
import './Persik.css';
import persik from '../img/persik.png';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';
import Clock from './Clock'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const osname = platform();

function FormattedGeo(props) {
  return <Div> long: {props.data.long}, lat: {props.data.lat}. </Div>
}

class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstEntry: true, // Решает баг с постоянно всплывающим предложением разрешить доступ к гео
      lat: 0,
      long: 0,
      currentGeo: null,
      coordinates: null,
    };

    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGeodataResult':
          this.setState({
            lat: e.detail.data.lat,
            long: e.detail.data.long,
            firstEntry: false,
            currentGeo : { center: [e.detail.data.lat, e.detail.data.long], zoom: 15 },
            coordinates : [[e.detail.data.lat, e.detail.data.long]],
          });
          break;
        default:
          console.log("error");
      }
      connect.send("VKWebAppGetGeodata", {});
    });

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
    connect.send("VKWebAppGetGeodata", {});
  }


  render(){
    return (
      <Panel id={this.props.id}>
      <PanelHeader
       left={<HeaderButton onClick={this.props.go} data-to="home">
        {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
       </HeaderButton>}
      >
      Время и Гео1
      </PanelHeader>

        <Group title="Map Fetched from Yandex API">
          <Clock/>
          {this.state.currentGeo && <FormattedGeo data = {this.state} />}
          {this.state.currentGeo && <YMaps>
            <Div>
              <Map defaultState={this.state.currentGeo}>
                {this.state.coordinates.map(coordinate => (<Placemark geometry={coordinate} />))}
              </Map>
            </Div>
          </YMaps>}
        </Group>
        {this.props.player}
     </Panel>
    );
  }
}

export default Maps;
