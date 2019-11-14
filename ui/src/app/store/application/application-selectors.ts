import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationState } from './application-state';

export const applicationData = createFeatureSelector<ApplicationState>('applicationState');

export const getUser = createSelector(applicationData, state => state.user);