
  export interface Coworking {
    id: number
    name: string
    description: string
    image: string
    hours: Hour[]
  }
  
  export interface Hour {
    time: string
  }
  