import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  console.log(loading);
  const {
    data: isAdmin = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["admin", user?.email],
    enabled: !loading && !!localStorage.getItem("accessToken"),
    // enabled: false,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/dashboard/admin/${user.email}`
      );

      return res.data?.isAdmin;
    },
  });

  return [isAdmin, refetch, isLoading];
};

export default useAdmin;
