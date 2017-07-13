import { ActionReducer, Action } from '@ngrx/store';
import { Operation } from './operation.model';

export const ADD_OPERATION = 'Add an operation';
export const REMOVE_OPERATION = 'Remove an operation';
export const INCREMENT_OPERATION = 'Increment an operation';
export const DECREMENT_OPERATION = 'Decrement an operation';

const initialState: Array<Operation> = [];

export function operationsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_OPERATION: {
      const operation: Operation = action.payload;
      return [...state, operation];
    }
    case INCREMENT_OPERATION: {
      const operation: number = ++action.payload.amount;
      return state.map(item => {
        return item.id === action.payload.id ? Object.assign({}, item, operation) : item;
      });
    }
    case DECREMENT_OPERATION: {
      const operation: number = --action.payload.amount;
      return state.map(item => {
        return item.id === action.payload.id ? Object.assign({}, item, operation) : item;
      });
    }
    case REMOVE_OPERATION: {
      return state.filter(operation => operation.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};
