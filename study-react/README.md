# React 시작

![React](/images/web005.png)

## 개요
- A JavaScript library for building user interfaces!
	- 메타(페이스북)에서 시작된 라이브러리
	- SPA 개발에 특화된 라이브러리
	- 자주 사용되는 기능을 모아놓은 것

- 유사한 것들
	- AngularJS - 프레임워크
	- Vue.js - 프레임워크

## React 특징
1. 컴포넌트 기반 개발
2. 선언적 개발
3. 가상 DOM 사용
4. 단방향 데이터 바인딩

### 장점
- 빠른 업데이트와 렌더링 속도
	- Virtual DOM(Document Object Model)
- 컴포넌트 기반으로 레고 블록 조립하듯 컴포넌트 모아서 개발
- 개발기간이 단축됨
	- 재사용성(Reusability)
- 유지보수가 용이함
- 개발 생태계와 지식공유 커뮤니티
- 리액트네이티브로 모바일 개발가능

### 단점
- 방대한 학습량. 진입장벽
- 높은 상태관리 복잡도
- 변경사항이 많음

## 개발 시작

### 개발환경 설정
1. node.js 설치
	- 추가 yarn 설치 
	- npm install --global yarn
2. Visual Studio Code 설치
3. VS Code 플러그인 설치
	- Live Server
	- ESLint
	- Prettier
	- Node Extension Pack
	- React Tools
4. 리액트 라이브러리 설치
	```shell
	# npm을 사용한 설치
	> npm install -g create-react-app
	# yarn을 사용한 설치
	> yarn global add create-react-app
	```

#### 개발자 도구
- 크롬 웹스토어 - React Developer Tools 추가

#### eslint plugin react hooks
- 일단 패스
- https://www.npmjs.com/package/eslint-plugin-react-hooks

### 패키지 없이 웹페이지에 리액트 적용하기
- basic-app00

### 리액트 프로젝트 설치
1. 콘솔에 명령어 입력
	```shell
	> npx create-react-app basic-app01
	> yarn create react-app basic-app01
	```
	- yarn으로 설치할 때 node_modules 용량이 조금 작음

2. 설치완료 후 아래로 실행
	```shell
	> cd basic-app01
	> npm start
	> yarn start
	```

3. github에 올릴때 만들어진 .gitignore의 내용 복사해서 root의 .gitignore로 붙여넣기 
	- 또는, 아래 코드(facebook 리액트 리포지토리 참조) 추가

	```gitignore
	.DS_STORE
	node_modules
	scripts/flow/*/.flowconfig
	.flowconfig
	*~
	*.pyc
	.grunt
	_SpecRunner.html
	__benchmarks__
	build/
	remote-repo/
	coverage/
	.module-cache
	fixtures/dom/public/react-dom.js
	fixtures/dom/public/react.js
	test/the-files-to-test.generated.js
	*.log*
	chrome-user-data
	*.sublime-project
	*.sublime-workspace
	.idea
	*.iml
	.vscode
	*.swp
	*.swo

	packages/react-devtools-core/dist
	packages/react-devtools-extensions/chrome/build
	packages/react-devtools-extensions/chrome/*.crx
	packages/react-devtools-extensions/chrome/*.pem
	packages/react-devtools-extensions/firefox/build
	packages/react-devtools-extensions/firefox/*.xpi
	packages/react-devtools-extensions/firefox/*.pem
	packages/react-devtools-extensions/shared/build
	packages/react-devtools-extensions/.tempUserDataDir
	packages/react-devtools-fusebox/dist
	packages/react-devtools-inline/dist
	packages/react-devtools-shell/dist
	packages/react-devtools-timeline/dist
	```

#### 빠르게 구현해보기
모든 작업은 src 아래에서 진행
1. 컴포넌트 생성
	- App.js에 MyButton 추가

	```jsx
	function MyButton() {
	return (
			<button>myButton</button>
		);
	}

	function App() {
	return (
		<div>
		<h1>Custom App</h1>
		<MyButton />
		</div>
	);
	```
	
	<img src="https://raw.githubusercontent.com/hugoMGSung/works-need-it-web/main/images/web001.png" width="730">


