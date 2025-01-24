import React from 'react';

const Input = ({ value }) => {
    return (
        <input type="text" value={value} readOnly className='w-[327px] h-[60px] text-right pr-2 text-2xl bg-black text-white'/>
    );
};

export default Input;