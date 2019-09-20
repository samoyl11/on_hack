// import 'core-js/es6/map';
// import 'core-js/es6/set';
import React from 'react';
import connect from '@vkontakte/vkui-connect';
import '@vkontakte/vkui/dist/vkui.css';
import { ModalRoot, Panel, ListItem, List, HeaderButton, SelectMimicry, FixedLayout, Tabs, TabsItem, FormLayoutGroup, Cell, InfoRow, ModalPage, View, ModalPageHeader, Radio, Button, FormLayout, Group, Input, Checkbox, Div, Avatar, PanelHeader,  platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Home from './panels/Home';
import Scaner from './panels/QrScaner';
import Audio from './panels/Audio';
import Player from './panels/Player';

const MODAL_PAGE_MUSIC = 'music';

const osname = platform();
const IS_PLATFORM_ANDROID = osname != IOS;
const IS_PLATFORM_IOS = osname != IOS;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			activeModal: null,
			modalHistory: []
		};

		this.modalBack = () => {
			this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
		};
	}

	setActiveModal(activeModal) {
		activeModal = activeModal || null;
		let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

		if (activeModal === null) {
			modalHistory = [];
		} else if (modalHistory.indexOf(activeModal) !== -1) {
			modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
		} else {
			modalHistory.push(activeModal);
		}

		this.setState({
			activeModal,
			modalHistory
		});
	};


	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		const modal = (
			<ModalRoot activeModal={this.state.activeModal}>
				<ModalPage
					id={MODAL_PAGE_MUSIC}
					onClose={this.modalBack}
					header={
						<ModalPageHeader
							left={IS_PLATFORM_ANDROID && <HeaderButton onClick={this.modalBack}><Icon24Cancel /></HeaderButton>}
							right={<HeaderButton onClick={this.modalBack}>{IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}</HeaderButton>}
						>
							Фильтры
						</ModalPageHeader>
					}
				>
					<Player />
				</ModalPage>
			</ModalRoot>
		);
		const audioPlayer = (
			<Group>
				<FixedLayout vertical="bottom">
					<Button size="xl" level="secondary" onClick={() => this.setActiveModal(MODAL_PAGE_MUSIC)}>
							Открыть модальную страницу
					</Button>
				</FixedLayout>
			</Group>
		);

		return (
			<View activePanel={this.state.activePanel} modal={modal}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} player={audioPlayer}/>
				<Scaner id="scaner" go={this.go} player={audioPlayer}/>
				<Audio id="audio" go={this.go} player={audioPlayer}/>
			</View>
		);
	}
}

export default App;
