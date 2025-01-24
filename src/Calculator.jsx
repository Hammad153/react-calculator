import React from 'react'
import Input from './Input';
import Button from './Button';

const Calculator = ({ value, handleClick, clearInput, handleEqualsClick }) => {

  return (
    <div className='bg-black p-2 w-[356Spx] border-2 border-slate-600'>
        <div className='mr-auto ml-auto'>
            <Input value={value}/>
            <div className=''>
                <Button 
                   id={"AC"}  
                   value={"AC"} 
                   style={{backgroundColor: "#ff5050", width: "162px",}} 
                   clearInput={clearInput}
                />
                <Button id={"/"} style={{backgroundColor: "#4d4d4d"}} value={"/"} handleClick={handleClick}/>
                <Button id={"*"} style={{backgroundColor: "#4d4d4d"}}  value={"*"} handleClick={handleClick}/>
            </div>
            <div>
                <Button id={"7"} value={"7"} handleClick={handleClick}/>
                <Button id={"8"} value={8} handleClick={handleClick}/>
                <Button id={"9"} value={9} handleClick={handleClick}/>
                <Button id={"-"} value={"-"} style={{backgroundColor: "#4d4d4d"}} handleClick={handleClick}/>
            </div>
            <div>
                <Button id={"4"} value={4} handleClick={handleClick}/>
                <Button id={"5"} value={5} handleClick={handleClick}/>
                <Button id={"6"} value={6} handleClick={handleClick}/>
                <Button id={"+"} value={"+"} style={{backgroundColor: "#4d4d4d"}} handleClick={handleClick}/>
            </div>

            <div className='flex'>
                <div>
                    <div>
                        <Button id={"1"} value={1} handleClick={handleClick}/>
                        <Button id={"2"} value={2} handleClick={handleClick}/>
                        <Button id={"3"} value={3} handleClick={handleClick}/>
                    </div>
                    <div>
                        <Button 
                            id={"0"} 
                            value={0} 
                            style={{width: "162px"}} 
                            handleClick={handleClick}
                        />
                        <Button id={"."} value={"."} handleClick={handleClick}/>
                    </div>
                </div>
                <div>
                    <Button 
                        id={"="} 
                        value={"="}
                        style={{height: "132px", backgroundColor: "#0099ff"}}
                        handleEqualsClick={handleEqualsClick}
                    />
                </div>
        </div>
        </div>
    </div>
  )
}

export default Calculator
