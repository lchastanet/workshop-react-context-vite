import { useUserContext } from "../contexts/UserContext"

export default function Footer() {
  const { currentUser } = useUserContext()

  return <footer>Glad to see you back {currentUser.name}</footer>
}
