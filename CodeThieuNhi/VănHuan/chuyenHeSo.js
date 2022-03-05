let arr=[];
let he16=["A","B","C","D","E","F"]
let he16s10=[10,11,12,13,14,15]
function chuyen10HeSo(n,y){
    while(n>0){
        let chia=n%y;
        if(chia==0){
            arr.unshift(chia);
        }else{
            if(y==16){
                if(chia>9&&chia<16)
                for(let i=0;i<he16s10.length;i++){
                    if(chia==he16s10[i]){
                        arr.unshift(he16[i]);
                    }
                }
                
                else{
                    arr.unshift(chia);
                }
            }else{
            arr.unshift(chia); 
        }
        }
        n=Math.floor(n/y);
        // console.log(n);
    }
}
// chuyen10HeSo(10100001101111001101,16)

function ktChu(pt){
let kt=typeof pt;
if(kt=="string") return true;
else return false;
}

let soarr=[2,"B"];
function chuyenHeSo10(n,x){
    let sum=0;
    let cuont=0;
for(let i=n.length-1;i>=0;i--){
    if(x==16){
        let temp=ktChu(soarr[i]);
        // // console.log(temp)
        if(temp==true){
            for(let j=0;j<he16.length;j++){
                if(soarr[i]==he16[j]){
                    // console.log(soarr[i],he16[j])
                    // console.log(he16[j])
                    soarr[i]=parseInt(he16s10[j])
                    // console.log(soarr[i])
                    // console.log(parseInt(he16s10))
                    // console.log("hhhhhh")
                }
            }
            sum+=(Math.pow(x,cuont))*soarr[i];
            // console.log("asfafah")
            // console.log(sum)
            cuont++;
        }else{
            sum+=(Math.pow(x,cuont))*soarr[i];
            cuont++;
            // console.log(sum)
            // console.log("shfuih")
        }
    }else{
        sum+=(Math.pow(x,cuont))*soarr[i];
        cuont++;
    }
}
console.log(sum)
}

chuyenHeSo10(soarr,16)
// console.log(arr)