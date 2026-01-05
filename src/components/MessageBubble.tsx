type Props = {
    text: string;
    from: "bot" | "user";
};

export default function MessageBubble({ text, from }: Props) {
    return (
        <div className={`message-row ${from}`}>
            <div className={`message-bubble ${from}`}>
                {text}
            </div>
        </div>
    );
}
