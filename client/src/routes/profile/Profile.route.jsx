import { Figure, Img, Overlay } from '../../component/image/image.styled';
import { BioSection, Close, ProfileContainer, Upload } from './Profile.styled';
import avi from '../../assets/avatar/avi.png';
import { HeadingH2, HeadingH3 } from '../../component/heading/headings.styled';
import { MdClose } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useGetUser } from '../../services/query/query.service';
import { AiOutlineCamera } from 'react-icons/ai';

const Profile = () => {
  const { userId } = useParams();
  const { isLoading, data } = useGetUser(userId);

  return (
    <ProfileContainer>
      <Close>
        <Link
          to={`/chat/${
            userId === localStorage.getItem('userId') ? '' : userId
          }`}
        >
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
              <Overlay htmlFor='upload' >
                {/* <label htmlFor="upload"> */}
                  <AiOutlineCamera size={'2.2em'} />
                  <p>Change Profile Picture</p>
                  <Upload type="file" id='upload'/>
              </Overlay>
            </Figure>
            <HeadingH2 profile>
              {`${data?.first_name} ${data?.last_name}`}{' '}
              {data?.display_name ? `(${data?.display_name})` : null}
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
