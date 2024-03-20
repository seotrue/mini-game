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
