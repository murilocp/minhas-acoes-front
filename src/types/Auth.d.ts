type AuthCredentials = {
  username: string;
  password: string;
};

type InvestorData = {
  id: string;
  username: string;
};

export interface AuthContextData {
  signIn: (credentials: AuthCredentials) => Promise<void>;
  isAuthenticated: boolean;
  investor: InvestorData;
}
