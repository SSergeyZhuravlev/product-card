export const CardImage = ( { title, src } ) => {
    return (
        <div>
            <img
                style={
                   {
                    width: '200px',
                    height: '200px'
                   }
                }
                src={src} alt={title} />
        </div>
    )
}