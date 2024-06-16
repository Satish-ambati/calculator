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
            let del=result.innerHTML;
            del=del.slice(0,-1);
            result.innerHTML=del;
         }
    if(input=='C')
        {
            result.innerHTML='';
        }
    if(input=='=')
        {
            let exp=result.innerHTML;
            result.innerHTML=eval(exp);
        }
        
}
function root()
{
    let res=result.innerHTML;
    res=eval(res);
    res=Math.sqrt(res);
    result.innerHTML=res;
}
function factorial(){
    let res1=result.innerHTML;
    //console.log(res1);
    res1=eval(res1);
    //console.log(res1);
    let res2=1;
    for(i=1;i<=res1;i++)
        {
            res2*=i;
        }
    //console.log(res2);
    result.innerHTML=res2;
}