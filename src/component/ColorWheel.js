import React, { useEffect, useState } from 'react'
import ClipboardJS from 'clipboard';

const ColorWheel=()=> {
    useEffect(() => {
        const colorWheel = document.getElementById('colorWheel');
        const hexColorInfo = document.getElementById('HEXColor');
        const rgbColorInfo = document.getElementById('RGBColor');
        const colorCircle = document.getElementById('colorCircle');

        function createColorDiv(color, className) {
          const colorDiv = document.createElement('div');
          colorDiv.className = `colorDiv ${className}`;
          const additionalContainer = document.createElement('div');
          additionalContainer.className = 'additionalContainer';
    
          for (let j = 0; j < 12; j++) {
            const additionalDiv = document.createElement('div');
            additionalDiv.className = 'additionalDiv';
            const ratio = j / 11;
            const gradientColor = interpolateColor(color, '#ffffff', ratio);
            additionalDiv.style.borderTopColor = gradientColor.hex;
            additionalDiv.addEventListener('mousemove', function (event) {
              moveColorCircle(event, gradientColor.hex);
            });
            colorDiv.addEventListener('mouseout', function () {
              colorCircle.style.display = 'none';
            });
            additionalDiv.addEventListener('click', function () {
              displayColorInfo(gradientColor);
              document.getElementById('colorInfo').style.backgroundColor = gradientColor.hex;
              document.getElementById('colorInfo').style.display = 'flex';
            });
            additionalContainer.appendChild(additionalDiv);
          }
    
          colorDiv.appendChild(additionalContainer);
          colorWheel.appendChild(colorDiv);
        }

        function interpolateColor(color1, color2, ratio) {
          const hex = function (x) {
            x = x.toString(16);
            return x.length === 1 ? '0' + x : x;
          };
          const r1 = parseInt(color1.substring(1, 3), 16);
          const g1 = parseInt(color1.substring(3, 5), 16);
          const b1 = parseInt(color1.substring(5, 7), 16);
    
          const r2 = parseInt(color2.substring(1, 3), 16);
          const g2 = parseInt(color2.substring(3, 5), 16);
          const b2 = parseInt(color2.substring(5, 7), 16);
    
          const r = Math.ceil(r1 * (1 - ratio) + r2 * ratio);
          const g = Math.ceil(g1 * (1 - ratio) + g2 * ratio);
          const b = Math.ceil(b1 * (1 - ratio) + b2 * ratio);
    
          const hexColor = '#' + hex(r) + hex(g) + hex(b);
          return {
            hex: hexColor,
            rgb: `rgb(${r}, ${g}, ${b})`,
          };
        }
    
        function moveColorCircle(event, color) {
          colorCircle.style.left = event.clientX + 'px';
          colorCircle.style.top = event.clientY + 'px';
          colorCircle.style.background = color;
          colorCircle.style.display = 'block';
        }
    
        function displayColorInfo(color) {
          hexColorInfo.textContent = ` ${color.hex}`;
          rgbColorInfo.textContent = ` ${color.rgb}`;
        }
    
        // Render color divs dynamically
        for (let index = 1; index <= 21; index++) {
          createColorDiv(`#${index < 10 ? '0' + index : index}`, `color${index < 10 ? '0' + index : index}`);
        }
        createColorDiv("#3F509C", "color01");
        createColorDiv("#0A50A0", "color02");
        createColorDiv("#0474B8", "color03");
        createColorDiv("#0B86C9", "color04");
        createColorDiv("#00AB9B", "color05");
        createColorDiv("#47AB93", "color06");
        createColorDiv("#65C08D", "color07");
        createColorDiv("#8DC140", "color08");
        createColorDiv("#C4D941", "color09");
        createColorDiv("#FCED23", "color10");
        createColorDiv("#F8D700", "color11");
        createColorDiv("#F9B617", "color12");
        createColorDiv("#F5A023", "color13");
        createColorDiv("#F2811F", "color14");
        createColorDiv("#ED5926", "color15");
        createColorDiv("#EA2328", "color16");
        createColorDiv("#E71B46", "color17");
        createColorDiv("#D83A72", "color18");
        createColorDiv("#CE4682", "color19");
        createColorDiv("#B04599", "color20");
        createColorDiv("#8F3F97", "color21");
        const clipboard = new ClipboardJS('.copy-text');
    
        return () => {
          clipboard.destroy();
        };
      }, []);
    
      const HexCopied = () => {
        setTimeout(function () {
          document.getElementById('confirmColorCode').style.top = '-200px';
        }, 2000);
        document.getElementById('confirmColorCode').style.top = '30px';
        document.getElementById('mainColorName').innerHTML = 'HEX';
      };
    
      const RgbCopied = () => {
        setTimeout(function () {
          document.getElementById('confirmColorCode').style.top = '-200px';
        }, 2000);
        document.getElementById('confirmColorCode').style.top = '30px';
        document.getElementById('mainColorName').innerHTML = 'RGB';
      };
    
  return (
   <>

        <div className="colorWheelContainer">
        <div id="colorWheel">
                <div className="color01 colorDiv"></div>
                <div className="color02 colorDiv"></div>
                <div className="color03 colorDiv"></div>
                <div className="color04 colorDiv"></div>
                <div className="color05 colorDiv"></div>
                <div className="color06 colorDiv"></div>
                <div className="color07 colorDiv"></div>
                <div className="color08 colorDiv"></div>
                <div className="color09 colorDiv"></div>
                <div className="color10 colorDiv"></div>
                <div className="color11 colorDiv"></div>
                <div className="color12 colorDiv"></div>
                <div className="color13 colorDiv"></div>
                <div className="color14 colorDiv"> </div>
                <div className="color15 colorDiv"></div>
                <div className="color16 colorDiv"></div>
                <div className="color17 colorDiv"></div>
                <div className="color18 colorDiv"></div>
                <div className="color19 colorDiv"></div>
                <div className="color20 colorDiv"></div>
                <div className="color21 colorDiv"></div>
                <div id="colorCircle"></div>
                </div>
          <br />
          <br />
          <br />
          <div id="colorInfo">
            <div className="setColorCode">
              <h4>
                <span>HEX :</span>
                <span id="content1">
                  <span id="HEXColor"></span>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span className="copyColor copy-text" data-clipboard-target="#content1">
                  <i onClick={HexCopied} className="fa fa-clone" style={{ fontSize: '24px' }}></i>
                </span>
              </h4>
              <h4>
                <span>RGB :</span>
                <span id="content2">
                  <span id="RGBColor"></span>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span className="copyColor copy-text" data-clipboard-target="#content2">
                  <i onClick={RgbCopied} className="fa fa-clone" style={{ fontSize: '24px' }}></i>
                </span>
              </h4>
            </div>
          </div>
          <br />
          <div id="confirmColorCode">
            <i className="fa fa-check-circle" aria-hidden="true"></i> <span id="mainColorName"></span> Color Copied
          </div>
        </div>
   </>
  )
}
export default ColorWheel