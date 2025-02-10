import React from "react";

const InterfaceDisp = (props) => {

    return (
        <main className="InterfaceDisp">
            <form>
                <label>Task text</label>
                <input placeholder="enter the task"></input>
                <button className="button btnAddNewTask" type="submit">ADD</button>
            </form>

            <div>
                <ul>
                    <li><button className="button btnFilterChoose">current</button></li>
                    <li><button className="button btnFilterChoose">completed</button></li>
                    <li><button className="button btnFilterChoose">all</button></li>
                </ul>
            </div>
        </main>
    );
}

export default InterfaceDisp;