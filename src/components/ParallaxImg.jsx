import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImg = (props) => {
    let contentStyle={
        display:'fex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        color:'ffffff',
        backgroundColor:'whitesmoke',
        webkitFilter:'blur(0px) satutate(2)'
    }
return (
<ParallaxBanner 
layers={[{image: props.imgsrc , speed: -20}]}
style={{height: props.height}}
>
    <div style={contentStyle}>
        {props.children}
    </div>
</ParallaxBanner>
)

}

export default ParallaxImg;