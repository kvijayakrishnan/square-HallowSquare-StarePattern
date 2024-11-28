// Inverse pyramid

function inversePyramid(rows){
    for(let i = rows; i > 0; i--){ // this is decrement for loop
        let str =''; // create str
        for(let j=0;j<rows-i;j++){ // this mt space create increment
            str +=' ';
        }
        for(let k=0;k<2*i-1;k++){ // 
            str += '*'
        }
        console.log(str)
    }
}


// inversePyramid(5)


// Inverse Right angle triangle

function inverseRightAngleTriangle(rows){
    for(let i = rows; i > 0; i--){ // this is decrement for loop
        let str =''; // create str
        for(let j=0;j<i;j++){ // this mt space create increment
            str +='*';
        }
        console.log(str)
    }
}


inverseRightAngleTriangle(5)


// square








// hollo square







