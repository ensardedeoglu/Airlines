
import React, { useEffect, useState } from "react";
import fetchJsonp from "fetch-jsonp"; //Import the fetchJsonp for fetching the jsonp data



function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [radio, setRadio] = useState(0);

    useEffect(() => {
        const endpoint = 'https://www.kayak.com/h/mobileapis/directory/airlines/homework'; //Define the url in endpoint  

        const result = fetchJsonp(endpoint, { //fetch the endpoint
            jsonpCallback: 'jsonp',
            timeout: 30000
        });

        result
            .then((res) => res.json()) //store data to JSON

            .then((data) => {
                data.map((dataUptadet) => {
                    dataUptadet.showDetailInformation = false; // Create showDetailInformation to use onHover
                })
                setData(data);  // Set all the data into the data variable
            })

            .catch((err) => {
                console.log(err); // Catch if any error shows up
            })
            .finally(() => {
                setLoading(false);  //Set the loading false 
            });
    }, []);

    const clickHandler = (event) => { //Create clickhandker for on hover
        let cardIndex = event.target.id.split('-')[1]; //Define specific id for each card
        let currentStateData = [...data];
        currentStateData[cardIndex].showDetailInformation = !currentStateData[cardIndex].showDetailInformation // If showDetailInformation false make it true
        setData(currentStateData) //Set the data with the current data
    }

    if (loading) {
        return <p>Data is loading</p>  // Display a message if the data still loading
    }

    return ( 
        <div className="home">
            <div >
                <h1 className="airlines" >Airlines</h1>
                <h1 className="alliances">Filter by Alliances</h1>
                <div className="filter">
                    {/* Display filter buttons and texts */}
                    <label className="filerTitle1"><input type="checkbox" className="inputText" onClick={() => setRadio(1)} />Oneworld</label>
                    <label className="filerTitle"> <input type="checkbox" className="inputText" onClick={() => setRadio(2)} />Sky Team</label>
                    <label className="filerTitle"> <input type="checkbox" className="inputText" onClick={() => setRadio(3)} />Star Alliance</label>
                </div>
            </div>

            {data.map((item, i) => {  //Loop through the data with map method to reach all the data
                if (radio === 1 && item.alliance === "OW") { // Create if statement for specific alliance
                    return (
                        <div className="container">
                            <div id="homeBox">
                                <img id={`img-${i}`} onMouseEnter={event => clickHandler(event)} src={`https://kayak.com${item.logoURL}`} />
                                <div className="airlinesName" id={`name-${i}`} onMouseEnter={event => clickHandler(event)} >{item.name}</div>
                                {item.showDetailInformation &&
                                    <span className="moreInfo">
                                        <div className="allianceName">{item.alliance}</div>
                                        <div >{item.phone}</div>
                                        <div>{item.site}</div>
                                    </span>
                                }
                            </div>
                        </div>
                    )
                } else if (radio === 2 && item.alliance === "ST") {
                    return (
                        <div className="container">
                            <div id="homeBox">
                                <img id={`img-${i}`} onMouseEnter={event => clickHandler(event)} src={`https://kayak.com${item.logoURL}`} />
                                <div className="airlinesName" id={`name-${i}`} onMouseEnter={event => clickHandler(event)} >{item.name}</div>
                                {item.showDetailInformation &&
                                    <span className="moreInfo">
                                        <div className="allianceName">{item.alliance}</div>
                                        <div >{item.phone}</div>
                                        <div>{item.site}</div>
                                    </span>
                                }
                            </div>
                        </div>
                    )
                } else if (radio === 3 && item.alliance === "SA") {
                    return (
                        <div className="container">
                            <div id="homeBox">
                                <img id={`img-${i}`} onMouseEnter={event => clickHandler(event)} src={`https://kayak.com${item.logoURL}`} />
                                <div className="airlinesName" id={`name-${i}`} onMouseEnter={event => clickHandler(event)} >{item.name}</div>
                                {item.showDetailInformation &&
                                    <span className="moreInfo">
                                        <div className="allianceName">{item.alliance}</div>
                                        <div >{item.phone}</div>
                                        <div>{item.site}</div>
                                    </span>
                                }
                            </div>
                        </div>
                    )
                } else if (radio === 0) {
                    return (
                        <div className="container">
                            <div id="homeBox">
                                <img id={`img-${i}`} onMouseEnter={event => clickHandler(event)} src={`https://kayak.com${item.logoURL}`} />
                                <div className="airlinesName" id={`name-${i}`} onMouseEnter={event => clickHandler(event)} >{item.name}</div>
                                {item.showDetailInformation &&
                                    <span className="moreInfo">
                                        <div className="allianceName">{item.alliance}</div>
                                        <div >{item.phone}</div>
                                        <div>{item.site}</div>
                                    </span>
                                }
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}


export default Home;
