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
                <ul className="conditions">
                    <li className="condition">
                        <input type="checkboxes"/>
                        <p></p>
                    </li>
                    <li className="condition">
                        <input type="checkboxes"/>
                        <p></p>
                    </li>
                    <li className="condition">
                        <input type="checkboxes"/>
                        <p></p>
                    </li>
                    <li className="condition">
                        <input type="checkboxes"/>
                        <p></p>
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
    )
}