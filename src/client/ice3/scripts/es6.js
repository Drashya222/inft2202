(function(){

    console.log("es6.js loaded");
    
    // tadah();

    const handle = () => {
        console.log('handled');
    }

    handle();

    // outsideFunction();
    //insideFunction();
    
    // #region ES6 Arrow Functions
    // ES5
    function printNameES5(name){
        return ('ES5 Traditional Function: Hello ' + name); 
    }

    const demoElement1 = document.getElementById('demo_content_1');
    demoElement1.innerText = printNameES5('Drashya');

    // ES6
    printNameArrowFunction = (name) => {
        return ('ES6 Traditional Function: Hello' + name);
        
    }
    const demoElement2 = document.getElementById('demo_content_2');
    demoElement2.innerText = printNameES5('Drashya');

    // We can also write the above code without the return statement
    // Called an implicit return
    const printNameArrowImplicit = name => `ES6 Arrow Function: Hello ${name}`;

    const demoElement3 = document.getElementById('demo_content_3');
    demoElement3.innerText = printNameES5('Drashya');

    // const demo = [1, 2, 3];
    // const result = demo.map(value => value += 1);
    // const result = demo.map(function(value) {return value += 1})
    // console.log(result);
    
    //#endregion ES6 Arrow Functions
    
    //#region ES6 Function Parameters
    


    // ES6 default parameters
    function es5DefaultParameters(a,b) {
        b = (typeof b !== 'undefined') ? b : 42;
        return a+b;
    }
    const demoElement4 = document.getElementById('demo_content_4');
    demoElement4.innerText = `
        with a but not b: ${es5DefaultParameters(5)}.
        with a and b: ${es5DefaultParameters(5, 7)}.
    `
    // ES7 Default parameters in arrow functions (OOOOH!)
    
    function es6DefaultParameters (a, b = 42){
        return a + b
    }
    const es6ArrorwDefaults = (a, b = 42) => a + b

    const demoElement5 = document.getElementById('demo_content_5');
    demoElement5.innerText = `
        with a but not b: ${es6ArrorwDefaults(5)}.
        with a and b: ${es6ArrorwDefaults(5, 7)}.
    `

    // New 'rest' parameters
    
    function restParameters (a, ...rest){
        console.log(a, rest);
        return rest.reduce((a,b) => a+b)
    }
    const demoElement6 = document.getElementById('demo_content_6');
    demoElement6.innerText = restParameters(5, 10, 15, 20, 25, 30);

    //#endregion ES6 Function Parameters
    
    //#region Cleaner Code
    
    //#endregion Cleaner Code
})();


