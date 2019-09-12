import React from 'react';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Scaner from './panels/QrScaner';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fileUpload: null
		};
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
				<Home id="home" go={this.go} handle={this.handle} />
				<Scaner id="scaner" go={this.go} />
			</View>
		);
	}
}

export default App;
