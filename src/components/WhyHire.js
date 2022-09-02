import React from "react";
import "../styles/WhyHire.scss";
import BaseBlock from "./ui-elements/BaseBlock";

const WhyHire = () => {
    return (
        <div className='why-hire_outer-container'>
            <div className='why-hire_inner-container'>
                <div className='why-hire_main-text'>
                    Why hire WAYCO Disaster Consulting & Training?
                </div>
                <div className='why-hire_reasons-container'>
                    <BaseBlock
                        icon={"ICON"}
                        titleText={"Amazing people"}
                        smallText={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default WhyHire;
