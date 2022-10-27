import React from 'react'
import { StreamChat } from 'stream-chat'
import Chat from 'stream-chat-react'
import Cookies from 'universal-cookie'

const apiKey = 'rgdxn7gh6vxu'

const client = StreamChat.getInstance(apiKey);

const Home = () => {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default Home