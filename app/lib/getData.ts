import { CartData } from "@/redux/addToCart";
import { useAppDispatch } from "@/redux/hooks";
import Cookies from "js-cookie";

export const FetchData = async () => {
  const dispatch = useAppDispatch();
  const cookie = Cookies.get("user_id");
  const fetchData = async () => {
    try {
      const res = await fetch(`/api/cartTable?user_id=${cookie}`);
      const { data } = await res.json();
      dispatch(CartData(data));
    } catch (error) {
      console.log("error while in calculating");
    }
  };
  return fetchData();
};
