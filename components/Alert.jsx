function Alert({alert}){
    return(
        <>
        {/* alert is an object and I am using the type and msg properties of alert shown as below */}
            {alert && <p className={`alert-${alert.type}`}>{alert.msg}</p>}
        </>
    )
}

export default Alert