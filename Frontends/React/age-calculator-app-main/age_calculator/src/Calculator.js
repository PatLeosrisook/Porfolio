import  Arrow from './assets/images/icon-arrow.svg'
import './CSS/style.css'
export function Calculator() {
    return(
        <section id="Cal">
            <div className="Wrapper">
                <section id="Inputs">
                    <div className="form_group">
                        <label for="">Day</label>
                        <input name="day" id="day"/>
                        <p className="error">Must be a valid day.</p>
                    </div>
                    <div className="form_group">
                        <label for="">Month</label>
                        <input name="month" id="month"/>
                        <p className="error">Must be a valid month.</p>
                    </div>
                    <div className="form_group">
                        <label for="">Year</label>
                        <input name="year" id="year"/>
                        <p className="error">Must be in the past. </p>
                    </div>
                </section>
                <section id="Divider">
                    <hr/>
                    <button className="icon-wrapper">
                        <img src={Arrow} alt="Arrow icon"/>
                    </button>
                    <hr/>
                </section>
                <section id="Display">
                    <p className="display year"><span className="highlight">--</span> years</p>
                    <p className="display month"><span className="highlight">--</span> months</p>
                    <p className="display day"><span className="highlight">--</span> days</p>
                </section>
            </div>
        </section>
    )
}