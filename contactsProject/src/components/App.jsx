import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import '../index.css'
import contacts from "../contacts";


function createCard(contact){
    return <Card name={contact.name}
        key={contact.id}
        img={contact.imgURL}
        phone={contact.phone}
        email={contact.email}

    />
}




function App(){
    return <div>
        <Header />

        {contacts.map(createCard)}
        {/* {contacts.map()}
        /* <Card name={contacts[0].name} phone={contacts[0].phone} email={contacts[0].email} img={contacts[0].imgURL} />
       <Card 
        name="Chuck Noris" 
        phone="12398 4849" 
        email="cantsee@me.com" 
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" 

        /> */}
    
    </div>
}


export default App;