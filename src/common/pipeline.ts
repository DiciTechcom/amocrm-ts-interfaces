import { CrmEntities } from './utils'

/**
 * CRM Pipeline
 *
 * Represents a sales pipeline with statuses in the CRM system.
 */
export type CrmPipeline = {
  id: number
  account_id: number
  name: string
  sort: number
  is_main: boolean
  is_unsorted_on: boolean
  is_archive: boolean
  is_predefined?: boolean
  entity_type: CrmEntities
  _links: {
    self: {
      href: string
    }
  }
  _embedded?: {
    statuses?: {
      id: number
      name: string
      sort: number
      is_editable: boolean
      pipeline_id: number
      color: string
      type: string
      account_id: number
      _links: {
        self: {
          href: string
        }
      }
    }[]
  }
}

/**
 * CRM Task Type
 *
 * Represents a task type configuration in the CRM system.
 * Used via APP.constant('task_types') or AMOCRM.constant('task_types').
 */
export interface CrmTaskType {
  id: number
  option: string
  color: string
  icon_id: number
}
