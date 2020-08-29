import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useState } from 'react';
import { Subtitle } from 'src/styles/components';
import { Notify } from '../Notify';
import { AnimationBox, AnimationController, AnimationItem, Bezier, BezierContainer } from './styles';

export default function BezierController() {
  interface iBezier {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
  }
  const [bezier, setBezier] = useState<iBezier>({ x1: 0, x2: 0, x3: 0, x4: 0 });

  return (
    <BezierContainer>
      <AnimationBox>
        <AnimationItem title={`cubic-bezier(${bezier.x1}, ${bezier.x2}, ${bezier.x3}, ${bezier.x4})`} />
        <AnimationItem title={`cubic-bezier(${bezier.x1}, ${bezier.x2}, ${bezier.x3}, ${bezier.x4})`} />
        <AnimationItem title={`cubic-bezier(${bezier.x1}, ${bezier.x2}, ${bezier.x3}, ${bezier.x4})`} />
        <AnimationItem title={`cubic-bezier(${bezier.x1}, ${bezier.x2}, ${bezier.x3}, ${bezier.x4})`} />
      </AnimationBox>
      <AnimationController>
        <Subtitle>Animation Controller:</Subtitle>
        <div className="cont-input">
          <label htmlFor="x1">x1: {bezier.x1}</label>
          <Slider
            defaultValue={bezier.x1}
            ValueLabelComponent={ValueLabelComponent}
            aria-label="custom thumb label"
            id="x1"
            onChange={(e, val) => {
              setBezier({ ...bezier, x1: Number(val) / 100 });
            }}
          />
        </div>
        <div className="cont-input">
          <label htmlFor="x2">x2: {bezier.x2}</label>
          <Slider
            defaultValue={bezier.x2}
            ValueLabelComponent={ValueLabelComponent}
            aria-label="custom thumb label"
            id="x2"
            onChange={(e, val) => {
              setBezier({ ...bezier, x2: Number(val) / 100 });
            }}
          />
        </div>

        <div className="cont-input">
          <label htmlFor="x3">x3: {bezier.x3}</label>
          <Slider
            defaultValue={bezier.x3}
            ValueLabelComponent={ValueLabelComponent}
            aria-label="custom thumb label"
            id="x3"
            onChange={(e, val) => {
              setBezier({ ...bezier, x3: Number(val) / 100 });
            }}
          />
        </div>
        <div className="cont-input">
          <label htmlFor="x4">x4: {bezier.x4}</label>
          <Slider
            defaultValue={bezier.x4}
            ValueLabelComponent={ValueLabelComponent}
            aria-label="custom thumb label"
            id="x4"
            onChange={(e, val) => {
              setBezier({ ...bezier, x4: Number(val) / 100 });
            }}
          />
        </div>

        <Subtitle>Get the Bezier !</Subtitle>
        <Bezier
          onClick={() => {
            let input = document.getElementById('bezier') as HTMLInputElement;
            input.select();
            document.execCommand('copy');
            Notify('Copied to clipboard !!', 'success');
          }}
        >
          <input
            type="text"
            id="bezier"
            readOnly
            value={`cubic-bezier(${bezier.x1},${bezier.x2},${bezier.x3},${bezier.x4})`}
          />
        </Bezier>
      </AnimationController>
    </BezierContainer>
  );
}
interface Props {
  children: React.ReactElement;
  open: boolean;
  value: number;
}
function ValueLabelComponent(props: Props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
