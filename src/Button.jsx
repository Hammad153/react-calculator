import React from 'react';

const Button = ({ value, handleClick, style, id, clearInput, handleEqualsClick }) => {
    return (
        <button onClick={(e) => {
            if (handleClick) handleClick(e.target.value);
            if (clearInput) clearInput(e);
            if (handleEqualsClick) handleEqualsClick(e);
        }} 
          id={id}
          style={style} 
          value={value} 
        className='w-[80px] h-[65px] m-[1px] text-2xl font-bold text-white bg-slate-600 hover:bg-slate-400 hover:p-[2px]'>
            {value}
        </button>
    );
};

export default Button;