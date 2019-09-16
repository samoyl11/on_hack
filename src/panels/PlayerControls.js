import React from 'react';
import Sound from 'react-sound';
import {Panel, PanelHeader, HeaderButton, Group, Cell, Link, Button, Slider, List, Div, platform, Checkbox, View, FormLayout, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon48Pause from '@vkontakte/icons/dist/48/pause';
import Icon48Play from '@vkontakte/icons/dist/48/play';
import Icon36Cancel from '@vkontakte/icons/dist/36/cancel';

function control(text, clickHandler) {
  const onClick = ev => {
    ev.preventDefault();
    clickHandler();
  };
  return (
    <Group>
      <List>
        <Link href="#" onClick={onClick}>
          {text}
        </Link>
      </List>
    </Group>
  );
}

const numberFormat = new Intl.NumberFormat([], { minimumFractionDigits: 2 });

export default class PlayerControls extends React.Component {
  render() {
    return <Div>{this.renderControls()}</Div>;
  }

  renderControls() {
    const controls = {
      play: this.props.playStatus === Sound.status.STOPPED,
      stop: this.props.playStatus !== Sound.status.STOPPED,
      pause: this.props.playStatus === Sound.status.PLAYING,
      resume: this.props.playStatus === Sound.status.PAUSED
    };

    return (
      <Div>
        <List>
          {controls.play && <Cell before={<Icon48Play width={20} hight={20}/>}>{control('Play', this.props.onPlay)}</Cell>}
          {controls.stop && <Cell before={<Icon48Pause width={20} hight={20}/>}>{control('Stop', this.props.onStop)}</Cell>}
          {controls.pause && <Cell before={<Icon48Pause width={20} hight={20}/>}>{control('Pause', this.props.onPause)}</Cell>}
          {controls.resume && <Cell before={<Icon48Play width={20} hight={20}/>}>{control('Resume', this.props.onResume)}</Cell>}
        </List>
        <FormLayout>
          <Checkbox checked={this.props.loop} onChange={this.props.onToggleLoop}> Loop?</Checkbox>
        </FormLayout>
      </Div>
    );
  }
}
