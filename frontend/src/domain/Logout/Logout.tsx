import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/user/actions";

export function Logout() {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(logoutUser());
  }, [dispatch]);
  return null;
}
