import { useUserContext } from "../contexts/UserContext"

export default function UserAvatar() {
  const { currentUser } = useUserContext()

  return (
    <div className="avatar">
      <img
        src={
          currentUser.avatar ||
          "https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg"
        }
        alt={currentUser.name}
      />
    </div>
  )
}
