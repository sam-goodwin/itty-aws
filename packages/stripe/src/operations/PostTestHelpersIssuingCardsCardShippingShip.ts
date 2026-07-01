import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTestHelpersIssuingCardsCardShippingShipInput {
  card: string;
  expand?: string[];
}
export const PostTestHelpersIssuingCardsCardShippingShipInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    card: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/test_helpers/issuing/cards/{card}/shipping/ship",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTestHelpersIssuingCardsCardShippingShipInput>;

// Output Schema
export interface PostTestHelpersIssuingCardsCardShippingShipOutput {
  brand: string;
  cancellation_reason:
    | "design_rejected"
    | "fulfillment_error"
    | "lost"
    | "stolen"
    | null;
  cardholder: {
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
  };
  created: number;
  currency: string;
  cvc?: string;
  exp_month: number;
  exp_year: number;
  financial_account?: string | null;
  id: string;
  last4: string;
  latest_fraud_warning: {
    started_at: number | null;
    type:
      | "card_testing_exposure"
      | "fraud_dispute_filed"
      | "third_party_reported"
      | "user_indicated_fraud"
      | null;
  } | null;
  lifecycle_controls: { cancel_after: { payment_count: number } } | null;
  livemode: boolean;
  metadata: Record<string, string>;
  number?: string;
  object: "issuing.card";
  personalization_design:
    | string
    | {
        card_logo:
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
                  file: string | unknown;
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
        carrier_text: {
          footer_body: string | null;
          footer_title: string | null;
          header_body: string | null;
          header_title: string | null;
        } | null;
        created: number;
        id: string;
        livemode: boolean;
        lookup_key: string | null;
        metadata: Record<string, string>;
        name: string | null;
        object: "issuing.personalization_design";
        physical_bundle:
          | string
          | {
              features: {
                card_logo: "optional" | "required" | "unsupported";
                carrier_text: "optional" | "required" | "unsupported";
                second_line: "optional" | "required" | "unsupported";
              };
              id: string;
              livemode: boolean;
              name: string;
              object: "issuing.physical_bundle";
              status: "active" | "inactive" | "review";
              type: "custom" | "standard";
            };
        preferences: {
          is_default: boolean;
          is_platform_default: boolean | null;
        };
        rejection_reasons: {
          card_logo:
            | (
                | "geographic_location"
                | "inappropriate"
                | "network_name"
                | "non_binary_image"
                | "non_fiat_currency"
                | "other"
                | "other_entity"
                | "promotional_material"
              )[]
            | null;
          carrier_text:
            | (
                | "geographic_location"
                | "inappropriate"
                | "network_name"
                | "non_fiat_currency"
                | "other"
                | "other_entity"
                | "promotional_material"
              )[]
            | null;
        };
        status: "active" | "inactive" | "rejected" | "review";
      }
    | null;
  replaced_by: unknown;
  replacement_for: unknown;
  replacement_reason:
    | "damaged"
    | "expired"
    | "fulfillment_error"
    | "lost"
    | "stolen"
    | null;
  second_line: string | null;
  shipping: {
    address: {
      city: string | null;
      country: string | null;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
    address_validation: {
      mode: "disabled" | "normalization_only" | "validation_and_normalization";
      normalized_address: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
      } | null;
      result:
        | "indeterminate"
        | "likely_deliverable"
        | "likely_undeliverable"
        | null;
    } | null;
    carrier: "dhl" | "fedex" | "royal_mail" | "usps" | null;
    customs: { eori_number: string | null } | null;
    eta: number | null;
    name: string;
    phone_number: string | null;
    require_signature: boolean | null;
    service: "express" | "priority" | "standard";
    status:
      | "canceled"
      | "delivered"
      | "failure"
      | "pending"
      | "returned"
      | "shipped"
      | "submitted"
      | null;
    tracking_number: string | null;
    tracking_url: string | null;
    type: "bulk" | "individual";
  } | null;
  spending_controls: {
    allowed_card_presences: ("not_present" | "present")[] | null;
    allowed_categories:
      | (
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
          | "miscellaneous"
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
          | "wrecking_and_salvage_yards"
        )[]
      | null;
    allowed_merchant_countries: string[] | null;
    blocked_card_presences: ("not_present" | "present")[] | null;
    blocked_categories:
      | (
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
          | "miscellaneous"
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
          | "wrecking_and_salvage_yards"
        )[]
      | null;
    blocked_merchant_countries: string[] | null;
    spending_limits:
      | {
          amount: number;
          categories:
            | (
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
                | "miscellaneous"
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
                | "wrecking_and_salvage_yards"
              )[]
            | null;
          interval:
            | "all_time"
            | "daily"
            | "monthly"
            | "per_authorization"
            | "weekly"
            | "yearly";
        }[]
      | null;
    spending_limits_currency: string | null;
  };
  status: "active" | "canceled" | "inactive";
  type: "physical" | "virtual";
  wallets: {
    apple_pay: {
      eligible: boolean;
      ineligible_reason:
        | "missing_agreement"
        | "missing_cardholder_contact"
        | "unsupported_region"
        | null;
    };
    google_pay: {
      eligible: boolean;
      ineligible_reason:
        | "missing_agreement"
        | "missing_cardholder_contact"
        | "unsupported_region"
        | null;
    };
    primary_account_identifier: string | null;
  } | null;
}
export const PostTestHelpersIssuingCardsCardShippingShipOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    brand: Schema.String,
    cancellation_reason: Schema.NullOr(
      Schema.Literals([
        "design_rejected",
        "fulfillment_error",
        "lost",
        "stolen",
      ]),
    ),
    cardholder: Schema.Struct({
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
    created: Schema.Number,
    currency: Schema.String,
    cvc: Schema.optional(Schema.String),
    exp_month: Schema.Number,
    exp_year: Schema.Number,
    financial_account: Schema.optional(Schema.NullOr(Schema.String)),
    id: Schema.String,
    last4: Schema.String,
    latest_fraud_warning: Schema.NullOr(
      Schema.Struct({
        started_at: Schema.NullOr(Schema.Number),
        type: Schema.NullOr(
          Schema.Literals([
            "card_testing_exposure",
            "fraud_dispute_filed",
            "third_party_reported",
            "user_indicated_fraud",
          ]),
        ),
      }),
    ),
    lifecycle_controls: Schema.NullOr(
      Schema.Struct({
        cancel_after: Schema.Struct({
          payment_count: Schema.Number,
        }),
      }),
    ),
    livemode: Schema.Boolean,
    metadata: Schema.Record(Schema.String, Schema.String),
    number: Schema.optional(Schema.String),
    object: Schema.Literals(["issuing.card"]),
    personalization_design: Schema.NullOr(
      Schema.Union([
        Schema.String,
        Schema.Struct({
          card_logo: Schema.NullOr(
            Schema.Union([
              Schema.String,
              Schema.Struct({
                created: Schema.Number,
                expires_at: Schema.NullOr(Schema.Number),
                filename: Schema.NullOr(Schema.String),
                id: Schema.String,
                links: Schema.optional(
                  Schema.NullOr(
                    Schema.Struct({
                      data: Schema.Array(
                        Schema.Struct({
                          created: Schema.Number,
                          expired: Schema.Boolean,
                          expires_at: Schema.NullOr(Schema.Number),
                          file: Schema.Union([Schema.String, Schema.Unknown]),
                          id: Schema.String,
                          livemode: Schema.Boolean,
                          metadata: Schema.Record(Schema.String, Schema.String),
                          object: Schema.Literals(["file_link"]),
                          url: Schema.NullOr(Schema.String),
                        }),
                      ),
                      has_more: Schema.Boolean,
                      object: Schema.Literals(["list"]),
                      url: Schema.String,
                    }),
                  ),
                ),
                object: Schema.Literals(["file"]),
                purpose: Schema.Literals([
                  "account_requirement",
                  "additional_verification",
                  "business_icon",
                  "business_logo",
                  "customer_signature",
                  "dispute_evidence",
                  "document_provider_identity_document",
                  "finance_report_run",
                  "financial_account_statement",
                  "identity_document",
                  "identity_document_downloadable",
                  "issuing_regulatory_reporting",
                  "pci_document",
                  "platform_terms_of_service",
                  "selfie",
                  "sigma_scheduled_query",
                  "tax_document_user_upload",
                  "terminal_android_apk",
                  "terminal_reader_splashscreen",
                  "terminal_wifi_certificate",
                  "terminal_wifi_private_key",
                ]),
                size: Schema.Number,
                title: Schema.NullOr(Schema.String),
                type: Schema.NullOr(Schema.String),
                url: Schema.NullOr(Schema.String),
              }),
            ]),
          ),
          carrier_text: Schema.NullOr(
            Schema.Struct({
              footer_body: Schema.NullOr(Schema.String),
              footer_title: Schema.NullOr(Schema.String),
              header_body: Schema.NullOr(Schema.String),
              header_title: Schema.NullOr(Schema.String),
            }),
          ),
          created: Schema.Number,
          id: Schema.String,
          livemode: Schema.Boolean,
          lookup_key: Schema.NullOr(Schema.String),
          metadata: Schema.Record(Schema.String, Schema.String),
          name: Schema.NullOr(Schema.String),
          object: Schema.Literals(["issuing.personalization_design"]),
          physical_bundle: Schema.Union([
            Schema.String,
            Schema.Struct({
              features: Schema.Struct({
                card_logo: Schema.Literals([
                  "optional",
                  "required",
                  "unsupported",
                ]),
                carrier_text: Schema.Literals([
                  "optional",
                  "required",
                  "unsupported",
                ]),
                second_line: Schema.Literals([
                  "optional",
                  "required",
                  "unsupported",
                ]),
              }),
              id: Schema.String,
              livemode: Schema.Boolean,
              name: Schema.String,
              object: Schema.Literals(["issuing.physical_bundle"]),
              status: Schema.Literals(["active", "inactive", "review"]),
              type: Schema.Literals(["custom", "standard"]),
            }),
          ]),
          preferences: Schema.Struct({
            is_default: Schema.Boolean,
            is_platform_default: Schema.NullOr(Schema.Boolean),
          }),
          rejection_reasons: Schema.Struct({
            card_logo: Schema.NullOr(
              Schema.Array(
                Schema.Literals([
                  "geographic_location",
                  "inappropriate",
                  "network_name",
                  "non_binary_image",
                  "non_fiat_currency",
                  "other",
                  "other_entity",
                  "promotional_material",
                ]),
              ),
            ),
            carrier_text: Schema.NullOr(
              Schema.Array(
                Schema.Literals([
                  "geographic_location",
                  "inappropriate",
                  "network_name",
                  "non_fiat_currency",
                  "other",
                  "other_entity",
                  "promotional_material",
                ]),
              ),
            ),
          }),
          status: Schema.Literals(["active", "inactive", "rejected", "review"]),
        }),
      ]),
    ),
    replaced_by: Schema.Unknown,
    replacement_for: Schema.Unknown,
    replacement_reason: Schema.NullOr(
      Schema.Literals([
        "damaged",
        "expired",
        "fulfillment_error",
        "lost",
        "stolen",
      ]),
    ),
    second_line: Schema.NullOr(Schema.String),
    shipping: Schema.NullOr(
      Schema.Struct({
        address: Schema.Struct({
          city: Schema.NullOr(Schema.String),
          country: Schema.NullOr(Schema.String),
          line1: Schema.NullOr(Schema.String),
          line2: Schema.NullOr(Schema.String),
          postal_code: Schema.NullOr(Schema.String),
          state: Schema.NullOr(Schema.String),
        }),
        address_validation: Schema.NullOr(
          Schema.Struct({
            mode: Schema.Literals([
              "disabled",
              "normalization_only",
              "validation_and_normalization",
            ]),
            normalized_address: Schema.NullOr(
              Schema.Struct({
                city: Schema.NullOr(Schema.String),
                country: Schema.NullOr(Schema.String),
                line1: Schema.NullOr(Schema.String),
                line2: Schema.NullOr(Schema.String),
                postal_code: Schema.NullOr(Schema.String),
                state: Schema.NullOr(Schema.String),
              }),
            ),
            result: Schema.NullOr(
              Schema.Literals([
                "indeterminate",
                "likely_deliverable",
                "likely_undeliverable",
              ]),
            ),
          }),
        ),
        carrier: Schema.NullOr(
          Schema.Literals(["dhl", "fedex", "royal_mail", "usps"]),
        ),
        customs: Schema.NullOr(
          Schema.Struct({
            eori_number: Schema.NullOr(Schema.String),
          }),
        ),
        eta: Schema.NullOr(Schema.Number),
        name: Schema.String,
        phone_number: Schema.NullOr(Schema.String),
        require_signature: Schema.NullOr(Schema.Boolean),
        service: Schema.Literals(["express", "priority", "standard"]),
        status: Schema.NullOr(
          Schema.Literals([
            "canceled",
            "delivered",
            "failure",
            "pending",
            "returned",
            "shipped",
            "submitted",
          ]),
        ),
        tracking_number: Schema.NullOr(Schema.String),
        tracking_url: Schema.NullOr(Schema.String),
        type: Schema.Literals(["bulk", "individual"]),
      }),
    ),
    spending_controls: Schema.Struct({
      allowed_card_presences: Schema.NullOr(
        Schema.Array(Schema.Literals(["not_present", "present"])),
      ),
      allowed_categories: Schema.NullOr(
        Schema.Array(
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
            "miscellaneous",
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
      ),
      allowed_merchant_countries: Schema.NullOr(Schema.Array(Schema.String)),
      blocked_card_presences: Schema.NullOr(
        Schema.Array(Schema.Literals(["not_present", "present"])),
      ),
      blocked_categories: Schema.NullOr(
        Schema.Array(
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
            "miscellaneous",
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
      ),
      blocked_merchant_countries: Schema.NullOr(Schema.Array(Schema.String)),
      spending_limits: Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            amount: Schema.Number,
            categories: Schema.NullOr(
              Schema.Array(
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
                  "miscellaneous",
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
            ),
            interval: Schema.Literals([
              "all_time",
              "daily",
              "monthly",
              "per_authorization",
              "weekly",
              "yearly",
            ]),
          }),
        ),
      ),
      spending_limits_currency: Schema.NullOr(Schema.String),
    }),
    status: Schema.Literals(["active", "canceled", "inactive"]),
    type: Schema.Literals(["physical", "virtual"]),
    wallets: Schema.NullOr(
      Schema.Struct({
        apple_pay: Schema.Struct({
          eligible: Schema.Boolean,
          ineligible_reason: Schema.NullOr(
            Schema.Literals([
              "missing_agreement",
              "missing_cardholder_contact",
              "unsupported_region",
            ]),
          ),
        }),
        google_pay: Schema.Struct({
          eligible: Schema.Boolean,
          ineligible_reason: Schema.NullOr(
            Schema.Literals([
              "missing_agreement",
              "missing_cardholder_contact",
              "unsupported_region",
            ]),
          ),
        }),
        primary_account_identifier: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<PostTestHelpersIssuingCardsCardShippingShipOutput>;

// The operation
/**
 * Ship a testmode card
 *
 * <p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>shipped</code>.</p>
 */
export const PostTestHelpersIssuingCardsCardShippingShip =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostTestHelpersIssuingCardsCardShippingShipInput,
    outputSchema: PostTestHelpersIssuingCardsCardShippingShipOutput,
  }));
