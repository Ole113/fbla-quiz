import React from "react";

export default function Parallax(props) {
    console.log(props.image)

    return (
        <div style = {{backgroundImage: `url(${props.image})`, height: "60em", backgroundAttachment: "fixed", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="parallax"></div>
    );
}