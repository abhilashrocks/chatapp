import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <div className="App">
      <ChatEngine height="100vh"
        projectID="1d88115f-be93-4247-83c6-a1f92235f217"
        userName="abhilash"
        userSecret="abhilash"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
      />
    </div>
  );
}

export default App;
