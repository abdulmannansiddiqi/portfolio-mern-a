import { useState, useRef, useEffect } from 'react';

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Abdul Mannan's AI assistant. Ask me about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const newMessages = [...messages, { role: 'user', text: trimmed }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessages([...newMessages, { role: 'bot', text: data.reply }]);
      } else {
        setMessages([...newMessages, { role: 'bot', text: "Sorry, I couldn't process that. Please try again." }]);
      }
    } catch (error) {
      setMessages([...newMessages, { role: 'bot', text: "Connection error. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Ask about Abdul Mannan</span>
            <button onClick={() => setOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div className={`chat-msg ${msg.role}`} key={i}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="chat-msg bot typing">
                <span></span><span></span><span></span>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>
          <div className="chat-input-row">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button onClick={sendMessage} disabled={loading}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}

      <button className="chat-float" onClick={() => setOpen(!open)}>
        <i className={open ? 'fas fa-times' : 'fas fa-robot'}></i>
      </button>
    </>
  );
}

export default ChatWidget;