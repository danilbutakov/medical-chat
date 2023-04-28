import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components/index.js';
import './App.css';

const client = StreamChat.getInstance(import.meta.env.API_KEY);

function App() {
	return (
		<div className={'app__wrapper'}>
			<Chat client={client} theme={'teal light'}>
				<ChannelListContainer />
				<ChannelContainer />
			</Chat>
		</div>
	);
}

export default App;
