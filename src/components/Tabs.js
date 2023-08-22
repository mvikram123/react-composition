import React,{useState} from "react";




const Tabs=(props)=>{
  let[activeIndex,setActiveIndex]=useState(0)


  const handleIndex=(index)=>{


    setActiveIndex(index)
  }



    return(




        <div>
                <ul>
                    {props.tabs.map((tab,index)=>(
                         <li key={index} onClick={()=>handleIndex(index)}>
                            {tab.title}
                            </li>

                    ))
                   
                    }
                </ul>
                <div>{props.tabs[activeIndex].text}</div>
               

        </div>
    )
}
export default Tabs;