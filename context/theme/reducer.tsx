import { theme } from "./theme";
export const TOGGLE = "TOGGLE";
interface action {
  type: string;
}
export default (state: theme, action: action): theme => {
  switch (action.type) {
    case TOGGLE: {
      return { ...state, dark_mode: !state.dark_mode };
    }
    default:
      return state;
  }
};