2. export default
	- 함수 또는 클래스, 타입 등을 primitive로 내보내는 Javascript 키워드

3. React는 그냥 js가 아님. JSX
	- html의 class는 없음. className 으로 변경
	- { 데이터 표시 }

	```jsx
	const hero = {
  		name: 'Tony Stark',
  		imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Robert_Downey%2C_Jr._2012.jpg',
  		imgSize: 120,
	}


	function App() {
  		return (
    		<div className='App'>
      			<h1>{hero.name}</h1>
      			<img className='profile'
           			src={hero.imgUrl} alt={'Photo of ' + hero.name}
           			style={{
            			width: hero.imgSize,
            			height: hero.imgSize,
            			borderRadius: '50%',
           			}} >
       			</img>
    		</div>
  		);
	}
	```

	<img src="https://raw.githubusercontent.com/hugoMGSung/works-need-it-web/main/images/web002.png" width="730">

#### JSX
- JavaScript eXtension 의 약자. 자바스크립트의 확장문법으로 리액트에서 사용하기 위해
	- JavaScript + XML/Html 

	```js
	const element = <h1>Hello, React</h1>;
	```

- JSX코드를 최종적으로 js 코드로 바꿈

	```js
	// 이거만 쓰면 어렵다!
	React.createElement(
		type,
		[props],
		[...children]
	)
	```

