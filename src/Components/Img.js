import React from 'react';

const Img = props =>

	<li>
		
		
		<p><a href={props.user}>{props.name}</a></p>
		<a href={props.link}>
			<img src={props.url} alt="Unsplash Image here" />
		</a>
		<p>
			📷<br></br>
			{props.likes} likes
			<a href={props.user}>{props.name}</a>
			<a href={props.link}> See on Unsplash</a>
			
			
            
		</p>
		
		
		
		
	</li>;

export default Img;
