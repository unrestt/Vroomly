import { supabase } from "../../../lib/supabaseClient";
import type { Listing } from "../types/listingTypes";

export const getListings = async (): Promise<Listing[]> => {
  const { data, error } = await supabase
    .from('listings')
    .select(`
      *,
      make:makes(*),
      model:models(*),
      images(*)
    `);

  if (error) throw new Error(error.message);

  return (data || []).map((item: any) => ({
    id: Number(item.id),
    userId: Number(item.user_id),
    categoryId: Number(item.category_id),
    makeId: Number(item.make_id),
    modelId: Number(item.model_id),
    title: item.title,
    description: item.description,
    price: Number(item.price),
    productionYear: Number(item.production_year),
    mileage: Number(item.mileage),
    fuelType: item.fuel_type,
    engineCapacity: Number(item.engine_capacity),
    enginePower: Number(item.engine_power),
    gearbox: item.gearbox,
    bodyType: item.body_type,
    color: item.color,
    countryOfOrigin: item.country_of_origin,
    steeringWheelSide: item.steering_wheel_side,
    condition: item.condition,
    location: item.location,
    status: item.status,
    isFeatured: Boolean(item.is_featured),
    createdAt: item.created_at,
    make: item.make ? {
      id: Number(item.make.id),
      categoryId: Number(item.make.category_id),
      name: item.make.name
    } : undefined,
    model: item.model ? {
      id: Number(item.model.id),
      makeId: Number(item.model.make_id),
      name: item.model.name
    } : undefined,
    images: (item.images || []).map((img: any) => ({
      id: Number(img.id),
      listingId: Number(img.listing_id),
      imageUrl: img.image_url,
      isMain: Boolean(img.is_main)
    }))
  }));
};