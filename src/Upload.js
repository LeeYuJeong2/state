import React, { useState } from 'react';

const Upload = () => {

const [names, setNames]=useState(["홍길동","이유정"]);
const [input,setInput]=useState('');

const handleInputChange = (e) => {
    setInput(e.target.value);
};

const handleUpload = () =>{
    setNames((prevState)=>{
        console.log('이전 state:',prevState); //홍길동, 이유정
        return([...prevState,input])
    });
};


    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange}/>
            <button onClick={handleUpload}>Upload</button>
            {names.map((name,idx)=>{ //map을 써서 element를 출력하게 되면 key가 꼭 있어야함 
                return <p key={idx}>{name}</p>
            })}
        </div>
    );
};

export default Upload;