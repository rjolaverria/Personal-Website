import { useState, useEffect } from 'react';
import { get } from 'axios';

const useRepos = () => {
    const [repos, setRepos] = useState([]);
    const featured = [
        'CutHub',
        'Netflix-Clone', 
        'Personal-Website',
        'rockpaperscissors', 
        'Trackit', 
        'WeddingBarbers.com'];

    useEffect(() => {
        get('https://api.github.com/users/rjolaverria/repos').then((res) =>
            setRepos(res.data.filter(repo=> featured.includes(repo.name)))
        );
    }, []);

    return repos;
};

export default useRepos;
