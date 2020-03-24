// assertions
let a = "foran";
// here as the type is string we will get intellisense from typescript
let endsWithN = a.endsWith("n");
let b;
b = "singh";
//let startsWiths=b.
// in this case we don't get any intellisense as typescript will be confused.
// 2 ways for type assetion.
// 1st
let startsWiths = (<string>b).startsWith("s");
//2nd
let endsWithH = (b as string).endsWith("h");
