export enum AppointmentStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  CANCELLED = 'cancelled',
  ARCHIVED = 'archived',
  RESCHEDULED = 'rescheduled',
}

export interface Appointment {
  id?: string
  created_at: Date
  slot_id: string
  freelancer_id: string
  user_id: string
  schedule_date_time: Date
  reserved_date_time: Date
  status: AppointmentStatus
  metadata: {
    [key: string]: string
  }
}
