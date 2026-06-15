export type Message = {
  id: string;
  from: {
    name: string;
  };
  type: 'message' | 'response' | 'typing';
  time: string;
  text?: string;
};

type MessageHistoryProps = {
  list?: Message[];
};

export default function MessageHistory({
  list = [],
}: MessageHistoryProps) {
  if (list.length === 0) {
    return null;
  }

  return (
    <div className="chat-history">
      {list.map((message) => {
        const className =
          message.type === 'message'
            ? 'message-item message-own'
            : message.type === 'response'
            ? 'message-item message-response'
            : 'message-item message-typing';

        return (
          <div key={message.id} className={className}>
            <div className="message-header">
              <span className="message-author">
                {message.from.name}
              </span>
              <span className="message-time">
                {message.time}
              </span>
            </div>

            {message.type === 'typing' ? (
              <div className="typing-indicator">
                <span>печатает...</span>

                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            ) : (
              <div className="message-bubble">
                {message.text}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
