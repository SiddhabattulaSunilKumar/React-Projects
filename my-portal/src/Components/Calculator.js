import React , {useState, useEffect} from 'react';
import myPortalStyles from "./MyPortal.module.css";

const Calculator = (props) => {
   const[input1Val,setInput1Val] = useState()
   const[input1Va2,setInput2Val] = useState()
   const[operatorVal,setOperatorVal] = useState()
   const[outputVal,setOutputVal] = useState()

    const InputNumber1Handler = e => {
        setInput1Val(e.target.value);
    }

    const InputNumber2Handler = e => {
        setInput2Val(e.target.value);
    }

    const OperatorChangeHandler = e => {
        setOperatorVal(e.target.value);
    }

    const LogicalOperation = () => {
        if(operatorVal==="Add"){
            return input1Val + input1Va2
        }
        else if(operatorVal==="Subtract"){
            return input1Val - input1Va2
        } 
    }

    useEffect(() => {
        setOutputVal(
            LogicalOperation       
        )
    },[input1Val])

  return (
    <>
      <div className={myPortalStyles.card}>
        <div>
          <label htmlFor="UserName">Number 1</label>
          <input type="number" name="UserName" id="Number1" onChange={InputNumber1Handler}/>
        </div>
        <div>
          <label>Arthmetic Type:</label>
          <select onChange={OperatorChangeHandler}>
            <option value="Add">+</option>
            <option value="Subtract">-</option>
            <option value="Divide">/</option>
            <option value="Multiply">*</option>
          </select>
        </div>
        <div>
          <label htmlFor="UserName">Number 2</label>
          <input type="number"  name="UserName" id="Number1"  onChange={InputNumber2Handler}/>
        </div>
        <br />
        <div>
          <label htmlFor="UserName">Output</label>
          <input type="number"  name="UserName" id="Output" value={outputVal} disabled/>
        </div>
      </div>
    </>
  );
};

export default Calculator;
