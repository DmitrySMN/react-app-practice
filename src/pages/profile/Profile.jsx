import { useEffect, useState } from 'react';
import CurrentUser from '../../service/CurrentUser'
import axios from 'axios';


const Profile = () => {
    
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            // const response = await CurrentUser.getCurrentUserData();
            // console.log(response);
            // const user = response.data;
            const authHeader = 'Bearer ' + localStorage.getItem('token');
            console.log(authHeader);
            const response = await axios.get('http://localhost:3000/api/users/me', {headers: {authorization: authHeader}});
            const user = response.data;
            setUser(user);
            console.log(response);
        }
        fetchData();
    }, []);

    
    return (
        <>
        <h2>Вы авторизованы как {user.username}</h2>
        </>
    );
}

export default Profile;