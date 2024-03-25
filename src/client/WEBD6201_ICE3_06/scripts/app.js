(function(){
    
    // test1();
    test2();
    
    function test1(){
        const jqele = $('.red-box');
        console.log(jqele);

        jqelem
            .removeClass('.red-box')
            .addClass('.blue-box');
    }

    function test2(){
        const jq = $('#content > p');
        console.log(jq[1]);
        console.log($(jq[1]).text());
    }

    function test3(){
        $('.red-box').on("click", function(event){
            alert('this is a red box');
        })
    }

    function test4(){
        const newelem = $('<p></p>')
            .text('this was created with jq also')
            .addClass('emphasize');
        
            $('#test-box')
            .append('<p>i added this with jq</p>')
            .append(newelem);    
    }

    function validateEmail(){}
    function validateName(){}

    function test5(){
        $("form#test-form input[name=submit]").on('click', e=>{
            e.preventDefault();
            e.stopPropagation();
            const email = $('form#test-form input[type=email]').val()
            alert(email);

            if(!validateEmail()){

            }
            if(!validateName()){
                
            }
        })
    }
})