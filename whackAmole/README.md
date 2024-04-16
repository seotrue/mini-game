# Whack a mole gage(두더지 게임)

## 폴더구조

```sh
├─src
│  │  
│  ├─ assets // assets 파일 관리
│  │
│  │   
│  ├─ components // 공통 컴포넌트 관리
│  ├─ helper // 중복 로직 함수들을 pure 함수화 하여 Util 파일 관리, 상수관리
│  ├─ pages // 라우터 기준 components, hooks 관리
│  │    ├─ GameSetting
│  │    │    └─ hooks
│  │    │
│  │    ├─ MoleGame
│  │    │   ├─ components
│  │    │   └─ hooks
│  │    │
│  │    ├─ Ranking    
│  │    │
│  │    └─ ScoreResult     
│  ├─ store  // 전역 상태관리
│  │    
│  ├─ styles // 공통 스타일 관리 (개별 스타일 각 페이지 안 module.scss 로 관리)
│  │    
│  └─ types //declare, component 타입 관리 (props 타입은 각 파일 안 interface 타입으로 관리)
│          
```
## 기술 스택
- React + Recoil + Typescript
- Loadable Components
- react-router-dom
- scss

## 라우터 구성
1. 준비화면  
   - /
2. 게임화면
   -  /moleGame
3. 점수화면
   - /scoreResult
4. 순위화면
   - /ranking

## 상세 내용
### 준비화면
  - 앱앱 첫 진입 시, 첫 화면
  - 열/행, 두더지 사용자 입력 최소, 최대 제한 시 문구 노출
  - 시작 버튼 클릭 시 사용자 입력 값 전역관리 저장 (by `recoil`, `gameSettingAtom.ts`)

### 게임화면
 - 모자쓴 두더지: 사용자 입력값, 수염난 두더지: 1마리 셋팅
 - `useMoleGame.ts`: 게임 진행 로직 /  `useMoveMoles.ts`: 두더지 움직임 로직 /  `useTimer.ts`: 시간로직 분리
 - 변칙 요소:
   1. 수염난 두더지 클릭 시 -1점 (`CONSTANT.SCORE.BOMB` 타겟 구분)
   2. 남은 시간 비례 두더지 노출 시간 감소하도록 진행 
 - 점수 전역관리 
 - 버튼 게임 상태에 따라 다르게 노출 (시작하기/일시정지/재개하기)
 - 0초가 되면 게임 스코어 저장, 과거 사용자리스트(길이 10개) 직전 유저 추가(`scoreAtom.ts`)

### 점수 화면
- 직전 사용자의 게임 점수 노출

### 랭킹 화면 
- 점수 기준 정렬
- 초기화 버큰 클릭 시 랭킹 초기화 

