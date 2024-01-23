function handle1(event){
    const info = 'testing';
    console.log(this);
    console.log(event);
}

const handle2 = (event) => {
    const info = 'testing';
    console.log(this);
    console.log(event);
}

document.addEventListener('click', handle1);