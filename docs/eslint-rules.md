# ESLINT RULE
> eslint:recommended을 사용하고 있으며, 몇가지 옵션을 커스텀 하여 사용하고 있습니다

## Custom Rule
|  Rule  | Description | Config |
|:------:|:-----------:|:------:|
| indent | 들여쓰기      | 2 |
| semi   | 세미콜론(;) 설정      | always |
|semi-spacing|세미콜론 간격설정|{"before": false, "after": true}|
|quotes|문자열 정의 기호| single |
|comma-dangle|마지막 쉼표 처리| arrays|objects|imports: always-multiline, exports|functions: never|
|comma-spacing|쉼표 공백 설정| { "before": false, "after": true } |
|no-unused-vars|사용하지않는 변수| warn |
|array-bracket-spacing|배열([]) 설정시 공백 설정 | never |
|arrow-spacing| arrow function(()=> {}) 설정 | { "before": false, "after": true } |
|block-spacing| 블럭({}) 설정 | { "before": false, "after": true } |
|brace-style| if/try/class 블록({}) 설정 | "1tbs", { "allowSingleLine": true }|
|camelcase| 변수명 설정 | always |
|computed-property-spacing| 괄호속성[]의 공백설정 | never |
|curly| if/for/while 등 블럭을 생략에대한 설정 | all |
|eqeqeq| 비교(==) 설정 | always |
|func-call-spacing| 함수 호출 설정 | never |
|key-spacing| 개체 리터럴 속성의 키와 값 사이 간격 |{ 'beforeColon': false, 'afterColon': true } |
|keyword-spacing|if/try/for/while/static/as등의 간격 설정 | { "before": true, "after": true } |
|no-multiple-empty-lines| 다중개행 설정 | { 'max': 1, 'maxEOF': 0 }|
|space-in-parens|괄호안의 공백 설정|never|
|space-infix-ops|연산자 공백 설정 | error |
|object-curly-spacing| 중괄호 내부에 일정한 간격 | always |
|object-property-newline|개체 속성을 별도의 줄에 강제로 배치|{ 'allowMultiplePropertiesPerLine': true, 'allowAllPropertiesOnSameLine': false }|
|space-before-blocks|블록 앞에 공백 설정 | always |
|no-multi-spaces| 다중 공백 허용 | error |
|jsx-quotes| html속성의 quotes 설정 | prefer-single|