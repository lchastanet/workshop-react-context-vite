import { useUserContext } from "../contexts/UserContext";

export default function Footer() {
  const { currentUserName } = useUserContext();

  return <footer>Glad to see you back {currentUserName}</footer>;
}
