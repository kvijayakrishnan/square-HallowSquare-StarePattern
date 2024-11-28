// square 
function square(rows){
    console.log('square')
    for(let i=1;i<=rows;i++){
        console.log('*'.repeat(rows))
    }
    // console.log('\n')
}


square(5)


//hallow square

function hallowSquare(rows){
    console.log('Hallow Square');
    for(let i=1; i<=rows; i++){
        if(i===1 || i===rows){
            console.log('*'.repeat(rows));
        }else{
            console.log('*'+" ".repeat(rows-2)+"*");
        }
    }
}


hallowSquare(6)

