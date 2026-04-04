const nums1: number[] = [-1, 1, 0, -3, 3];
const nums2: number[] = [1, 2, 3, 4];
// leet code Number : 238 : Product of array except itself
// brute force
function multiply(nums: number[]): number[] {
  if (nums.length === 0) return [];
  let n = nums.length;
  let result: number[] = [];

  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    result[i] = product;
  }
  return result;
}
// console.log(multiply(nums1));

//
// function Optimal(num:number[]):number[]{
//
// }

function calculatePrefix(num: number[]): number[] {
  let result: number[] = [];
  result[0] = 1;
  for (let i = 1; i < num.length; i++) {
    result[i] = result[i - 1] * num[i - 1];
  }
  return result;
}
// console.log(calculatePrefix(nums2));



function optimal(nums: number[]): number[] {
  let n = nums.length;
  let suffix : number[]= [];
  suffix[n-1]=1;
  let prefix:number[]=[];
  prefix[0]=1;
  let result:number[]=[];

  for(let p=1; p<n ;p++){
    prefix[p]=prefix[p-1]*nums[p-1];
  }

  for(let s=n-2;s>=0;s--){
    suffix[s]=suffix[s+1]*nums[s+1]
  }
  for(let c=0;c<n;c++){
    result[c]=prefix[c]*suffix[c]
  }
  return result;
}



function reducedSpaceOptimal(nums: number[]): number[] {
  let n=nums.length;
  let result:number[]=[]
  result[0]=1;

  for(let i=1;i<n;i++){
    result[i]=result[i-1]*nums[i-1]
  }
  let suffix:number=1;
  for(let j=n-2;j>=0;j--){
    suffix *= nums[j+1]
    result[j]*=suffix
  }
  return result;
}
    
console.log(reducedSpaceOptimal(nums2));
