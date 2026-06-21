import { api } from "../../../api/axiosInstance";
import type { Listing } from "../types/listingTypes";

export const getListings = async (): Promise<Listing[]> => {
    const { data } = await api.get<Listing[]>('/listings?_expand=make&_expand=model&_embed=images');
    return data;
}