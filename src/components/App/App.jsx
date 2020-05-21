import React, { useState } from 'react';
import User from '../User/User';
import Test from '../Test/Test';
import Tester from '../QUnit/QUnit.js';

export default function App() {
  const [code, setCode] = useState('function myFn() {}');
  return (
    <>
      <textarea value={code} onChange={({ target }) => setCode(target.value)}></textarea>
      <User />
      <br></br>
      <Test />
      <Tester tests={`${code} \n \n QUnit.test("hello", (assert) => assert.equal(myFn(), 1))`} />
    </>
  );
}
