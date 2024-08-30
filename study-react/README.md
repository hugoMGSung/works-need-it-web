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

### JSX
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


#### 연습
- basic-app02 프로젝트 생성
	- library 폴더에 Book.jsx, Library.jsx 순서대로 작업
	- index.js 파일 수정



