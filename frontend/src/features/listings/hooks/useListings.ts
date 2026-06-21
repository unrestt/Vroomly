import { useQuery } from "@tanstack/react-query"
import type { Listing } from "../types/listingTypes"
import { getListings } from "../api/getListings"

export const useListings = ()=>{
    return useQuery<Listing[]>({
        queryKey: ['listings'],
        queryFn: getListings,
    })
}