import Title from "./basic/Title";
import logo from '../assets/images/L-1.png'

import { MdArrowRightAlt } from "react-icons/md";

export default function Investication(){
    return(
        <section className="investication">
            <div className="container">
                <div className="investication-wrp">
                    <div className="content">
                        <Title title={"Smart Investments Start With Smart Decisions"} />
                        <p>Dive into our whitepaper and become part of a visionary circle of crypto investment!</p>
                        <a href="https://staging-b0b8-liquidinvest.wpcomstaging.com/wp-content/uploads/2023/12/white_paper-1.pdf" target="_blanck" className="btn investication-content-btn">Whitepaper <MdArrowRightAlt /></a>
                    </div>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}