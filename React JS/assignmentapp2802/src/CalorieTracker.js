// import { useState } from "react";
import React from "react";
// const [data, setData] = useState(0);
class CalorieTracker extends React.Component{
     
    constructor(props){
        super(props);
        this.state = {
              total_calorie:0, 
              calorie_dict: [],
        };
    }
    
    addCalorie = () => {
        var itemname = document.getElementById("itemname").value
        var calorie = parseInt(document.getElementById("caloriecount").value)
        let newEntry = {
            ItemName: itemname,
            CalorieCount : calorie
         }
         this.setState((prevState) => ({
            calorie_dict: [...prevState.calorie_dict, newEntry],   // add new item to calorie_dict array
            total_calorie: prevState.total_calorie+calorie // add to the total count
         }));

        

    }

    render(){
        return(
            <div>
                <h1>This is Calorie Tracker Application</h1>
                <label>
                    Add the Item:
                    <input type="text" id="itemname"></input>
                </label>
                <label>
                    Add the Calorie:
                    <input type="number" id="caloriecount"></input>
                </label>
                <button onClick={this.addCalorie}>Add Calories</button>
                <h4>Your consumption for today : {this.state.total_calorie} calories</h4>
                <ul>
                    {this.state.calorie_dict.map((item) => (
                        <li key={item.ItemName}>
                            {item.ItemName} - {item.CalorieCount} calories
                        </li>
                    ))}
                </ul>
                
                {/* {% for i in this.state.%} */}
            </div>
        )
    }
}

export default CalorieTracker;