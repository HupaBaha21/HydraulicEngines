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

export const details: { [machine: string]: { parts: { [itemName: string]: string; }; outerParts: { [itemName: string]: string; }; } } = {
  HPU: {
    parts: {
      middlePinkCube: "middle pink cube",
      blueBall: "blueBall",
    },
    outerParts: {
      yellow: "yellow",
      redBall: "redBall",
      nowhere: "nwo"
    }
  },
  TTU: {
    parts: {
      Sliding_rod: "מוט הזזה",
      Acoustic_chamber1: "dfjshfkfdjshfds",
      gas_fillter__tier_4001: "kskfhakhfksjahkjfsa"
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
  signs: {
    airForce: "../assets/imgs/airForce.png",
    hupa: "../assets/imgs/hupa.png"
  },
  goBackArrow: "../assets/imgs/goBackAsset 10.png",
  pageTitle: "שלום וברוכים הבאים לאתר של דניאלה!",
  menuTitle: "בחרו מכונה",
  learningModes: [
    "view",
    "presentation"
  ]
}

export const modelPage = {
  // list states:
  // active: animation slide up
  // inactive: animation slide down
  // hidden: display none
  states: {
    hidden: "hidden",
    inactive: "inactive",
    active: "active"
  },
  imgs: {
    plus: "../assets/imgs/plus.png",
    minus: "../assets/imgs/minus.png",
    list: "../assets/imgs/list.png",
  },
  listTitle: "רשימת חלקים:",
  explanationTitle: "הסבר",
  explanationText: `זהו מודל תלת מימדי של המכונה.
  ניתן לסובב אותו בעזרת האצבע, להגדיל ולהקטין בעזרת כפתורי ההגדלה וההקטנה, ולראות את רשימת החלקים שלו בלחיצה על כפתור החץ.
  בנוסף, ניתן להתמקד באחד החלקים על ידי לחיצה על חלק, והחלק יופיע במרכז המסך.`
}

export const presentationPage = {
  turnPhoneTitle: "סובבו את הטלפון",
  waitingTime: 4000,
  turnPhoneGif: "../../assets/imgs/turnPhone.gif",
  waitingMessage: "חכו לטעינת המסך"
}

export const presentations: {[machineName: string] : string} = {
  HPU: "21944&amp;authkey=%21AK3RlJb_ZmIVfsY&amp;em=2&amp;wdAr=1.3333333333333333",
  TTU: "https://onedrive.live.com/embed?resid=41F21928ABD61941%211123&amp;authkey=!AD-R-ExtIii2GLE&amp;em=2&amp;wdAr=1.7777777777777777",
}
