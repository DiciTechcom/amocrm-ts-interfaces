import { CrmEntityCustomField, CrmApiResponse } from '../custom-fields'

/**
 * CRM Lead Entity
 *
 * Represents a lead (deal/opportunity) in the CRM system.
 */
export type CrmLead = {
  id: number
  name: string
  price: number
  responsible_user_id: string | number
  group_id: string | number
  status_id: string | number
  pipeline_id: string | number
  loss_reason_id: string | number
  source_id: string | number
  created_by: string | number
  updated_by: string | number
  created_at: string | number
  updated_at: string | number
  closed_at: string | number
  closest_task_at: string | number
  is_deleted: boolean
  custom_fields_values: CrmEntityCustomField[]
  score: string | number
  account_id: string | number
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
    contacts?: Array<{
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
 * CRM Leads List Response
 *
 * API response structure for paginated lead lists.
 */
export type CrmLeadsList = CrmApiResponse<CrmLead>
