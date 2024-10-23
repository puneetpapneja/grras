export interface ICourse {
  img: string
  heading: string
  timing: string
  noOfStudents: number
  trainerName: string
}

export interface IExam {}
export interface ICourseDetails {
  name?: string
  banner?: string
  about?: string
  duration?: string
  outlines?: string[]
  certification?: string
  exam?: IExam
  highlights?: Array<{ heading: string; content: string }>
  prerequisites?: Array<{ heading: string; content: string }>
  pdf?: string
}
