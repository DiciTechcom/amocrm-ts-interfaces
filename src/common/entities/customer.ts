import { CrmEntityCustomField, CrmApiResponse } from '../custom-fields'

/**
 * CRM Customer Entity
 *
 * Represents a customer (recurring sales) in the CRM system.
 */
export type CrmCustomer = {
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
  is_deleted: boolean
  ltv: number
  purchases_count: number
  average_check: number
  status_id: number
  periodicity: number
  next_price: number
  next_date: number
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
 * CRM Customers List Response
 *
 * API response structure for paginated customer lists.
 */
export type CrmCustomersList = CrmApiResponse<CrmCustomer>
