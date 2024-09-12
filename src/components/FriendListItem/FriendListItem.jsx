import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <ul>
        <li>
          <img src={avatar} alt={name} />
          <p>{name}</p>
          <p className={clsx(isOnline ? s.online : s.offline)}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FriendListItem;
