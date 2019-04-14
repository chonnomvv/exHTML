## 컨텐츠에 맞는 순서와 레이아웃에 맞는 *Markup*

- \<header>, \<main>, \<article>, \<footer> 와 같은 구조 관련 요소
- 클래스 이름 네이밍시 'top', 'left'와 같은 의미없는 네이밍대신 해당 컨텐츠에 어떤 내용이 있는지 알 수 있게끔 네이밍
---
## display: flex;
- flex-direction: 기본값이  row(column도 존재)
- justify-content
- space-between: 남아있는 여백을 컨텐츠 사이에 균등하게
- space-around: grp1, grp2 사이에 여백의 절반 만큼을 가장 바깥 여백으로 준다
- space-evenly: 균등한 여백을 할당(ie 11에서 지원안됨)

## float 속성
- 배치가 되는 아이템을 float시킴. 노멀플로우를 벗어나서 부모 요소의left, right에 배치가 됨
- float 속성상 아랫쪽에 있는 inline상자와 겹칠 수 없음.
- 부모요소가 float된 자식요소들의 height 값을 잃어버림 -> 가상요소 선택자를 이용

- main:after{content:""; display:block; clear:both;}
- 반드시 content요소를 설정해줘야함. 기본적으로 inline요소이기때문에 block요소로 display를 바꿔줘야함.
---
- \<img> 태그에는 이미지가 보이지 않는 환경을 위해 alt 속성값을 대체 텍스트로 반드시 채워줘야한다.
- tabindex="0" // 해당 요소가 키보드 focus를 받을 수 있게끔
- \<h1>태그를 넣었을 때 존재하지 않던 마진이 생김 -> 브라우저가 기본적으로 갖는 agent 속성. 이를 위해 css reset을 해줄 필요가 있음.
- reset css -> Eric Meyer's reset Css, body{line-height: 1;}  요소는 한글을 사용할 경우 윗부분이 짤릴 수 있어서 삭제.
- 글꼴을 서버에서 제공받도록 쓰는 웹폰트. 어도비에서 제공하는 spoqa han sans.
- css에서 import
- \<li>는 기본적으로 block요소
- 구조선택자 li:nth-child(n+2) 로 특정 자식 요소를 선택할 수 있음.
- inline-block으로 처리된 submenu-li 요소가 자동으로 줄바꿈 되지 않고 한줄로 보여지게 하기 위해 p:a로 처리된 submenu에 white-space 속성을 nowrap으로 처리. submenu의 p:a 속성이 menu-item p:r에 속해있는데 이때 submenu의 크기는 부모를 넘어설 수 없어. 이를 넘기 위해 white-space 속성을 nowrap으로 처리.
- background: linear-gradient 
- 디자인상 보이지 않기 위해 숨김 컨텐츠 처리.(readable-hidden) 
- width:1px; height:1px 주는 이유: 가상 커서가 해당 요소에 접근해 컨텐츠를 읽을 수 있도록 하기위해.
## \<form> 태그
- \<fieldset>, \<legend>  포함. \<fieldset>에는 폼관련 입력 서식들을 모아놓는 그룹핑 태그, \<legend>는 폼태그의 제목 작성 태그
- \<label for=''> 라벨태그는 for 를 통해 특정 인풋태그와 1:1로 매칭(인풋태그의 id와 일치)

## dl > dt> dd
- 원래 dl요소에는 div가 자식으로 올 수 없지만 html5부터 허용됨. 단 div태그 안에는  dt와 dd 가 모두 포함되어 있어야한다.

