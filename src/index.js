import dotenv from "dotenv";
import fs from "fs";
import luxon from "luxon";

dotenv.config();

const { DateTime } = luxon;
const { OUTPUT_FOLDER_NAME } = process.env;
const OUTPUT_PATH = `./${OUTPUT_FOLDER_NAME}`;


const checkRootOuputPath = () => {
  if (!fs.existsSync(OUTPUT_PATH)) {
    fs.mkdirSync(OUTPUT_PATH);
    console.log(`[SYSTEM] Create root output folder | ${OUTPUT_PATH}`);
  }
};

const createNewOutputDataFolder = () => {
  const folderName = `${OUTPUT_PATH}/${DateTime.local().toFormat("yyyy_MM_dd_HH_mm")}`;
  fs.mkdirSync(folderName);
  console.log(`[SYSTEM] Create output folder | ${folderName}`);
};

const start = async () => {
  try {
    checkRootOuputPath();
    createNewOutputDataFolder();
  } catch (error) {
    console.error("[SYSTEM] ERROR: ", error);
  }
};

start();
