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
<<<<<<< HEAD
			qrResult: null,
=======
			fetchedUser: null,
			fileUpload: null
>>>>>>> 84f278f17b3abc831bd9fb56eb49512fcaa0f25b
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

	handle = (e) => {
		e.preventDefault();
		this.setState({ fileUpload: e.target.value });
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
<<<<<<< HEAD
				<Home id="home" go={this.go} />
=======
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} handle={this.handle} />
>>>>>>> 84f278f17b3abc831bd9fb56eb49512fcaa0f25b
				<Persik id="persik" go={this.go} />
			</View>
		);
	}
}

export default App;
