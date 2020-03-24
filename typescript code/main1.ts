function doSomething() {
  for (var index = 0; index < 5; index++) {
    console.log(index);
  }
  console.log("finallly", index);
}
doSomething();
// problem with using the var keyword : we declared the index variable inside the 'for' block, but its
// also available outside the block. We don't have this concept in languages in java.
// here index is scoped to the nearest function.
// if we use 'let' instead of the 'var' this code will give an error at line 5. -"Cannot find name 'index'"
// Here index is scoped to the nearest block.
