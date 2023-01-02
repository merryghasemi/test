

let re;
re=/hello world/

re=/^h/

// re=/ world$/i

// re=/^hello$/i//only be hello

// re=/h*llo/i//any charchter

re=/gr[ae]y/i

re=/[^GF]ray/

re=/[0-9]ray/

const str ="gray"//this is mytext



const result = re.exec(str)//return array

console.log(result)

if(re.test(str)){

    console.log(`${str} matche ${re.source}`);
}
else{
    console.log(`${str} does not matche ${re.source}`);
}