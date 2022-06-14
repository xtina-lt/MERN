import React from 'react';

const Tabs = (props) => {
    const { all, current, setCurrent } = props;

    const setStyle = index => {return (index === current) ? "selected" : "tab";}

    return (
        <>
            <h2>
                Self Care
            </h2>
            <div className="tabs">
                {all.map((item, index) => (
                        <div style={{ display: "inline"}} className={setStyle(index)} onClick={(e) => setCurrent(index)}>
                            {item.label}
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Tabs;