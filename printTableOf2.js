function printTable() {
    for(let a=1;a<=10;a++) {
        console.log(`2 * ${a} = ${2*a}`);
    }
}
setTimeout(printTable,2);

function Hi(){
    console.log('Hi');
    console.log('Hi');

}

setTimeout(Hi,2);