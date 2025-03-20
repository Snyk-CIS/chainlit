import { Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';

interface Props {
  author?: string;
  hide?: boolean;
}

const MessageAvatar = ({ author, hide }: Props) => {
  const avatarUrl =
    'https://res.cloudinary.com/snyk/image/upload/v1741689722/snyk-learn/chatbot-avatar.png';

  return (
    <span className={`message-avatar`}>
      <Tooltip title={author}>
        <Avatar
          sx={{
            width: '1.6rem',
            height: '1.6rem',
            bgcolor: 'transparent'
          }}
          src={hide ? undefined : avatarUrl}
        />
      </Tooltip>
    </span>
  );
};

export { MessageAvatar };
