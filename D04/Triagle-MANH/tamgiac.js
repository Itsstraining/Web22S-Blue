function tamGiac(a,b,c){
    if(a <= 0 || b <= 0 || c <= 0){
        console.log("Day khong phai la tam giac");
    }
    else if(a + b <= c || a + c <= b || b + c <= a){
        console.log("Day khong phai la tam giac");
    }
    else{
        if( ((Math.round(a*a) == b*b + c*c) && (b == c)) || ((Math.round(b*b) == c*c + a*a) && (c == a)) || ((Math.round(c*c) == a*a + b*b) && (a == b)) ){
            console.log("Day la tam giac vuong can");
        }
        else if( (a*a == b*b + c*c) || (b*b == c*c + a*a) || (c*c == a*a + b*b) ){
            console.log("Day la tam giac vuong");
        }
        else if( a == b  && b == c){
            console.log("Day la tam giac deu");
        }
        else if( a == b || b == c || c == a){
            console.log("Day la tam giac can");
        }
        else{
            console.log("Day la tam giac thuong");
        }
    }
}
console.log(Math.round(5.656854249 * 5.656854249));
tamGiac(4,4,5.656854249);
tamGiac(3,4,5);
tamGiac(3,3,3);
tamGiac(5,5,8);
tamGiac(3,2,1);
tamGiac(4,6,5);
// console.log(5.656854249 * 5.656854249);
console.log(4*4 + 4*4 == Math.round(5.656854249 * 5.656854249));