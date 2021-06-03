import React from "react";
import Footer from "./Footer";
import contacts from "./Contact";
import createCard from "./CreateCard";

function App(){
	console.log (contacts);
	return (
    <div>
		{contacts.map(createCard)}
		<Footer/>
	</div>);    
}

export default App;

