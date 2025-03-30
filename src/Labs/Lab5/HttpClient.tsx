import React, { useEffect, useState } from "react";
import * as client from "./client"
export default function HttpClient() {
const [welcomeOnClick, setWelcomeOnClick] = useState("");
const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
const fetchWelcomeOnClick = async () => {
    const message = await client.fetchWelcomeMessage();
    setWelcomeOnClick(message);
    };
    const fetchWelcomeOnLoad = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);
    console.log(welcomeOnLoad);
        
    
return (
<div>
<h3>HTTP Client</h3> <hr />
<h4>Requesting on Click</h4>
...
<hr />
<h4>Requesting on Click</h4>
<button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
Fetch Welcome
</button> <br />
Response from server: <b>{welcomeOnClick}</b>
<hr />
</div>

);
}
