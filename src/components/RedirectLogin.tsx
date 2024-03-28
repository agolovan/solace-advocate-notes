import { useHistory } from "react-router-dom";
import { useConfig, useAuth } from "payload/components/utilities";

const useRedirectLogin = () => {
  const history = useHistory();
  const {
    routes: { admin: adminRoute },
  } = useConfig();
  const { user } = useAuth();

  if (!user) {
    history.push({
      pathname: `${adminRoute}`,
    });
  }

  return { user, adminRoute, history };
};

export default useRedirectLogin;
