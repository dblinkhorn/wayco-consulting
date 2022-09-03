import React from "react";
import "../styles/WhyHire.scss";
import BaseBlock from "./ui-elements/BaseBlock";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const WhyHire = () => {
    return (
        <div className='why-hire_outer-container'>
            <div className='why-hire_inner-container'>
                <div className='why-hire_main-text'>
                    Why hire WAYCO Disaster Consulting & Training?
                </div>
                <div className='why-hire_reasons-container'>
                    <BaseBlock
                        icon={faPeopleGroup}
                        iconSize='3x'
                        iconColor='#09a0dc'
                        titleText={"Amazing people"}
                        smallText={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }
                    />
                    <BaseBlock
                        icon={faPeopleGroup}
                        iconSize='3x'
                        iconColor='#09a0dc'
                        titleText={"Amazing people"}
                        smallText={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }
                    />
                    <BaseBlock
                        icon={faPeopleGroup}
                        iconSize='3x'
                        iconColor='#09a0dc'
                        titleText={"Amazing people"}
                        smallText={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        }
                    />
                    <BaseBlock
                        icon={faPeopleGroup}
                        iconSize='3x'
                        iconColor='#09a0dc'
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
