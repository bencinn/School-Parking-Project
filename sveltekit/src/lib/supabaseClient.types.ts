export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admin: {
        Row: {
          email: string
          passwordHash: string | null
        }
        Insert: {
          email: string
          passwordHash?: string | null
        }
        Update: {
          email?: string
          passwordHash?: string | null
        }
        Relationships: []
      }
      announcement: {
        Row: {
          affected: number[] | null
          announcement: string
          end_date: string | null
          start_date: string | null
        }
        Insert: {
          affected?: number[] | null
          announcement: string
          end_date?: string | null
          start_date?: string | null
        }
        Update: {
          affected?: number[] | null
          announcement?: string
          end_date?: string | null
          start_date?: string | null
        }
        Relationships: []
      }
      Parking_lot: {
        Row: {
          created_at: string | null
          id: string
          parked_where: number
          parker_handler: string | null
          parker_name: string | null
          parker_surname: string | null
          phone_number: string
          position: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          parked_where: number
          parker_handler?: string | null
          parker_name?: string | null
          parker_surname?: string | null
          phone_number: string
          position?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          parked_where?: number
          parker_handler?: string | null
          parker_name?: string | null
          parker_surname?: string | null
          phone_number?: string
          position?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
