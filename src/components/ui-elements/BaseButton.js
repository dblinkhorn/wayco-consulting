import React from "react";

const BaseButton = props => {
    const { text, styles } = props;
    return <div style={styles}>{text}</div>;
};

export default BaseButton;
