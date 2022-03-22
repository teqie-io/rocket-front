
import "./SideBar.css";
import "./logo192.png"
import { Link } from "react-router-dom";
export default function SideBar()
{
    return(
        <div className="SideBar">
            
            <h1 className="logo">LOGO</h1>
            <ul className="optionlist">
            
            <li className="option"><image className="icon" src="./logo192.png"></image><Link className="option" to="#">Home</Link></li>
            <li className="option"><image className="icon" src="./logo192.png"></image><Link className="option" to="#">Notifcations</Link></li>
            <li className="option"><image className="icon" src="./logo192.png"></image><Link className="option" to="#">Configurations</Link></li>
            <li className="option"><image className="icon" src="./logo192.png"></image><Link className="option" to="#">Subscribers</Link></li>

            </ul>
        </div>
    )
}