//How do you divide books among students so that the student with the most pages has as FEW pages as possible?

// The Golden Rule
// If mid is INVALID (too small) → We need BIGGER mid → Search RIGHT side
// If mid is VALID (works) → We can try SMALLER mid → Search LEFT side

function allocateBooks(pages: number[], students: number): number {
  let min: number = Math.max(...pages);
  let max = pages.reduce((acc, page) => acc + page, 0);
  let ans: number = -1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (canAllocate(pages, students, mid)) {
      ans = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return ans;
}

function canAllocate(pages: number[], stu: number, mid: number): boolean {
  let currentStus: number = 1;
  let currentSum: number = 0;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i] > mid) return false;

    if (currentSum + pages[i] > mid) {
      currentStus++;
      currentSum += pages[i];

      if (currentStus > stu) return false;
    } else {
      currentSum += pages[i];
    }
  }

  return true;
}

// let test

let pages: number[] = [10, 20, 30, 40];

let students: number = 2;
console.log(allocateBooks(pages, students)); // 60
// 60 means: "The MINIMUM possible value of the MAXIMUM pages any student gets"

// For [10, 20, 30, 40] with 2 students:

// Distribution 1: [10,20] | [30,40]
// text
// Student 1 gets: 30 pages
// Student 2 gets: 70 pages
// MAXIMUM pages any student gets = 70
// Distribution 2: [10,20,30] | [40]
// text
// Student 1 gets: 60 pages
// Student 2 gets: 40 pages
// MAXIMUM pages any student gets = 60
// Distribution 3: [10] | [20,30,40]
// text
// Student 1 gets: 10 pages
// Student 2 gets: 90 pages
// MAXIMUM pages any student gets = 90
