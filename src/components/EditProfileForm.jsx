import { useUserContext } from "../contexts/UserContext.jsx";

export default function EditProfileForm() {
  const {
    currentUserName,
    setCurrentUserName,
    currentUserAvatar,
    setCurrentUserAvatar,
  } = useUserContext();

  const handleNameInput = (e) => {
    setCurrentUserName(e.target.value);
  };
  const handleAvatarUrlInput = (e) => {
    setCurrentUserAvatar(e.target.value);
  };
  return (
    <form>
      <h2>Your informations</h2>
      <label>
        Your name
        <input type="text" value={currentUserName} onChange={handleNameInput} />
      </label>
      <br />
      <label>
        Your avatar URL :
        <input
          type="url"
          value={currentUserAvatar}
          onChange={handleAvatarUrlInput}
        />
      </label>
    </form>
  );
}
