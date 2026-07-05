 // odd array
 const oddArray : number[]= [-1,0,3,4,5,9,13]
 const tr1:number = 13;
 //even array
 const evenArray : number[]=[2,4,6,8,10,12]
 const tr2 :number= 9;


 function binarySearch(arr: number[]  , target:number):number {
    let start = 0 ;
    let end = arr.length - 1 ;

    while(start <= end){
        let mid :number =  Math.floor((start + end) / 2);
        if(target > arr[mid]){
            start = mid +1
        }else if(target < arr[mid]){
            end = mid -1
        }else {
            return  mid
        }
    }
    return  -1
 }

 console.log(binarySearch(oddArray,3))
 console.log(binarySearch(evenArray,10))
 