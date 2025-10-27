import { CrmCountriesIds, StringBoolean } from './utils'

/**
 * CRM Account (API)
 *
 * Represents account information from the REST API.
 */
export type CrmAccount = {
  id: number
  name: string
  subdomain: string
  created_at: number
  created_by: number
  updated_at: number
  updated_by: number
  current_user_id: number
  country: CrmCountriesIds
  customers_mode: 'disabled' | 'enabled'
  is_unsorted_on: boolean
  mobile_feature_version: number
  is_loss_reason_enabled: boolean
  is_helpbot_enabled: boolean
  is_technical_account: boolean
  contact_name_display_order: number
  amojo_id?: string
  version?: number
  entity_names?: {
    [entity: string]: {
      [language: string]: {
        singular_form: {
          default: string
          genitive?: string
          dative?: string
          accusative?: string
          instrumental?: string
          prepositional?: string
        }
        plural_form: {
          default: string
          genitive?: string
          dative?: string
          accusative?: string
          instrumental?: string
          prepositional?: string
        }
        gender: string
      }
    }
  }
  _links: {
    self: {
      href: string
    }
  }
  _embedded?: {
    amojo_rights?: {
      can_direct: boolean
      can_create_groups: boolean
    }
    users_groups?: { id: number; name: string }[]
    task_types?: {
      id: number
      name: string
      color: string | null
      icon_id: string | null
      code: string | null
    }[]
    datetime_settings?: {
      date_pattern: string
      short_date_pattern: string
      short_time_pattern: string
      date_format: string
      time_format: string
      timezone: string
      timezone_offset: string
    }
  }
}

/**
 * CRM Account Custom Field Configuration
 *
 * Custom field metadata in frontend account constants.
 */
export interface CrmAccountCustomFieldConfig {
  ID: number
  NAME: string
  TYPE_ID: number
  ACCOUNT_ID: number
  DESCRIPTION: string
  CODE: string
  SORT: number
  ENTREE_CATALOG: StringBoolean | number
  PREDEFINED: StringBoolean | number
  MULTIPLE: StringBoolean | number
  DISABLED: StringBoolean | number
  ORIGIN: string
  CATALOG_ID: any
  SETTINGS: {
    is_required: any
    is_deletable: boolean
    is_visible: boolean
    vat_rates: any
    filter_type: any
  }
  deleted_at: any
  ELEMENT_TYPES: {
    [key: number]: number
  }
  ENTREE_DEALS: number
  ENTREE_CONTACTS: number
  ENTREE_COMPANY: number
  ENTREE_CUSTOMERS: number
  ENUMS_NAMES?: {
    [key: string]: {
      [key: string]: string
    }
  }
  ENUMS?: {
    [key: string]: {
      ID: number
      VALUE: any
      SORT: number
    }
  }
}

/**
 * CRM Account Constant (Frontend)
 *
 * Account information available in the CRM frontend.
 * Used via APP.constant('account') or AMOCRM.constant('account').
 */
export interface CrmAccountConstant {
  id: number
  name: string
  subdomain: string
  predefined_cf: {
    [alias: string]: CrmAccountCustomFieldConfig
  }
  cf: {
    [id: string]: CrmAccountCustomFieldConfig
  }
  users: {
    [id: string]: string
  }
  country: string
  currency: string
  paid_from: boolean
  paid_till: boolean
  pay_type: string
  tariffName: string
  timezone: string
  date_pattern: string
  language: string
  date_format: string
  time_format: string
  unsorted_on: StringBoolean
  is_contact_name_display_order_first: boolean
  products: {
    enabled: boolean
    catalog_id: number
  }
  helpbot_enabled: boolean
  amojo_id: string
  amojo_server: string
  amojo_enabled: number
  amojo_rights: {
    can_direct: boolean
    can_group_create: boolean
  }
  talks_auto_close_delay: number
  notifications_enabled: boolean
  version: number
}
