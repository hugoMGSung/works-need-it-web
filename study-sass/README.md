# Study Sass
- https://sass-lang.com/
- 종속형 시트(CSS)로 해석 및 컴파일되는 스크립트 언어

## 컴파일러 설치
- node.js 로 시작
- node-sass 설치

    ```shell
    > npm install -g node-sass
    ```

- VS Code 
    - Extensions - Live Sass Compiler 검색, 설치
    - 설정에서 Live Sass Compiler > Settings: Formats 의 settings.json에서 편집 클릭

    ```json
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "~/../css/",
            "savePathReplacementPairs": null
        },
        // You can add more
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "~/../css/"
        },
        // More Complex
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "~/../css/"
        }
    ]
    ```

    - 변경하고 싶으시면 savePath를 변경, 저장

### sass 폴더 만들고 컴파일
1. dist폴더 > scss 폴더 생성
2. [scss 폴더> comm.scss 파일]을 만들어 코드 작성후 하단의 Watch Sass를 누르면 [css폴더 > comm.css 파일]이 자동 생성
3. scss 코드 추가 작성 후엔 save만 하면 자동 컴파일

    <img src="https://raw.githubusercontent.com/hugoMGSung/works-need-it-web/main/pknu-aspnet-2023/images/aspnet26.gif" width="700">