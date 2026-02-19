import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={css.userCard}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.nameItem}>{name}</p>
        <p className={css.tagItem}>@{tag}</p>
        <p className={css.locItem}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsSpan}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsSpan}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsSpan}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
