let result=document.querySelector('.result P');
//console.log(result.innerHTML);
result.innerHTML="";
function update(input){
    
    if(input!='C'&&input!='del'&&input!='=')
        {
            //console.log(input);
            if(input=='b1')
                {
                    input='(';
                    //console.log(input);
                }
            if(input=='b2')
                {
                    input=')';
                    //console.log(input);
                }
            result.innerHTML+=input;
        }
    if(input=='del')
        {
            
        }
    if(input=='C')
        {
            result.innerHTML='0';
        }
    if(input=='=')
        {
            let exp=result.innerHTML;
            result.innerHTML=eval(exp);
        }
        
}