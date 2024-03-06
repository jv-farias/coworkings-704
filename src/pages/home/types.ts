import { ReactNode } from "react"

  export interface Coworking {
    id: number
    name: string
    description: string
    image: string
    hours: Hour[]
  }
  
  export interface Hour {
    description: ReactNode
    time: string
  }
  