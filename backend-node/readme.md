## Node 백엔드

### 프로젝트 설정
- node.js  확인
	```shell
	> node --version
	v20.12.2
	> yarn --version
	1.22.22
	```
- 프로젝트 생성
	```shell
	> mkdir basic-server
	> cd basic-server
	basic-server> yarn init -y
	...
	basic-server> yarn add koa
	```

- ESLint, Prettier 설정
	- VS Code 확장에 **ESLint**, **Prettier - Code formatter** 사전 설치
	- yarn으로 설치 진행
		```shell
		basic-server> yarn add --dev eslint
		...
		basic-server> yarn run eslint --init
		? How would you like to use ESLint? ...
		To check syntax only
		√ How would you like to use ESLint? · problems
		√ What type of modules does your project use? · commonjs
		√ Which framework does your project use? · none
		√ Does your project use TypeScript? · javascript
		√ Where does your code run? · browser
		The config that you've selected requires the following dependencies:

		eslint, globals, @eslint/js
		√ Would you like to install them now? · No / Yes
		√ Which package manager do you want to use? · yarn
		☕️Installing...

		basic-server> yarn add eslint-config-prettier
		```

	- /basic-server/src 폴더 생성 후 index.js 생성 

		<img src="/images/web004.png" width="730">