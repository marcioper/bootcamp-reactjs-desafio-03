import { all, takeLatest } from 'redux-saga/effects';

import { Types as DevelopersTypes } from '../ducks/developers';

import { addDeveloper, removeDeveloper } from './developers';

export default function* rootSaga() {
  yield all([
    takeLatest(DevelopersTypes.ADD_REQUEST, addDeveloper),
    takeLatest(DevelopersTypes.REMOVE_REQUEST, removeDeveloper),
  ]);
}
