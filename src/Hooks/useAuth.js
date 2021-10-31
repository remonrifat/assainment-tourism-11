import { useContext } from 'react';
import { MyContext } from '../Contexts/AuthProvider';

const useAuth = () => {
    return useContext(MyContext)
};

export default useAuth;