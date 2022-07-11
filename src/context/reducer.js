export const reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    case "addItem":
      if (state.items.some((item) => item.name === action.payload.name)) {
        return { ...state };
      } else {
        return { ...state, items: [...state.items, action.payload] };
      }
    case "deleteItem":
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item.name !== action.payload.name),
        ],
      };
    default:
      return state;
  }
};
