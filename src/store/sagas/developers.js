import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as DevelopersActions } from "../ducks/developers";

export function* addDeveloper(action) {
  try {
    const {
      developerInput,
      latitude,
      longitude
    } = action.payload.developerDataInput;
    const { data } = yield call(api.get, `/users/${developerInput}`);

    const isDuplicated = yield select(state =>
      state.developers.data.find(developer => developer.id === data.id)
    );

    if (isDuplicated) {
      yield put(DevelopersActions.addDeveloperFailure("Usuário já existe"));
    } else {
      const developerData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        latitude,
        longitude
      };

      yield put(DevelopersActions.addDeveloperSuccess(developerData));
    }
  } catch (error) {
    yield put(
      DevelopersActions.addDeveloperFailure("Erro ao adicionar usuário")
    );
  }
}

export function* removeDeveloper(action) {
  try {
    yield put(
      DevelopersActions.removeDeveloperSuccess(action.payload.developer)
    );
  } catch (error) {
    yield put(
      DevelopersActions.removeDeveloperFailure("Erro ao remover usuário")
    );
  }
}
