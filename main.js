import './libs/liveReload.js';
import addMdToPage from './libs/addMdToPage.js';
import dbQuery from "./libs/dbQuery.js";
import tableFromData from './libs/tableFromData.js'

let allStudents = await dbQuery('SELECT * FROM result limit 10');

tableFromData({ data: allStudents });
