// @flow
import * as S from 'sanctuary';

(S.type("a") : string);
// $ExpectError
(S.type(5) : number);


(S.is(Number, 5) : boolean);
(S.is(function(x) { return x; }, 5) : boolean);
// $ExpectError
(S.is(Number, 5) : string);
// $ExpectError
(S.is("s", 5) : string);


(S.toString(5) : string);
// $ExpectError
(S.toString(5) : number);


function E(v) {};
E.prototype.equals = function() { return true };
(S.equals(5, 5) : boolean);
(S.equals(5)(5) : boolean);
(S.equals("s")("s") : boolean);
(S.equals(true)(true) : boolean);
(S.equals(null)(null) : boolean);
(S.equals(null, null) : boolean);
(S.equals(undefined, undefined) : boolean);
// This does not type check for some reason
// (S.equals(undefined)(undefined) : boolean);
(S.equals(new E(5), new E(5)) : boolean);
// $ExpectError
(S.equals("s")(5) : string);
// $ExpectError
(S.equals(5, "s") : boolean);
// $ExpectError
(S.equals({a:1},{a:1}) : boolean);
