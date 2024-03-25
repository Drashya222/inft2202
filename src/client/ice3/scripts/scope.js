function outsideFunction(){
    console.log('im outside');
    function insideFunction(){
        let privateMember = 12345;
        console.log('i have a private number whose value is ${privateMember}');
    }
    
    console.log(privateMember);
    // insideFunction();

    const returnValue = {
        insideFunction: insideFunction
    }

    console.log(this);

    return returnValue;

}