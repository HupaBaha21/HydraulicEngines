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
      sliding_rod: "מוט גרירה", //Tow Bar

      
      Acoustic_chamber_1: "דלת פליטת אוויר חם ימין", // Hot Air Door Right
      Acoustic_chamber_2: "דלת פליטת אוויר חם שמאל", // Hot Air Door Left
      
      Exhaust_port: "צינור פליטה (אגזוז)", //Exhaust Pipe
      
      Hydraulic_oil_level_door: "דלת מפלס שמן הידראולי", // missing index near red sticker
      Mooring_rings_1: "נקודות עגינה להובלה מספר 1", //צריך לקבל שם נכון באנגלית
      // עברתי עליהם
      Mooring_rings_2: "נקודות עגינה להובלה מספר 2",
      Wheels: "גלגלים",
      Radiator_acoustic_chamber: "תא אקוסטי רדיאטור",
      Service_door: "דלת שירות להחלפת מסננים",
      // door_1: "דלת מספר 1",

      Circulation_manifold1: "סעפת סירקולציה מספר 1 (מערכת כחולה)",
      Circulation_manifold2: "סעפת סירקולציה מספר 2 (מערכת צהובה)",
      Circulation_manifold3: "סעפת סירקולציה מספר 3 (מערכת אדומה)",

      Pipe1: "צינור שירות הידראולי (כחול)", //Hydraulic Hose 1
      Pipe2: "צינור שירות הידראולי (צהוב)", //Hydraulic Hose 2
      Pipe3: "צינור שירות הידראולי (אדום)", //Hydraulic Hose 3

      oil_storage1: "מאצרה שמן 1",
      oil_storage2: "מאצרה שמן 2",
      oil_storage3: "מאצרה שמן 3",

      // door_2: "דלת מספר 2",
      forklift_operators: "מובילי מלגזה",

      Compartment_for_storage: "תא אחסון", //Storage box

      Oil_filter_tube: "צינור שירות שמן",//oil fill hose
      Filling_system_door: "מערכת מילוי", //Filling System
      Oil_projector_door1: "פאנל מקרן שמן מספר 1", //Oil Exchanger Panel 1
      Oil_Projector_door2: "דלת גישה למקרני שמן מספר 2 ו-3", // Heat Exchanger Door 2 and 3
      Oil_projector_door3: "דלת גישה למערכת הידראולית", //Hydraulic Door
      Hydraulic_system_door: "דלת מערכת הידראולית",
      Fuel_nozzle: "פתח מילוי סולר", // Fuel Cup
      Electrical_and_control_panel: "לוח חשמל ובקרה",

      Control_screen: "מסך מגע להפעלה", //HMI

      Fuel_gauge: "מד דלק",
      Engine_controller: "בקר מנוע",

      Main_battery_breaker: "מפסק מצברים ראשי",//Main Battery Switch

      Hour_meter: "מד שעות",

      Emergency_dead: "מדומם חירום", //E-stop
    },
    parts: {
      // לשנות לBLEEDING בהכל
      air_cleaning_system: "מערכת ניקוז אוויר",
      Air_cleaning_faucet1: "ברז לניקוז אוויר מספר 1 (מערכת כחולה)",
      Air_cleaning_faucet2: "ברז לניקוז אוויר מספר 2 (מערכת צהובה)",
      Air_cleaning_faucet3: "ברז לניקוז אוויר מספר 3 (מערכת אדומה)",

      Hydraulic_filter_system1: "מסנן מערכת הידראולית מספר 1",
      Hydraulic_filter_system2: "מסנן מערכת הידראולית מספר 2",
      Hydraulic_filter_system3: "מסנן מערכת הידראולית מספר 3",
      Engine: "מנוע", // עדכון

      Alternator: "אלטרנטור", // נדרש עדכון של המודל, צריך לקבל תמונות למידול

      battery: "מצבר",//יש שני מצברים 

      Engine_oil_filter: "מסנן שמן מנוע", // מיקום לא נכון

      Engine_oil_filter_opening: "מכסה מילוי שמן מנוע", //Engine fill oil

      Engine_oil_test_gauge: "מדיד שמן מנוע", //לברר שם באנגלית

      Fuel_filter1: "מסנן דלק 1",

      Fuel_filter2: "מסנן דלק 2", // המייקום לא נכון

      gas_fillter_tier4: "פילטר זיהום אוויר",

      Transmision_box: "תיבת תמסורת",
      hydraulic_pumps: "משאבות הידראוליות",
      
      Transmission_oil_gauge: "מדיד שמן תמסורת", // transmission oil indicator

      Transmission_oil_height_gauge: "הגנת שמן תמסורת", //transmission oil protect

      Hydraulic_oil_tank: "מיכל שמן הידראולי",

      Oil_filter_opening: "פתח מסנן שמן", // hydraulic oil filler

      Oil_index: "מדיד שמן", //oil indicator
    }
  },
  HPU: {
    parts: {
      A_drainage_system: "מערכת ניקוז", //
      amplification_filter: "מסנן הגבר", //Boost filter
      Electric_engine: "מנוע חשמלי", //Electric motor
      Fan: "מאוורר מקרן שמן", //Heat Exchanger Fan
      Filter_of_filling: "מסנן מילוי", // Fill Filter
      Pressure_and_boots_pipes: "צינורות לחץ והגבר", //Pressure and boost pipes
      pressure_line_filter: "מסנן קו לחץ", //High pressure filter
      return_line_filter: "מסנן קו מחזיר",//Return filter
      Selects_a_container: "בוחר מיכל/מטוס",//selector Valve
      storage_unit: "תיבת אחסון",
      // Transmision_Box: "תיבת תמסורת",
      hydraulic_pumps: "משאבות הידראוליות", //להפוך ליחיד
      Transmision_oil_gauge: "מדיד שמן תמסורת"// אין דבר כזה
      //מדיד גובה שמן הידראולי - אין באף מודל. מומחה תוכן אומר שרואים את החלק גם כשהדלת סגורה - משמע צריך להיות במודל עם חופה.
    },
    outerParts: {
      HPU: "החופה של המערכת",
      Control_panel: "לוח הפעלה",
      Control_screen: "מסך שליטה",
      Emergency_dead: "מדומם", //E-stop
      Turn_on: "הפעלה",
      Main_remote: "חיבור לשלט ראשי", //Main Remote Plug
      Drain_remote: "חיבור לשלט ניקוזים", //Drain remote plug
      Supply_voltage_is_normal: "מתח הזנה תקין", // Phase monitor Led 
      door1: "דלת לוח הפעלה 1",
      door2: "דלת לוח הפעלה 2",
      door3: "דלת גישה מערכת הידראולית", //Hdraulic Door
      door4: "דלת גישה למנוע חשמלי", //Electric Motor Door
      Hour_meter: "מד שעות",
      forklift_operators: "מובילי מלגזה",
      opening_handle: "מפסק חשמלי ראשי",//Main CB
      Pipe1: "צינור מספר 1",
      Pipe2: "צינור מספר 2",
      sliding_rod: "מוט גרירה", //Tow Bar
      System_top_opening: "מכסה עליון", //Top Cover HPU
      Wheels: "גלגלים",
      Remote: "שלט ראשי",
      Aircraft_tank: "שלט הפעלה",//Remote Control Box
      Bypas_faucet: "מתג ברז עוקף", //Bypass Switch
      Hydraulic_pressure_gauge: "צג לחץ הידראולי", //Hydraulic pressure Display
      Inanimate: "מדומם",//E-stop
      Pressure_regulator: "ווסת לחץ",
      //
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
  greetings: [
    'לילה טוב',
    'בוקר טוב',
    'צהריים טובים',
    'ערב טוב',
  ],
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
  listTitle: "רשימת חלקים:",
  explanationTitle: "הסבר",
  explanationText: `זהו מודל תלת מימדי של הספק.
    ניתן לסובב אותו בעזרת האצבע.`,
  explanationImgs: {
    menu: 'בלחיצה על כפתור התפריט, תיפתח קשימת כל החלקים במודל.',
    reset: 'בלחיצה על כפתור אתחול המודל, המודל יאותחל.'
  }
}

export const imgs: {[machine: string]: string} = {
  menu: "../assets/imgs/menu.png",
  reset: "../assets/imgs/reset.png",
};

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
