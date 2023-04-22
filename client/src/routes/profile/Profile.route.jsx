import { Figure, Img, Overlay } from '../../component/image/image.styled';
import { Section, Close, ProfileContainer, Upload, TextArea } from './Profile.styled';
// import avi from '../../assets/avatar/avi.png';
import { HeadingH2, HeadingH3 } from '../../component/heading/headings.styled';
import { MdClose, MdOutlineSaveAlt } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import {
  useEditUserProfile,
  useGetUser,
} from '../../services/query/query.service';
import { AiOutlineCamera } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { useState } from 'react';
import { Button } from '../../component/button/Button.component';
import imageUploader from '../../utils/imageUploader.utils';

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

  const { mutate } = useEditUserProfile(onSuccess, onError);

  const handleChange = async (e) => {
    const link = await imageUploader(e.target.files[0]);

    if (!link) {
      console.log('not showing');
      return;
    }
    console.log(link);
    mutate({ link: link.toString() });
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
        // <Button onClick={() => setEdit(!edit)} profile>
          edit ? (
            <Button onClick={() => setEdit(!edit)} save>
              <MdOutlineSaveAlt /> Save
            </Button>
          ) : (
            <Button onClick={() => setEdit(!edit)} edit>
              <FiEdit /> Edit
            </Button>
          )

      ) : null}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Section bio>
            <Figure profile>
              <Img src={data?.display_picture} alt="user avatar" />
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
          </Section>
          <Section about>
            <HeadingH3>
              About
            </HeadingH3>
            {edit ? <><TextArea value={data?.about}></TextArea><Button save>Save</Button></> : <p>{data?.about}</p>}
          </Section>
          <Section>
            <HeadingH3>
              Files
            </HeadingH3>
          </Section>
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;
