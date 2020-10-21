import { useState, useEffect } from 'react';
import { get } from 'axios';

const useRepos = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        get('https://api.github.com/users/rjolaverria/repos').then((res) =>
            setRepos(res.data)
        );
    }, []);
    return repos;
};

export default useRepos;
