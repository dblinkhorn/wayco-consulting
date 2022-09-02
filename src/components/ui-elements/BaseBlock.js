import React from "react";
import "../../styles/BaseBlock.scss";

const BaseBlock = props => {
    const { icon, titleText, smallText } = props;
    return (
        <div className='base-block_outer-container'>
            <div className='base-block_icon-container'>{icon}</div>
            <div className='base-block_title-text-container'>{titleText}</div>
            <div className='base-block_small-text-container'>
                <center>{smallText}</center>
            </div>
        </div>
    );
};

export default BaseBlock;
