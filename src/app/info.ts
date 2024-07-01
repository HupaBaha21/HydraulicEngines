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
      Tow_bar: "מוט גרירה",
      Hot_air_door_right: "דלת פליטת אוויר חם ימין",
      Hot_air_door_left: "דלת פליטת אוויר חם שמאל",
      Exhaust_pipe: "צינור פליטה (אגזוז)",
      Hydraulic_oil_level_door: "דלת מפלס שמן הידראולי",
      Mooring_rings_1: "נקודות עגינה להובלה מספר 1",
      Mooring_rings_2: "נקודות עגינה להובלה מספר 2",
      Wheels: "גלגלים",
      Radiator_acoustic_chamber: "תא אקוסטי רדיאטור",
      Service_door: "דלת שירות להחלפת מסננים",
      Hydraulic_hose_1: "צינור שירות הידראולי (כחול)", //Uriah lo oved
      Hydraulic_hose_2: "צינור שירות הידראולי (צהוב)",
      Hydraulic_hose_3: "צינור שירות הידראולי (אדום)",
      Circulation_manifold1: "סעפת סירקולציה מספר 1 (מערכת כחולה)",
      Circulation_manifold2: "סעפת סירקולציה מספר 2 (מערכת צהובה)",
      Circulation_manifold3: "סעפת סירקולציה מספר 3 (מערכת אדומה)",
      Oil_storage1: "מאצרה שמן 1",
      Oil_storage2: "מאצרה שמן 2",
      Oil_storage3: "מאצרה שמן 3",
      Forklift_operators: "מובילי מלגזה",
      Storage_box: "תא אחסון",
      Oil_fill_hose: "צינור שירות שמן",
      Filling_system: "מערכת מילוי",
      Oil_exchanger_panel_1: "פאנל מקרן שמן מספר 1",
      Heat_exchanger_door_2_and_3: "דלת גישה למקרני שמן מספר 2 ו-3",
      Hydraulic_door: "דלת גישה למערכת הידראולית",
      Hydraulic_system_door: "דלת מערכת הידראולית",
      Fuel_cup: "פתח מילוי סולר",
      Electrical_and_control_panel: "לוח חשמל ובקרה",
      HMI: "מסך מגע להפעלה",
      Fuel_gauge: "מד דלק",
      Engine_controller: "בקר מנוע",
      Main_battery_switch: "מפסק מצברים ראשי",
      Hour_meter: "מד שעות",
      E_stop: "מדומם חירום",
      Engine: "מנוע",
    },
    parts: {
      Air_bleeding_system: "מערכת ניקוז אוויר",
      Air_bleeding_faucet1: "ברז לניקוז אוויר מספר 1 (מערכת כחולה)",
      Air_bleeding_faucet2: "ברז לניקוז אוויר מספר 2 (מערכת צהובה)",
      Air_bleeding_faucet3: "ברז לניקוז אוויר מספר 3 (מערכת אדומה)",
      Hydraulic_filter_system1: "מסנן מערכת הידראולית מספר 1",
      Hydraulic_filter_system2: "מסנן מערכת הידראולית מספר 2",
      Hydraulic_filter_system3: "מסנן מערכת הידראולית מספר 3",
      Alternator: "אלטרנטור", //Uriah lo oved
      Battery: "מצבר",
      Engine_oil_filter: "מסנן שמן מנוע",
      Engine_fill_oil: "מכסה מילוי שמן מנוע",
      Engine_oil_test_gauge: "מדיד שמן מנוע",
      Fuel_filter1: "מסנן דלק 1",
      Fuel_filter2: "מסנן דלק 2",
      Gas_filter_tier4: "פילטר זיהום אוויר",
      Transmision_box: "תיבת תמסורת",
      Hydraulic_pumps: "משאבות הידראוליות",
      Transmission_oil_indicator: "מדיד שמן תמסורת",
      Transmission_oil_protect: "הגנת שמן תמסורת",
      Hydraulic_oil_tank: "מיכל שמן הידראולי",
      Hydraulic_oil_filler: "פתח מסנן שמן",
      Oil_indicator: "מדיד שמן",
    }
  },
  HPU: {
    parts: {
      Drainage_system: "מערכת ניקוז",
      Boost_filter: "מסנן הגבר",
      Electric_motor: "מנוע חשמלי",
      Heat_exchanger_fan: "מאוורר מקרן שמן",
      Fill_filter: "מסנן מילוי",
      Pressure_and_boost_pipes: "צינורות לחץ והגבר",
      High_pressure_filter: "מסנן קו לחץ",
      Return_filter: "מסנן קו מחזיר",
      Selector_valve: "בוחר מיכל/מטוס",
      Storage_unit: "תיבת אחסון",
      Transmision_box: "תיבת תמסורת",
      Hydraulic_pump: "משאבה הידראולית",
      Transmision_oil_gauge: "מדיד שמן תמסורת"
    },
    outerParts: {
      // HPU: "החופה של המערכת",



      Control_panel: "לוח הפעלה",
      Control_screen: "מסך שליטה",
      E_stop1: "מדומם",
      E_stop2: "מדומם",
      Turn_on: "הפעלה",
      Main_remote_plug: "חיבור לשלט ראשי",
      Drain_remote_plug: "חיבור לשלט ניקוזים",
      Phase_monitor_led: "מתח הזנה תקין",
      Door1: "דלת לוח הפעלה 1",
      Door2: "דלת לוח הפעלה 2",
      Hydraulic_door: "דלת גישה מערכת הידראולית",
      Electric_motor_door: "דלת גישה למנוע חשמלי",
      Hour_meter: "מד שעות",
      Forklift_operators: "מובילי מלגזה",
      Main_CB: "מפסק חשמלי ראשי",
      Pipe_1: "צינור מספר 1",
      Pipe_2: "צינור מספר 2",
      Tow_bar: "מוט גרירה",
      Top_cover_HPU: "מכסה עליון",
      Wheels: "גלגלים",
      Remote: "שלט ראשי",
      Remote_control_box: "שלט הפעלה",
      Bypass_switch: "מתג ברז עוקף",
      Hydraulic_pressure_display: "צג לחץ הידראולי",
      Pressure_regulator: "ווסת לחץ",
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
