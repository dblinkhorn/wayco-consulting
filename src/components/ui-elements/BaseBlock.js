import React from "react";
import "../../styles/BaseBlock.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BaseBlock = props => {
    const { icon, iconSize, iconColor, titleText, smallText } = props;
    return (
        <div className='base-block_outer-container'>
            <div className='base-block_icon-container'>
                <FontAwesomeIcon
                    icon={icon}
                    size={iconSize}
                    color={iconColor}
                />
            </div>
            <div className='base-block_title-text-container'>{titleText}</div>
            <div className='base-block_small-text-container'>
                <center>{smallText}</center>
            </div>
        </div>
    );
};

export default BaseBlock;
