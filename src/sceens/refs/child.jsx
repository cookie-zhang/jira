import React from "react";
const RefsChild = React.forwardRef((props, ref) => {
    return <>
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    </>
})

export default RefsChild