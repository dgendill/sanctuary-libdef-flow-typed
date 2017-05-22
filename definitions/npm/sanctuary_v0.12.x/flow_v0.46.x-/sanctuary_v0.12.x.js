declare module 'sanctuary' {

  declare type TypeRep<A> = (a: any) => A;

  declare interface Semigroup<A> {
    concat(x: A, y: A): A;
  }

  declare interface Functor<A> {
    map<B>(f: Fn1<A, B>): Functor<B>;
  }

  declare interface Bifunctor<A, B> {
    bimap<C, D>(f: Fn1<A, C>, Fn1<B, D>): Bifunctor<C, D>;
  }

  declare interface Setoid<A> {
    equals<A>(f: A, g: A): boolean;
  }

  declare type Fn1<A, B> = (a: A, ...rest: Array<void>) => B;
  declare type Fn2<A, B, C> = (a: A, b: B, ...rest: Array<void>) => C;
  declare type Fn3<A, B, C, D> = (a: A, b: B, c: C, ...rest: Array<void>) => D;
  declare type Fn4<A, B, C, D, E> = (a: A, b: B, c: C, d: D, ...rest: Array<void>) => E;

  declare type __TypeResolver<T, U: T> = T;
  declare type TypeResolver<T> = __TypeResolver<*, T>;


  declare function type(a: any): string;
  declare function is<A>(typeRep: TypeRep<A>, b: any): boolean;
  declare function toString(a: any): string;

  declare function equals<A: Setoid<*> | number | string | boolean | null, B: TypeResolver<A>>(x: A, y: B): boolean;
  declare function equals<A: Setoid<*> | number | string | boolean | null, B: TypeResolver<A>>(x: A): Fn1<B, boolean>;
  declare function equals(x: void, y: void): boolean;
  declare function equals(x: void, ...rest: Array<void>): ((y: void) => boolean);

  declare type Maybe<A> = Nothing | Just<A>;

  declare class Nothing {
    // Maybe#isNothing :: Boolean
    isNothing: true,

    map<A, B>(f: Fn1<A, B>): Maybe<B>,

    // Maybe#isJust :: Boolean
    isJust: false,

  }

  declare class Just<A> {
    // Maybe#isNothing :: Boolean
    isNothing: false,

    map<A, B>(f: Fn1<A, B>): Maybe<B>,
    // Maybe#isJust :: Boolean
    isJust: true,


  }

}
