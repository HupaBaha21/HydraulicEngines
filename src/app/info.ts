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
  TTU: {
    outerParts: {
      sliding_rod: "מוט הזזה",
      Acoustic_chamber_1: "תא אקוסטי מספר 1",
      Acoustic_chamber_2: "תא אקוסטי מספר 1",
      Exhaust_port: "פתח פליטה",
      Hydraulic_oil_level_door: "דלת מפלס שמן הידראולי",
      Mooring_rings_1: "טבעות עגינה מספר 1",
      Mooring_rings_2: "טבעות עגינה מספר 2",
      Wheels: "גלגלים",
      Radiator_acoustic_chamber: "תא אקוסטי רדיאטור",
      Service_door: "דלת שירות",
      door_1: "דלת מספר 1",
      Circulation_manifold1: "סעפת סירקולציה מספר 1",
      Circulation_manifold2: "סעפת סירקולציה מספר 2",
      Pipe1: "צינור מספר 1",
      Pipe2: "צינור מספר 2",
      oil_storage1: "מצר שמן 1",
      oil_storage2: "מצר שמן 2",
      door_2: "דלת מספר 2",
      Circulation_manifold3: "סעפת סירקולציה מספר 3",
      Pipe3: "צינור מספר 3",
      oil_storage3: "מצר שמן 3",
      forklift_operators: "מובילי מלגזה",
      Compartment_for_storage: "תא לאחסון",
      Oil_filter_tube: "צינור מסנן שמן",
      Filling_system_door: "דלת מערכת מילוי",
      Oil_projector_door1: "דלת מקרן שמן מספר 1",
      Oil_Projector_door2: "דלת מקרן שמן מספר 2",
      Oil_projector_door3: "דלת מקרן שמן מספר 3",
      Hydraulic_system_door: "דלת מערכת הידראולית",
      Fuel_nozzle: "פיית דלק",
      Electrical_and_control_panel: "לוח חשמל ובקרה",
      Control_screen: "מסך שליטה",
      Fuel_gauge: "מד דלק",
      Engine_controller: "בקר מנוע",
      Main_battery_breaker: "מפסק מצברים ראשי",
      Hour_meter: "מד שעות",
      Emergency_dead: "מדומם חירום",
    },
    parts: {
      air_cleaning_system: "מערכת ניקוי אוויר",
      Air_cleaning_faucet1: "ברז לניקוי אוויר מספר 1",
      Air_cleaning_faucet2: "ברז לניקוי אוויר מספר 2 ",
      Air_cleaning_faucet3: "ברז לניקוי אוויר מספר 3",
      Hydraulic_filter_system1: "מסנן מערכת הידראולית מספר 1",
      Hydraulic_filter_system2: "מסנן מערכת הידראולית מספר 2",
      Hydraulic_filter_system3: "מסנן מערכת הידראולית מספר 3",
      Engine: "מנוע",
      Alternator: "אלטרנטור",
      battery: "מצבר",
      Engine_oil_filter: "מסנן שמן מנוע",
      Engine_oil_filter_opening: "פתח מסנן שמן מנוע",
      Engine_oil_test_gauge: "מדיד שמן מנוע",
      Fuel_filter1: "מסנן דלק 1",
      Fuel_filter2: "מסנן דלק 2",
      gas_fillter_tier4: "מסנן גזי פליטה מסוג tier4",
      Transmision_box: "תיבת תמסורת",
      hydraulic_pumps: "משאבות הידראוליות",
      Transmission_oil_gauge: "מדיד שמן תמסורת",
      Transmission_oil_height_gauge: "מדיד גובה שמן תמסורת",
      Hydraulic_oil_tank: "מיכל שמן הידראולי",
      Oil_filter_opening: "פתח מסנן שמן",
      Oil_index: "מד שמן",
    }
  },
  HPU: {
    parts: {
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
  pageTitle: "ספקי כוח הידראוליים תפעול והכרה",
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
    reset: "../assets/imgs/reset.png",
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
