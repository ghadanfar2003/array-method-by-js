//q1 largest number
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

//q2 longest name
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

//q3 number bigger than their
export const biggerNum = (arr = []) => {
  let arr1 = [];
  let tem;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      arr1.push(arr[i]);
    }
  }

  return arr1;
};

//q4 number of pepole
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

//q5 specific number
export const specificNum = (arr, num) => {
  //answer1
  // let result = arr.indexOf(num);
  // if (result === -1) return false;
  // else {
  //   return true;
  // }

  //answer2
  //let result = arr.includes(num);

  //answer3
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      found = true;
    }
  }
  return found;
};

//q6 avarage of numbers
export const averageNum = (arr = []) => {
  //answer1
  let sum = arr.reduce((sum, num) => sum + num);

  //answer2
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  let avg = sum / arr.length;
  return avg;
};
//q6 Common elements
export const comper = (arr1 = [], arr2 = []) => {
  //answer1
  let arr = arr1.filter((x) => arr2.some((y) => y === x));
  //answer2
  // let arr = arr1.filter((x) => arr2.includes(x));
  // //answer3
  //let arr =[] ;
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] === arr2[j]) {
  //       arr.push(arr1[i]);
  //     }
  //   }
  // }
  return arr;
};
