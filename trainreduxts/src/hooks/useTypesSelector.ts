import { rootState } from './../store/reducers/index';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypesSelector: TypedUseSelectorHook<rootState> = useSelector