import React, { useState } from 'react';
import { useResultContext } from '../context/ResultContextProvider';

const Input = () => {

    const { getRepos, getUser } = useResultContext();
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getUser(username);
        getRepos(username);
        setUsername('');
    }

    return (
        <form className='nirban-github-profile-form' onSubmit={handleSubmit} >
            <input tabIndex={0} autoFocus value={username} required placeholder="Search Username" onChange={(e) => setUsername(e.target.value)} className="nirban-github-profile-search" />
            <button type="submit" className="nirban-github-profile-btn">
                Search
            </button>
        </form>
    )
}

export default Input