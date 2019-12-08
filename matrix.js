function Matrix(){ 

    this.createMatrix = function(array , shape){
        this.collums = [];
        this.rows = [];
        this.returnArray = {};

        for(let i = 0; i < array.length; i++){
            this.rows.push(array[i]);
        }

        

        for(let i = 0; i < array[0].length; i++){
            let arr = [];
            for(let j = 0; j < array.length; j++){
                arr.push(array[j][i]);
            }
            this.collums.push(arr);
        }
        
        this.returnArray.rows = this.rows;
        this.returnArray.collums = this.collums;
        this.returnArray.shape = [this.rows.length,this.collums.length];
        this.returnArray.size = this.collums.length * this.rows.length;
        return this.returnArray;
    }

    this.Create_1D_Matrix = function(array){
        this.collums = [];
        this.rows = [];
        this.returnArray = {};

        for(let i = 0; i < array.length; i++){
            this.rows.push(array[i]);
        }

        

        // for(let i = 0; i < array[0].length; i++){
        //     let arr = [];
        //     for(let j = 0; j < array.length; j++){
        //         arr.push(array[j][i]);
        //     }
        //     this.collums.push(arr);
        // }
        
        this.returnArray.rows = this.rows;
        this.returnArray.collums = this.collums;
        this.returnArray.shape = [this.rows.length,this.collums.length];
        this.returnArray.size = this.collums.length * this.rows.length;
        return this.returnArray;
    }

    this.matrixAdd = function(array1,array2 , bool){
        //  if(array1.rows.length == array2.rows.length){
            let array = [];
            for(let i = 0; i < array1.rows.length; i++){
                let row = [];
                for(let j = 0; j < array1.rows[0].length; j++){
                    row.push(array1.rows[i][j] + array2.rows[i][j]);
                }
                array.push(row);
            }

            if (bool){
                return this.Create_1D_Matrix(array);
            }else{
                return this.createMatrix(array);
            }

        // }else{
        //     console.error('error!');
        // }
    }

    this.matrixSub = function(array1,array2){
        if(array1.rows.length == array2.rows.length && array1.collums.length == array2.collums.length){
            let array = [];
            for(let i = 0; i < array1.rows.length; i++){
                let row = [];
                for(let j = 0; j < array1.rows[0].length; j++){
                    row.push(array1.rows[i][j] - array2.rows[i][j] / 2 );
                }
                array.push(row);
            }

            return this.createMatrix(array);

        }else{
            console.error('error!');
        }
    }

    this.matrixMult = function(mat1,mat2){
        if(mat1.collums.length == mat2.rows.length){
          let array  = [];
          for(let i = 0; i < mat1.rows.length; i++){
                let row = [];
                for(let j = 0; j < mat2.collums.length; j++){
                    let spot = 0;
                    for(let k = 0; k < mat1.rows[0].length; k++){
                        spot += mat1.rows[i][k] * mat2.collums[j][k];
                    }
                    row.push(spot);
                }
                array.push(row);
            }
            return this.createMatrix(array);
        }else{
            console.error('Error!');
        }
    }

    this.matrixSet = function(mat,array,val){
        mat.rows[array[0]][array[1]] = val;
        return [mat.rows[array[0]][array[1]]];
    }

    this.matrixGet = function(mat,array){
        return [mat.rows[array[0]][array[1]]];
    }

    this.matrixTranspose = function(obj){
        let outobj = {};
        outobj.rows = obj.collums;
        outobj.collums = obj.rows;
        return outobj;
    }

    this.genarateSquareMatrix = function(n){
        let outarray = [];
        for(let i = 0; i < n; i++){
            let row = [];
            for(let j = 0; j < n; j++){
                row.push(Math.floor(Math.random(1,10)*10));
            }
            outarray.push(row);
        }

        return this.createMatrix(outarray);
    }

    this.genarateZeroMatrix = function(rows,collums){
        let array = [];

        for(let i = 0; i < rows; i++){
            let row = [];
            for(let j = 0; j < collums; j++){
                row.push(0);
            }
            array.push(row);
        }

        return this.createMatrix(array);

    }

    this.genarateUnitMatrix = function(row){
        let array = [];

        for(let i = 0; i < row; i++){
            let outrow = [];
            for(let j = 0; j < row; j++){
                if(j == i){
                    outrow.push(1)
                }else{
                    outrow.push(0);
                }
            }
            array.push(outrow);
        }

        return this.createMatrix(array);

    }

    this.genarateScalarMatrix = function(row,scalar){
        let array = [];
        let n = Math.round(Math.random()*10) +1;

        for(let i = 0; i < row; i++){
            let outrow = [];
            for(let j = 0; j < row; j++){
                if(j == i){
                    if(scalar){
                        outrow.push(scalar);
                    }else if (!scalar){
                        outrow.push(n);
                    }
                }else{
                    outrow.push(0);
                }
            }
            array.push(outrow);
        }

        return this.createMatrix(array);

    }

    this.genarateDigitalMatrix = function(row,scalar){
        let array = [];
        for(let i = 0; i < row; i++){
            let outrow = [];
            for(let j = 0; j < row; j++){
                if(j == i){
                    if(scalar){
                        outrow.push(scalar);
                    }else if (!scalar){
                        outrow.push(Math.round(Math.random()*10) +1);
                    }
                }else{
                    outrow.push(0);
                }
            }
            array.push(outrow);
        }

        return this.createMatrix(array);
    }

    this.isSquareMatrix = function(mat){
        if(mat.collums.length == mat.rows.length){
            return true;
        }else{
            return false;
        }
    }

    this.isDigitalMatrix = function(mat){
        let pool = [];
        let point = 0;
        for(let i = 0; i < mat.rows.length; i++){
            for(let j = 0; j < mat.rows.length; j++){
                if(i != j){
                    if(mat.rows[i][j] == 0){
                        pool.push(1);
                    }else{
                        pool.push(0);
                    }
                }
            }
        }

        for(let i = 0; i < pool.length; i++){
            point += pool[i];
        }
        
        if(point == pool.length){
            return true;
        }else{
            return false;
        }
    }

    this.isScalarMatrix = function(mat){
        let num = mat.rows[0][0];
        let pool = [];

        for(let i = 0; i < mat.rows.length; i++){
            for(let j = 0; j < mat.rows.length; j++){
                if(i != j){
                    if(mat.rows[i][j] != 0){
                        pool.push(0);
                    }else{
                        pool.push(1);
                    }
                }else{
                    if(mat.rows[i][j] != num){
                        pool.push(0);
                    }else{
                        pool.push(1);
                    }
                }
            }

            let point = 0;
            for(let i = 0; i < pool.length; i++){
                point += pool[i];
            }

            if(point == pool.length){
                return true;
            }else{
                return false;
            }

        }
        
    }

    this.isUnitMatrix = function(mat){
        let pool = [];
        let point = 0;
        for(let i = 0; i < mat.rows.length; i++){
            for(let j = 0; j < mat.rows.length; j++){
                if(i != j){
                    if(mat.rows[i][j] == 0){
                        pool.push(1);
                    }else{
                        pool.push(0);
                    }
                }else{
                    if(mat.rows[i][j] == 1){
                        pool.push(1);
                    }else{
                        pool.push(0);
                    }
                }
            }
        }

        for(let i = 0; i < pool.length; i++){
            point += pool[i];
        }
        
        if(point == pool.length){
            return true;
        }else{
            return false;
        }
    }

    this.isOrthogonalMatrix = function(mat){
        let at = this.matrixTranspose(mat);
        let ans = this.matrixMult(mat,at);
        return this.isUnitMatrix(ans);
    }

    this.matrixEquilty = function(mat1,mat2){
        let pool = [];
        let point = 0;

        if(mat1.rows.length == mat2.rows.length && mat1.collums.length == mat2.collums.length){
            for(let i = 0; i < mat1.rows.length; i++){
                for(let j = 0; j < mat1.rows[0].length; j++){
                    if(mat1.rows[i][j] == mat2.rows[i][j]){
                        pool.push(1);
                    }else{
                        pool.push(0);
                    }
                }
            }

            for(let i = 0; i < pool.length; i++){
                point += pool[i];
            }

            if(point == pool.length){
                return true;
            }else{
                return false;
            }

        }else{
            return false;
        }
    }

    this.add = function(array1,array2){
        let array = [];
        if(array1.length == array2.length){
            for(let i = 0; i < array1.length; i++){
                if(array1[i].length != array1[0].length){
                    console.error('Error!');
                    break;
                  
                }
            }

            for(let i = 0; i < array2.length; i++){
                if(array2[i].length != array2[0].length){
                    console.error('Error!');
                    break;
                    
                }
            }
            
            for(let i = 0; i < array1.length; i++){
                let row = [];
                for(let j = 0; j < array1[0].length; j++){
                    row.push(array1[i][j] + array2[i][j]);
                }
                array.push(row);
            }

        }else{
            console.error('Error!');
        }
        return array
    }

    this.substract = function(array1,array2){
        let array = [];
        if(array1.length == array2.length){
            for(let i = 0; i < array1.length; i++){
                if(array1[i].length != array1[0].length){
                    console.error('Error!');
                    break;
                  
                }
            }

            for(let i = 0; i < array2.length; i++){
                if(array2[i].length != array2[0].length){
                    console.error('Error!');
                    break;
                    
                }
            }
            
            for(let i = 0; i < array1.length; i++){
                let row = [];
                for(let j = 0; j < array1[0].length; j++){
                    row.push(array1[i][j] - array2[i][j]);
                }
                array.push(row);
            }

        }else{
            console.error('Error!');
        }
        return array
    }

    this.constAddition = function(array,k){
        let outarray = [];
        for(let i = 0; i < array.length; i++){
            let row = [];
            for(let j = 0; j < array[0].length; j++){
                row.push(k * array[i][j]);
            }
            outarray.push(row);
        }
        return outarray;
    }

    // this.matrixConstAddition = function(obj,k){
    //     for(let i = 0; i < obj.rows.length; i++){
    //         for(let j = 0; j < obj.rows[0].length; j++){

    //         }
    //     }
    // }

    this.elemMult = function(matrix1,matrix2){
        let outarray = [];
        if(matrix1.collums.length == matrix2.collums.length && matrix1.rows.length == matrix2.rows.length){
            for(let i = 0; i < matrix1.rows.length; i++){
                let row = [];
                for(let j = 0; j < matrix1.collums[0].length; j++){
                    row[j] = matrix1.rows[i][j] * matrix2.rows[i][j];
                }
                outarray.push(row);
            }
            return this.createMatrix(outarray);
        }
    }

    this.elemDiv = function(matrix1,matrix2){
        let outarray = [];
        // if(matrix1.collums.length == matrix2.collums.length && matrix1.rows.length == matrix2.rows.length){
            for(let i = 0; i < matrix1.rows.length; i++){
                let row = [];
                for(let j = 0; j < matrix1.rows[0].length; j++){
                    row[j] = matrix1.rows[i][j] / matrix2.rows[i][j];
                }
                outarray.push(row);
            }
            return this.Create_1D_Matrix(outarray);
        // }
    }

    this.getRawData = function(mat){
        let array = [];
        for(let i = 0; i < mat.rows.length; i++){
             for(let j = 0; j < mat.collums[0].length; j++){
                array.push(mat.rows[i][j]);
            }
        }

        return array;
    }

    this.matrixFloor = function(mat){
        for(let i = 0; i < mat.rows.length; i++){
            for(let j = 0; j < mat.collums[0].length; j++){
                 mat.rows[i][j] = Math.floor(mat.rows[i][j]);
            }
        }
        return mat;
    }

    this.matrixRound = function(mat){
        for(let i = 0; i < mat.rows.length; i++){
            for(let j = 0; j < mat.collums[0].length; j++){
                 mat.rows[i][j] = Math.round(mat.rows[i][j]);
            }
        }
        return mat;
    }

    this.matrixMax = function(mat){
        let array = this.getRawData(mat);
        let max = array[0];
        for(let i = 0; i < array.length; i++){
            if(max < array[i]){
                max = array[i];
            }
        }
        let index = [];
        for(let i = 0; i < mat.rows.length; i++){
            for(let j = 0; j < mat.rows[0].length; j++){ 
                if(mat.rows[i][j] == max){
                    index = [i,j];
                    break;
                }
            }
        }
        return {Max_Value:max,Index:index};
    }

    this.matrixMin = function(mat){
        let array = this.getRawData(mat);
        let min = array[0];
        for(let i = 0; i < array.length; i++){
            if(min > array[i]){
                min = array[i];
            }
        }
        let index = [];
        for(let i = 0; i < mat.rows.length; i++){
            for(let j = 0; j < mat.rows[0].length; j++){ 
                if(mat.rows[i][j] == min){
                    index = [i,j];
                    break;
                }
            }
        }
        return {Min_Value:min,Index:index};
    }

    this.matrixCopy = function(mat){
        let array = mat.rows;
        return this.createMatrix(array);
    }

    this.createMatrix_raw_data = function(array,shape){
        let outarray = [];
        if(array.length == shape[0] * shape[1]){
            for(let i = 0; i < shape[0]*shape[1]; i+=shape[1]){
                let row = [];
                for(let j = 0; j < shape[1]; j++){
                    row.push(array[i+j]);
                }
                outarray.push(row)
            }
            return this.createMatrix(outarray);
        }else{
            console.error('Rows * collumns must be match with the array.length');
        }
    }

}

function Determinant(){
   
    this.calDet2D = function(obj){
       return obj.main_line[0] * obj.main_line[1] - obj.second_line[0]*obj.second_line[1];
    }

    this.calDet3D = function(obj){
        let det1 = this.createDet([[obj.matrix.rows[1][1],obj.matrix.rows[1][2]],[obj.matrix.rows[2][1],obj.matrix.rows[2][2]]]);
        let det2 = this.createDet([[obj.matrix.rows[1][0],obj.matrix.rows[1][2]],[obj.matrix.rows[2][0],obj.matrix.rows[2][2]]]);
        let det3 = this.createDet([[obj.matrix.rows[1][0],obj.matrix.rows[1][1]],[obj.matrix.rows[2][0],obj.matrix.rows[2][1]]]);

        let det1_a = this.calDet2D(det1);
        let det2_a = this.calDet2D(det2);
        let det3_a = this.calDet2D(det3);

        return (obj.matrix.rows[0][0]*det1_a) -(obj.matrix.rows[0][1] * det2_a) + (obj.matrix.rows[0][2] * det3_a);
    }

}
console.warn('Matrix.js Running Properly');