import React from 'react';

function Button({ onClick, label, type = 'button', className}) {
    return (
        <button className={className} onClick={onClick} type={type}>
            {label}
        </button>
    );
}

export default Button;
