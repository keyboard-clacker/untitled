import React, { useRef } from 'react';
import Sketch from 'react-p5';

const Wave = ({ className }) => {
	const { current: xspacing } = useRef(2);
	const w = useRef();
	const theta = useRef(0.0); // Start angle at 0
	const amplitude = 30.0; // Height of wave
	const period = 150.0; // How many pixels before the wave repeats
	const dx = useRef(); // Value for incrementing x
	const yvalues = useRef(); // Using an array to store height values for the wave

	const setup = (p, canvasParentRef) => {
		const width = window.innerWidth * 2;
		const height = 90;
		p.createCanvas(width, height).parent(canvasParentRef);
		w.current = p.width + 16;
		dx.current = (p.TWO_PI / period) * xspacing;
		yvalues.current = new Array(Math.floor(w.current / xspacing));
	};

	function calcWave(p) {
		// Increment theta (try different values for
		// 'angular velocity' here)
		theta.current += 0.05;

		// For every x value, calculate a y value with sine function
		let x = theta.current;
		for (let i = 0; i < yvalues.current.length; i++) {
			yvalues.current[i] = p.sin(x) * amplitude;
			x += dx.current;
		}
	}

	function renderWave(p) {
		p.noStroke();
		p.fill(0);
		p.clear();
		// A simple way to draw the wave with an ellipse at each location
		for (let x = 0; x < yvalues.current.length; x++) {
			p.ellipse(x * xspacing, p.height / 2 + yvalues.current[x], 8, 8);
		}
	}

	const draw = p => {
		calcWave(p);
		renderWave(p);
	};

	return (
		<div className={className}>
			<Sketch setup={setup} draw={draw} />
		</div>
	);
};

export default Wave;
