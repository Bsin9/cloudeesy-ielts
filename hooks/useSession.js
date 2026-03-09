"use client";
import { useReducer, useCallback } from "react";

/**
 * Generic session state machine hook — shared by all 4 skill modules.
 * @param {object} initialState
 */
export function useSessionState(initialState) {
  function reducer(state, action) {
    switch (action.type) {
      case "SET_ANSWER":
        return { ...state, answers: { ...state.answers, [action.id]: action.value } };
      case "SET_ACTIVE_Q":
        return { ...state, activeQ: action.idx };
      case "SET_PHASE":
        return { ...state, phase: action.phase };
      case "SUBMIT":
        return { ...state, submitted: true, phase: "review" };
      case "TOGGLE":
        return { ...state, [action.key]: !state[action.key] };
      case "RESET":
        return { ...initialState };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const setAnswer   = useCallback((id, value) => dispatch({ type: "SET_ANSWER", id, value }), []);
  const setActiveQ  = useCallback((idx)       => dispatch({ type: "SET_ACTIVE_Q", idx }), []);
  const setPhase    = useCallback((phase)     => dispatch({ type: "SET_PHASE", phase }), []);
  const submit      = useCallback(()          => dispatch({ type: "SUBMIT" }), []);
  const toggle      = useCallback((key)       => dispatch({ type: "TOGGLE", key }), []);
  const reset       = useCallback(()          => dispatch({ type: "RESET" }), []);

  const answered    = Object.keys(state.answers ?? {}).filter(k => state.answers[k]).length;

  return { state, dispatch, setAnswer, setActiveQ, setPhase, submit, toggle, reset, answered };
}
