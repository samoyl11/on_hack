import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			qrResult: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppOpenQRResult':
					this.setState({ qrResult: e.detail.qr_data });
					console.log(e.detail.qr_data);
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppOpenQR');
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" go={this.go} />
				<Persik id="persik" go={this.go} />
			</View>
		);
	}
}

export default App;
