import Input from "../Components/Input"
export function RegisterCard({children,PageName, submitForm, handleChange,value, Button, Alternative}) {
    return(
        <div className="register_form signin">
            <h1>{PageName}</h1>
            <form id="SignIn" action="">
                {children}
                <button className={`reg_btn ${Button.className}_btn`} onClick={submitForm}>{Button.text}</button>
                <p>{Alternative.text} <span className={`reg_nav ${Alternative.className}` }>{Alternative.redirect}</span></p>
            </form>
        </div>
    )
}