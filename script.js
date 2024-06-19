let result=document.querySelector('.result P');
let l=0;
let m=0;
//console.log(result.innerHTML);
result.innerHTML="";
let inter=document.querySelector('.result span');
function update(input){
    if(true){
        if(input=='+'||input=='-'||input=='/'||input=='*'||input=='%')
            {
                l++;
            }
        else{
            m++;
        }
    }
    //console.log(l,m);
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
            inter.innerHTML='';
        }
    if(input=='=')
        {
            if(l>m)
                {
                    result.innerHTML='Error';
                }
            else{
                let exp=result.innerHTML;
                inter.innerHTML=exp;
                result.innerHTML=eval(exp);
            }
        }
        
}
function root()
{
    let res=result.innerHTML;
    res=eval(res);
    inter.innerHTML="root"+'('+res+')';
    res=Math.sqrt(res);
    result.innerHTML=res;
}
function factorial(){
    let res1=result.innerHTML;
    //console.log(res1);
    if(res1=='')
        {
            result.innerHTML='';
        }
    else{
        res1=eval(res1);
        let res2=1;
        for(i=1;i<=res1;i++)
        {
            res2*=i;
        }
    //console.log(res2);
        result.innerHTML=res2;
        inter.innerHTML=res1+'!';
    }
}