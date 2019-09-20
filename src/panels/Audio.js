import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, Group, Button, Div, platform, IOS} from '@vkontakte/vkui';
import persik from '../img/persik.png';
import { ReactMic } from '@cleandersonlobo/react-mic';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import soundfile from '../audio/miyagi.mp3';

const osname = platform();

export class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
			props: props,
    }

  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onData(recordedBlob) {
    // console.log('chunk of real-time data is: ', recordedBlob);
		return null;
  }

  onStop(recordedBlob) {
    // console.log('recordedBlob is: ', recordedBlob);
		return null;
  }

  render() {
    return (
			<Panel id={this.state.props.id}>
				<PanelHeader
					left={<HeaderButton onClick={this.state.props.go} data-to="home">
						{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
					</HeaderButton>}
				>
					Persik
				</PanelHeader>
				<img className="Persik" src={persik} alt="Persik The Cat"/>
				<Group title="Voice Recorder">
					<Div>
						<ReactMic
							record={this.state.record}
							className="sound-wave"
							onStop={this.onStop}
							onData={this.onData}
							width = "200"
							strokeColor="#000000"
							backgroundColor="#335E8F" />
						<Div>
							<Button size="xl" level="2" onClick={this.startRecording} type="button">Start</Button>
						</Div>
						<Div>
							<Button size="xl" level="2" onClick={this.stopRecording} type="button">Stop</Button>
						</Div>
					</Div>
				</Group>
        {this.props.player}
			</Panel>
    );
  }
}

Audio.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Audio;
