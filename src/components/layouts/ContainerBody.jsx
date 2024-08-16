
const ContainerBody = ({children}) => {
    return (
        <>
        <div className="container-fluid">
            <div className="container-center">
                {children}
            </div>
        </div>
        </>
    )
}

export default ContainerBody;