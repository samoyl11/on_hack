import React from 'react';
import PropTypes from 'prop-types';
import { Panel, Group, Div, Avatar, PanelHeader, View, CellButton, ListItem, Button, File, FormLayout } from '@vkontakte/vkui';


const Home = ({ id, go, fetchedUser, handle }) => (
		<Panel id={id}>
			<PanelHeader>Photo2Text</PanelHeader>
			<Group>
				<Div>
					<FormLayout>
						<File size="xl" level="secondary" onChange={handle} />
					</FormLayout>
				</Div>
				<Div>
					<Button top="Галерея" size="xl" level="2" onClick={go} data-to="persik">
						Галерея
					</Button>
				</Div>
			</Group>
		</Panel>
);

export default Home;
