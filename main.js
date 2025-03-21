import './libs/liveReload.js';
import addMdToPage from './libs/addMdToPage.js';
import dbQuery from "./libs/dbQuery.js";
import tableFromData from './libs/tableFromData.js';

let allStudents = await dbQuery('SELECT * FROM results LIMIT 10');
let allMale = await dbQuery("SELECT * FROM results WHERE gender='Male' LIMIT 10");
let allFemale = await dbQuery("SELECT * FROM results WHERE gender='Female' LIMIT 10")



tableFromData({ data: allStudents });
tableFromData({ data: allMale });
tableFromData({ data: allFemale });
