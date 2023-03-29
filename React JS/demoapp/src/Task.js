import React from "react";
import Completed from "./Completed";
import Missed from "./Missed";

function Task(props){
    const isTask = props.isTask;
    if (isTask) {
        return <Completed />;
    }
    else {
        return <Missed />;
    }
}

export default Task;