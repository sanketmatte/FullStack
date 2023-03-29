import React from 'react';

class Car extends React.Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.state = {
            change:true
        };
    }

    render() {
        return(
            <div>
                <h1>This in Class based React Component</h1>
                <button onClick={
                    ()=>{
                        this.setState({
                            change: !this.state.change
                        })
                }
                }>Click Here To Change State</button>
                {
                    this.state.change ? (
                        <p>Car Name is: {this.props.name}</p>
                    ): 
                    (
                        <p>Car Name is not visible due to state change</p>

                    )
                }
            </div>
            
        )
    }
}

export default Car