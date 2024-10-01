import { NavLink } from "react-router-dom"
import { NavbarType } from "../App"

const Navbar:React.FC<{item:NavbarType}> = ({item}) => {
  return (
    <NavLink className={`font-normal p-[7px] text-white w-[100px] text-center tracking-wide text-[18px]`} to={`${item.path}`}>{item.title}</NavLink>
  )
}

export default Navbar