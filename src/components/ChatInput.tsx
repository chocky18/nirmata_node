export default function ChatInput() {
    return (
        <div className="chat-input">
            <button title="Upload image">📎</button>
            <button title="Take selfie">📷</button>

            <input placeholder="Ask Nira about your skin..." />

            <button className="send-btn">Send</button>
        </div>
    );
}
