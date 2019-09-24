import React from 'react';
import connect from '@vkontakte/vk-connect';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, Group,Cell, PanelHeader, HeaderButton, ListItem, platform, IOS} from '@vkontakte/vkui';
import './Persik.css';
import persik from '../img/persik.png';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';

const osname = platform();

class Geo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: 111,
      available: 0,
      lat: 0,
      long: 0,
    };
    /*this.state = {
      props: props,
      qrData: 111,
      qrType: 111,
    };*/
  }

  componentDidMount() {
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

  render(){
    return (
      <Panel id={this.props.id}>
    		<PanelHeader
    			left={<HeaderButton onClick={this.props.go} data-to="home">
    				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
    			</HeaderButton>}
    		>
    			Ну шо?
    		</PanelHeader>

        <Group title="QR Data Fetched with VK Connect">
          {<Cell>
            {`Ты тут ${this.state.lat}`}
          </Cell>}
        </Group>
        {this.props.player}
    	</Panel>
    );
  }
}

Geo.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Geo;
