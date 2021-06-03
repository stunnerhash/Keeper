import React from "react";
import Card from "./Card";
function createCard(contact){
	return (
	<Card
		key={contact.id}
		name={contact.name}
		img ={contact.img}
		phone = {contact.phone} 
	/>
	)
}
export default createCard;