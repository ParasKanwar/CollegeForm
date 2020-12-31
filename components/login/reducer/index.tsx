export default function MyReducer(state, action) {
  const deInitialized = { ...state, initial: false };
  switch (action.type) {
    case "Email":
      return { ...deInitialized, email: action.email };
    case "Password":
      return { ...deInitialized, password: action.password };
    case "login":
      return { ...deInitialized, loading: true };
    case "signup":
      return { ...deInitialized, loading: true };
    case "reset":
      return { ...deInitialized, email: "", password: "", loading: false };
    default:
      return deInitialized;
  }
}
