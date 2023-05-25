import { NavLink } from "react-router-dom"
import UserAvatar from "./UserAvatar"
import Home from "./Home"

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">
          <UserAvatar />
        </NavLink>
      </nav>
    </header>
  )
}
