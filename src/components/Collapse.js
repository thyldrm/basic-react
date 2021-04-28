//ilk constructor oluştu bunun sayesinde ilk state durumumuzu oluşturduk.(state initialization)
//render metodu çalıştı
//onClick çalıştı
// onClick ile beraber show more metodu çalıştı 
// showMore ile birlikte state drurumu setState ile değişti ve
// render fonksiyonu triggerlanarak yeniden çalıştı.

import React from "react";

class Collapse extends React.Component {

    constructor(){
        super();

        this.state = {
            showContent: false
        }
        
    }

    showMore = () => {
        console.log(this)
        this.setState({showContent: !this.state.showContent})
        
    }

    render(){
        return (
            <div>
                
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {React.Children.map(this.props.children, children => children.props.cardTitle )}
                </button>
                
                {
                    this.state.showContent ? (
                    <div className="collapse show">
                        {React.Children.map(this.props.children, children => children )}
                     </div>
                    ): null
                }

                
            </div>
        );

    }
} 

export default Collapse;