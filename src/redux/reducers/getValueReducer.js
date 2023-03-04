const PROVIDE_VALUE = "PROVIDE_VALUE";

// Action
export const provideValueAction = (payload) => {
  return { type: PROVIDE_VALUE, payload };
};

const init = {
  value: "init value",
};

const getValueReducer = (state = init, action) => {
  if (action.type === PROVIDE_VALUE) {
    console.log(action);
    return {
      ...state,
      value: action.payload.updatedValue,
    };
  }
  return state;
};

export default getValueReducer;
