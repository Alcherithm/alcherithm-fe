import React, { useEffect, useState } from 'react';
import User from '../User/User';
import Test from '../Test/Test';
import Header from '../Header/Header.js';

const Tester = ({ tests }) => {
  useEffect(() => {
    window.QUnit = null;
    const qunitScript = document.createElement('script');
    qunitScript.src = 'https://code.jquery.com/qunit/qunit-2.10.0.js';
    qunitScript.async = true;
    document.body.appendChild(qunitScript);
    const script = document.createElement('script');
    script.innerHTML = tests;
    document.body.appendChild(script);
    setTimeout(() => {
      QUnit.done(function(details) {
        console.log('Total: ', details.total, ' Failed: ', details.failed, ' Passed: ', details.passed, ' Runtime: ', details.runtime);
      });
    }, 1000);
    return () => {
      qunitScript.remove();
      script.remove();
    };
  }, [tests]);
  return (
    <>
      <div id="qunit"></div>
      <div id="qunit-fixture"></div>
    </>
  );
};
export default function App() {
  const [code, setCode] = useState('function myFn() {}');
  return (
    <>
      <Header />
      <textarea value={code} onChange={({ target }) => setCode(target.value)}></textarea>
      <User />
      <br></br>
      <Test />
      <Tester tests={`${code} \n \n setTimeout(() => QUnit.test("hello", (assert) => assert.equal(myFn(), 1)), 1000); \n`} />
      {/* <Tester tests={`${code} \n \n setTimeout(() => QUnit.test('It should add the number 8 to the array five times', assert => {
      const array = [];
      const result = addNumbers(8, array, 5, addValues);
      assert.equal(array, result);
      assert.deepEqual(array, [8, 8, 8, 8, 8]);
      }), 1000); \n`} /> */}
    </>
  );
}
