import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const useAlert = () => {
    const { setAlert } = useContext(AppContext);
    return (message) => setAlert(message);
};

export default useAlert;
