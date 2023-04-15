import { Figure, Img, Overlay } from '../../component/image/image.styled';
import { BioSection, Close, ProfileContainer, Upload } from './Profile.styled';
import avi from '../../assets/avatar/avi.png';
import { HeadingH2, HeadingH3 } from '../../component/heading/headings.styled';
import { MdClose, MdOutlineSaveAlt } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { useGetUser } from '../../services/query/query.service';
import { AiOutlineCamera } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';
import { Button } from '../../component/button/Button.component';
import imageUploader from '../../utils/imageUploader';
import { useMutation } from '@tanstack/react-query';

const Profile = () => {
  const { userId } = useParams();
  const [edit, setEdit] = useState(false);
  const { isLoading, data, refetch } = useGetUser(userId);

  const onSuccess = () => {
    refetch();
  };

  const onError = (err) => {
    console.log(err);
  };

  const { mutate } = useMutation(onSuccess, onError);

  const handleChange = async (e) => {
    const link = imageUploader(e.target.files[0]);

    if (!link) {
      return;
    }

    mutate(link.toString());
  };

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
      {userId === localStorage.getItem('userId') ? (
        <Button onClick={() => setEdit(!edit)} profile>
          {edit ? (
            <><MdOutlineSaveAlt /> Save</>
          ) : (
            <>
              <FiEdit /> Edit
            </>
          )}
        </Button>
      ) : null}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BioSection>
            <Figure profile>
              <Img src={avi} alt="user avatar" />
              {edit ? (
                <Overlay htmlFor="upload">
                  {/* <label htmlFor="upload"> */}
                  <AiOutlineCamera size={'2.2em'} />
                  <p>Change Profile Picture</p>
                  <Upload type="file" id="upload" onChange={handleChange} />
                </Overlay>
              ) : null}
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
