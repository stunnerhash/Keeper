import React from "react";
import Footer from "./Footer";
import Card from "./Card";
import contacts from "./Contact";
function App(){
	console.log (contacts);
	return (
   <div>
		<Card
			name = {contacts[0].name}
			img =  {contacts[0].img} 
			phone = {contacts[0].phone}
		/>
		<Card
			name = {contacts[1].name}
			img =  {contacts[1].img} 
			phone = {contacts[1].phone}
		/>
		<Footer/>
	</div>);    
}

export default App;

