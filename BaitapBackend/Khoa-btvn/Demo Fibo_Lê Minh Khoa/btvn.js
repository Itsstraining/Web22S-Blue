function main(input) {
	let key = input.split(" ");
      
	let op = key[0];
	let row1 = key[1];
	let col1 = key[2];
	let row2 = key[3];
	let col2 = key[4];
      
	let matrix1 = [];
	let matrix2 = [];
      
	let arr1 = [];
	let arr2 = [];
      
	let point = 0;
      
	if(row1,row2,col1,col2 != 0){
	  if(op == "+"){
	    if(row1 == row2 && col1 == col2){
	      let num1 = row1 * col1;
	      let num2 = row2 * col2;
	      for(let i = 5; i <= key.length; i++){
		if(num1 < 1){
		  point = i;
      
		  break;
		}
		arr1.push(Number(key[i]));
		num1--;
	      }
	      for(let i = point; i <= key.length; i++){
		if(num2 < 1){
		  break;
		}
		arr2.push(Number(key[i]));
		num2--;
	      }
	      matrix1 = sumMatrix(row1,col1,arr1);
	      matrix2 = sumMatrix(row2,col2,arr2);
      
	      for(let i = 0; i < row1; i++){
		for(let j = 0 ; j < col1; j++){
		  matrix1[i][j] = matrix1[i][j] + matrix2[i][j];
		}
	      }
	      console.log(row1,col1,matrix1.join(',').replace(/,/g,' '));
	    }
	    else{
	      console.log(-1);
	    }
	  }
	  else if(op == "*"){
      
	  }
	}
	else{
	  console.log(-1);
	}
      }