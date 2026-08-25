//largest number
export const largestNumber = (arr) => {
  //    answer1
  //   let max = arr[0];
  //   let max2;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > max) {
  //       max2 = max;
  //       max = arr[i];
  //     }
  //   }
  //   answer2
  //   let arr1 = arr.sort();
  //   let maxnum = arr1[arr1.length-1];
  //   let maxnum2 = arr1[arr1.length - 2];

  //   answer3
  let arr1 = arr.sort();
  arr.reverse();
  let maxnum = arr1[0];
  let maxnum2 = arr1[1];

  return { largest: maxnum, BeforeTheLargest: maxnum2 };
};

//longest name
export const longestName = (arr) => {
  //answer1
  // let longname = arr[0];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].length > longname.length) {
  //     longname = arr[i];
  //   }
  // }

  // //answer2
  // let arr1 = arr.sort((a, b)=> a.length - b.length);
  // let longname = arr1[arr1.length - 1];

  //answer3
  let arr1 = arr.sort((a, b) => a.length - b.length);
  arr1.reverse();
  let longname = arr1[0];
  return longname;
};

//number bigger than their
export const biggerNum = (arr) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2]) {
      arr1 = arr[i + 1];
    }
  }
  return arr1;
};

//number of pepole
export const numberOfPeople = (arr) => {
  //answer1
  // let arr1 = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] >= 18) {
  //     arr1.push(arr[i]);
  //   }
  // }
  //answer2
  // let arr1 = arr.filter((num) => num >= 18);
  //answer3
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 18) {
      count++;
    }
  }
  return count;
};
