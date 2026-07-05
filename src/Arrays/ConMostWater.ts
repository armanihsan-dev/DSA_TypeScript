// Problem : 11 on leet code
// Container with Most Water

// brute force , time complexity O(n^2)
function maxAreaBrut(height:number[]):number {
    let maxArea = 0;

    for(let i =0; i<height.length; i++){
       for ( let j = i+1; j< height.length; j++){
             let width = j-i;
             let mixHeight = Math.min(height[i], height[j]);
             if(maxArea< width*mixHeight) maxArea = (width*mixHeight)
       }
    }
    return maxArea;
}


function mostWater( height: number[]):number {
    let maxArea = 0;
    let left = 0;
    let right = height.lenght-1;

    while(left < height) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right])
        let area = width * minHeight;
        maxArea = Math.max(area,maxArea)

        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea ;
}

let height = [1,8,6,2,5,4,8,3,7];
console.log(mostWater(height))

