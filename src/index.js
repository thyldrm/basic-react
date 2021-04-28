import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";
import Collapse from "./components/Collapse";



const App = (props) =>{
    //console.log(props);
    return(
        
        <div className="container">
            <div className="row">
                <div className="card-group w-100">
                    <div className="col">
                        <Collapse href="collapseExample1">
                            <Card 
                                cardTitle="Birinci Başlık" 
                                cardText="Lorem Ipsum" 
                                cardTime="1 second ago" 
                                image="https://picsum.photos/id/5/200/300/?blur"
                                />
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample2">
                            <Card 
                                cardTitle="İkinci Başlık"  
                                cardText="Lorem Ipsum" 
                                cardTime="2 second ago"
                                image="https://picsum.photos/id/10/200/300/"
                                />
                        </Collapse >
                    </div>
                    <div className="col">
                        <Collapse href="collapseExample3">
                            <Card 
                                cardText="Lorem Ipsum" 
                                cardTime="3 second ago" 
                                image="https://picsum.photos/id/15/200/300/?grayscale"
                                />
                        </Collapse>

                    </div>  
                </div>
            </div>
        </div>

    ); 
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);