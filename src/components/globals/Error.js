import React from "react"

const Error = ({ error }) => {
    return(
        <>
            <div className="error-page py-5">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 text-center">
                            {error}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error