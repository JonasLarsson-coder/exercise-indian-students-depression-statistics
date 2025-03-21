import './libs/liveReload.js';
import addMdToPage from './libs/addMdToPage.js';
import dbQuery from "./libs/dbQuery.js";
import tableFromData from './libs/tableFromData.js';

let allStudents = await dbQuery("SELECT * FROM results WHERE profession='Student' LIMIT 10");
let allMale = await dbQuery("SELECT * FROM results WHERE gender='Male' LIMIT 10");
let allFemale = await dbQuery("SELECT * FROM results WHERE gender='Female' LIMIT 10");
let suicidalThoughtsYes = await dbQuery("SELECT * FROM results WHERE suicidalThoughts='1' LIMIT 10")
let suicidalThoughtsNo = await dbQuery("SELECT * FROM results WHERE suicidalThoughts='0' LIMIT 10")
let suicidalThoughtsProcent = await dbQuery("SELECT ROUND(AVG(suicidalThoughts) * 100, 2) || '%' AS percentage_suicidal FROM results");



//tableFromData({ data: allStudents });
tableFromData({ data: allMale });
//tableFromData({ data: allFemale });
//tableFromData({ data: suicidalThoughtsYes });
//tableFromData({ data: suicidalThoughtsNo });
//tableFromData({ data: suicidalThoughtsProcent });

