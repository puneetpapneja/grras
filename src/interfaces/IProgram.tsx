export interface IProgram {
  name: string
  route: string
}

export interface IPrograms extends IProgram {
  subCourse: Array<IProgram>
}
