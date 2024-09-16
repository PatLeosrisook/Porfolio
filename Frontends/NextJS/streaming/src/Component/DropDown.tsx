
export default function DropDown({lists} : {lists : Array<string>}) {
    let options = lists.map(op => {
        return <option key={op.id} value={op.value}>{op.name}</option>
    })
    return (
        <select name="cars" id="cars">
          {options}
        </select>
    )
}