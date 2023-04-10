import { HeadingH3 } from '../heading/headings.styled';
import { Figure, Img } from '../image/image.styled';
import avi from '../../assets/avatar/avi.png';
import { Button } from '../button/Button.component';
import { RequestContainer } from './ChatRequest.styled';
import { Link } from 'react-router-dom';
import {
  useChangeChatRequest,
  useSendChatRequest,
} from '../../services/query/query.service';

const ChatRequest = ({
  fullname,
  first_name,
  last_name,
  username,
  status,
  request_id,
  refetch,
  refetchChatlist,
}) => {
  const onSuccess = () => {
    if (refetchChatlist) {
      refetchChatlist();
    }
    refetch();
  };

  const onError = () => {};

  const { mutate } = useSendChatRequest(onSuccess, onError);
  const { mutate: change } = useChangeChatRequest(onSuccess, onError);

  return (
    <RequestContainer main>
      <RequestContainer name>
        <Figure user>
          <Img src={avi} alt="user avatar" />
        </Figure>
        <div>
          <HeadingH3>
            {fullname ? fullname : `${first_name} ${last_name}`}
          </HeadingH3>
          <p>
            <em>@{username}</em>
          </p>
        </div>
      </RequestContainer>
      <div>
        {status === 'chat' ? (
          <Link to={`/chat/${request_id}`}>
            <Button request>Go to a Chat</Button>
          </Link>
        ) : status === 'new' ? (
          <Button
            onClick={() =>
              mutate({ userId: localStorage.getItem('userId'), request_id })
            }
            primary
            request
          >
            Send Request
          </Button>
        ) : status === 'pending' ? (
          <Button
            request
            onClick={() =>
              change({
                userId: localStorage.getItem('userId'),
                request_id,
                status: 'cancel',
              })
            }
          >
            Cancel
          </Button>
        ) : status === 'recieved' ? (
          <>
            <Button
              request
              primary
              onClick={() => (
                change({
                  userId: localStorage.getItem('userId'),
                  request_id,
                  status: 'confirm',
                }),
                window.location.reload(false)
              )}
            >
              {' '}
              Accept{' '}
            </Button>
            <Button
              request
              danger
              onClick={() =>
                change({
                  userId: localStorage.getItem('userId'),
                  request_id,
                  status: 'reject',
                })
              }
            >
              {' '}
              Reject{' '}
            </Button>
          </>
        ) : null}
      </div>
    </RequestContainer>
  );
};

export default ChatRequest;
