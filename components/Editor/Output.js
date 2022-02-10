import React from 'react'
import { useState } from 'react';

function Output(props) {


  return (
		<div className="input">
			<div className="flex flex-col justify-between">
				<span>{props.output}</span>
				<span>
					<br />
					<br />
					<br />
					<br />
					CPU Usage:- {props.cpu} Sec
					<br />
					Memory Usage:- {props.memory} MB
				</span>
			</div>
		</div>
  );
}

export default Output