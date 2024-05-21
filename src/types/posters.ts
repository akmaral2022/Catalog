import { Photo } from "@/app/client/catalog/page";

export const setPosters = (posters: Photo[]) => ({
  type: 'SET_POSTERS',
  payload: posters,
});