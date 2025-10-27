import { CrmEntityCustomField, CrmApiResponse } from '../custom-fields'

/**
 * CRM Contact Entity
 *
 * Represents a contact (person) in the CRM system.
 */
export type CrmContact = {
  id: number | string
  name: string
  first_name: string
  last_name: string
  responsible_user_id: number | string
  group_id: number | string
  created_by: number | string
  updated_by: number | string
  created_at: number | string
  updated_at: number | string
  closest_task_at: null | number | string
  custom_fields_values: CrmEntityCustomField[]
  account_id: number | string
  _links: {
    self: {
      href: string
    }
  }
  _embedded: {
    tags?: Array<{ id: number | string; name: string }>
    companies?: Array<{
      id: number | string
      _links: {
        self: {
          href: string
        }
      }
    }>
  }
}

/**
 * CRM Contacts List Response
 *
 * API response structure for paginated contact lists.
 */
export type CrmContactsList = CrmApiResponse<CrmContact>