- 기본적으로 html 태그 내에 {}로 리액트 변수값을 입력
- 리액트 변수와 포맷문자열을 만들려면 `(back tag) 사용
- 평소엔 ', " 사용가능

##### 기본 문법 중
- truthy
	- true, {}, [], 96, "0", "false"...
- falsy
	- false, 0, -0, 0n, '', "", ``, null, undefined, NaN(Not a Number)...


##### 연습
- basic-app02 프로젝트 생성
	- library 폴더에 Book.jsx, Library.jsx 순서대로 작업
	- index.js 파일 수정

#### 엘리먼트
- 리엑트 앱을 구성하는 가장 작은 빌딩블록들
- 화면에 보이는 것들을 기술

	<img src="/images/web006.png" width="600">

- 리액트 엘리먼트는 불변성을 가지고 있음
- 엘리먼스를 생성후에는 Children이나 attribute를 바꿀 수 없음

- 엘리먼트는 필요 시 새로 만들어서 교체해야 함

#### 컴포넌트와 프롭스
- Most Important
- 자바스크립트 함수가 입력에 대한 출력이라고 하면
	- 리액트 컴포넌트도 입력에 대한 출력을 내는 개체로 보면 됨
- 단, 리액트 컴포넌트의 입력은 Props, 출력은 리액트 Element

- Props = Properties 
	- 컴포넌트의 속성
	- 컴포넌트에 전달할 다양한 정보를 담은 JS 객체

- 모든 리액트 컴포넌트는 Props 직접변경불가, 같은 Props에 서는 항상 같은 결과 기대
- 마운트 - 컴포넌트의 사용을 장착

##### Props 특징
- 읽기 전용 - 값 변경 불가
- 새로운 값을 컴포넌트에 전달, 새 Element 생성해야 함

	```js
	function App(props) {
		return (
			<Profile 
				name="Hugo"
				accountMoney={10000000} />
		)
	}

	// 이후
	{
		name: "Hugo",
		accountMoeny: 10000000
	}

	// createElement 로 생성(X)
	React.createElement(
		Profile,
		{
			name: "Hugo",
			accountMoney: 10000000
		},
		null
	);
	```

##### 컴포넌트 만들기
- 클래스로 만들기 - 초기
	- React.Component 를 상속받아서 생성
	- 소문자로 시작하면 DOM tag로 인식!
- 함수로 만들기 - 현재
- 컴포넌트의 이름은 항상 대문자로 시작!

	```js
	const element = <media/>; // HTML 태그로 인식

	const element = <Media name="player">; // Media라는 리액트 컴포넌트로 인식

	```

- 컴포넌트 안에 컴포넌트를 추가할 수 있음
	- 복잡한 화면을 여러개의 컴포넌트로 나눠서 구현 가능

- 컴포넌트 추출
	- 큰 컴포넌트는 추출해서 하위 컴포넌트로 만들면 재사용성 증가

#### 리스트
- 배열과 동일
- js에서 배열은 모두 key를 가지고 있어야 함!!
- map() 함수를 사용해야 함
	- mapping - 한쪽의 아이템과 다른 쪽의 아이템을 짝지어줌

	```js
	const numbers = [1,2,3,4,5];
	const doubledItems = numbers.map((number) => 
		<li>{number * 2}</li>
	);

	ReactDOM.render(
		<ul>{doubledItems}</ul>,
		document.getElementById('root')
	)
	```
- 키가 없으면 개발자도구에서 Warning 표시됨

	```js
	const numbers = [1,2,3,4,5];
	const doubledItems = numbers.map((number) => 
		<li key={number.toString()}>{number * 2}</li>
	);

	// or
	const doubledItems = numbers.map((number, index) => 
		<li key={index}>{number * 2}</li>
	);
	```

##### 컴포넌트 연습
- comment 폴더
	1. Comment.jsx 생성
	2. CommentList.jsx 생성
	3. Comment.jsx  styles 작성 및 수정
	4. CommentList.jsx 수정
	5. CommentList.jsx 데이터 형태로 변경

	<img src="/images/web007.png" width="700">

#### State와 라이프사이클
- State
	- JavaScript 객체 종류
	- 리액트 컴포넌트의 상태(데이터)
	- 리액트 컴포넌트의 변경가능한 데이터
	- 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함해야
	- state는 직접 수정하지 않고 setState 함수로 변경!!

- LifeCycle
	<img src="/images/web008.png" width="750">


#### Hooks!

<img src="/images/web009.png" width="750">

- 훅
	- 함수 컴포넌트에서 클래스 컴포넌트의 기능을 전부 사용하기 위해서 개발
	- use- Prefix로 시작함

##### useState
- state를 사용하기 위한 훅 - 가장 많이 사용
- 함수 컴포넌트에서 변수를 사용하면 변화가 있어도 재렌더링이 발생하지 않음

	```js
	const [변수명, set함수명] = useState(초기값); // 배열 리턴
	```

##### useEffect()
- Side effect(효과, 영향)를 수행하기 위한 훅
- 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 완료불가
- 사이드(!)로 실행할 수 있게 해줌
- 라이프사이클의 componentDidMount, componentDidUpdate, componentWillUnmount 기능 통합
	- 하나로 사용가능

	```js
	useEffect(이펙트 함수, 의존성 배열); // 처음 컴포넌트가 렌더링된 이후, 업데이트로 재렌더링된 이후 이펙트 함수 실행
	// mount, unmount 시 단 한번씩만 실행
	useEffect(이펙트 함수, []); // 의존된게 없다!
	// 컴포넌트가 업데이트 될때마다 실행
	useEffect(이펙트 함수);
	// componentWillUnmount 기능
	useEffect(이펙트 함수; return () {언마운트함수};)
	```

##### useMemo()
- Memoized value를 리턴하는 훅
- Memoization - 연산이 많이 드는 함수호출결과 저장 후 같은 입력값으로 함수를 호출하면 함수호출 없이 이전값 그대로 사용
- useEffect와 동일
	- 의존성 배열이 빈 배열이면 컴포넌트 마운트 시에만 호출
	- 의존성 배열을 넣지 않으면 매 렌더링마다 함수가 실행

##### useCallback()
- useMemo와 유사하지만 함수를 반환하는 훅

	<img src="/images/web011.png" width="700">

	```js
	useMemo(() => 함수, 의존성배열);
	// 아래와 동일
	useCallback(함수, 의존성배열);
	```

##### useRef()
- Reference - 특정 컴포넌트에 접근할 수 있는 객체
- 레퍼런스 객체를 반환하는 훅
- refObject.current - 현재 참조하는 엘리먼트

	```js
	const refContaier = useRef(초기값);
	```

- 내부 데이터가 변경되었을 때 별도로 알리지 않음 - 재렌더링이 일어나지 않는다
- Callback ref - Ref에 DOM노드가 연결, 분리시 어떤 코드 실행

#### 커스텀훅
- use로 시작하는 다른 훅을 호출하는 JS 함수


#### 훅 주의점
1. 훅은 무조건 최상위 레벨에서만 호출해야 함
	- 반복문, 조건문 또는 중첩된 함수 내에서 훅을 호출하면 안됨
	- Hook은 컴포넌트가 렌더링 될때 마다 매번 같은 순서로 호출되어야
	- 다수의 useState훅과 useEffect훅 호출로 컴포넌트 State 올바르게 관리

	```js
	// 잘못된 Hook 사용예
	function MyComponent(props) {
		const [title, setTitle] = useState('Seoul Milk');

		if (title !== '') {
			useEffect(() => {
				// ...
			});
		}

		//...
	}
	``` 

2. 리액트 함수 컴포넌트에서만 Hook을 호출해야!
	- 일반 JS 함수에서 Hook을 호출하면 안됨

##### 훅 예제
-  훅 사용 예제

	<img src="/images/web012.png" width="750">

#### 이벤트
- UI에서 일어나는 사람(시스템)의 행위로 발생하는 것

	```js
	<button onClick={funcion}>
		Click
	</button>
	```

- 이벤트 리스너와 이벤트 핸들러

	```js
	function MyButton(props) {
		const handleDelete = (id, event) => {
			console.log(id, event.target);
		};
	}

	return (
		<button onClick={(event) => handleDelete(1, event)}>
			삭제
		</button>
	)
	```

#### Conditional Rendering
- 조건에 따른 렌더링
	- 조건에 따라 렌더링이 달라지는 것

- 엘리먼트 변수
	- 조건부 렌더링 시 렌더링 컴포넌트를 변수로 다루는 것

##### 예제
- 로그인 여부에 따른 조건 렌더링

	<img src="/images/web013.png" width="700">


#### 폼
- HTML과 동일

	<img src-"/images/web014.png" width="700">


#### Shared State
- 상태값을 여러개의 컴포넌트에서 표현해야 하는 경우 발생
- GUI에서 폼간의 데이터 공유 등과 동일

#### Composition
- 여러 컴포넌트 조합 - children 속성
	```js
	React.createElement(
		type,
		[props],
		[...children]
	);
	// ....
	function Border(props) {
		return (
			<div className={'Border-' + props.color}>
				{props.children}
			</div>
		);
	}
	```

#### Context
- 기존의 props를 전달하려면 상위에서 부터 하위 컴포넌트로 일일이 전달...
- 무조건 좋지만은 않음
- 여러 레벨로 내려가는 컴포넌트에서는 컨텍스트가 효과적

	<img src="/images/web015.png" width="700">

- C#, Java 등 OOP언어에서의 static과 유사

	```js
	const custContext = React.createContext('dark');
	```

##### Context API
- Context.Provider - 모든 컨텍스트는 Provider 리액트 컴포넌트 포함

	```js
	<custContext.Provider value={ }/>
	```
- Context.Consumer - 컨텍스트 데이터를 구독(사용)하는 컴포넌트
- Context.displayName - 컨텍스트의 이름

- useContext() - 함수 컴포넌트에서 컨텍스를 사용할 수 있게 해주는 훅!

	<img src="/images/web016.png" width="700">

#### Styled Component
- 기초레벨에서는 사용하지 말것

	<img src="/images/web017.png" width="600">


#### Production 빌드
- 코드와 앱이 사용하는 이미지, css 파일등을 모두 모아 패키징

	```shell
	> npm run build
	...
	// build 폴더 생성됨
	```

- serve 패키지 설치
	```shell
	> npm install -g serve
	...
	> serve -s bulid
	```

### 리액트 게시판 프로젝트

#### 프로젝트 설치
- 콘솔/파워쉘/VS 터미널

	```shell
	> yarn create react-app simple-board
	...
	  cd simple-board
	  yarn start

	Happy hacking!
	Done in 67.47s.
	```

#### 프로젝트 초기설정
- 불필요한 파일 삭제 - 아래 파일 이외 삭제(아래파일은 지우지 마세요!!!)
	- /public/
		- favicon.ico
		- index.html
		- manifest.json
		- robots.txt
	- /src/
		- App.css
		- App.js
		- index.css
		- index.js
		- reportWebVitals.js

- App.js 수정
	```js
	import './App.css';

	function App() {
	return (
		<div className="App">
			<h2>Simple Board</h2>
		</div>
	);
	}

	export default App;
	```

	<img src="/images/web018.png" width="750">

- ESLint, Prettier 설정
	- VS Code 확장에서 설치

- 프로젝트에 ESLint 설치
	```shell
	> npm i -D eslint eslint-plugin-prettier eslint-config-prettier

	// 프로젝트 폴더에서 설치
	> npx eslint --init
	// 아래 진행 설명
	```
- Prettier 설치
	```shell
	> npm install -D prettier
	```
- root폴더에 .prettierrc.js 파일 생성 후 아래 코드 입력
	```js
	module.exports = {
		endOfLine: "lf",
		tabWidth: 4,
		semi: true,
		singleQuote: false,
		trailingComma: "all",
		printWidth: 120,
	};
	```
- Ctrl + , 로 설정열기
	- 설정열기(JSON) 클릭
	- 아래 확인
	```json
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"editor.formatOnSave": true,
	```

- react-bootstrap 설치

	```shell
	> npm i react-bootstrap bootstrap
	```

- index.js에 bootstrap.css 추가

	```js
	import "bootstrap/dist/css/bootstrap.min.css";
	```

- axios - 비동기 호출 모듈 설치

	```shell
	> npm i axios
	```

#### 프로젝트 개발 시작
1. 서버실행, Bootstrap으로 글자체 변경 확인 요
2. /src/board/BoardList.jsx 생성, 작성
3. index.js 수정(App.js를 수정해도 됨)

	<img src="/images/web019.png" width="750">

4. BoardWrite.jsx 생성, 작성

	<img src="/images/web020.png" width="750">


#### Node 백엔드 환경
1. /practice/simple-backend 폴더 생성
2. 터미널에서 초기화 시작

	```shell
	> npm init -y
	```

3. 필요 모듈 설치
	```shell
	> npm install express body-parser mysql
	> npm install nodemon
	```

4. index.js 생성, 작성
5. package.json 코드 추가

	```json
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"start": "node index.js", // 여기서 부터...
		"dev": "nodemon index.js"
	},
	```

6. 서버 명령어 변경
	```shell
	> npm run dev
	```

7. index.js 파일 수정
8. 로그 확인

	<img src="/images/web021.png" width="750">

#### MySQL 서버 설정
1. Workbench 오픈 접속
2. reactBoard 스키마 생성 후 set as Default Schema 선택
3. 단순 확인용 테이블 test 생성
	```sql
	create table test(
		rowno int
	);
	```

4. node 서버 index.js 수정 후 실행. DB 확인
	- localhost가 아닌 경우 Workbench > Users and Privileges 에서 사용자의 Host 중 % 계정 추가필요

	<img src="/images/web022.png" width="600">

#### React 사이드
- BoardWrite.jsx에 axios 로직 추가
- 클릭 시 CORS 오류 발생

#### Node 사이드
- cors 설치

	```shell
	> npm i cors
	```

- index.js require 부분에 작성
	```js
	const express = require("express");
	const cors = require("cors");

	const app = express();
	//app.use(cors());  // 모든 접근 허용
	app.use(cors({ origin: "http://localhost:3000" }));
	```

- 결과 확인

	<img src="/images/web023.png" width="750">

#### MySQL 사이드
- 테이블 생성

	```sql
	create table BOARD (
		IDX int not null auto_increment primary key,
		TITLE varchar(200),
		CONTENT varchar(4000),
		REG_ID varchar(20),
		REG_DATE DATETIME DEFAULT now(),
		MOD_ID varchar(20),
		MOD_DATE DATETIME DEFAULT now()
	);
	```

- 테스트 데이터 입력 - query or GUI 직접입력

#### Node 사이드 개발 시작
1. index.js 파일에 rest API 코드 추가

	```shell
	app.get("/list", (req, res) => {
		const sqlQuery = "SELECT * FROM board";
		db.query(sqlQuery, (err, result) => {
			res.send(result);
		});
	});
	```

2. 브라우저에서 확인

	<img src="/images/web024.png" width="750">

#### React 사이드
1. BoardList.jsx 수정

	<img src="/images/web025.png" width="750">



2. BoardList와 BoardWrite를 한 화면에