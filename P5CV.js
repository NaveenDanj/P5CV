class CreateCV {

    constructor() {
        this.pixels = [];
        this.canvas = document.getElementsByTagName('canvas');
        this.imageData;
        this.width;
        this.height;
        this.ctx;

        this.Kernel_Operations = {
            Box_Blur:()=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                let kernel = [1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1];
                let arr = [];
                    
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3] ];
                    arr.push(set)
                }

                for (let i = 0; i < arr.length; i++){
                    let loc = arr[i];
                    let right = arr[(i + 1)];
                    let left = arr[(i - 1)];
                    let down = arr[(i + width)];
                    let down_right = arr[(i + width) + 1];
                    let down_left = arr[(i + width) - 1];
                    let up = arr[(i - width)];
                    let up_right = arr[(i - width) + 1];
                    let up_left = arr[(i - width) - 1];
                
                
                    if (loc == undefined){
                        loc = 0;
                    }else{
                        loc = loc[0]
                    }
                            
                    if (right == undefined){
                        right = 0;
                    }else{
                        right = right[0]
                    }
                            
                    if (left == undefined){
                        left = 0;
                    }else{
                        left = left[0]
                    }
                            
                    if (down == undefined){
                        down = 0;
                    }else{
                        down = down[0]
                    }
                            
                    if (down_right == undefined){
                        down_right = 0;
                    }else{
                        down_right = down_right[0];
                    }
                            
                    if (down_left == undefined){
                        down_left = 0;
                    }else{
                        down_left = down_left[0];
                    }
                            
                    if (up == undefined){
                         up = 0;
                    }else{
                        up = up[0];
                    }
                            
                    if (up_right == undefined){
                        up_right = 0;
                    }else{
                        up_right = up_right[0];
                    }
                            
                    if (up_left == undefined){
                        up_left = 0;
                    }else{
                        up_left = up_left[0];
                    }

                    let scaler = [ up_left , up , up_right , left , loc , right , down_left , down , down_right ];

                    let total = 0;

                    for (let x = 0; x < scaler.length; x++){
                        total += scaler[x] * kernel[x];
                    }

                    total = total / 9;
            
                    pixels[i*4] = total;
                    pixels[i*4 + 1] = total;
                    pixels[i*4 + 2] = total;

                }

                updatePixels();
            },

            Customize_Kernel:(k , colored)=>{
                loadPixels();
                if (!colored){
                    for (let i = 0; i < pixels.length; i += 4) {
                        //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                        let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                        pixels[i] = v;
                        pixels[i + 1] = v;
                        pixels[i + 2] = v;
    
                    }
                }
                
                let kernel = k;
                let arr = [];
                    
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3] ];
                    arr.push(set)
                }

                for (let i = 0; i < arr.length; i++){
                    let loc = arr[i];
                    let right = arr[(i + 1)];
                    let left = arr[(i - 1)];
                    let down = arr[(i + width)];
                    let down_right = arr[(i + width) + 1];
                    let down_left = arr[(i + width) - 1];
                    let up = arr[(i - width)];
                    let up_right = arr[(i - width) + 1];
                    let up_left = arr[(i - width) - 1];
                
                
                    if (loc == undefined){
                        loc = 0;
                    }else{
                        loc = loc[0]
                    }
                            
                    if (right == undefined){
                        right = 0;
                    }else{
                        right = right[0]
                    }
                            
                    if (left == undefined){
                        left = 0;
                    }else{
                        left = left[0]
                    }
                            
                    if (down == undefined){
                        down = 0;
                    }else{
                        down = down[0]
                    }
                            
                    if (down_right == undefined){
                        down_right = 0;
                    }else{
                        down_right = down_right[0];
                    }
                            
                    if (down_left == undefined){
                        down_left = 0;
                    }else{
                        down_left = down_left[0];
                    }
                            
                    if (up == undefined){
                         up = 0;
                    }else{
                        up = up[0];
                    }
                            
                    if (up_right == undefined){
                        up_right = 0;
                    }else{
                        up_right = up_right[0];
                    }
                            
                    if (up_left == undefined){
                        up_left = 0;
                    }else{
                        up_left = up_left[0];
                    }

                    let scaler = [ up_left , up , up_right , left , loc , right , down_left , down , down_right ];

                    let total = 0;

                    for (let x = 0; x < scaler.length; x++){
                        total += scaler[x] * kernel[x];
                    }

                    total = total * 3;
            
                    pixels[i*4] = total;
                    pixels[i*4 + 1] = total;
                    pixels[i*4 + 2] = total;

                }

                updatePixels();
            },

            Test_kernel:()=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                let kernel = [-6 , 5 , 4 , -3 , 1 , -3 , 4 ,5 , -6];
                let arr = [];
                    
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3] ];
                    arr.push(set)
                }

                for (let i = 0; i < arr.length; i++){
                    let loc = arr[i];
                    let right = arr[(i + 1)];
                    let left = arr[(i - 1)];
                    let down = arr[(i + width)];
                    let down_right = arr[(i + width) + 1];
                    let down_left = arr[(i + width) - 1];
                    let up = arr[(i - width)];
                    let up_right = arr[(i - width) + 1];
                    let up_left = arr[(i - width) - 1];
                
                
                    if (loc == undefined){
                        loc = 0;
                    }else{
                        loc = loc[0]
                    }
                            
                    if (right == undefined){
                        right = 0;
                    }else{
                        right = right[0]
                    }
                            
                    if (left == undefined){
                        left = 0;
                    }else{
                        left = left[0]
                    }
                            
                    if (down == undefined){
                        down = 0;
                    }else{
                        down = down[0]
                    }
                            
                    if (down_right == undefined){
                        down_right = 0;
                    }else{
                        down_right = down_right[0];
                    }
                            
                    if (down_left == undefined){
                        down_left = 0;
                    }else{
                        down_left = down_left[0];
                    }
                            
                    if (up == undefined){
                         up = 0;
                    }else{
                        up = up[0];
                    }
                            
                    if (up_right == undefined){
                        up_right = 0;
                    }else{
                        up_right = up_right[0];
                    }
                            
                    if (up_left == undefined){
                        up_left = 0;
                    }else{
                        up_left = up_left[0];
                    }

                    let scaler = [ up_left , up , up_right , left , loc , right , down_left , down , down_right ];

                    let total = 0;

                    for (let x = 0; x < scaler.length; x++){
                        total += scaler[x] * kernel[x];
                    }

                    total = total * 3;
            
                    pixels[i*4] = total;
                    pixels[i*4 + 1] = total;
                    pixels[i*4 + 2] = total;

                }

                updatePixels();
            },

            Sharpen:()=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                let kernel = [0 , -1 , 0 , -1 , 5 , -1 , 0 , -1 , 0];
                let arr = [];
                    
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3] ];
                    arr.push(set)
                }

                for (let i = 0; i < arr.length; i++){
                    let loc = arr[i];
                    let right = arr[(i + 1)];
                    let left = arr[(i - 1)];
                    let down = arr[(i + width)];
                    let down_right = arr[(i + width) + 1];
                    let down_left = arr[(i + width) - 1];
                    let up = arr[(i - width)];
                    let up_right = arr[(i - width) + 1];
                    let up_left = arr[(i - width) - 1];
                
                
                    if (loc == undefined){
                        loc = 0;
                    }else{
                        loc = loc[0]
                    }
                            
                    if (right == undefined){
                        right = 0;
                    }else{
                        right = right[0]
                    }
                            
                    if (left == undefined){
                        left = 0;
                    }else{
                        left = left[0]
                    }
                            
                    if (down == undefined){
                        down = 0;
                    }else{
                        down = down[0]
                    }
                            
                    if (down_right == undefined){
                        down_right = 0;
                    }else{
                        down_right = down_right[0];
                    }
                            
                    if (down_left == undefined){
                        down_left = 0;
                    }else{
                        down_left = down_left[0];
                    }
                            
                    if (up == undefined){
                         up = 0;
                    }else{
                        up = up[0];
                    }
                            
                    if (up_right == undefined){
                        up_right = 0;
                    }else{
                        up_right = up_right[0];
                    }
                            
                    if (up_left == undefined){
                        up_left = 0;
                    }else{
                        up_left = up_left[0];
                    }

                    let scaler = [ up_left , up , up_right , left , loc , right , down_left , down , down_right ];

                    let total = 0;

                    for (let x = 0; x < scaler.length; x++){
                        total += scaler[x] * kernel[x];
                    }

                    pixels[i*4] = total;
                    pixels[i*4 + 1] = total;
                    pixels[i*4 + 2] = total;

                }

                updatePixels();
            },

            Gaussian_Blur:()=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                let kernel = [1 , 2 , 1 , 2 , 4 , 2 , 1 , 2 , 1];
                let arr = [];
                    
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3] ];
                    arr.push(set)
                }

                for (let i = 0; i < arr.length; i++){
                    let loc = arr[i];
                    let right = arr[(i + 1)];
                    let left = arr[(i - 1)];
                    let down = arr[(i + width)];
                    let down_right = arr[(i + width) + 1];
                    let down_left = arr[(i + width) - 1];
                    let up = arr[(i - width)];
                    let up_right = arr[(i - width) + 1];
                    let up_left = arr[(i - width) - 1];
                
                
                    if (loc == undefined){
                        loc = 0;
                    }else{
                        loc = loc[0]
                    }
                            
                    if (right == undefined){
                        right = 0;
                    }else{
                        right = right[0]
                    }
                            
                    if (left == undefined){
                        left = 0;
                    }else{
                        left = left[0]
                    }
                            
                    if (down == undefined){
                        down = 0;
                    }else{
                        down = down[0]
                    }
                            
                    if (down_right == undefined){
                        down_right = 0;
                    }else{
                        down_right = down_right[0];
                    }
                            
                    if (down_left == undefined){
                        down_left = 0;
                    }else{
                        down_left = down_left[0];
                    }
                            
                    if (up == undefined){
                         up = 0;
                    }else{
                        up = up[0];
                    }
                            
                    if (up_right == undefined){
                        up_right = 0;
                    }else{
                        up_right = up_right[0];
                    }
                            
                    if (up_left == undefined){
                        up_left = 0;
                    }else{
                        up_left = up_left[0];
                    }

                    let scaler = [ up_left , up , up_right , left , loc , right , down_left , down , down_right ];

                    let total = 0;

                    for (let x = 0; x < scaler.length; x++){
                        total += scaler[x] * kernel[x];
                    }

                    total = total / 16;

                    pixels[i*4] = total;
                    pixels[i*4 + 1] = total;
                    pixels[i*4 + 2] = total;

                }

                updatePixels();
            }

        }

        this.Edge_Detectors = {
            High_Noisy:()=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                let kernel = [-1 , -1 , -1 , -1 , 8 , -1 , -1 , -1 , -1];
                let arr = [];
                    
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3] ];
                    arr.push(set)
                }

                for (let i = 0; i < arr.length; i++){
                    let loc = arr[i];
                    let right = arr[(i + 1)];
                    let left = arr[(i - 1)];
                    let down = arr[(i + width)];
                    let down_right = arr[(i + width) + 1];
                    let down_left = arr[(i + width) - 1];
                    let up = arr[(i - width)];
                    let up_right = arr[(i - width) + 1];
                    let up_left = arr[(i - width) - 1];
                
                
                    if (loc == undefined){
                        loc = 0;
                    }else{
                        loc = loc[0]
                    }
                            
                    if (right == undefined){
                        right = 0;
                    }else{
                        right = right[0]
                    }
                            
                    if (left == undefined){
                        left = 0;
                    }else{
                        left = left[0]
                    }
                            
                    if (down == undefined){
                        down = 0;
                    }else{
                        down = down[0]
                    }
                            
                    if (down_right == undefined){
                        down_right = 0;
                    }else{
                        down_right = down_right[0];
                    }
                            
                    if (down_left == undefined){
                        down_left = 0;
                    }else{
                        down_left = down_left[0];
                    }
                            
                    if (up == undefined){
                         up = 0;
                    }else{
                        up = up[0];
                    }
                            
                    if (up_right == undefined){
                        up_right = 0;
                    }else{
                        up_right = up_right[0];
                    }
                            
                    if (up_left == undefined){
                        up_left = 0;
                    }else{
                        up_left = up_left[0];
                    }

                    let scaler = [ up_left , up , up_right , left , loc , right , down_left , down , down_right ];

                    let total = 0;

                    for (let x = 0; x < scaler.length; x++){
                        total += scaler[x] * kernel[x];
                    }
            
                    pixels[i*4] = total;
                    pixels[i*4 + 1] = total;
                    pixels[i*4 + 2] = total;

                }

                updatePixels();

            },

            Low_Noisy:()=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                let kernel = [1 , 0 , -1 , 0 , 0 , 0 , -1 , 0 , 1];
                let arr = [];
                    
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3] ];
                    arr.push(set)
                }

                for (let i = 0; i < arr.length; i++){
                    let loc = arr[i];
                    let right = arr[(i + 1)];
                    let left = arr[(i - 1)];
                    let down = arr[(i + width)];
                    let down_right = arr[(i + width) + 1];
                    let down_left = arr[(i + width) - 1];
                    let up = arr[(i - width)];
                    let up_right = arr[(i - width) + 1];
                    let up_left = arr[(i - width) - 1];
                
                
                    if (loc == undefined){
                        loc = 0;
                    }else{
                        loc = loc[0]
                    }
                            
                    if (right == undefined){
                        right = 0;
                    }else{
                        right = right[0]
                    }
                            
                    if (left == undefined){
                        left = 0;
                    }else{
                        left = left[0]
                    }
                            
                    if (down == undefined){
                        down = 0;
                    }else{
                        down = down[0]
                    }
                            
                    if (down_right == undefined){
                        down_right = 0;
                    }else{
                        down_right = down_right[0];
                    }
                            
                    if (down_left == undefined){
                        down_left = 0;
                    }else{
                        down_left = down_left[0];
                    }
                            
                    if (up == undefined){
                         up = 0;
                    }else{
                        up = up[0];
                    }
                            
                    if (up_right == undefined){
                        up_right = 0;
                    }else{
                        up_right = up_right[0];
                    }
                            
                    if (up_left == undefined){
                        up_left = 0;
                    }else{
                        up_left = up_left[0];
                    }

                    let scaler = [ up_left , up , up_right , left , loc , right , down_left , down , down_right ];

                    let total = 0;

                    for (let x = 0; x < scaler.length; x++){
                        total += scaler[x] * kernel[x];
                    }
            
                    pixels[i*4] = total;
                    pixels[i*4 + 1] = total;
                    pixels[i*4 + 2] = total;

                }

                updatePixels();
            },

            Medium_Noisy: ()=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                let kernel = [0 , 1 , 0 , 1 , -4 , 1 , 0 , 1 , 0];
                let arr = [];
                    
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3] ];
                    arr.push(set)
                }

                for (let i = 0; i < arr.length; i++){
                    let loc = arr[i];
                    let right = arr[(i + 1)];
                    let left = arr[(i - 1)];
                    let down = arr[(i + width)];
                    let down_right = arr[(i + width) + 1];
                    let down_left = arr[(i + width) - 1];
                    let up = arr[(i - width)];
                    let up_right = arr[(i - width) + 1];
                    let up_left = arr[(i - width) - 1];
                
                
                    if (loc == undefined){
                        loc = 0;
                    }else{
                        loc = loc[0]
                    }
                            
                    if (right == undefined){
                        right = 0;
                    }else{
                        right = right[0]
                    }
                            
                    if (left == undefined){
                        left = 0;
                    }else{
                        left = left[0]
                    }
                            
                    if (down == undefined){
                        down = 0;
                    }else{
                        down = down[0]
                    }
                            
                    if (down_right == undefined){
                        down_right = 0;
                    }else{
                        down_right = down_right[0];
                    }
                            
                    if (down_left == undefined){
                        down_left = 0;
                    }else{
                        down_left = down_left[0];
                    }
                            
                    if (up == undefined){
                         up = 0;
                    }else{
                        up = up[0];
                    }
                            
                    if (up_right == undefined){
                        up_right = 0;
                    }else{
                        up_right = up_right[0];
                    }
                            
                    if (up_left == undefined){
                        up_left = 0;
                    }else{
                        up_left = up_left[0];
                    }

                    let scaler = [ up_left , up , up_right , left , loc , right , down_left , down , down_right ];

                    let total = 0;

                    for (let x = 0; x < scaler.length; x++){
                        total += scaler[x] * kernel[x];
                    }
            
                    pixels[i*4] = total;
                    pixels[i*4 + 1] = total;
                    pixels[i*4 + 2] = total;

                }

                updatePixels();
            }

        }

        this.Preprocess = {

            Get_Pixel_Set:function(){
                let arr = [];
                loadPixels();
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3]];
                    arr.push(set)
                }
                return arr
            },

            Get_Pixel_By_Cords:function(x,y,w){
                let loc = (x + y*w);
                let arr = [];
                loadPixels();
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3]];
                    arr.push(set)
                }
                updatePixels();
                return arr[loc];
            },

            Get_Pixel_Location:function(x,y,w){
                let loc = (x + y*w);
                let arr = [];
                loadPixels();
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3]];
                    arr.push(set)
                }
                updatePixels();
                return loc;
            }
            
        }

        this.Zooming_Methods = {

            Pixel_Replication_Row_Wise:(k)=>{
                loadPixels();
                let arr = [];
                for (let i = 0; i < pixels.length; i+=4){
                     let j = 0;
                     while(j < k){
                        arr.push(pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3]);
                        j += 1;
                    }
                }
                for (let i = 0; i < pixels.length; i++){
                    pixels[i] = arr[i];
                }
                updatePixels();
            },

            Zero_Order_Hold_Row_Wise:()=>{
                loadPixels();
                let arr = [];
                for (let i = 0; i < pixels.length; i+=4){
                    let p1 = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3]];
                    let p2 = [pixels[i + 4] , pixels[i+4+1] , pixels[i+4+2] , pixels[i+4+3]];
                    let res = [(p1[0] + p2[0])/2 , (p1[1] + p2[1])/2 , (p1[2] + p2[2])/2 , (p1[3] + p2[3])/2];

                    arr.push(p1[0] , p1[1] , p1[2] , p1[3] , res[0] , res[1] , res[2] , res[3] , p2[0] , p2[1] , p2[2] , p2[3]);
                }
                for (let i = 0; i < pixels.length; i++){
                    pixels[i] = arr[i];
                }
                updatePixels();
            },

            KTimes_zooming :(k)=>{
                loadPixels();
                let arr = [];
                for (let i = 0; i < pixels.length; i+=4){
                    let ops = [ (pixels[i + 4] - pixels[i])/k , (pixels[i+4+1] - pixels[i+1])/k , (pixels[i+4+2] - pixels[i+2])/k , (pixels[i+4+3] - pixels[i+3])/k ]
                    let pixR = 0;
                    let pixG = 0;
                    let pixB = 0;
                    let pixA = 0;

                    for(let j = 0; j < k-1; j++){
                        let min = Math.min(pixels[i+4] , pixels[i])
                        pixR = min + ops[0];
                    }

                    for(let j = 0; j < k-1; j++){
                        let min = Math.min(pixels[i+4 + 1] , pixels[i + 1]);
                        pixG = min + ops[1];
                    }

                    for(let j = 0; j < k-1; j++){
                        let min = Math.min(pixels[i+4 + 2] , pixels[i + 2]);
                        pixB = min + ops[2];
                    }

                    for(let j = 0; j < k-1; j++){
                        let min = Math.min(pixels[i+4 + 3] , pixels[i + 3]);
                        pixA = min + ops[3];
                    }



                }
                for (let i = 0; i < pixels.length; i++){
                    pixels[i] = arr[i];
                }
                updatePixels();
            }

        }

        this.Graylevel_Transforms = {
            Invert_Image : ()=>{

                loadPixels();

                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                for(let i = 0; i < pixels.length; i+=4){
                    pixels[i] = 255 - pixels[i];
                    pixels[i+1] = 255 - pixels[i+1];
                    pixels[i+2] = 255 - pixels[i+2];
                }

                updatePixels();
            },

            Clamping_Image : ()=>{
                loadPixels();

                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                for(let i = 0; i < pixels.length; i+=4){
                    let pix = (100/255) * (pixels[i]) + (100);
                    pixels[i] = pix;
                    pixels[i+1] = pix;
                    pixels[i+2] = pix;
                }

                updatePixels();
            },

            Quadratic_Transformation : ()=>{
                loadPixels();

                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }

                for(let i = 0; i < pixels.length; i+=4){
                    let pix = 255 * Math.pow( (pixels[i] / 255) , 2);
                    pixels[i] = pix;
                    pixels[i+1] = pix;
                    pixels[i+2] = pix;
                }
                updatePixels();
            },

            Logarithmic_Transformation : (c)=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;
                }

                for(let i = 0; i < pixels.length; i+=4){
                    let r = pixels[i];
                    let s = Math.log(r + 1) * c;
                    pixels[i] = s;
                    pixels[i+1] = s;
                    pixels[i+2] = s;
                }
                updatePixels();
            },

            Histogram_Equalization_Transformation : ()=>{
                loadPixels();
                let unique_valuse = [];
                let PMF = [];

                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;
                }
                
                for (let i = 0; i < pixels.length; i+=4){
                    if (unique_valuse.filter(x=> x===pixels[i]).length == 0){
                        unique_valuse.push(pixels[i]);
                    }
                }

                for (let i = 0; i < unique_valuse.length; i++){
                    let val = (pixels.filter(x=> x===pixels[i]).length) / (pixels.length/4);
                    PMF.push([unique_valuse[i] , val]);
                }

                PMF.sort(function(a,b) {
                    return a[0]-b[0]
                });

                for (let i = 0; i < pixels.length; i+=4){
                    let pn = 0;
                    for(let j = 0; j < PMF.length; j++){
                        if (pixels[i] != PMF[j][0]){
                            pn += PMF[j][1];
                        }else{
                            break;
                        }
                    }

                    let g = floor(255 * pn);
                    pixels[i] = g;
                    pixels[i+1] = g;
                    pixels[i+2] = g;
                }
                updatePixels();
                
            }
        } 

        this.Bitwise_Operations = {

            XOR: function () {
                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];
                    let d2 = pixels[i + 4]

                    let ans = (d1 ^ d2);
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            },


            XNOR: function () {
                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];
                    let d2 = pixels[i + 4]

                    let ans = Math.abs(~(d1 ^ d2));
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            },

            AND: function () {

                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];
                    let d2 = pixels[i + 4]

                    let ans = (d1 & d2);
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            },

            NAND: function () {

                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];
                    let d2 = pixels[i + 4]

                    let ans = Math.abs(~(d1 & d2));
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            },

            OR: function () {

                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];
                    let d2 = pixels[i + 4]

                    let ans = (d1 | d2);
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            },

            NOR: function () {

                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];
                    let d2 = pixels[i + 4]

                    let ans = Math.abs(~(d1 | d2));
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            },

            NOT: function () {

                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];

                    let ans = Math.abs(~d1);
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            },

            Zero_Fill_Left_Shift: function () {
                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];
                    let d2 = pixels[i + 4];

                    let ans = Math.abs(d1 << d2);
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            },

            Signed_Right_Shift: function () {
                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];
                    let d2 = pixels[i + 4];

                    let ans = Math.abs(d1 >> d2);
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            },


            Zero_Fill_Right_Shift: function () {
                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                for (let i = 0; i < pixels.length; i += 4) {
                    let d1 = pixels[i];
                    let d2 = pixels[i + 4];

                    let ans = Math.abs(d1 >>> d2);
                    pixels[i] = ans;
                    pixels[i + 1] = ans;
                    pixels[i + 2] = ans;

                }
                updatePixels();
            }
        }

        this.Image_Operations = {

            Pixel_Mult:(k)=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i+=4){
                    pixels[i] *= k;
                    pixels[i+1] *= k;
                    pixels[i+2] *= k;
                }
                updatePixels();
            },

            Gamma_Correction:(gamma)=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i+=4){
                    let g = 0;
                    if (gamma != null){
                        g = gamma;
                    }else{
                        g = 2.2;
                    }

                    pixels[i] = Math.pow(pixels[i] , 1/g);
                    pixels[i + 1] = Math.pow(pixels[i+1] , 1/g);
                    pixels[i + 2] = Math.pow(pixels[i+2] , 1/g);
                }
                updatePixels();
            },

            Ratio_Mapping:()=>{
                loadPixels();
                for (let i = 0; i < pixels.length; i+=4){
                    
                    let r = pixels[i] / (pixels[i] + pixels[i+1] + pixels[i+2]);
                    let g = pixels[i+1] / (pixels[i] + pixels[i+1] + pixels[i+2]);
                    let b = pixels[i+2] / (pixels[i] + pixels[i+1] + pixels[i+2]);

                    pixels[i] = r;
                    pixels[i+1] = g;
                    pixels[i+2] = b;
                }
                updatePixels();
            }
            
        }

        this.Colors = {

            RGB_To_HSV: function (rgb) {
                let r = rgb[0] / 255;
                let g = rgb[1] / 255;
                let b = rgb[2] / 255;

                let cmax = Math.max(r, g, b);
                let cmin = Math.min(r, g, b);
                let computedV = 0;
                if (cmin == cmax) {
                    computedV = cmin;
                    return [0, 0, computedV];
                }

                let d = (r == cmin) ? g - b : ((b == cmin) ? r - g : b - r);
                let h = (r == cmin) ? 3 : ((b == cmin) ? 1 : 5);
                let computedH = 60 * (h - d / (cmax - cmin));
                let computedS = (cmax - cmin) / cmax;
                computedV = cmax;
                return [computedH, computedS * 100, computedV * 100];

            },

            RGB_To_Gray: function () {
                loadPixels()
                for (let i = 0; i < pixels.length; i += 4) {
                    //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
                    let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
                    pixels[i] = v;
                    pixels[i + 1] = v;
                    pixels[i + 2] = v;

                }
                updatePixels();
            },

            RGB_To_SAPIA :() =>{
                loadPixels();
                for (let i = 0; i < pixels.length; i+=4){
                    let R = pixels[i];
                    let G = pixels[i+1];
                    let B = pixels[i+2];

                    pixels[i] = 0.393*R + 0.769*G + 0.189*B;
                    pixels[i+1] = 0.349*R + 0.686*G + 0.168*B;
                    pixels[i+2] = 0.272*R + 0.534*G + 0.131*B;
                }

                updatePixels();
            }
        }

        this.Image_Scaling_Operations = {
            
        }

        this.Image_Cluster_Operations = {
            Create_Cluster : (index1 , index2 , ret_type )=>{
                let arr = [];
                loadPixels();
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3]];
                    arr.push(set)
                }

                let ret_array = [];

                for (let i = index1; i < index2; i++){
                    ret_array.push(arr[i]);
                }

                if (ret_type == true){
                    return matrix.Create_1D_Matrix(ret_array);

                }else{
                    return ret_array;
                }

            },

            Create_Pixel_Matrix:()=>{
                let arr = [];
                loadPixels();
                for(let i = 0; i < pixels.length; i+=4){
                    let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3]];
                    arr.push(set)
                }

                return matrix.createMatrix(arr);

            },

            Index_Cluster_Addition:(cluster1 , cluster2)=>{
                return matrix.matrixAdd(cluster1 , cluster2 , true);
            },

            Index_Cluster_Subtraction:(cluster1 , cluster2)=>{
                return matrix.matrixSub(cluster1 , cluster2);
            },

            Index_Cluster_Mul:(cluster1 , cluster2)=>{
                return matrix.elemMult(cluster1 , cluster2);
            },

            Index_Cluster_Div:(cluster1 , cluster2)=>{
                return matrix.elemDiv(cluster1 , cluster2);
            },

            Update_Pixels:(start_index , end_index , cluster)=>{
                loadPixels();
                for(let i = start_index; i < end_index; i++){
                   let cluster_set = cluster.rows[i];
                   pixels[i*4] = cluster_set[i];
                   pixels[i*4+1] = cluster_set[i+1];
                   pixels[i*4+2] = cluster_set[i+2];
                }
                updatePixels();
                console.log(pixels)
            }
        }
    }


    refresh() {
        this.pixels = [];
        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.imgData = this.ctx.getImageData(x, y, 1, 1);
                let r = this.imgData.data[0];
                let g = this.imgData.data[1];
                let b = this.imgData.data[2];
                let a = this.imgData.data[3];
                let pos = [x, y]

                let add = [r, g, b, pos];
                this.pixels.push(add);
            }
        }
    }

    toLocalGrayScale() {
        this.refresh();
        for (let i = 0; i < this.pixels.length; i++) {
            //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
            let v = 0.2126 * pixels[i][0] + 0.7152 * pixels[i][1] + 0.0722 * pixels[i][2];
            this.pixels[i][0] = v;
            this.pixels[i][1] = v;
            this.pixels[i][2] = v;
        }
        updatePixels();
    }

    Get_Pixel_Matrix(){
        let arr = [];
        loadPixels();
        for(let i = 0; i < pixels.length; i+=4){
            let set = [pixels[i] , pixels[i+1] , pixels[i+2] , pixels[i+3]];
            arr.push(set)
        }

        let ret = matrix.createMatrix(arr)
        return ret;
    }


    getColorIndicesForCoord(x, y, width) {
        let red = y * (width * 4) + x * 4;
        return [red, red + 1, red + 2, red + 3];
    }

    init() {
        console.warn('Currently the library supported only on Images!');
        console.warn('Still in BETA!');

        if (this.canvas.length > 0) {
            this.ctx = this.canvas[0].getContext('2d');
        } else {
            console.error('No Canvas element Found!');
        }

        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.imgData = this.ctx.getImageData(x, y, 1, 1);
                let r = this.imgData.data[0];
                let g = this.imgData.data[1];
                let b = this.imgData.data[2];
                let a = this.imgData.data[3];
                let pos = [x, y]

                let add = [r, g, b, pos];
                this.pixels.push(add);
            }
        }
    }

    getArray() {
        let ret = []
        loadPixels()
        for (let i = 0; i < pixels.length; i++) {
            ret[i] = pixels[i];
        }
        updatePixels()
        return ret;
    }

    normPixels(weight, return_type) {
        loadPixels()
        for (let i = 0; i < pixels.length; i++) {
            pixels[i] = (pixels[i] / 255) * weight;
        }
        updatePixels()

        if (return_type) {
            return pixels
        }
    }

    Ordered_Pixels(steps){
        loadPixels();
        for (let i = 0; i < pixels.length; i+=4*steps){
            let r = pixels[i];
            let g = pixels[i+1]
            let b = pixels[i+2]

            let v = (r + g + b)/3

            pixels[i] = v;
            pixels[i+1] = v;
            pixels[i+2] = v

        }
        updatePixels()
    }

    To_Binary_Image(threshold){
        loadPixels();
        this.toGrayScale();
        for(let i = 0; i < pixels.length; i+=4){
            if (pixels[i] > threshold){
                pixels[i] = 1;
                pixels[i+1] = 1;
                pixels[i+2] = 1;
            }else if(pixels[i] < threshold){
                pixels[i] = 0;
                pixels[i+1] = 0;
                pixels[i+2] = 0;
            }
        }
        updatePixels();
        return pixels;
    }

    To_Threshold_Map(threshold){
        loadPixels();
        this.toGrayScale();
        for(let i = 0; i < pixels.length; i+=4){

            let d = Math.abs(pixels[i] - threshold);

            // if (pixels[i] > threshold){
            //     pixels[i] = d;
            //     pixels[i+1] = d;
            //     pixels[i+2] = d;
            // }else if(pixels[i] < threshold){

            // }

            let pixel_value = map(d , 0, threshold , 0 , 255);

            pixels[i] = pixel_value;
            pixels[i+1] = pixel_value;
            pixels[i+2] = pixel_value;

        }
        updatePixels();
        return pixels;
    }

    Read_Binray(){
        loadPixels();
        for(let i = 0; i < pixels.length; i+=4){
            if (pixels[i] == 1){
                pixels[i] = 0;
                pixels[i+1] = 0;
                pixels[i+2] = 0;
            }else if(pixels[i] == 0){
                pixels[i] = 255;
                pixels[i+1] = 255;
                pixels[i+2] = 255;
            }
        }
        updatePixels();
    }

    toGrayScale() {
        loadPixels()
        for (let i = 0; i < pixels.length; i += 4) {
            //let avg = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
            let v = 0.2126 * pixels[i] + 0.7152 * pixels[i + 1] + 0.0722 * pixels[i + 2];
            pixels[i] = v;
            pixels[i + 1] = v;
            pixels[i + 2] = v;

        }
        updatePixels();
    }

    setBrightness(val) {
        loadPixels()
        for (let i = 0; i < pixels.length; i += 4) {
            pixels[i] += val;
            pixels[i + 1] += val;
            pixels[i + 2] += val;

        }
        updatePixels()
    }

    setThreshold(n) {
        loadPixels()
        for (var i = 0; i < pixels.length; i += 4) {
            let ret = 0;
            var r = pixels[i];
            var g = pixels[i + 1];
            var b = pixels[i + 2];
            var v = (0.2126 * r + 0.7152 * g + 0.0722 * b)
            if (v >= n) {
                ret = 255
            } else {
                ret = 0;
            }
            pixels[i] = pixels[i + 1] = pixels[i + 2] = ret
        }
        updatePixels()
    }

    Background_Reduction(min, max, thresh, norm) {
        this.Invert_Color(min, max);
        this.setThreshold(thresh)
        this.normPixels(norm)
    }

    Simple_Color_Tracker(tar) {
        let ret_array = [];
        let record = Infinity;
        let mypixels = this.pixels
        for (let i = 0; i < mypixels.length; i++) {

            let r1 = mypixels[i][0];
            let g1 = mypixels[i][1];
            let b1 = mypixels[i][2];

            let r2 = tar[0];
            let g2 = tar[1];
            let b2 = tar[2];

            let d = dist(r1, g1, b1, r2, g2, b2);
            d = d * d;

            if (d < record) {
                record = d;
                let points = mypixels[i][3];
                let finalX = points[0];
                let finalY = points[1];
                ret_array = [finalX, finalY];
            }
        }
        return ret_array;
    }

    Simple_Edge_Detection(arr) {
        loadPixels()
        this.toGrayScale()
        for (let i = 0; i < pixels.length - 4; i += 4) {
            let d1 = pixels[i];
            let d2 = pixels[i + 4];
            let delta = Math.abs(d1 - d2);

            if (arr){
                let d = map(delta , 0 , 255 , arr[0] , arr[1]);
                pixels[i] = d;
                pixels[i + 1] = d;
                pixels[i + 2] = d;
            }else{
                pixels[i] = delta;
                pixels[i + 1] = delta;
                pixels[i + 2] = delta;
            }
        }
        updatePixels()
    }

    Average_Color(k) {
        this.toGrayScale();
        loadPixels()
        let pixel_value = 0;
        let max = -Infinity;
        let len = pixels.length / 4;
        for (let i = 0; i < pixels.length; i += 4) {
            pixel_value += pixels[i];
            if (pixels[i] > max) {
                max = pixels[i];
            }
        }
        let si = pixel_value / len;
        max = max / si;
        max = (255) / max;

        for (let i = 0; i < pixels.length; i += 4) {
            pixels[i] = (pixels[i] / si) * max;
            pixels[i + 1] = (pixels[i + 1] / si) * max;
            pixels[i + 2] = (pixels[i + 2] / si) * max;
        }
        updatePixels()
    }

    Color_Deffer(k) {
        loadPixels();
        //this.toGrayScale();
        for (let i = 0; i < pixels.length; i += 4) {
            // let d1 = pixels[i];
            // let d2 = pixels[i+4];
            let d = dist(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 4 + 0], pixels[i + 4 + 1], pixels[i + 4 + 2]);
            // let delta = Math.abs(d1 - d2);
            if (d < k) {
                pixels[i] = 255 - pixels[i];
                pixels[i + 1] = 255 - pixels[i + 1];
                pixels[i + 2] = 255 - pixels[i + 2];
            }
        }
        //this.toGrayScale();
        updatePixels();
    }

    Mean_Color_Deffer(k, avgk) {
        loadPixels();
        this.toGrayScale();
        let avgRed = 0;
        let avgGreen = 0;
        let avgBlue = 0;

        for (let i = 0; i < pixels.length; i += 4) {
            avgRed += pixels[i];
            avgGreen += pixels[i + 1];
            avgBlue += pixels[i + 2];
        }

        avgRed = avgRed / (pixels.length / 4);
        avgGreen = avgGreen / (pixels.length / 4);
        avgBlue = avgBlue / (pixels.length / 4);

        for (let i = 0; i < pixels.length; i += 4) {

            let d = dist(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 4 + 0], pixels[i + 4 + 1], pixels[i + 4 + 2]);
            let avgd = dist(pixels[i], pixels[i + 1], pixels[i + 2], avgRed, avgGreen, avgBlue);

            if (d < k) {
                pixels[i] = 255 - pixels[i];
                pixels[i + 1] = 255 - pixels[i + 1];
                pixels[i + 2] = 255 - pixels[i + 2];
            }
            if (avgd < avgk) {
                pixels[i] = 0;
                pixels[i + 1] = 0;
                pixels[i + 2] = 0;
            }


        }
        this.Filter_Color([
            [avgRed - 10, avgGreen - 10, avgBlue - 10],
            [avgRed + 10, avgGreen + 10, avgBlue + 10]
        ]);
        updatePixels();
    }

    Range_Invert_Color(min, max) {
        loadPixels()
        this.toGrayScale();
        for (let i = 0; i < pixels.length; i++) {
            if (pixels[i] > min && pixels[i] <= max) {
                pixels[i] = 0;
            } else {
                pixels[i] = 255;
            }
        }
        updatePixels()
    }

    // Get_Pixel_Range(x, y, x2, y2){
        
    // }



    Invert_Color() {
        loadPixels();
        this.toGrayScale();
        for (let i = 0; i < pixels.length; i += 4) {
            let val = 255 - pixels[i];
            pixels[i] = val;
            pixels[i + 1] = val;
            pixels[i + 2] = val;
        }
        updatePixels();
    }

    Invert_Color_3C() {
        loadPixels();
        //this.toGrayScale();
        for (let i = 0; i < pixels.length; i += 4) {
            pixels[i] = 255 - pixels[i];
            pixels[i + 1] = 255 - pixels[i + 1];
            pixels[i + 2] = 255 - pixels[i + 2];
        }
        updatePixels();
    }

    Set_to_Assending_Order() {
        loadPixels();
        for (let i = 0; i < pixels.length; i += 4) {
            let arr = [pixels[i], pixels[i + 1], pixels[i + 2]].sort();
            pixels[i] = arr[0];
            pixels[i + 1] = arr[1];
            pixels[i + 2] = arr[2];
        }
        updatePixels()
    }

    Shuffle_pixel_value(maxi , mini , meani) {
        loadPixels();
        for (let i = 0; i < pixels.length; i += 4) {
            let max = Math.max(pixels[i], pixels[i + 1], pixels[i + 2]);
            let min = Math.min(pixels[i], pixels[i + 1], pixels[i + 2])
            let mean = (max + min) / 2;
            pixels[i + maxi] = max;
            pixels[i + mini] = min;
            pixels[i + meani] = mean;
        }
        updatePixels()
    }

    Continuous_Adding(range) {
        loadPixels();
        this.toGrayScale();
        for (let i = 0; i < pixels.length; i += 4) {

            let pixel1 = pixels[i];
            let pixel2 = pixels[i + 4];
            let tot = (pixel1 + pixel2);

            tot = map(tot, 0, 255, range[0], range[1]);

            pixels[i] = tot;
            pixels[i + 1] = tot;
            pixels[i + 2] = tot;

            pixels[i + 4] = tot;
            pixels[i + 4 + 1] = tot;
            pixels[i + 4 + 2] = tot;

        }
        updatePixels();
        //this.Invert_Color_1C();
        updatePixels();
    }

    Invert_Color_1C() {
        loadPixels();
        this.toGrayScale();
        for (let i = 0; i < pixels.length; i += 4) {
            pixels[i] = 255 - pixels[i];
            pixels[i + 1] = 255 - pixels[i + 1];
            pixels[i + 2] = 255 - pixels[i + 2];
        }
        updatePixels();
    }

    Color_Tune(color) {
        loadPixels();
        for (let i = 0; i < pixels.length; i += 4) {
            if (color == 'R') {
                pixels[i] += 255;
            } else if (color == 'G') {
                pixels[i + 1] += 255;
            } else if (color == 'B') {
                pixels[i + 2] += 255;
            }
        }
        updatePixels();
    }

    Color_Tune_By_Distance(color , threshold){
        loadPixels();
        for (let i = 0; i < pixels.length; i += 4) {
            if (color == 'R') {
                let d = map(pixels[i] , 0 , threshold , 0 , 255);
                pixels[i] += d;
            } else if (color == 'G') {
                let d = map(pixels[i] , 0 , threshold , 0 , 255);
                pixels[i + 1] += d;
            } else if (color == 'B') {
                let d = map(pixels[i] , 0 , threshold , 0 , 255);
                pixels[i + 2] += d;
            }
        }
        updatePixels();
    }

    Color_Tune_by_Brightness(color, k) {
        loadPixels();
        this.toGrayScale();
        for (let i = 0; i < pixels.length; i += 4) {
            if (color == 'R') {
                if (pixels[i] > k) {
                    pixels[i] += 255;
                }
            } else if (color == 'G') {
                if (pixels[i + 1] > k) {
                    pixels[i + 1] += 255;
                }
            } else if (color == 'B') {
                if (pixels[i + 2] > k) {
                    pixels[i + 2] += 255;
                }
            }
        }
        updatePixels();
    }

    Flatten_Kernel_Convolution() {
        let kernel = [-1, 5, -1]
        loadPixels();
        this.toGrayScale();
        for (let i = 0; i < pixels.length; i += 4) {
            let pixel = [pixels[i - 4], pixels[i], pixels[i + 4]];

            let total = 0;
            for (let x = 0; x < 3; x++) {
                total += kernel[x] * pixel[x]
            }
            total = total / 3;
            pixels[i] = total;
            pixels[i + 1] = total;
            pixels[i + 2] = total;
        }

        updatePixels();
    }

    Simple_Brightness_Tracker() {
        let colorsum = 0;
        let avg = 0;

        loadPixels();
        this.toGrayScale();
        for (let i = 0; i < pixels.length; i += 4) {
            let r = pixels[i];
            let g = pixels[i + 1];
            let b = pixels[i + 2];

            avg = Math.floor((r + g + b) / 3);
            colorsum += avg;
        }
        updatePixels();
        let brightness = Math.floor(colorsum / (width * height));
        return brightness;
    }


    Track_Primary_Colorness(color, return_type) {
        let pixelCount = 0;
        loadPixels()
        for (let i = 0; i < pixels.length; i += 4) {
            let r = pixels[i];
            let g = pixels[i + 1];
            let b = pixels[i + 2];

            if (color == 'R') {
                if ((r > 200 && r <= 255) && (g >= 0 && g < 10) && (b >= 0 && b < 10)) {
                    pixelCount++;
                }
            } else if (color == 'G') {
                if ((g > 200 && g <= 255) && (r >= 0 && r < 10) && (b >= 0 && b < 10)) {
                    pixelCount++;
                }
            } else if (color == 'B') {
                if ((b > 200 && b <= 255) && (r >= 0 && r < 10) && (g >= 0 && g < 10)) {
                    pixelCount++;
                }
            }

        }
        updatePixels()

        let pre = (pixelCount / (pixels.length / 4)) * 100;
        if (return_type) {
            return pre;
        } else {
            return pixelCount;
        }

    }

    Filter_Color(range) {
        //[[1,2,3],[1,2,3]]
        loadPixels();
        for (let i = 0; i < pixels.length; i += 4) {
            if (!(pixels[i] > range[0][0] && pixels[i] < range[1][0])) {
                pixels[i] = 0;
            }
            if (!(pixels[i + 1] > range[0][1] && pixels[i + 1] < range[1][1])) {
                pixels[i + 1] = 0;
            }
            if (!(pixels[i + 2] > range[0][2] && pixels[i + 2] < range[1][2])) {
                pixels[i + 2] = 0;
            }
        }
        updatePixels();
    }

}

