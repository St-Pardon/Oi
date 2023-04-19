import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import {
  useChatRequest,
  useChatlist,
  useGetFetchQuery,
  useGetUserByUsername,
} from '../../services/query/query.service';
import ChatRequest from '../chat-request/ChatRequest.component';
import {
  Fieldset,
  Form,
  NewChatContainer,
  Result,
  Search,
  SearchBtn,
} from './NewChat.styled';

const NewChat = () => {
  const [search, setSearch] = useState('');

  const { data: chatlist, refetch: refetchChatlist } = useChatlist(
    localStorage.getItem('userId')
  );
  const {
    data: reqData,
    isLoading: loading,
    refetch,
  } = useChatRequest(localStorage.getItem('userId'));
  const { mutate, isLoading, isError, isSuccess, data } =
    useGetUserByUsername();

  const handleSearch = (e) => {
    e.preventDefault();
    mutate(search);
    setSearch('');
  };

  return (
    <NewChatContainer>
      <Form onSubmit={handleSearch}>
        <Fieldset>
          <MdSearch size={'25px'} />
          <Search
            type="search"
            name="user"
            id="user"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by username or email"
          />
          <SearchBtn type="submit" value="Search" />
        </Fieldset>
      </Form>
      <Result>
        {isLoading ? (
          <p>Searching...</p>
        ) : isSuccess ? (
          !data ? (
            <p>
              <em>User Not Found</em>
            </p>
          ) : data._id ===
            localStorage.getItem('userId') ? null : chatlist?.find(
              (user) => user.id === data._id
            ) !== undefined ? (
            <ChatRequest
              first_name={data?.first_name}
              last_name={data?.last_name}
              username={data?.username}
              request_id={data?._id}
              dp={data.display_picture}
              refetch={refetch}
              status="chat"
            />
          ) : reqData?.find((user) => user.id === data._id) === undefined ? (
            <ChatRequest
              first_name={data?.first_name}
              last_name={data?.last_name}
              username={data?.username}
              request_id={data?._id}
              dp={data.display_picture}
              refetch={refetch}
              status="new"
            />
          ) : reqData?.filter((user) => user.id === data._id)[0].status ===
            'pending' ? (
            <ChatRequest
              first_name={data?.first_name}
              last_name={data?.last_name}
              username={data?.username}
              request_id={data?._id}
              dp={data.display_picture}
              refetch={refetch}
              status="pending"
            />
          ) : null
        ) : isError ? (
          <p>
            <em>User Not Found</em>
          </p>
        ) : null}
      </Result>
      <Result req>
        <p>Chat Request</p>
        <hr />
        {loading ? (
          <p>No chat request</p>
        ) : reqData.length !== 0 ? (
          reqData
            ?.filter((user) => user.id === localStorage.getItem('userId'))
            .map((user, i) => (
              <ChatRequest
                key={i}
                fullname={user?.fullname}
                username={user?.username}
                request_id={user?.request_id}
                sender_id={user?.sender_id}
                dp={user?.display_picture}
                refetch={refetch}
                refetchChatlist={refetchChatlist}
                status="recieved"
              />
            ))
        ) : (
          <p>No chat request</p>
        )}
      </Result>
      <Result req>
        <p>Suggested</p>
        <hr />
      </Result>
    </NewChatContainer>
  );
};

export default NewChat;
