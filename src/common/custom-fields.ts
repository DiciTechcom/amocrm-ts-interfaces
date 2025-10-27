import { CrmEntities } from './utils'

/**
 * CRM Custom Field Types
 *
 * Available types for custom fields in the CRM system.
 */
export type CrmCustomFieldType =
  | 'text'
  | 'numeric'
  | 'checkbox'
  | 'select'
  | 'multiselect'
  | 'date'
  | 'url'
  | 'textarea'
  | 'radiobutton'
  | 'streetaddress'
  | 'smart_address'
  | 'birthday'
  | 'legal_entity'
  | 'date_time'
  | 'price'
  | 'category'
  | 'items'

/**
 * CRM Custom Field System Codes
 *
 * Predefined codes for system custom fields.
 */
export type CrmCustomFieldCode = 'EMAIL' | 'PHONE' | 'WEB' | 'ADDRESS' | 'POSITION'

/**
 * CRM Custom Field Address Type
 *
 * Structure for address-type custom field values.
 */
export type CrmCustomFieldTypeAddress = {
  name: string | number | null
  entity_type: string | number | null
  vat_id: string | number | null
  tax_registration_reason_code: string | number | null
  address: string | number | null
  kpp: string | number | null
  external_uid: string | number | null
}

/**
 * CRM Entity Custom Field Value
 *
 * Represents a custom field value attached to an entity.
 */
export type CrmEntityCustomField = {
  field_id: number
  field_name: string
  field_code: CrmCustomFieldCode | null
  field_type: CrmCustomFieldType
  values: Array<{
    value: string | number | CrmCustomFieldTypeAddress
    enum_id: string | number
    enum_code: string | number
  }>
}

/**
 * CRM Custom Field Definition
 *
 * Represents a custom field metadata configuration.
 */
export type CrmCustomField = {
  id: number
  name: string
  type: CrmCustomFieldType
  account_id: number
  code: CrmCustomFieldCode | null
  sort: number
  is_api_only: boolean
  enums: null | { id: number; value: string; sort: number }[]
  group_id: null | string
  required_statuses: { pipeline_id: number; status_id: number }[]
  entity_type: CrmEntities
  remind: null | 'day' | 'week' | 'month'
  _links: {
    self: {
      href: string
    }
  }
}

/**
 * CRM Custom Field Group
 *
 * Represents a grouping of custom fields.
 */
export type CrmCustomFieldGroup = {
  id: string | number
  name: string
  is_predefined: boolean
  entity_type: CrmEntities
  sort: number
  _links: {
    self: {
      href: string
    }
  }
}

/**
 * CRM API Response
 *
 * Generic pagination wrapper for API list responses.
 */
export type CrmApiResponse<Entity> = {
  _page: number
  _links: {
    self: { href: string }
    next: { href: string }
  }
  _embedded: {
    [entity in CrmEntities]: Entity[]
  }
}
