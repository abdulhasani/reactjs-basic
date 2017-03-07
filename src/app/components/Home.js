/**
 * Created by Hasani on 3/7/2017.
 */
import React from "react";
export class Home extends React.Component{
    render(){
        /**
         * keyword let berarti variabel tersebut hanya berlaku untuk
         * block tertentu
         * @type {string}
         */
        let content = "";
        if(true){
            content = <p>Hello !</p>;
        }
        return(
            <div>
                <p>In new Component</p>
                {content}
                {"Hello Rindu"}
                { 5 == 45 ? "YES":"NO"}
            </div>
        );
    }
}
