import { useState, useRef } from "react";
import { Send, ImagePlus, MessageCircle } from "lucide-react";

const conversations = [
  { id: 1, name: "Seller One", lastMessage: "Your order is confirmed!" },
  { id: 2, name: "Support", lastMessage: "How can we help you?" },
];

const ChatInterface = () => {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [messages, setMessages] = useState([
    { sender: "seller", text: "Hello! How can I help you?", type: "text" },
    { sender: "user", text: "I want to know about my order.", type: "text" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim() || selectedImage) {
      const newMsg = {
        sender: "user",
        text: newMessage,
        image: selectedImage,
        type: selectedImage ? "image" : "text",
      };
      setMessages((prev) => [...prev, newMsg]);
      setNewMessage("");
      setSelectedImage(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full max-w-7xl mx-auto mt-4 bg-white  rounded-lg overflow-hidden shadow-md mb-3">
      {/* Sidebar */}
      <aside className="hidden md:block w-1/4 border-r border-gray-400 bg-gray-50 p-4">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <MessageCircle className="w-5 h-5" /> Messages
        </h2>
        <ul className="space-y-2">
          {conversations.map((chat) => (
            <li
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-3 rounded-lg cursor-pointer hover:bg-gray-200 ${
                selectedChat.id === chat.id ? "bg-blue-100" : ""
              }`}
            >
              <h4 className="font-medium text-sm">{chat.name}</h4>
              <p className="text-xs text-gray-600">{chat.lastMessage}</p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Window */}
      <main className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-blue-50 p-4  flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{selectedChat.name}</h3>
            <p className="text-sm text-green-500">Online</p>
          </div>
          <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
            {selectedChat.name.charAt(0)}
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-2xl px-4 py-2 max-w-xs shadow text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.type === "image" && (
                  <img src={msg.image} alt="sent" className="mb-1 max-w-full rounded-md" />
                )}
                {msg.text && <p>{msg.text}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="sticky bottom-0 bg-white  p-4 flex items-center gap-2">
          <button
            onClick={() => fileInputRef.current.click()}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <ImagePlus className="w-5 h-5 text-gray-600" />
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="hidden"
          />
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border border-gray-400 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ChatInterface;
