'use strict';
let name = 'vlad';
const birthday = 2002;
const func = (name) => {
    console.log(name);
};
const range = (start,end)=>{
     console.log(start);
     for (let i = start; i <= end; i++) {
        if ((i % 2 != 0)) {
            console.log(i);
        }
    }
    console.log(end);
 };

{
    func(birthday);
    range(15,30);
  
}