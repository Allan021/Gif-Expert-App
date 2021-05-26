import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export default function useFetchGift(category) {
  const [state, setState] = useState({ data: [], loading: true, error: null });

  useEffect(() => {
    getGifs(category)
      .then((img) => {
        //aca yo voy a utilizar este customHook para poder hacer las peticiones y lñimpíar mi componente
        setState({
          data: img,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        setState({
          data: [],
          loading: false,
          error: err,
        });
      });
  }, [category]);

  return state; //reornare el estado que s actualizara cada vez que la categoria cambie
  //mediante los customHooks yo puedo utilizar los hooks y no renderizaran nada;
}
