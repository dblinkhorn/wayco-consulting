import React from "react";

const BaseButton = props => {
    const { text } = props;
    const styles = {
        backgroundColor: "#09a0dc",
        padding: "15px",
        color: "white",
        fontWeight: "bold",
        letterSpacing: "3px",
        cursor: "pointer",
    };
    return <div style={styles}>{text}</div>;
};

export default BaseButton;
