export interface Details {
  title: string;
  text: string;
}

export interface ModelConfig {
  edgeColor?: number;
  distanceFromModel: number;
  modelPath: string;
  modelHeight: number;
  onModelLoadProgress: (xhr: ProgressEvent<EventTarget>) => void;
  onModelLoadError: (error: ErrorEvent) => void;

}

export const details: { [machine: string]: {
  parts: { [itemName: string]: string; };
  outerParts: { [itemName: string]: string; };
  }
} = {
  HPU: {
    parts: {
      middlePinkCube: "middle pink cube",
      blueBall: "blueBall",
      yellow: "yellow",
      redBall: "redBall",
      nowhere: "nwo"
    },
    outerParts: {

    }
  },
  TTU: {
    parts: {
      Cube: "CUbe opsdaidpoiasfasfasf",
      Cube001: "Cube001",
      Cube002: "Cube001",
      Cube003: "Cube003",
      Cube004: "Cube004",
      Cube005: "Cube005",
      Cube006: "Cube006",
      Cube007: "Cube007",
      Cube008: "Cube008",
      Cube009: "Cube009",
      Cube010: "Cube010",
      Cube011: "Cube011",
      Cube012: "Cube012",
      Cube013: "Cube001",
    },
    outerParts: {
      
    }
  }
}

export const machines: string[] = [
  "HPU",
  "TTU"
]

export const introPageInfo = {
  backgroundImg: "../assets/imgs/background.jpg",
  pageTitle: "שלום וברוכים הבאים לאתר של דניאלה!",
  menuTitle: "בחרו מכונה",
  learningModes: [
    "view",
    "presentation"
  ]
}

export const modelPage = {
  listTitle: "רשימת חלקים:"
}