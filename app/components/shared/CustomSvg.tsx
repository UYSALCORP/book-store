import React from 'react'

interface CustomSvgProps {
    index: number,
    current: number,
}

function CustomSvg(props : CustomSvgProps) {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill={props.index === props.current ? "#F97316" : "#CBD5E1"} // orange-500 or slate-300
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="5" cy="5" r="5" />
        </svg>
    )
}

export default CustomSvg