let cv;
let img;
let matrix;
let mat;

function setup() {
    createCanvas(400, 400);
    img = loadImage('img/tt.jpg');
    cv = new CreateCV();
    cv.init();
}

function draw() {
    background(0);
    image(img, 0, 0, 400, 400);
    //cv.Ordered_Pixels(2);
   
    //cv.To_Binary_Image(120);
    //cv.Read_Binray();
    //cv.To_Threshold_Map(1000);
    //cv.Color_Tune_by_Brightness('R',100);
    //cv.Graylevel_Transforms.Histogram_Equalization_Transformation();
    //mat = cv.Get_Pixel_Matrix();
    //cv.Set_to_Assending_Order();
    //cv.Color_Tune_By_Distance('G' , 100);
    //cv.Simple_Brightness_Tracker()
    //cv.Filter_Color([[240,0,0],[255,20,20]])
    //cv.normPixels(210)
    //cv.Image_Operations.Pixel_Mult(2);
    //cv.Image_Operations.Gamma_Correction();
    //cv.Image_Operations.Ratio_Mapping(25);
    //cv.toGrayScale()
    //cv.Average_Color()
    //cv.Background_Reduction()
    //cv.Invert_Color_3C();
    //cv.Invert_Color_3C();
    //cv.Color_Tune('R');
    //cv.Invert_Color(10 , 230)
    //cv.Color_Deffer(78);
    //cv.Mean_Color_Deffer(30, 50);
    //cv.Flatten_Kernel_Convolution()
    //cv.setThreshold(70);
    //cv.Shuffle_pixel_value(3,1,2);
    //cv.Simple_Edge_Detection([10,255]);
    //cv.Set_to_Assending_Order();
    //cv.toGrayScale()
    //cv.Invert_By_Brightness(255)
    //cv.Background_Reduction(180,200 , 200 , 1000)
    //console.log(cv.Track_Primary_Colorness('R' , true));
    //cv.Blur_Operations.Box_Blur();
    //cv.Continuous_Adding([100,-10]);
    // let dat = cv.Image_Cluster_Operations.Create_Cluster(100,200);
    //console.log(dat);
    //noLoop();
    //cv.Zooming_Methods.Zero_Order_Hold_Row_Wise();
}


//Matrix Library for Image Operation code goes here!

//Non-Stable Release 
//Author Naveen Dhananjaya Hettiwaththa

const det = new Determinant();
matrix = new Matrix();


