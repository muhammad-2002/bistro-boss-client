import { useQuery } from "@tanstack/react-query";
import usePublicAxiosSecure from "../CustomHook/usePublicAxiosSecure";

const useMenu = (menu) => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`${menu}`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  // return [data];

  const [axiosPublicSecure] = usePublicAxiosSecure();
  const { data = [], refetch } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      try {
        const res = await axiosPublicSecure.get(`${menu}`);

        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });
  return [data, refetch];
};

export default useMenu;
