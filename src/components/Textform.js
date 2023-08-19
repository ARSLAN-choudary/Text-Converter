import React, { useState } from 'react'

function Textform(props) {
     const handleupclick=()=>{
        console.log(`uppercase was clicked`);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper case","success")
     }
     const handlelowclick=()=>{
      let lowText= text.toLowerCase();
      setText(lowText);
      props.showAlert("converted to Lower case","success")
     }
     const handleonchange=(event)=>{
        console.log(`onchanged`);
        setText(event.target.value)
     }
     const handleclearclick=()=>{
      let newText='';
      setText(newText)
     }
    const[text,setText]=useState('');
    const [myStyle,setmyStyle]=useState({
      color:'black',
      backgroundColor:'white'
    })
    const handleCopy=()=>{
      let text=document.getElementById("box");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied","success")
    }
    // const[btnText,setBtnText]=useState("enable dark mode")
    // const toggleStyle=()=>{
    //   if(myStyle.color=='black'){
    //     setmyStyle({
    //       color:'white',
    //       backgroundColor:'black'
    //     })
    //     setBtnText("enable Light mode")
    //   }
    //   else{
    //     setmyStyle({
    //       color:'black',
    //       backgroundColor:'white'
    //     })
    //     setBtnText("enable dark mode")
    //   }
    // }

  return (
    <>
    <div>
      <div className="mb-3">
        <h2 className={`text-center my-4 text-${props.mode==='light'?'dark':'light'}`} >{props.name}</h2>
        <textarea className="form-control" value={text}style={{backgroundColor:props.mode==='dark'?'#2b2e30':'white',color:props.mode==='dark'?'white':'black'}}  onChange={handleonchange} id="box" rows="6"></textarea>
      </div>
      <button className='btn btn-primary'onClick={handleupclick}>convert to uppercase</button>
      <button className='btn btn-primary mx-3'onClick={handlelowclick}>convert to lower case</button>
      <button className='btn btn-primary 'onClick={handleclearclick}>Clear All</button>
      <button className='btn btn-primary mx-3 'onClick={handleCopy}>Copy All</button>
      {/* <button className='btn btn-primary mx-3 'onClick={toggleStyle}>{btnText}</button> */}
      {/* <button className='btn btn-primary'onClick={handlecapclick}>capitalize Text</button> */}
    </div>
    <div className={`container my-4  text-${props.mode==='light'?'dark':'light'}`}>
      <h2>Text Summary</h2>
      <p>Number of chracters={text.length}</p>
      <p>Number of Words={text.split(" ").length}</p>
      <p>Esstimated time to read={0.008*text.split(" ").length}</p>
    </div>
    </>
  )
}

export default Textform
