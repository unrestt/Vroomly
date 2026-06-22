import { useQuery } from "@tanstack/react-query"
import type { Listing } from "../types/listingTypes"
import { getListing } from "../api/getListing"

export const useListing = (id: number | string) => {
  return useQuery<Listing>({
    queryKey: ['listing', id],
    queryFn: () => getListing(id),
    enabled: !!id,
  })
}