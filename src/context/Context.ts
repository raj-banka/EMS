import { createContext } from "react";
import { UserType } from "../Interfaces/UserType";

type AuthValue = [
  userData: { admin: UserType[]; employees: UserType[] } | null,
  setUserData: React.Dispatch<
    React.SetStateAction<{ admin: UserType[]; employees: UserType[] } | null>
  >
];

export const AuthContext = createContext<AuthValue>([null, () => {}]);
