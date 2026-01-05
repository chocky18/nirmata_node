import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import QuickActions from "./QuickActions";
import ProductCard from "./ProductCard";
import ChatInput from "./ChatInput";

export default function Chat() {
    return (
        <div className="chat-container">
            <ChatHeader />

            <div className="chat-body">
                <MessageBubble from="bot" text="Hi 👋 I’m Nira, your beauty assistant." />
                <MessageBubble from="bot" text="Upload a selfie or ask about skincare." />

                <QuickActions />

                <MessageBubble from="bot" text="Recommended for you:" />

                <ProductCard
                    name="Hydrating Gel Moisturizer"
                    brand="e.l.f"
                    price="₹899"
                    image="https://via.placeholder.com/120"
                />
            </div>

            <ChatInput />
        </div>
    );
}
