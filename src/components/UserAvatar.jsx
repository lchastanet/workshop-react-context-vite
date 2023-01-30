import { useUserContext } from "../contexts/UserContext";

export default function UserAvatar() {
  const { currentUserAvatar, currentUserName } = useUserContext();

  return (
    <div className="avatar">
      <img
        src={
          currentUserAvatar ||
          "https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg"
        }
        alt={currentUserName}
      />
    </div>
  );
}
