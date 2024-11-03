export interface IProgram {
  name: string
  shortName?: string
  route: string
}

export interface IPrograms extends IProgram {
  subCourse: Array<IProgram>
}
