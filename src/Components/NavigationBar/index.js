import React from "react";
const NavigationBar = () => {
    return (
        <div style={{display:"flex", justifyContent: "space-around"}}>
           <div style={{display: "flex", justifyContent: "center", flex:1}}> <h1>Logo</h1> </div>
           <div style={{display:"flex", flex: 4, justifyContent: "center"}}>
               <h3>About Us</h3>
               <h3>Dentists</h3>
               <h3>Price List</h3>
               <h3>Gallery</h3>
               <h3>Contacts</h3>
           </div>
           <div style={{display: "flex", justifyContent: "center",flex: 1}}> <h1>Icons</h1> </div>
        </div>
    )
};

export default NavigationBar;