export const Counter = ( { initValue, value, onChange } ) => {
    return (
        <div>
            <button onClick={() => {
                if (value <= initValue) return;
                
                onChange(value - 1);
            }}>-</button>
            <input value={value} onChange={(e) => {
                const value = Number(e.target.value);
                onChange(value < 1 ? 1: value);
            }}></input>
            <button onClick={() => onChange(value + 1)}>+</button>
        </div>
    )
}