import { tokenKey } from "@/constants/tokenKey";
import { decodedToken } from "@/utils/jwt";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { getBaseUrl } from "@/helpers/config/envConfig";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(tokenKey, accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(tokenKey);

  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(tokenKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/resetToken`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
