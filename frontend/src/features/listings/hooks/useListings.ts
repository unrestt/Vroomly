import { useQuery } from "@tanstack/react-query"
import type { Listing } from "../types/listingTypes"
import { getListings } from "../api/getListings"

export const useListings = (filters: Record<string, string>) => {
    return useQuery<Listing[]>({
        queryKey: ['listings', filters],
        queryFn: () => getListings(filters),
    })
}