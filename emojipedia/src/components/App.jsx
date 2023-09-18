import React from "react";

import Card from "./Entry";
import Header from "./Header";
import '../index.css'
import emojipedia from "../emojipedia";


function createEntry(emojis){
    return <Card 
        key={emojis.id}
        emoji={emojis.emoji}
        name={emojis.name}
        description={emojis.meaning}
    />
}




function App(){
    return <div>
       
    <div>
        <Header />
        <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
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