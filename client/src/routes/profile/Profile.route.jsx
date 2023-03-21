import { Figure, Img } from '../../component/image/image.styled';
import { BioSection, Close, ProfileContainer } from './Profile.styled';
import avi from '../../assets/avatar/avi.png';
import { HeadingH2, HeadingH3 } from '../../component/heading/headings.styled';
import { MdClose } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useGetUser } from '../../services/query/query.service';

const Profile = () => {
  const { recipient } = useParams();

  const { isLoading, data } = useGetUser(recipient);
  console.log(recipient);
  return (
    <ProfileContainer>
      <Close>
        <Link to={`/chat/${recipient}`}>
          <MdClose size={'30px'} color="black" />
        </Link>
      </Close>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BioSection>
            <Figure profile>
              <Img src={avi} alt="user avatar" />
            </Figure>
            <HeadingH2 profile>
              {`${data?.first_name} ${data?.last_name}`}{' '}
              {data?.display_name ? `(${data?.display_name})`: null}
            </HeadingH2>
            <HeadingH3>
              <em>@{data?.username}</em>
            </HeadingH3>
          </BioSection>
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
