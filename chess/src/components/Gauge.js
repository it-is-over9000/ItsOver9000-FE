import React from 'react'

import TweenLite from "gsap/TweenLite";

class Gauge extends React.Component {
    constructor(props) {
        super(props)

        this.myElement = null;
        // this.myTween = TweenLite;
    }

    componentDidUpdate(){
        const degrees = this.props.degrees
        console.log(degrees)
        TweenLite.set("rect", {svgOrigin:"400px 400px"})// rotate them all around same point in the SVG - middle bottom
        TweenLite.to("#sec3-current", 1, {rotation: degrees, delay:0.2})
        TweenLite.to("#sec3-high", 1, {rotation:133, delay:0.5})
        TweenLite.to("#sec3-low", 1, {rotation:20, delay:0.7})
      }

    
    //   TweenLite.set("rect", {svgOrigin:"400px 400px"})// rotate them all around same point in the SVG - middle bottom
    // TweenLite.to("#sec3-current", 1, {rotation:110, delay:0.2})
    // TweenLite.to("#sec3-high", 1, {rotation:133, delay:0.5})
    // TweenLite.to("#sec3-low", 1, {rotation:20, delay:0.7})

    render() {

        return (
        <div class="art-cont">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
                <g class="cls-1">
                  <g id="Layer_1" data-name="Layer 1">
                    <g id="section3">
                      <g class="cls-5">
                        <path class="cls-6" d="M136.5,401.5V400A263.51,263.51,0,0,1,400,136.5h0A263.51,263.51,0,0,1,663.5,400v1.5Z" transform="translate(0)"/>
                        <path class="cls-7" d="M400,138c144.7,0,262,117.3,262,262H138c0-144.7,117.3-262,262-262m0-3A264.79,264.79,0,0,0,135,400v3H665v-3A264.79,264.79,0,0,0,400,135Z" transform="translate(0)"/>
                      </g>
                      <path class="cls-6" d="M400,138c-144.7,0-262,117.3-262,262H662C662,255.3,544.7,138,400,138Z" transform="translate(0)"/>
                      <rect id="sec3-current" class="cls-4" x="157.5" y="388" width="45" height="12"/>
                    </g>
                    <g id="center" class="cls-5">
                      <path class="cls-9" d="M199.5,401.5V400a200.72,200.72,0,0,1,58.72-142.48A200.5,200.5,0,0,1,600.5,400v1.5h-401Z" transform="translate(0)"/>
                      <path class="cls-7" d="M400,200A199.49,199.49,0,0,1,599,400H201A199.51,199.51,0,0,1,400,200h0m0-3a200.95,200.95,0,0,0-142.84,59.46A202.86,202.86,0,0,0,198,400v3H602v-3A203.06,203.06,0,0,0,478.63,213,199.81,199.81,0,0,0,400,197Z" transform="translate(0)"/>
                    </g>
                    <path id="center-2" data-name="center" class="cls-9" d="M400,200A199.51,199.51,0,0,0,201,400H599A199.49,199.49,0,0,0,400,200Z" transform="translate(0)"/>
                    <path id="center-3" data-name="center" class="cls-10" d="M400.07,395.88a4,4,0,0,0-4,4h8a4,4,0,0,0-4-4Z" transform="translate(0)"/>
                  </g>
                </g>
              </svg>
</div>
        )
    }
}

export default Gauge