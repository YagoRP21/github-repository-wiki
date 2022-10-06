

function Input({value, onChange}) {
    return (
        <div className="input-container">
            <input value={value} onChange={onChange}/>
        </div>
    )
}

export default Input