let a;
let b;
let c;

function tamGiac(a,b,c){
    if((a==b&&((a*a)+(b*b)==(c*c)))||(a==c&&((a*a)+(c*c)==(b*b)))||(c==b&&((c*c)+(b*b)==(a*a)))){ 
        console.log("tam giac vuong can");
    }else if((a*a)==(b*b)+(c*c)){
        console.log("Tam giac vuong tai A");
    }else if((b*b)==((a*a)+(b*b))){
        console.log("Tam giac vuong tai B");
    }else if((c*c)==((b*b)+(a*a))){
        console.log("Tam giac vuong tai C");
    }else if (a==b||b==c||a==c){
        console.log("tam giac can");
    }else if(a==b&&b==c&&a==c){
        console.log("Tam giac deu");
    }else if(a+b>c&&(a+c>b)&&b+c>a){
        console.log("Tam giac thuong");
    }else {
        console.log("khong phai tam giac");
    }
}
tamGiac(2,2,3);
