import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Generator() {
    return(
        <section id="Generator">
            <h1>Password generator</h1>
            <section id="Gen_panel">
                <section className="password">
                    <input />
                    <FontAwesomeIcon icon={faCopy} />
                </section>
                <section className="indicators">
                    <ul className="conditions">
                        <li className="condition">
                            <input type="checkbox"/>
                            <p>Include Uppercase Letters</p>
                        </li>
                        <li className="condition">
                            <input type="checkbox"/>
                            <p>Include Lowercase Letter</p>
                        </li>
                        <li className="condition">
                            <input type="checkbox"/>
                            <p>Include Numbers</p>
                        </li>
                        <li className="condition">
                            <input type="checkbox"/>
                            <p>Include Symbols</p>
                        </li>
                    </ul>
                    <section className="Strength">
                        <h3>Strength</h3>
                        <div className="Strength_bar">
                            <p>..</p>
                            <div className="Bars">
                                <div className="Bar"></div>
                                <div className="Bar"></div>
                                <div className="Bar"></div>
                                <div className="Bar"></div>
                            </div>
                        </div>
                    </section>
                    <button id="Generate_btn">Generate <span>icon</span></button>
                </section>
            </section>
        </section>
    )
}