import React from "react";
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
/* import Cookies from 'universal-cookie'; */

import { ChannelListContainer } from '../component/ChannelListContainer.jsx';
import { ChannelContainer } from '../component/ChannelContainer.jsx';

import 'stream-chat-react/dist/css/index.css';
import "../../styles/home.css";

const apiKey = 'rgdxn7gh6vxu';
const client = StreamChat.getInstance(apiKey);

export const Home = () => (
	<div className="app__wrapper">
		<Chat client={client} theme="team light">
				<ChannelListContainer 
						
				/>
				<ChannelContainer 
					
				/>
		</Chat>
	</div>
);
