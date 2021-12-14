import { useState } from "react";
import axios from "axios";

const projectID = "1d88115f-be93-4247-83c6-a1f92235f217";

const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const hadleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
            setError('');
        } catch (err) {
            setError('Invalid Credentials');
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat Application
                </h1>
                <form onSubmit={hadleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="UserName" required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    )

}




export default LoginForm;