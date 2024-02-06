/**
 * 파일이 업로드 되면
 * 업로드 된 파일을 저장폴더에 저장하는 미들웨어
 */
// import fs from "fs"
// fs.existsSync()
// fs 모듈에서 existsSync() 함수와 mkdirSync() 함수만 사용하겠다.
import { existsSync, mkdir, mkdirSync } from "fs";
// import path from path;
import path from "path";
import multer from "multer";
//uuid 모듈에 있는 v4 함수를 uuid 라는 이름으로 사용하겠다.
import { v4 as uuid } from "uuid";

// 프로젝트의 물리적 저장소 경로 (path)
// ~/Document/workspace/nodejs/node_030/iolist
const appRoot = process.env.PWD;
// ~/Document/workspace/nodejs/node_030/iolist/public/uploads
const upLoadPath = path.join(appRoot, "public", "uploads");

/**
 * multer 는 destination 과 filename 이라는 2개의 함수가 필요하다
 * destination : 파일을 저장할때 사용할 설정들
 * filename : 파일 이름에 대한 핸들링
 */
const storageOption = {
  destination: (req, file, callback) => {
    // console.log("dest");
    if (!existsSync(upLoadPath)) {
      //파일이 있느냐 없느냐.
      mkdirSync(upLoadPath, { recursive: true });
    }
    // multer 가 나머지 처리
    callback(null, upLoadPath);
  },

  //이미지 네임 인젝션 해킹공격에 대비하여 원래 이름을 변경하여 업로드 하도록 지시
  filename: (req, file, callback) => {
    const upFileName = `${uuid()}-${file.originalname}}`;
    callback(null, upFileName);
  },
};

const storage = multer.diskStorage(storageOption);
const upLoad = multer({ storage });
export { upLoad };
