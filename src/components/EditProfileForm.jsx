import { useUserContext } from "../contexts/UserContext"

export default function EditProfileForm() {
  const { currentUser, setCurrentUser } = useUserContext()

  const handleNameInput = (e) => {
    setCurrentUser({ ...currentUser, name: e.target.value })
  }
  const handleAvatarUrlInput = (e) => {
    setCurrentUser({ ...currentUser, avatar: e.target.value })
  }
  return (
    <form>
      <h2>Your informations</h2>
      <label>
        Your name
        <input
          type="text"
          value={currentUser.name}
          onChange={handleNameInput}
        />
      </label>
      <br />
      <label>
        Your avatar URL :
        <input
          type="url"
          value={currentUser.avatar}
          onChange={handleAvatarUrlInput}
        />
      </label>
    </form>
  )
}
