import { useEffect, useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IRootState, AppDispatch } from "./Store";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect((): any => {
    console.log("mon mount navigator");
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  return isMounted;
};
