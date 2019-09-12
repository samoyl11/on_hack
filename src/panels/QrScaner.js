import React from 'react';
import connect from '@vkontakte/vkui-connect';
import '@vkontakte/vkui/dist/vkui.css';
import {Panel, Group, Div, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
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
      qrResult: 111,
      qrType: 111,
      allData: 111
    };
  }

  // componentDidMount() {
  // 	connect.subscribe((e) => {
  // 		switch (e.detail.type) {
  // 			case 'VKWebAppOpenQRResult':
  // 				this.setState({
  //           qrResult: e.detail.qr_data,
  //           qrType: e.detail.type,
  //           allData: e.detail
  //         });
  // 				break;
  // 			default:
  // 				console.log(e.detail.type);
  // 		}
  // 	});
  //   connect.send('VKWebAppOpenQR');
  //   // if (connect.supports("VKWebAppOpenQR"))
  //   // {
  //   //     connect.send('VKWebAppOpenQR');
  //   // }
  // }

  render(){
    connect.subscribe((e) => {
  		switch (e.detail.type) {
  			case 'VKWebAppOpenQRResult':
  				this.setState({
            qrResult: e.detail.qr_data,
            qrType: e.detail.type,
            allData: e.detail
          });
  				break;
  			default:
  				console.log(e.detail);
  		}
  	});

    connect.send('VKWebAppOpenQR');
    console.log(this.allData);
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
        <Group>
          <Div>
              Persik The Cat {this.allData || 'Unknown'}
          </Div>
        </Group>
    	</Panel>
    );
  }
}

Scaner.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
};

export default Scaner;
