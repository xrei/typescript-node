
type X = string | number

interface A<T extends X> {
  f(x: T): T;
}

let a: A<X> = {
  f: (x) => x
}

console.log(a.f('xyz'))
console.log(a.f(123))