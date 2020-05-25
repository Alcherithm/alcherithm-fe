import React, { useState, useEffect } from 'react';
import Editor from '../components/Editors/Editor.jsx';
import Tester from '../components/QUnit/QUnit.jsx';
import ChallengeDisplay from '../components/ChallengeDisplay/ChallengeDisplay.jsx';
import { fetchChallengeById } from '../services/challengesAPI.js';
import { useParams } from 'react-router-dom';
import { post } from '../services/request.js';

const Challenge = () => {
  const [runCode, setRunCode] = useState('');
  const [challenge, setChallenge] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    fetchChallengeById(id)
      .then(challenge => {
        setChallenge(challenge);
      });
  }, []);

  const onClick = () => {
    setRunCode(`${challenge.starterCode} \n \n ${challenge.qunitTest}`);
  }; 

  const handleCodeChange = (starterCode) => {
    setChallenge(challenge => ({ ...challenge, starterCode }));
  };
  
  // using post from 'request' to apply current challenge to solutions db
  const onSubmit = () => {
    post('/api/v1/solutions', challenge);
  };

  if(!challenge)
    return <h1>loading</h1>;
  
  return (
    <section>
      <h2>Cool Challenege Stuff</h2>
      <ChallengeDisplay {...challenge} {...challenge.resources} />
      <Editor code={challenge.starterCode} handleCodeChange={handleCodeChange} />
      <Editor code={challenge.qunitTest} />
      <button onClick={onClick}>Run</button> 
      <button onSubmit={onSubmit}>Submit</button>
      <Tester tests={runCode} />
    </section>
  );
};

export default Challenge; 
