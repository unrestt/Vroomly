import { supabase } from "../../../lib/supabaseClient";
import type { Listing } from "../types/listingTypes";

export const getListings = async (filters?: Record<string, string>): Promise<Listing[]> => {
  let query = supabase
    .from('listings')
    .select(`
      *,
      make:makes(*),
      model:models(*),
      images(*)
    `);

  if (filters) {
    if (filters.category_id) {
      query = query.eq('category_id', Number(filters.category_id));
    }
    if (filters.make_id) {
      query = query.eq('make_id', Number(filters.make_id));
    }
    if (filters.model_id) {
      query = query.eq('model_id', Number(filters.model_id));
    }
    if (filters.location) {
      query = query.ilike('location', `%${filters.location}%`);
    }
    if (filters.price_from) {
      query = query.gte('price', Number(filters.price_from));
    }
    if (filters.price_to) {
      query = query.lte('price', Number(filters.price_to));
    }
    if (filters.year_from) {
      query = query.gte('production_year', Number(filters.year_from));
    }
    if (filters.year_to) {
      query = query.lte('production_year', Number(filters.year_to));
    }
    if (filters.mileage_from) {
      query = query.gte('mileage', Number(filters.mileage_from));
    }
    if (filters.mileage_to) {
      query = query.lte('mileage', Number(filters.mileage_to));
    }
    if (filters.engine_capacity_from) {
      query = query.gte('engine_capacity', Number(filters.engine_capacity_from));
    }
    if (filters.engine_capacity_to) {
      query = query.lte('engine_capacity', Number(filters.engine_capacity_to));
    }
    if (filters.engine_power_from) {
      query = query.gte('engine_power', Number(filters.engine_power_from));
    }
    if (filters.engine_power_to) {
      query = query.lte('engine_power', Number(filters.engine_power_to));
    }
    if (filters.gearbox) {
      query = query.eq('gearbox', filters.gearbox);
    }
    if (filters.body_type) {
      query = query.eq('body_type', filters.body_type);
    }
    if (filters.country_of_origin) {
      query = query.eq('country_of_origin', filters.country_of_origin);
    }
    if (filters.color) {
      query = query.eq('color', filters.color);
    }
    if (filters.steering_wheel_side) {
      query = query.eq('steering_wheel_side', filters.steering_wheel_side);
    }
    if (filters.fuel_type) {
      query = query.eq('fuel_type', filters.fuel_type);
    }
  }

  const { data, error } = await query;

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