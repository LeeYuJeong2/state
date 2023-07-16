import React, { useState } from 'react';

const Time = () => {

const [time, setTime]=useState(1);

const handleClick=()=>{ 
    let newTime; //이 함수가 불릴때마다 newTime이란 변수를 생성.
    if(time>=12){
        newTime=1;
    }else{
        newTime=time+1;
    }
    setTime(newTime);
}

console.log("업데이트"); // 리렌더링이 될때마다 실행됨. 

    return (
        <div>
            <span>현재 시각 : {time}시</span>{' '}
            <button onClick={handleClick}>Update</button>
        </div>
    );
};

export default Time;