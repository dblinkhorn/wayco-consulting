import React from "react";

const BaseButton = props => {
    const { button_text } = props;
    const styles = {
        backgroundColor: "blue",
    };
    return <div style={styles}>{button_text}</div>;
};

export default BaseButton;
