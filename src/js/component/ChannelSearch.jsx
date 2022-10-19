import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';

export const ChannelSearch = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const getChannels = async (text) => {
    try {
    } catch (error) {
        setQuery('')
    }
  }

  const onSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value)
}
  return (
    <div className='channel-search__container'>
      <div className='channel-search__input__wrapper'>
          <div className='channel-serach__input__icon'>
              <CiSearch />
          </div>
          <input 
              className='channel-search__input__text' 
              placeholder='Search' 
              type='text' 
              value={query}  
              onChange={onSearch}
          />
      </div>
    </div>
  )
}
