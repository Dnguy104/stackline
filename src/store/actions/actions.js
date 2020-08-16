import { types } from './types.js';

// action creators
export const creators = {
  fetchDataStart: () => ({
    type: types.FETCH_DATA_START
  }),
  fetchDataError: error => ({
    type: types.FETCH_DATA_ERROR,
    error: error.message
  }),
  recieveData: (data, sourceType) => ({
    type: types.RECIEVE_DATA,
    data,
    sourceType
  }),
  setActiveRepo: (active) => ({
    type: types.ACTIVE_REPO,
    active,
    issuesUrl: active?.url ? `${active.url}/issues` : ''
  }),
  setIssuePriority: (index, newIndex) => ({
    type: types.SET_ISSUE_PRIORITY,
    index,
    newIndex,
    priorityChanged: true
  })
}

// create separate actions for issues and repos
export const getIssues = (url, token) => async dispatch => {
  dispatch(creators.fetchDataStart())
  try {
    const issues = await fetchData(url, token)
    dispatch(creators.recieveData(issues, "issues"))
  } catch(err) {
    dispatch(creators.fetchDataError(err))
    throw err
  }
}

export const getRepos = (url, token) => async dispatch => {
  dispatch(creators.fetchDataStart())
  try {
    const repos = await fetchData(url, token)
    dispatch(creators.recieveData(repos))
  } catch(err) {
    dispatch(creators.fetchDataError(err))
    throw err
  }
}

// fetch data helper
const fetchData = async (url, token) => {
  return await fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: 'application/vnd.github.nebula-preview+json',
      Authorization: `token ${token}`
    })
  })
    .then(response => response.json())
    .then(data => data)
    .catch((err) => {
      console.log(err)
    })
};
