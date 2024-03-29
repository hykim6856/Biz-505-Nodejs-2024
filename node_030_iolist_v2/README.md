# HTMl form 에서 파일 업로드 하기

- http 프로토콜은 기본적으로 text 만 전송되도록 설계되었다.
- 인터넷 기술, 서비스가 확장되면서 여러가지 파일들을 첨부하여 서버로 전송할 필요가 생겼다.
- 기존의 http 프로토콜의 호환성을 유지하면서 파일을 전송할 수 있는 방법을 생각하며 form 에 특별한 속성을 부혀하고, http 프로토콜에서 적용하도록 하엿다.
- 이미지 등 파일을 업로드 하려면 반드시 form tag에 method 는 `POST` 이어야하고,
- `enctype="multipart/form-data"` 속성이 포함되어야한다.

## 서버에서

- 대부분의 WAS 서버에서는 기본적으로 파일 업로드가 지원되지 않는다
- WAS 서버에서 client 에서 전송된 파일을 수신(받기)위하여 3rd party 라이브러리를 사용한다.
- NodeJS 에서는 `multer` 라는 도구를 사용한다.
- multer 설치: `npm install multer`

```bash
npm install multer
npm install uuid
```

## 서버에서 업로드 된 파일 처리 방법

- 파일이 업로드 되엇는지 감지하기
- 파일이 업로드 되었으면, 업로드된 파일을 저장할 폴더가 있는지 확인
- 폴더에 업로드 된 파일을 저장
