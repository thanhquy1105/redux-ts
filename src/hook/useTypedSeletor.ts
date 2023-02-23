import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

export const useTypedSeletor: TypedUseSelectorHook<RootState> = useSelector;
