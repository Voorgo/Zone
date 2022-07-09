export const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    case "addItem":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
