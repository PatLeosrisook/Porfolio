export default function Input({Type, attribute, Label, handleChange, value,Placeholder}) {
    return (
        <div className={`form_group ${attribute.class}`}>
            {/* <label for={attribute.id}>{Label}</label> */}
            <input type={Type} id={attribute.id} name={attribute.name} onChange={handleChange} value={value} placeholder={Placeholder}/>
        </div>
    )
}