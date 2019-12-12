import React from "react";
import ReactDOM from "react-dom";
// import './app.css'

const WishList = [

    {
        details: "DETAILS",
        deadline: "DEADLINE",
        importance: "IMPORTANCE",
        status: "STATUS"
    },
    {
        details: "wash dishes",
        deadline: "11-02-2020",
        importance: "2",
        status: "Todo"
    },
    {
        details: "read c++",
        deadline: "01-01-2020",
        importance: "7",
        status: "Done!"
    },
    {
        details: "shopping",
        deadline: "18-03-2020",
        importance: "6",
        status: "Done!"
    },
    {
        details: "go to sleep",
        deadline: "17-01-2020",
        importance: "9",
        status: "Todo"
    },
    {
        details: "Buy Boots",
        deadline: "08-02-2020",
        importance: "1",
        status: "Done!"
    },
    {
        details: "eat",
        deadline: "02-04-2020",
        importance: "8",
        status: "Todo"
    }
 
 
];

  const OutputScreenRow = (props) => { 
    return ( 
      <div style = {{display: "inline"}}> 
        <input type="text" readOnly value={props.value} style ={{textAlign: "center"}} /> 
      </div> 
    ) 
  }   

const Line=(props)=>{
    return(
         <div>
         < OutputScreenRow value={props.line.details}/>
         < OutputScreenRow value={props.line.deadline}/>
         < OutputScreenRow value={props.line.importance} />
        < OutputScreenRow value={props.line.status} /> 
        </div>
      
    )
}

const App = () => {
    return (
        <div >
        <h2 style  = {{ color: "rgb(34, 230, 230)", fontSize: "10em", fontFamily: "Times New Roman', Times, serif"}}>
        DodoList
        </h2>
        { WishList.map((line,i)=> <Line line={WishList[i]} key={i}  /> )}
         </div>
    );
};

export default App;
