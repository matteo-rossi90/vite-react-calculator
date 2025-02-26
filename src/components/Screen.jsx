import React, { useContext, useState, useEffect } from "react";
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
    const { calc } = useContext(CalcContext);
    const [fontSize, setFontSize] = useState(48); 

    useEffect(() => {
        const length = (calc.num || "0").toString().length; 

        if (length > 10) {
            setFontSize(24); 
        } else if (length > 5) {
            setFontSize(36);
        } else {
            setFontSize(60); 
        }
    }, [calc.num]); 

    return (
        <div className="screen" style={{ fontSize: `${fontSize}px`, wordBreak: "break-word" }}>
            {calc.num ? calc.num : calc.res}
        </div>
    );
};

export default Screen;
