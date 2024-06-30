# React 시작

## React 특징
1. 컴포넌트 기반 개발
2. 선언적 개발
3. 가상 DOM 사용
4. 단방향 데이터 바인딩

## 개발 시작

### 리액트 프로젝트 설치
1. 콘솔에 명령어 입력
	```shell
	> npx create-react-app basic-app
	```

2. 설치완료 후 아래로 실행
	```shell
	> cd basic-app
	> mpm start
	```

#### 빠르게 배우기
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
	