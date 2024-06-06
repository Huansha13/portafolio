export interface WsCode {
  heder: HeaderEditor;
  body: BodyEditor;
  titleEng: string;
  titleEsp: string;
}

export interface HeaderEditor {
  tolbarEng: string[];
  tolbarEsp: string[];
  options: string[];
}

export interface BodyEditor {
  sidebar: string[]
}
