import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  console.log(user);
  const {
    data: cart = [],
    refetch,
    isLoading,
  } = useQuery({
    // enabled: !!user,
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/carts?email=${user?.email}`
      );

      return res.data;
    },
  });

  return [cart, refetch, isLoading];
};

export default useCart;
