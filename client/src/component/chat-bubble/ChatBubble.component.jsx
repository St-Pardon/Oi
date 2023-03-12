import { Bubble, BubbleContainer } from './ChatBubble.styled';

const ChatBubble = ({ sender, msg }) => {
  return sender ? (
    <BubbleContainer send>
      <Bubble send>{msg}</Bubble>
    </BubbleContainer>
  ) : (
    <BubbleContainer recieve>
      <Bubble recieve>{msg}</Bubble>
    </BubbleContainer>
  );
};

export default ChatBubble;
