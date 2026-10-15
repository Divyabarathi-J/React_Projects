import React from "react";

const Button = ({name, onclick}) => {
    return (
        <button className="btn" onClick={onclick}>
            {name}
        </button>
    )
}

export default Button;