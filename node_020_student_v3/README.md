# URL, URI

- URL : Uniform Resource Location, 통합 자원 지시자, 통합 자원 위치
  https://naver.com/news 처럼 요청하는 것
- URI : Uniform Resource Identifier, 통합 자원 식별자
  https://naver.com/news?id=1001 처럼 요청하는 것
  https://naver.com/news/1001/detail 처럼 요청하는 것, 이때 1001 은 id 값
- URN : Uniform Resource Name, 통합 자원 이름

# Ajax(Async. JavaScript and XMl) 기술

- WEB 은 현재 화면에서 `a link` 를 클릭하거나, JS 에서 `document.location.href` 를 실행하거나, 또는 Brower 의 주소창에 URL 입력하여 서버에게 요청(request) 을 보낸다.
- 요청을 받은 서버는 새로운 화면에 표현할 정보를 `HTML` 코드로 반들어 client 에서 응답(Response) 한다.
- 이 과정에서 기존의 화면은 뒤로 사라지고 새로운 화면에 보여지게 된다.
- 현재 화면에서 `새로고침(F5)` 을 하는 경우에도 주소창에 URL 을 서버에 다시 요청하고, 새로운 화면을 받아 보여지는 것이다.
- 이 과정에서 만약 input box 등에 어떤 값이 입력되어 있다면, 그 값이 서버로 전송되기도하고, 입력중인 내용이 모두 clear 된다.
- 현재 화면을 그대로 유지하면서 어떤 정보를 서버로 부터 요청해야 하는 경우가 있다 . 그래서 탄생한 기술이 Ajax 기술이다.
- 표준 JS 에서는 기술을 사용할 수 있는 함수가 `fetch()` 라는 함수로 구현되어 있다.

## fetch(URL)

- `fetch(URL)` 함수는 Background 에서 비동기 방식으로 서버에 URL 을 보내서 결과를 수신한 후 화면의 일부를 변경하거나, 어떤 변수의 값을 변경한다.
-