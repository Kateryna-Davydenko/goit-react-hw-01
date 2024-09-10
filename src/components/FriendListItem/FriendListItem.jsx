const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <ul>
        <li>
          <img src={avatar} alt={name} />
          <p>{name}</p>
          <p className="status"> {isOnline ? "Online" : "Offline"}</p>
        </li>
      </ul>
    </div>
  );
};

export default FriendListItem;
