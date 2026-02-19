import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FrienList.module.css';

const FriendList = ({ friendData }) => {
  return (
    <ul className={css.list}>
      {friendData.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={css.listItem}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
