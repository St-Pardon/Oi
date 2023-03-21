import { Figure, Img } from '../image/image.styled';
import { ChatlistContainer, NewChatBtn, User } from './chatlist.styled';
import avi from '../../assets/avatar/avi.png';
import { HeadingH3 } from '../heading/headings.styled';
import { Link } from 'react-router-dom';
import { useChatlist } from '../../services/query/query.service';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { useState } from 'react';
import Modal from '../modal/Modal.component';
import NewChat from '../new-chat/NewChat.component';

const Chatlist = () => {
  const [open, setOpen] = useState(false)
  const { isLoading, data } = useChatlist();

  return (
    <ChatlistContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item, i) => (
          <Link to={item.id} key={i}>
            <User>
              <Figure user>
                <Img src={avi} alt="User's avatar" />
              </Figure>
              <HeadingH3 user>
                {item.display_name ? item.display_name : item.fullname}
              </HeadingH3>
            </User>
          </Link>
        ))
      )}
      <Modal open={open} onClose={() => setOpen(!open)}>
        <NewChat />
      </Modal>
      <NewChatBtn onClick={()=>setOpen(!open)}>
        <MdPersonAddAlt1 size={'25px'} />
        <p>New Chat</p>
      </NewChatBtn>
    </ChatlistContainer>
  );
};
export default Chatlist;
