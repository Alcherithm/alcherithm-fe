import { get } from './request';

export const fetchUserSolutionsToChallenge = (challengeId, userId) => get(`/api/v1/solutions?challengeId=${challengeId}&userId=${userId}`);

export const fetchAllSolutionsToChallenge = challengeId => get(`/api/v1/solutions?challengeId=${challengeId}`);

// PREVIOUS SERVICE NAME:
// export const fetchUserSolutions = userId => get(`/api/v1/solutions?userId=${userId}`);
export const fetchUserChallengesWithSolutions = userId => get(`/api/v1/solutions?userId=${userId}`)
  .then(challenges => challenges.map(challenge => ({
    solutionId: challenge._id,
    category: challenge.challenge.category,
    challengeNumber: challenge.challenge.challengeNumber,
    instructions: challenge.challenge.instructions,
    solutions: challenge.solutions
  })));

export const fetchResults = solutionId => get(`/api/v1/solutions/results/${solutionId}`);
export const fetchUserChallengesWithSolutions = userId => get(`/api/v1/solutions?userId=${userId}`);

