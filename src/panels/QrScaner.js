import React from 'react';
import connect from '@vkontakte/vk-connect';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, Group, PanelHeader, HeaderButton, ListItem, platform, IOS} from '@vkontakte/vkui';
import './Persik.css';
import persik from '../img/persik.png';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PropTypes from 'prop-types';

const osname = platform();

class Scaner extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      props: props,
      qrData: 111,
      qrType: 111,
    };
  }

  componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppOpenQRResult':
					this.setState({ qrData: e.detail.data.qr_data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
    connect.send('VKWebAppOpenQR');
	}

  render(){
    return (
      <Panel id={this.props.id}>
    		<PanelHeader
    			left={<HeaderButton onClick={this.props.go} data-to="home">
    				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
    			</HeaderButton>}
    		>
    			Persik
    		</PanelHeader>
    		<img className="Persik" src={persik} alt="Persik The Cat"/>
        <Group title="QR Data Fetched with VK Connect">
          {this.state.qrData && <ListItem>
            {`DDDATA ${this.state.qrData}`}
          </ListItem>}
        </Group>
        {this.props.player}
    	</Panel>
    );
  }
}

Scaner.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Scaner;
