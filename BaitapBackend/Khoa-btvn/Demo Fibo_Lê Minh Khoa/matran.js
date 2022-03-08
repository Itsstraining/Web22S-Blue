function matrix(n){
  let matrix =[];
  for(let i=0;i<n;i++){
      let row = [];
      for(let j=0;j<n;j++){
          row.push(0);
      } 
      matrix.push(row);
  }
  let num = 1;
  let dir ="right";
  while(num <=n*n) {
    if(dir == "right") {
      if(matrix[i][j] == 0) {
        matrix[i][j] =num;
        num++;
      }
      if(matrix[j+1] == undefined) {
        dir = "down";
        i++;
        continue;
      }
      j++
    }
  }

}