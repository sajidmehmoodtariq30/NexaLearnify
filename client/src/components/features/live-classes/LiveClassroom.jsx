import { useState } from 'react';
import { Button } from '../../ui/button';

const LiveClassroom = ({ classId, userRole = 'STUDENT' }) => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [participants, setParticipants] = useState([
    { id: 1, name: 'Prof. Smith', role: 'TEACHER', video: true, audio: true },
    { id: 2, name: 'John Doe', role: 'STUDENT', video: true, audio: false },
    { id: 3, name: 'Sarah Johnson', role: 'STUDENT', video: false, audio: true },
    { id: 4, name: 'Mike Wilson', role: 'STUDENT', video: true, audio: true }
  ]);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'Prof. Smith', message: 'Welcome to today\'s session!', timestamp: '10:00 AM' },
    { id: 2, sender: 'John Doe', message: 'Thank you professor!', timestamp: '10:01 AM' },
    { id: 3, sender: 'Sarah Johnson', message: 'Can you share the slides?', timestamp: '10:02 AM' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showChat, setShowChat] = useState(true);
  const [showParticipants, setShowParticipants] = useState(true);

  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const toggleAudio = () => setIsAudioOn(!isAudioOn);
  const toggleScreenShare = () => setIsScreenSharing(!isScreenSharing);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        sender: 'You',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  const leaveClass = () => {
    console.log('Leaving class...');
    // Implement leave class logic
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Advanced JavaScript - Live Session</h1>
          <p className="text-sm text-gray-300">Prof. Smith • {participants.length} participants</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-green-400">● LIVE</span>
          <span className="text-sm text-gray-300">45:32</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Video Area */}
        <div className="flex-1 relative">
          {/* Main Video/Screen */}
          <div className="w-full h-full bg-black flex items-center justify-center relative">
            {isScreenSharing ? (
              <div className="text-white text-center">
                <div className="text-4xl mb-4">🖥️</div>
                <p>Screen being shared</p>
              </div>
            ) : (
              <div className="text-white text-center">
                <div className="text-4xl mb-4">🎥</div>
                <p>Main Video Feed</p>
              </div>
            )}
            
            {/* Self Video (Picture-in-Picture) */}
            <div className="absolute bottom-4 right-4 w-48 h-32 bg-gray-700 rounded-lg flex items-center justify-center">
              {isVideoOn ? (
                <div className="text-white text-center">
                  <div className="text-2xl mb-2">😊</div>
                  <p className="text-xs">You</p>
                </div>
              ) : (
                <div className="text-white text-center">
                  <div className="text-2xl mb-2">📷</div>
                  <p className="text-xs">Camera Off</p>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant={isAudioOn ? "outline" : "destructive"}
                size="sm"
                onClick={toggleAudio}
                className="rounded-full w-12 h-12 p-0"
              >
                {isAudioOn ? '🎤' : '🔇'}
              </Button>
              
              <Button
                variant={isVideoOn ? "outline" : "destructive"}
                size="sm"
                onClick={toggleVideo}
                className="rounded-full w-12 h-12 p-0"
              >
                {isVideoOn ? '📹' : '📷'}
              </Button>
              
              {userRole === 'TEACHER' && (
                <Button
                  variant={isScreenSharing ? "default" : "outline"}
                  size="sm"
                  onClick={toggleScreenShare}
                  className="rounded-full w-12 h-12 p-0"
                >
                  🖥️
                </Button>
              )}
              
              <Button
                variant="destructive"
                size="sm"
                onClick={leaveClass}
                className="rounded-full w-12 h-12 p-0"
              >
                📞
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          {/* Sidebar Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setShowParticipants(true)}
                className={`flex-1 py-3 px-4 text-sm font-medium ${
                  showParticipants ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'
                }`}
              >
                Participants ({participants.length})
              </button>
              <button
                onClick={() => setShowParticipants(false)}
                className={`flex-1 py-3 px-4 text-sm font-medium ${
                  !showParticipants ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'
                }`}
              >
                Chat
              </button>
            </div>
          </div>

          {/* Participants Panel */}
          {showParticipants && (
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-3">
                {participants.map((participant) => (
                  <div key={participant.id} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">
                        {participant.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{participant.name}</p>
                      <p className="text-xs text-gray-500">{participant.role}</p>
                    </div>
                    <div className="flex space-x-1">
                      <span className={`text-xs ${participant.audio ? 'text-green-500' : 'text-red-500'}`}>
                        {participant.audio ? '🎤' : '🔇'}
                      </span>
                      <span className={`text-xs ${participant.video ? 'text-green-500' : 'text-red-500'}`}>
                        {participant.video ? '📹' : '📷'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chat Panel */}
          {!showParticipants && (
            <div className="flex-1 flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((message) => (
                  <div key={message.id} className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-gray-900">{message.sender}</span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-700">{message.message}</p>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <Button size="sm" onClick={sendMessage}>
                    Send
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveClassroom;
