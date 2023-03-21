import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import {
  useGetUser,
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

  const { mutate, isLoading, isError, isSuccess, data } =
    useGetUserByUsername();
  const handleSearch = (e) => {
    e.preventDefault();
    mutate(search);
    setSearch('')
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
          console.log(data),
          <ChatRequest
          first_name={data?.first_name}
          last_name={data?.last_name}
          username={data?.username}
        />
        ) : isError ? (
          <p>
            <em>User Not Found</em>
          </p>
        ) : null}
      </Result>
      <Result>
        <p>Suggested</p>
        <hr />
      </Result>
    </NewChatContainer>
  );
};

export default NewChat;
