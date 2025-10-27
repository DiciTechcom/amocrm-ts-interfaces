import { CrmEntityCustomField, CrmApiResponse } from '../custom-fields'

/**
 * CRM Company Entity
 *
 * Represents a company (organization) in the CRM system.
 */
export type CrmCompany = {
  id: number | string
  name: string
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
  }
}

/**
 * CRM Companies List Response
 *
 * API response structure for paginated company lists.
 */
export type CrmCompaniesList = CrmApiResponse<CrmCompany>
