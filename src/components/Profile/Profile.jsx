import s from "./Profile.module.css";

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.title}>
      <img className={s.image} src={avatar} alt={username} />
      <p className={s.link}>{username}</p>
      <p className={s.list}>@{tag}</p>
      <p className={s.list}>{location}</p>
      <ul className={s.item}>
        <li className={s.team}>
          <span>Followers {stats.followers}</span>
        </li>
        <li className={s.team}>
          <span>Views {stats.views}</span>
        </li>
        <li className={s.team}>
          <span>Likes {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
