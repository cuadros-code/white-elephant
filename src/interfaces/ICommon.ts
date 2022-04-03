export interface IFile {
  name: string;
  url : string;
  type: string;
  size: number;
}

export interface IResponsePost {
  uid         : string,
  title       : string,
  description : string,
  location    : string,
  files       : IFile[],
}