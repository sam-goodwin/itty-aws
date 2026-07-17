import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostTestHelpersIssuingTransactionsCreateForceCaptureInput {
  amount: number;
  card: string;
  currency?: string;
  expand?: string[];
  merchant_data?: {
    category?:
      | "ac_refrigeration_repair"
      | "accounting_bookkeeping_services"
      | "advertising_services"
      | "agricultural_cooperative"
      | "airlines_air_carriers"
      | "airports_flying_fields"
      | "ambulance_services"
      | "amusement_parks_carnivals"
      | "antique_reproductions"
      | "antique_shops"
      | "aquariums"
      | "architectural_surveying_services"
      | "art_dealers_and_galleries"
      | "artists_supply_and_craft_shops"
      | "auto_and_home_supply_stores"
      | "auto_body_repair_shops"
      | "auto_paint_shops"
      | "auto_service_shops"
      | "automated_cash_disburse"
      | "automated_fuel_dispensers"
      | "automobile_associations"
      | "automotive_parts_and_accessories_stores"
      | "automotive_tire_stores"
      | "bail_and_bond_payments"
      | "bakeries"
      | "bands_orchestras"
      | "barber_and_beauty_shops"
      | "betting_casino_gambling"
      | "bicycle_shops"
      | "billiard_pool_establishments"
      | "boat_dealers"
      | "boat_rentals_and_leases"
      | "book_stores"
      | "books_periodicals_and_newspapers"
      | "bowling_alleys"
      | "bus_lines"
      | "business_secretarial_schools"
      | "buying_shopping_services"
      | "cable_satellite_and_other_pay_television_and_radio"
      | "camera_and_photographic_supply_stores"
      | "candy_nut_and_confectionery_stores"
      | "car_and_truck_dealers_new_used"
      | "car_and_truck_dealers_used_only"
      | "car_rental_agencies"
      | "car_washes"
      | "carpentry_services"
      | "carpet_upholstery_cleaning"
      | "caterers"
      | "charitable_and_social_service_organizations_fundraising"
      | "chemicals_and_allied_products"
      | "child_care_services"
      | "childrens_and_infants_wear_stores"
      | "chiropodists_podiatrists"
      | "chiropractors"
      | "cigar_stores_and_stands"
      | "civic_social_fraternal_associations"
      | "cleaning_and_maintenance"
      | "clothing_rental"
      | "colleges_universities"
      | "commercial_equipment"
      | "commercial_footwear"
      | "commercial_photography_art_and_graphics"
      | "commuter_transport_and_ferries"
      | "computer_network_services"
      | "computer_programming"
      | "computer_repair"
      | "computer_software_stores"
      | "computers_peripherals_and_software"
      | "concrete_work_services"
      | "construction_materials"
      | "consulting_public_relations"
      | "correspondence_schools"
      | "cosmetic_stores"
      | "counseling_services"
      | "country_clubs"
      | "courier_services"
      | "court_costs"
      | "credit_reporting_agencies"
      | "cruise_lines"
      | "dairy_products_stores"
      | "dance_hall_studios_schools"
      | "dating_escort_services"
      | "dentists_orthodontists"
      | "department_stores"
      | "detective_agencies"
      | "digital_goods_applications"
      | "digital_goods_games"
      | "digital_goods_large_volume"
      | "digital_goods_media"
      | "direct_marketing_catalog_merchant"
      | "direct_marketing_combination_catalog_and_retail_merchant"
      | "direct_marketing_inbound_telemarketing"
      | "direct_marketing_insurance_services"
      | "direct_marketing_other"
      | "direct_marketing_outbound_telemarketing"
      | "direct_marketing_subscription"
      | "direct_marketing_travel"
      | "discount_stores"
      | "doctors"
      | "door_to_door_sales"
      | "drapery_window_covering_and_upholstery_stores"
      | "drinking_places"
      | "drug_stores_and_pharmacies"
      | "drugs_drug_proprietaries_and_druggist_sundries"
      | "dry_cleaners"
      | "durable_goods"
      | "duty_free_stores"
      | "eating_places_restaurants"
      | "educational_services"
      | "electric_razor_stores"
      | "electric_vehicle_charging"
      | "electrical_parts_and_equipment"
      | "electrical_services"
      | "electronics_repair_shops"
      | "electronics_stores"
      | "elementary_secondary_schools"
      | "emergency_services_gcas_visa_use_only"
      | "employment_temp_agencies"
      | "equipment_rental"
      | "exterminating_services"
      | "family_clothing_stores"
      | "fast_food_restaurants"
      | "financial_institutions"
      | "fines_government_administrative_entities"
      | "fireplace_fireplace_screens_and_accessories_stores"
      | "floor_covering_stores"
      | "florists"
      | "florists_supplies_nursery_stock_and_flowers"
      | "freezer_and_locker_meat_provisioners"
      | "fuel_dealers_non_automotive"
      | "funeral_services_crematories"
      | "furniture_home_furnishings_and_equipment_stores_except_appliances"
      | "furniture_repair_refinishing"
      | "furriers_and_fur_shops"
      | "general_services"
      | "gift_card_novelty_and_souvenir_shops"
      | "glass_paint_and_wallpaper_stores"
      | "glassware_crystal_stores"
      | "golf_courses_public"
      | "government_licensed_horse_dog_racing_us_region_only"
      | "government_licensed_online_casions_online_gambling_us_region_only"
      | "government_owned_lotteries_non_us_region"
      | "government_owned_lotteries_us_region_only"
      | "government_services"
      | "grocery_stores_supermarkets"
      | "hardware_equipment_and_supplies"
      | "hardware_stores"
      | "health_and_beauty_spas"
      | "hearing_aids_sales_and_supplies"
      | "heating_plumbing_a_c"
      | "hobby_toy_and_game_shops"
      | "home_supply_warehouse_stores"
      | "hospitals"
      | "hotels_motels_and_resorts"
      | "household_appliance_stores"
      | "industrial_supplies"
      | "information_retrieval_services"
      | "insurance_default"
      | "insurance_underwriting_premiums"
      | "intra_company_purchases"
      | "jewelry_stores_watches_clocks_and_silverware_stores"
      | "landscaping_services"
      | "laundries"
      | "laundry_cleaning_services"
      | "legal_services_attorneys"
      | "luggage_and_leather_goods_stores"
      | "lumber_building_materials_stores"
      | "manual_cash_disburse"
      | "marinas_service_and_supplies"
      | "marketplaces"
      | "masonry_stonework_and_plaster"
      | "massage_parlors"
      | "medical_and_dental_labs"
      | "medical_dental_ophthalmic_and_hospital_equipment_and_supplies"
      | "medical_services"
      | "membership_organizations"
      | "mens_and_boys_clothing_and_accessories_stores"
      | "mens_womens_clothing_stores"
      | "metal_service_centers"
      | "miscellaneous_apparel_and_accessory_shops"
      | "miscellaneous_auto_dealers"
      | "miscellaneous_business_services"
      | "miscellaneous_food_stores"
      | "miscellaneous_general_merchandise"
      | "miscellaneous_general_services"
      | "miscellaneous_home_furnishing_specialty_stores"
      | "miscellaneous_publishing_and_printing"
      | "miscellaneous_recreation_services"
      | "miscellaneous_repair_shops"
      | "miscellaneous_specialty_retail"
      | "mobile_home_dealers"
      | "motion_picture_theaters"
      | "motor_freight_carriers_and_trucking"
      | "motor_homes_dealers"
      | "motor_vehicle_supplies_and_new_parts"
      | "motorcycle_shops_and_dealers"
      | "motorcycle_shops_dealers"
      | "music_stores_musical_instruments_pianos_and_sheet_music"
      | "news_dealers_and_newsstands"
      | "non_fi_money_orders"
      | "non_fi_stored_value_card_purchase_load"
      | "nondurable_goods"
      | "nurseries_lawn_and_garden_supply_stores"
      | "nursing_personal_care"
      | "office_and_commercial_furniture"
      | "opticians_eyeglasses"
      | "optometrists_ophthalmologist"
      | "orthopedic_goods_prosthetic_devices"
      | "osteopaths"
      | "package_stores_beer_wine_and_liquor"
      | "paints_varnishes_and_supplies"
      | "parking_lots_garages"
      | "passenger_railways"
      | "pawn_shops"
      | "pet_shops_pet_food_and_supplies"
      | "petroleum_and_petroleum_products"
      | "photo_developing"
      | "photographic_photocopy_microfilm_equipment_and_supplies"
      | "photographic_studios"
      | "picture_video_production"
      | "piece_goods_notions_and_other_dry_goods"
      | "plumbing_heating_equipment_and_supplies"
      | "political_organizations"
      | "postal_services_government_only"
      | "precious_stones_and_metals_watches_and_jewelry"
      | "professional_services"
      | "public_warehousing_and_storage"
      | "quick_copy_repro_and_blueprint"
      | "railroads"
      | "real_estate_agents_and_managers_rentals"
      | "record_stores"
      | "recreational_vehicle_rentals"
      | "religious_goods_stores"
      | "religious_organizations"
      | "roofing_siding_sheet_metal"
      | "secretarial_support_services"
      | "security_brokers_dealers"
      | "service_stations"
      | "sewing_needlework_fabric_and_piece_goods_stores"
      | "shoe_repair_hat_cleaning"
      | "shoe_stores"
      | "small_appliance_repair"
      | "snowmobile_dealers"
      | "special_trade_services"
      | "specialty_cleaning"
      | "sporting_goods_stores"
      | "sporting_recreation_camps"
      | "sports_and_riding_apparel_stores"
      | "sports_clubs_fields"
      | "stamp_and_coin_stores"
      | "stationary_office_supplies_printing_and_writing_paper"
      | "stationery_stores_office_and_school_supply_stores"
      | "swimming_pools_sales"
      | "t_ui_travel_germany"
      | "tailors_alterations"
      | "tax_payments_government_agencies"
      | "tax_preparation_services"
      | "taxicabs_limousines"
      | "telecommunication_equipment_and_telephone_sales"
      | "telecommunication_services"
      | "telegraph_services"
      | "tent_and_awning_shops"
      | "testing_laboratories"
      | "theatrical_ticket_agencies"
      | "timeshares"
      | "tire_retreading_and_repair"
      | "tolls_bridge_fees"
      | "tourist_attractions_and_exhibits"
      | "towing_services"
      | "trailer_parks_campgrounds"
      | "transportation_services"
      | "travel_agencies_tour_operators"
      | "truck_stop_iteration"
      | "truck_utility_trailer_rentals"
      | "typesetting_plate_making_and_related_services"
      | "typewriter_stores"
      | "u_s_federal_government_agencies_or_departments"
      | "uniforms_commercial_clothing"
      | "used_merchandise_and_secondhand_stores"
      | "utilities"
      | "variety_stores"
      | "veterinary_services"
      | "video_amusement_game_supplies"
      | "video_game_arcades"
      | "video_tape_rental_stores"
      | "vocational_trade_schools"
      | "watch_jewelry_repair"
      | "welding_repair"
      | "wholesale_clubs"
      | "wig_and_toupee_stores"
      | "wires_money_orders"
      | "womens_accessory_and_specialty_shops"
      | "womens_ready_to_wear_stores"
      | "wrecking_and_salvage_yards";
    city?: string;
    country?: string;
    name?: string;
    network_id?: string;
    postal_code?: string;
    state?: string;
    terminal_id?: string;
    url?: string;
  };
  purchase_details?: {
    fleet?: {
      cardholder_prompt_data?: {
        driver_id?: string;
        odometer?: number;
        unspecified_id?: string;
        user_id?: string;
        vehicle_number?: string;
      };
      purchase_type?:
        | "fuel_and_non_fuel_purchase"
        | "fuel_purchase"
        | "non_fuel_purchase";
      reported_breakdown?: {
        fuel?: { gross_amount_decimal?: string };
        non_fuel?: { gross_amount_decimal?: string };
        tax?: {
          local_amount_decimal?: string;
          national_amount_decimal?: string;
        };
      };
      service_type?: "full_service" | "non_fuel_transaction" | "self_service";
    };
    flight?: {
      departure_at?: number;
      passenger_name?: string;
      refundable?: boolean;
      segments?: {
        arrival_airport_code?: string;
        carrier?: string;
        departure_airport_code?: string;
        flight_number?: string;
        service_class?: string;
        stopover_allowed?: boolean;
      }[];
      travel_agency?: string;
    };
    fuel?: {
      industry_product_code?: string;
      quantity_decimal?: string;
      type?:
        | "diesel"
        | "other"
        | "unleaded_plus"
        | "unleaded_regular"
        | "unleaded_super";
      unit?:
        | "charging_minute"
        | "imperial_gallon"
        | "kilogram"
        | "kilowatt_hour"
        | "liter"
        | "other"
        | "pound"
        | "us_gallon";
      unit_cost_decimal?: string;
    };
    lodging?: { check_in_at?: number; nights?: number };
    receipt?: {
      description?: string;
      quantity?: string;
      total?: number;
      unit_cost?: number;
    }[];
    reference?: string;
  };
}
export const PostTestHelpersIssuingTransactionsCreateForceCaptureInput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    card: Schema.String,
    currency: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.Array(Schema.String)),
    merchant_data: Schema.optional(
      Schema.Struct({
        category: Schema.optional(
          Schema.Literals([
            "ac_refrigeration_repair",
            "accounting_bookkeeping_services",
            "advertising_services",
            "agricultural_cooperative",
            "airlines_air_carriers",
            "airports_flying_fields",
            "ambulance_services",
            "amusement_parks_carnivals",
            "antique_reproductions",
            "antique_shops",
            "aquariums",
            "architectural_surveying_services",
            "art_dealers_and_galleries",
            "artists_supply_and_craft_shops",
            "auto_and_home_supply_stores",
            "auto_body_repair_shops",
            "auto_paint_shops",
            "auto_service_shops",
            "automated_cash_disburse",
            "automated_fuel_dispensers",
            "automobile_associations",
            "automotive_parts_and_accessories_stores",
            "automotive_tire_stores",
            "bail_and_bond_payments",
            "bakeries",
            "bands_orchestras",
            "barber_and_beauty_shops",
            "betting_casino_gambling",
            "bicycle_shops",
            "billiard_pool_establishments",
            "boat_dealers",
            "boat_rentals_and_leases",
            "book_stores",
            "books_periodicals_and_newspapers",
            "bowling_alleys",
            "bus_lines",
            "business_secretarial_schools",
            "buying_shopping_services",
            "cable_satellite_and_other_pay_television_and_radio",
            "camera_and_photographic_supply_stores",
            "candy_nut_and_confectionery_stores",
            "car_and_truck_dealers_new_used",
            "car_and_truck_dealers_used_only",
            "car_rental_agencies",
            "car_washes",
            "carpentry_services",
            "carpet_upholstery_cleaning",
            "caterers",
            "charitable_and_social_service_organizations_fundraising",
            "chemicals_and_allied_products",
            "child_care_services",
            "childrens_and_infants_wear_stores",
            "chiropodists_podiatrists",
            "chiropractors",
            "cigar_stores_and_stands",
            "civic_social_fraternal_associations",
            "cleaning_and_maintenance",
            "clothing_rental",
            "colleges_universities",
            "commercial_equipment",
            "commercial_footwear",
            "commercial_photography_art_and_graphics",
            "commuter_transport_and_ferries",
            "computer_network_services",
            "computer_programming",
            "computer_repair",
            "computer_software_stores",
            "computers_peripherals_and_software",
            "concrete_work_services",
            "construction_materials",
            "consulting_public_relations",
            "correspondence_schools",
            "cosmetic_stores",
            "counseling_services",
            "country_clubs",
            "courier_services",
            "court_costs",
            "credit_reporting_agencies",
            "cruise_lines",
            "dairy_products_stores",
            "dance_hall_studios_schools",
            "dating_escort_services",
            "dentists_orthodontists",
            "department_stores",
            "detective_agencies",
            "digital_goods_applications",
            "digital_goods_games",
            "digital_goods_large_volume",
            "digital_goods_media",
            "direct_marketing_catalog_merchant",
            "direct_marketing_combination_catalog_and_retail_merchant",
            "direct_marketing_inbound_telemarketing",
            "direct_marketing_insurance_services",
            "direct_marketing_other",
            "direct_marketing_outbound_telemarketing",
            "direct_marketing_subscription",
            "direct_marketing_travel",
            "discount_stores",
            "doctors",
            "door_to_door_sales",
            "drapery_window_covering_and_upholstery_stores",
            "drinking_places",
            "drug_stores_and_pharmacies",
            "drugs_drug_proprietaries_and_druggist_sundries",
            "dry_cleaners",
            "durable_goods",
            "duty_free_stores",
            "eating_places_restaurants",
            "educational_services",
            "electric_razor_stores",
            "electric_vehicle_charging",
            "electrical_parts_and_equipment",
            "electrical_services",
            "electronics_repair_shops",
            "electronics_stores",
            "elementary_secondary_schools",
            "emergency_services_gcas_visa_use_only",
            "employment_temp_agencies",
            "equipment_rental",
            "exterminating_services",
            "family_clothing_stores",
            "fast_food_restaurants",
            "financial_institutions",
            "fines_government_administrative_entities",
            "fireplace_fireplace_screens_and_accessories_stores",
            "floor_covering_stores",
            "florists",
            "florists_supplies_nursery_stock_and_flowers",
            "freezer_and_locker_meat_provisioners",
            "fuel_dealers_non_automotive",
            "funeral_services_crematories",
            "furniture_home_furnishings_and_equipment_stores_except_appliances",
            "furniture_repair_refinishing",
            "furriers_and_fur_shops",
            "general_services",
            "gift_card_novelty_and_souvenir_shops",
            "glass_paint_and_wallpaper_stores",
            "glassware_crystal_stores",
            "golf_courses_public",
            "government_licensed_horse_dog_racing_us_region_only",
            "government_licensed_online_casions_online_gambling_us_region_only",
            "government_owned_lotteries_non_us_region",
            "government_owned_lotteries_us_region_only",
            "government_services",
            "grocery_stores_supermarkets",
            "hardware_equipment_and_supplies",
            "hardware_stores",
            "health_and_beauty_spas",
            "hearing_aids_sales_and_supplies",
            "heating_plumbing_a_c",
            "hobby_toy_and_game_shops",
            "home_supply_warehouse_stores",
            "hospitals",
            "hotels_motels_and_resorts",
            "household_appliance_stores",
            "industrial_supplies",
            "information_retrieval_services",
            "insurance_default",
            "insurance_underwriting_premiums",
            "intra_company_purchases",
            "jewelry_stores_watches_clocks_and_silverware_stores",
            "landscaping_services",
            "laundries",
            "laundry_cleaning_services",
            "legal_services_attorneys",
            "luggage_and_leather_goods_stores",
            "lumber_building_materials_stores",
            "manual_cash_disburse",
            "marinas_service_and_supplies",
            "marketplaces",
            "masonry_stonework_and_plaster",
            "massage_parlors",
            "medical_and_dental_labs",
            "medical_dental_ophthalmic_and_hospital_equipment_and_supplies",
            "medical_services",
            "membership_organizations",
            "mens_and_boys_clothing_and_accessories_stores",
            "mens_womens_clothing_stores",
            "metal_service_centers",
            "miscellaneous_apparel_and_accessory_shops",
            "miscellaneous_auto_dealers",
            "miscellaneous_business_services",
            "miscellaneous_food_stores",
            "miscellaneous_general_merchandise",
            "miscellaneous_general_services",
            "miscellaneous_home_furnishing_specialty_stores",
            "miscellaneous_publishing_and_printing",
            "miscellaneous_recreation_services",
            "miscellaneous_repair_shops",
            "miscellaneous_specialty_retail",
            "mobile_home_dealers",
            "motion_picture_theaters",
            "motor_freight_carriers_and_trucking",
            "motor_homes_dealers",
            "motor_vehicle_supplies_and_new_parts",
            "motorcycle_shops_and_dealers",
            "motorcycle_shops_dealers",
            "music_stores_musical_instruments_pianos_and_sheet_music",
            "news_dealers_and_newsstands",
            "non_fi_money_orders",
            "non_fi_stored_value_card_purchase_load",
            "nondurable_goods",
            "nurseries_lawn_and_garden_supply_stores",
            "nursing_personal_care",
            "office_and_commercial_furniture",
            "opticians_eyeglasses",
            "optometrists_ophthalmologist",
            "orthopedic_goods_prosthetic_devices",
            "osteopaths",
            "package_stores_beer_wine_and_liquor",
            "paints_varnishes_and_supplies",
            "parking_lots_garages",
            "passenger_railways",
            "pawn_shops",
            "pet_shops_pet_food_and_supplies",
            "petroleum_and_petroleum_products",
            "photo_developing",
            "photographic_photocopy_microfilm_equipment_and_supplies",
            "photographic_studios",
            "picture_video_production",
            "piece_goods_notions_and_other_dry_goods",
            "plumbing_heating_equipment_and_supplies",
            "political_organizations",
            "postal_services_government_only",
            "precious_stones_and_metals_watches_and_jewelry",
            "professional_services",
            "public_warehousing_and_storage",
            "quick_copy_repro_and_blueprint",
            "railroads",
            "real_estate_agents_and_managers_rentals",
            "record_stores",
            "recreational_vehicle_rentals",
            "religious_goods_stores",
            "religious_organizations",
            "roofing_siding_sheet_metal",
            "secretarial_support_services",
            "security_brokers_dealers",
            "service_stations",
            "sewing_needlework_fabric_and_piece_goods_stores",
            "shoe_repair_hat_cleaning",
            "shoe_stores",
            "small_appliance_repair",
            "snowmobile_dealers",
            "special_trade_services",
            "specialty_cleaning",
            "sporting_goods_stores",
            "sporting_recreation_camps",
            "sports_and_riding_apparel_stores",
            "sports_clubs_fields",
            "stamp_and_coin_stores",
            "stationary_office_supplies_printing_and_writing_paper",
            "stationery_stores_office_and_school_supply_stores",
            "swimming_pools_sales",
            "t_ui_travel_germany",
            "tailors_alterations",
            "tax_payments_government_agencies",
            "tax_preparation_services",
            "taxicabs_limousines",
            "telecommunication_equipment_and_telephone_sales",
            "telecommunication_services",
            "telegraph_services",
            "tent_and_awning_shops",
            "testing_laboratories",
            "theatrical_ticket_agencies",
            "timeshares",
            "tire_retreading_and_repair",
            "tolls_bridge_fees",
            "tourist_attractions_and_exhibits",
            "towing_services",
            "trailer_parks_campgrounds",
            "transportation_services",
            "travel_agencies_tour_operators",
            "truck_stop_iteration",
            "truck_utility_trailer_rentals",
            "typesetting_plate_making_and_related_services",
            "typewriter_stores",
            "u_s_federal_government_agencies_or_departments",
            "uniforms_commercial_clothing",
            "used_merchandise_and_secondhand_stores",
            "utilities",
            "variety_stores",
            "veterinary_services",
            "video_amusement_game_supplies",
            "video_game_arcades",
            "video_tape_rental_stores",
            "vocational_trade_schools",
            "watch_jewelry_repair",
            "welding_repair",
            "wholesale_clubs",
            "wig_and_toupee_stores",
            "wires_money_orders",
            "womens_accessory_and_specialty_shops",
            "womens_ready_to_wear_stores",
            "wrecking_and_salvage_yards",
          ]),
        ),
        city: Schema.optional(Schema.String),
        country: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        network_id: Schema.optional(Schema.String),
        postal_code: Schema.optional(Schema.String),
        state: Schema.optional(Schema.String),
        terminal_id: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
    purchase_details: Schema.optional(
      Schema.Struct({
        fleet: Schema.optional(
          Schema.Struct({
            cardholder_prompt_data: Schema.optional(
              Schema.Struct({
                driver_id: Schema.optional(Schema.String),
                odometer: Schema.optional(Schema.Number),
                unspecified_id: Schema.optional(Schema.String),
                user_id: Schema.optional(Schema.String),
                vehicle_number: Schema.optional(Schema.String),
              }),
            ),
            purchase_type: Schema.optional(
              Schema.Literals([
                "fuel_and_non_fuel_purchase",
                "fuel_purchase",
                "non_fuel_purchase",
              ]),
            ),
            reported_breakdown: Schema.optional(
              Schema.Struct({
                fuel: Schema.optional(
                  Schema.Struct({
                    gross_amount_decimal: Schema.optional(Schema.String),
                  }),
                ),
                non_fuel: Schema.optional(
                  Schema.Struct({
                    gross_amount_decimal: Schema.optional(Schema.String),
                  }),
                ),
                tax: Schema.optional(
                  Schema.Struct({
                    local_amount_decimal: Schema.optional(Schema.String),
                    national_amount_decimal: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            service_type: Schema.optional(
              Schema.Literals([
                "full_service",
                "non_fuel_transaction",
                "self_service",
              ]),
            ),
          }),
        ),
        flight: Schema.optional(
          Schema.Struct({
            departure_at: Schema.optional(Schema.Number),
            passenger_name: Schema.optional(Schema.String),
            refundable: Schema.optional(Schema.Boolean),
            segments: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  arrival_airport_code: Schema.optional(Schema.String),
                  carrier: Schema.optional(Schema.String),
                  departure_airport_code: Schema.optional(Schema.String),
                  flight_number: Schema.optional(Schema.String),
                  service_class: Schema.optional(Schema.String),
                  stopover_allowed: Schema.optional(Schema.Boolean),
                }),
              ),
            ),
            travel_agency: Schema.optional(Schema.String),
          }),
        ),
        fuel: Schema.optional(
          Schema.Struct({
            industry_product_code: Schema.optional(Schema.String),
            quantity_decimal: Schema.optional(Schema.String),
            type: Schema.optional(
              Schema.Literals([
                "diesel",
                "other",
                "unleaded_plus",
                "unleaded_regular",
                "unleaded_super",
              ]),
            ),
            unit: Schema.optional(
              Schema.Literals([
                "charging_minute",
                "imperial_gallon",
                "kilogram",
                "kilowatt_hour",
                "liter",
                "other",
                "pound",
                "us_gallon",
              ]),
            ),
            unit_cost_decimal: Schema.optional(Schema.String),
          }),
        ),
        lodging: Schema.optional(
          Schema.Struct({
            check_in_at: Schema.optional(Schema.Number),
            nights: Schema.optional(Schema.Number),
          }),
        ),
        receipt: Schema.optional(
          Schema.Array(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              quantity: Schema.optional(Schema.String),
              total: Schema.optional(Schema.Number),
              unit_cost: Schema.optional(Schema.Number),
            }),
          ),
        ),
        reference: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/issuing/transactions/create_force_capture",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTestHelpersIssuingTransactionsCreateForceCaptureInput>;

// Output Schema
export interface PostTestHelpersIssuingTransactionsCreateForceCaptureOutput {
  amount: number;
  amount_details: {
    atm_fee: number | null;
    cashback_amount: number | null;
  } | null;
  authorization: unknown;
  balance_transaction:
    | string
    | {
        amount: number;
        available_on: number;
        balance_type:
          | "issuing"
          | "payments"
          | "refund_and_dispute_prefunding"
          | "risk_reserved";
        created: number;
        currency: string;
        description: string | null;
        exchange_rate: number | null;
        fee: number;
        fee_details: {
          amount: number;
          application: string | null;
          currency: string;
          description: string | null;
          type: string;
        }[];
        id: string;
        net: number;
        object: "balance_transaction";
        reporting_category: string;
        source: string | unknown | null;
        status: string;
        type:
          | "adjustment"
          | "advance"
          | "advance_funding"
          | "anticipation_repayment"
          | "application_fee"
          | "application_fee_refund"
          | "charge"
          | "climate_order_purchase"
          | "climate_order_refund"
          | "connect_collection_transfer"
          | "contribution"
          | "fee_credit_funding"
          | "inbound_transfer"
          | "inbound_transfer_reversal"
          | "issuing_authorization_hold"
          | "issuing_authorization_release"
          | "issuing_dispute"
          | "issuing_transaction"
          | "obligation_outbound"
          | "obligation_reversal_inbound"
          | "payment"
          | "payment_failure_refund"
          | "payment_network_reserve_hold"
          | "payment_network_reserve_release"
          | "payment_refund"
          | "payment_reversal"
          | "payment_unreconciled"
          | "payout"
          | "payout_cancel"
          | "payout_failure"
          | "payout_minimum_balance_hold"
          | "payout_minimum_balance_release"
          | "refund"
          | "refund_failure"
          | "reserve_hold"
          | "reserve_release"
          | "reserve_transaction"
          | "reserved_funds"
          | "stripe_balance_payment_debit"
          | "stripe_balance_payment_debit_reversal"
          | "stripe_fee"
          | "stripe_fx_fee"
          | "tax_fee"
          | "tax_fund"
          | "topup"
          | "topup_reversal"
          | "transfer"
          | "transfer_cancel"
          | "transfer_failure"
          | "transfer_refund";
      }
    | null;
  card: unknown;
  cardholder:
    | string
    | {
        billing: {
          address: {
            city: string | null;
            country: string | null;
            line1: string | null;
            line2: string | null;
            postal_code: string | null;
            state: string | null;
          };
        };
        company: { tax_id_provided: boolean } | null;
        created: number;
        email: string | null;
        id: string;
        individual: {
          card_issuing?: {
            user_terms_acceptance: {
              date: number | null;
              ip: string | null;
              user_agent: string | null;
            } | null;
          } | null;
          dob: {
            day: number | null;
            month: number | null;
            year: number | null;
          } | null;
          first_name: string | null;
          last_name: string | null;
          verification: {
            document: {
              back:
                | string
                | {
                    created: number;
                    expires_at: number | null;
                    filename: string | null;
                    id: string;
                    links?: {
                      data: {
                        created: number;
                        expired: boolean;
                        expires_at: number | null;
                        file: unknown;
                        id: string;
                        livemode: boolean;
                        metadata: Record<string, string>;
                        object: "file_link";
                        url: string | null;
                      }[];
                      has_more: boolean;
                      object: "list";
                      url: string;
                    } | null;
                    object: "file";
                    purpose:
                      | "account_requirement"
                      | "additional_verification"
                      | "business_icon"
                      | "business_logo"
                      | "customer_signature"
                      | "dispute_evidence"
                      | "document_provider_identity_document"
                      | "finance_report_run"
                      | "financial_account_statement"
                      | "identity_document"
                      | "identity_document_downloadable"
                      | "issuing_regulatory_reporting"
                      | "pci_document"
                      | "platform_terms_of_service"
                      | "selfie"
                      | "sigma_scheduled_query"
                      | "tax_document_user_upload"
                      | "terminal_android_apk"
                      | "terminal_reader_splashscreen"
                      | "terminal_wifi_certificate"
                      | "terminal_wifi_private_key";
                    size: number;
                    title: string | null;
                    type: string | null;
                    url: string | null;
                  }
                | null;
              front:
                | string
                | {
                    created: number;
                    expires_at: number | null;
                    filename: string | null;
                    id: string;
                    links?: {
                      data: {
                        created: number;
                        expired: boolean;
                        expires_at: number | null;
                        file: unknown;
                        id: string;
                        livemode: boolean;
                        metadata: Record<string, string>;
                        object: "file_link";
                        url: string | null;
                      }[];
                      has_more: boolean;
                      object: "list";
                      url: string;
                    } | null;
                    object: "file";
                    purpose:
                      | "account_requirement"
                      | "additional_verification"
                      | "business_icon"
                      | "business_logo"
                      | "customer_signature"
                      | "dispute_evidence"
                      | "document_provider_identity_document"
                      | "finance_report_run"
                      | "financial_account_statement"
                      | "identity_document"
                      | "identity_document_downloadable"
                      | "issuing_regulatory_reporting"
                      | "pci_document"
                      | "platform_terms_of_service"
                      | "selfie"
                      | "sigma_scheduled_query"
                      | "tax_document_user_upload"
                      | "terminal_android_apk"
                      | "terminal_reader_splashscreen"
                      | "terminal_wifi_certificate"
                      | "terminal_wifi_private_key";
                    size: number;
                    title: string | null;
                    type: string | null;
                    url: string | null;
                  }
                | null;
            } | null;
          } | null;
        } | null;
        livemode: boolean;
        metadata: Record<string, string>;
        name: string;
        object: "issuing.cardholder";
        phone_number: string | null;
        preferred_locales: ("de" | "en" | "es" | "fr" | "it")[] | null;
        requirements: {
          disabled_reason:
            | "listed"
            | "rejected.listed"
            | "requirements.past_due"
            | "under_review"
            | null;
          past_due:
            | (
                | "company.tax_id"
                | "individual.card_issuing.user_terms_acceptance.date"
                | "individual.card_issuing.user_terms_acceptance.ip"
                | "individual.dob.day"
                | "individual.dob.month"
                | "individual.dob.year"
                | "individual.first_name"
                | "individual.last_name"
                | "individual.verification.document"
              )[]
            | null;
        };
        spending_controls: unknown;
        status: "active" | "blocked" | "inactive";
        type: "company" | "individual";
      }
    | null;
  created: number;
  currency: string;
  dispute: unknown;
  id: string;
  livemode: boolean;
  merchant_amount: number;
  merchant_currency: string;
  merchant_data: {
    category: string;
    category_code: string;
    city: string | null;
    country: string | null;
    name: string | null;
    network_id: string;
    postal_code: string | null;
    state: string | null;
    tax_id: string | null;
    terminal_id: string | null;
    url: string | null;
  };
  metadata: Record<string, string>;
  network_data: {
    authorization_code: string | null;
    processing_date: string | null;
    transaction_id: string | null;
  } | null;
  object: "issuing.transaction";
  purchase_details?: {
    fleet: {
      cardholder_prompt_data: {
        driver_id: string | null;
        odometer: number | null;
        unspecified_id: string | null;
        user_id: string | null;
        vehicle_number: string | null;
      } | null;
      purchase_type: string | null;
      reported_breakdown: {
        fuel: { gross_amount_decimal: string | null } | null;
        non_fuel: { gross_amount_decimal: string | null } | null;
        tax: {
          local_amount_decimal: string | null;
          national_amount_decimal: string | null;
        } | null;
      } | null;
      service_type: string | null;
    } | null;
    flight: {
      departure_at: number | null;
      passenger_name: string | null;
      refundable: boolean | null;
      segments:
        | {
            arrival_airport_code: string | null;
            carrier: string | null;
            departure_airport_code: string | null;
            flight_number: string | null;
            service_class: string | null;
            stopover_allowed: boolean | null;
          }[]
        | null;
      travel_agency: string | null;
    } | null;
    fuel: {
      industry_product_code: string | null;
      quantity_decimal: string | null;
      type: string;
      unit: string;
      unit_cost_decimal: string;
    } | null;
    lodging: { check_in_at: number | null; nights: number | null } | null;
    receipt:
      | {
          description: string | null;
          quantity: number | null;
          total: number | null;
          unit_cost: number | null;
        }[]
      | null;
    reference: string | null;
  } | null;
  token?:
    | string
    | {
        card: unknown;
        created: number;
        device_fingerprint: string | null;
        id: string;
        last4?: string;
        livemode: boolean;
        network: "mastercard" | "visa";
        network_data?: {
          device?: {
            device_fingerprint?: string;
            ip_address?: string;
            location?: string;
            name?: string;
            phone_number?: string;
            type?: "other" | "phone" | "watch";
          };
          mastercard?: {
            card_reference_id?: string;
            token_reference_id: string;
            token_requestor_id: string;
            token_requestor_name?: string;
          };
          type: "mastercard" | "visa";
          visa?: {
            card_reference_id: string | null;
            token_reference_id: string;
            token_requestor_id: string;
            token_risk_score?: string;
          };
          wallet_provider?: {
            account_id?: string;
            account_trust_score?: number;
            card_number_source?: "app" | "manual" | "on_file" | "other";
            cardholder_address?: { line1: string; postal_code: string };
            cardholder_name?: string;
            device_trust_score?: number;
            hashed_account_email_address?: string;
            reason_codes?: (
              | "account_card_too_new"
              | "account_recently_changed"
              | "account_too_new"
              | "account_too_new_since_launch"
              | "additional_device"
              | "data_expired"
              | "defer_id_v_decision"
              | "device_recently_lost"
              | "good_activity_history"
              | "has_suspended_tokens"
              | "high_risk"
              | "inactive_account"
              | "long_account_tenure"
              | "low_account_score"
              | "low_device_score"
              | "low_phone_number_score"
              | "network_service_error"
              | "outside_home_territory"
              | "provisioning_cardholder_mismatch"
              | "provisioning_device_and_cardholder_mismatch"
              | "provisioning_device_mismatch"
              | "same_device_no_prior_authentication"
              | "same_device_successful_prior_authentication"
              | "software_update"
              | "suspicious_activity"
              | "too_many_different_cardholders"
              | "too_many_recent_attempts"
              | "too_many_recent_tokens"
            )[];
            suggested_decision?: "approve" | "decline" | "require_auth";
            suggested_decision_version?: string;
          };
        };
        network_updated_at: number;
        object: "issuing.token";
        status: "active" | "deleted" | "requested" | "suspended";
        wallet_provider?: "apple_pay" | "google_pay" | "samsung_pay";
      }
    | null;
  treasury?: {
    received_credit: string | null;
    received_debit: string | null;
  } | null;
  type: "capture" | "refund";
  wallet: "apple_pay" | "google_pay" | "samsung_pay" | null;
}
export const PostTestHelpersIssuingTransactionsCreateForceCaptureOutput =
  /*@__PURE__*/ Schema.Struct({
    amount: Schema.Number,
    amount_details: Schema.NullOr(
      Schema.Struct({
        atm_fee: Schema.NullOr(Schema.Number),
        cashback_amount: Schema.NullOr(Schema.Number),
      }),
    ),
    authorization: Schema.Unknown,
    balance_transaction: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          amount: Schema.Number,
          available_on: Schema.Number,
          balance_type: Schema.Literals([
            "issuing",
            "payments",
            "refund_and_dispute_prefunding",
            "risk_reserved",
          ]),
          created: Schema.Number,
          currency: Schema.String,
          description: Schema.NullOr(Schema.String),
          exchange_rate: Schema.NullOr(Schema.Number),
          fee: Schema.Number,
          fee_details: Schema.Array(
            Schema.Struct({
              amount: Schema.Number,
              application: Schema.NullOr(Schema.String),
              currency: Schema.String,
              description: Schema.NullOr(Schema.String),
              type: Schema.String,
            }),
          ),
          id: Schema.String,
          net: Schema.Number,
          object: Schema.Literals(["balance_transaction"]),
          reporting_category: Schema.String,
          source: Schema.NullOr(Schema.Union([Schema.String, Schema.Unknown])),
          status: Schema.String,
          type: Schema.Literals([
            "adjustment",
            "advance",
            "advance_funding",
            "anticipation_repayment",
            "application_fee",
            "application_fee_refund",
            "charge",
            "climate_order_purchase",
            "climate_order_refund",
            "connect_collection_transfer",
            "contribution",
            "fee_credit_funding",
            "inbound_transfer",
            "inbound_transfer_reversal",
            "issuing_authorization_hold",
            "issuing_authorization_release",
            "issuing_dispute",
            "issuing_transaction",
            "obligation_outbound",
            "obligation_reversal_inbound",
            "payment",
            "payment_failure_refund",
            "payment_network_reserve_hold",
            "payment_network_reserve_release",
            "payment_refund",
            "payment_reversal",
            "payment_unreconciled",
            "payout",
            "payout_cancel",
            "payout_failure",
            "payout_minimum_balance_hold",
            "payout_minimum_balance_release",
            "refund",
            "refund_failure",
            "reserve_hold",
            "reserve_release",
            "reserve_transaction",
            "reserved_funds",
            "stripe_balance_payment_debit",
            "stripe_balance_payment_debit_reversal",
            "stripe_fee",
            "stripe_fx_fee",
            "tax_fee",
            "tax_fund",
            "topup",
            "topup_reversal",
            "transfer",
            "transfer_cancel",
            "transfer_failure",
            "transfer_refund",
          ]),
        }),
      ]),
    ),
    card: Schema.Unknown,
    cardholder: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          billing: Schema.Struct({
            address: Schema.Struct({
              city: Schema.NullOr(Schema.String),
              country: Schema.NullOr(Schema.String),
              line1: Schema.NullOr(Schema.String),
              line2: Schema.NullOr(Schema.String),
              postal_code: Schema.NullOr(Schema.String),
              state: Schema.NullOr(Schema.String),
            }),
          }),
          company: Schema.NullOr(
            Schema.Struct({
              tax_id_provided: Schema.Boolean,
            }),
          ),
          created: Schema.Number,
          email: Schema.NullOr(Schema.String),
          id: Schema.String,
          individual: Schema.Unknown,
          livemode: Schema.Boolean,
          metadata: Schema.Record(Schema.String, Schema.String),
          name: Schema.String,
          object: Schema.Literals(["issuing.cardholder"]),
          phone_number: Schema.NullOr(Schema.String),
          preferred_locales: Schema.NullOr(
            Schema.Array(Schema.Literals(["de", "en", "es", "fr", "it"])),
          ),
          requirements: Schema.Struct({
            disabled_reason: Schema.NullOr(
              Schema.Literals([
                "listed",
                "rejected.listed",
                "requirements.past_due",
                "under_review",
              ]),
            ),
            past_due: Schema.NullOr(
              Schema.Array(
                Schema.Literals([
                  "company.tax_id",
                  "individual.card_issuing.user_terms_acceptance.date",
                  "individual.card_issuing.user_terms_acceptance.ip",
                  "individual.dob.day",
                  "individual.dob.month",
                  "individual.dob.year",
                  "individual.first_name",
                  "individual.last_name",
                  "individual.verification.document",
                ]),
              ),
            ),
          }),
          spending_controls: Schema.Unknown,
          status: Schema.Literals(["active", "blocked", "inactive"]),
          type: Schema.Literals(["company", "individual"]),
        }),
      ]),
    ),
    created: Schema.Number,
    currency: Schema.String,
    dispute: Schema.Unknown,
    id: Schema.String,
    livemode: Schema.Boolean,
    merchant_amount: Schema.Number,
    merchant_currency: Schema.String,
    merchant_data: Schema.Struct({
      category: Schema.String,
      category_code: Schema.String,
      city: Schema.NullOr(Schema.String),
      country: Schema.NullOr(Schema.String),
      name: Schema.NullOr(Schema.String),
      network_id: Schema.String,
      postal_code: Schema.NullOr(Schema.String),
      state: Schema.NullOr(Schema.String),
      tax_id: Schema.NullOr(Schema.String),
      terminal_id: Schema.NullOr(Schema.String),
      url: Schema.NullOr(Schema.String),
    }),
    metadata: Schema.Record(Schema.String, Schema.String),
    network_data: Schema.NullOr(
      Schema.Struct({
        authorization_code: Schema.NullOr(Schema.String),
        processing_date: Schema.NullOr(Schema.String),
        transaction_id: Schema.NullOr(Schema.String),
      }),
    ),
    object: Schema.Literals(["issuing.transaction"]),
    purchase_details: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          fleet: Schema.NullOr(
            Schema.Struct({
              cardholder_prompt_data: Schema.NullOr(
                Schema.Struct({
                  driver_id: Schema.NullOr(Schema.String),
                  odometer: Schema.NullOr(Schema.Number),
                  unspecified_id: Schema.NullOr(Schema.String),
                  user_id: Schema.NullOr(Schema.String),
                  vehicle_number: Schema.NullOr(Schema.String),
                }),
              ),
              purchase_type: Schema.NullOr(Schema.String),
              reported_breakdown: Schema.NullOr(
                Schema.Struct({
                  fuel: Schema.NullOr(
                    Schema.Struct({
                      gross_amount_decimal: Schema.NullOr(Schema.String),
                    }),
                  ),
                  non_fuel: Schema.NullOr(
                    Schema.Struct({
                      gross_amount_decimal: Schema.NullOr(Schema.String),
                    }),
                  ),
                  tax: Schema.NullOr(
                    Schema.Struct({
                      local_amount_decimal: Schema.NullOr(Schema.String),
                      national_amount_decimal: Schema.NullOr(Schema.String),
                    }),
                  ),
                }),
              ),
              service_type: Schema.NullOr(Schema.String),
            }),
          ),
          flight: Schema.NullOr(
            Schema.Struct({
              departure_at: Schema.NullOr(Schema.Number),
              passenger_name: Schema.NullOr(Schema.String),
              refundable: Schema.NullOr(Schema.Boolean),
              segments: Schema.NullOr(
                Schema.Array(
                  Schema.Struct({
                    arrival_airport_code: Schema.NullOr(Schema.String),
                    carrier: Schema.NullOr(Schema.String),
                    departure_airport_code: Schema.NullOr(Schema.String),
                    flight_number: Schema.NullOr(Schema.String),
                    service_class: Schema.NullOr(Schema.String),
                    stopover_allowed: Schema.NullOr(Schema.Boolean),
                  }),
                ),
              ),
              travel_agency: Schema.NullOr(Schema.String),
            }),
          ),
          fuel: Schema.NullOr(
            Schema.Struct({
              industry_product_code: Schema.NullOr(Schema.String),
              quantity_decimal: Schema.NullOr(Schema.String),
              type: Schema.String,
              unit: Schema.String,
              unit_cost_decimal: Schema.String,
            }),
          ),
          lodging: Schema.NullOr(
            Schema.Struct({
              check_in_at: Schema.NullOr(Schema.Number),
              nights: Schema.NullOr(Schema.Number),
            }),
          ),
          receipt: Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                description: Schema.NullOr(Schema.String),
                quantity: Schema.NullOr(Schema.Number),
                total: Schema.NullOr(Schema.Number),
                unit_cost: Schema.NullOr(Schema.Number),
              }),
            ),
          ),
          reference: Schema.NullOr(Schema.String),
        }),
      ),
    ),
    token: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.String,
          Schema.Struct({
            card: Schema.Unknown,
            created: Schema.Number,
            device_fingerprint: Schema.NullOr(Schema.String),
            id: Schema.String,
            last4: Schema.optional(Schema.String),
            livemode: Schema.Boolean,
            network: Schema.Literals(["mastercard", "visa"]),
            network_data: Schema.optional(
              Schema.Struct({
                device: Schema.optional(
                  Schema.Struct({
                    device_fingerprint: Schema.optional(Schema.String),
                    ip_address: Schema.optional(Schema.String),
                    location: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    phone_number: Schema.optional(Schema.String),
                    type: Schema.optional(
                      Schema.Literals(["other", "phone", "watch"]),
                    ),
                  }),
                ),
                mastercard: Schema.optional(
                  Schema.Struct({
                    card_reference_id: Schema.optional(Schema.String),
                    token_reference_id: Schema.String,
                    token_requestor_id: Schema.String,
                    token_requestor_name: Schema.optional(Schema.String),
                  }),
                ),
                type: Schema.Literals(["mastercard", "visa"]),
                visa: Schema.optional(
                  Schema.Struct({
                    card_reference_id: Schema.NullOr(Schema.String),
                    token_reference_id: Schema.String,
                    token_requestor_id: Schema.String,
                    token_risk_score: Schema.optional(Schema.String),
                  }),
                ),
                wallet_provider: Schema.optional(
                  Schema.Struct({
                    account_id: Schema.optional(Schema.String),
                    account_trust_score: Schema.optional(Schema.Number),
                    card_number_source: Schema.optional(
                      Schema.Literals(["app", "manual", "on_file", "other"]),
                    ),
                    cardholder_address: Schema.optional(
                      Schema.Struct({
                        line1: Schema.String,
                        postal_code: Schema.String,
                      }),
                    ),
                    cardholder_name: Schema.optional(Schema.String),
                    device_trust_score: Schema.optional(Schema.Number),
                    hashed_account_email_address: Schema.optional(
                      Schema.String,
                    ),
                    reason_codes: Schema.optional(
                      Schema.Array(
                        Schema.Literals([
                          "account_card_too_new",
                          "account_recently_changed",
                          "account_too_new",
                          "account_too_new_since_launch",
                          "additional_device",
                          "data_expired",
                          "defer_id_v_decision",
                          "device_recently_lost",
                          "good_activity_history",
                          "has_suspended_tokens",
                          "high_risk",
                          "inactive_account",
                          "long_account_tenure",
                          "low_account_score",
                          "low_device_score",
                          "low_phone_number_score",
                          "network_service_error",
                          "outside_home_territory",
                          "provisioning_cardholder_mismatch",
                          "provisioning_device_and_cardholder_mismatch",
                          "provisioning_device_mismatch",
                          "same_device_no_prior_authentication",
                          "same_device_successful_prior_authentication",
                          "software_update",
                          "suspicious_activity",
                          "too_many_different_cardholders",
                          "too_many_recent_attempts",
                          "too_many_recent_tokens",
                        ]),
                      ),
                    ),
                    suggested_decision: Schema.optional(
                      Schema.Literals(["approve", "decline", "require_auth"]),
                    ),
                    suggested_decision_version: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            network_updated_at: Schema.Number,
            object: Schema.Literals(["issuing.token"]),
            status: Schema.Literals([
              "active",
              "deleted",
              "requested",
              "suspended",
            ]),
            wallet_provider: Schema.optional(
              Schema.Literals(["apple_pay", "google_pay", "samsung_pay"]),
            ),
          }),
        ]),
      ),
    ),
    treasury: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          received_credit: Schema.NullOr(Schema.String),
          received_debit: Schema.NullOr(Schema.String),
        }),
      ),
    ),
    type: Schema.Literals(["capture", "refund"]),
    wallet: Schema.NullOr(
      Schema.Literals(["apple_pay", "google_pay", "samsung_pay"]),
    ),
  }) as unknown as Schema.Codec<PostTestHelpersIssuingTransactionsCreateForceCaptureOutput>;

// The operation
/**
 * Create a test-mode force capture
 *
 * <p>Allows the user to capture an arbitrary amount, also known as a forced capture.</p>
 */
export const PostTestHelpersIssuingTransactionsCreateForceCapture =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersIssuingTransactionsCreateForceCaptureInput,
    outputSchema: PostTestHelpersIssuingTransactionsCreateForceCaptureOutput,
  }));
