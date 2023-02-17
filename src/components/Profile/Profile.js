import PropTypes from 'prop-types';

import {
  Avatar,
  Name,
  ProfileUser,
  Tag,
  Location,
  Stats,
  Item,
  ItemLabel,
  Quantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <ProfileUser>
      <div>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <Item>
          <ItemLabel>Followers</ItemLabel>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <ItemLabel>Views</ItemLabel>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <ItemLabel>Likes</ItemLabel>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </ProfileUser>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
