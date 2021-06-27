
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                        <a href="#intro" className="logo">genious.</a>
                        <div className="itemContainer">
                            <Person/>
                            <span>+91 8953423901</span>
                            <Mail/>
                            <span>example@gmail.com</span>
                        </div>
                </div>
                
                <div className="right">
                        This is right
                </div>
            </div>
        </div>
    )
}
