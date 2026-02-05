# MLB 게임 관람 기록 이미지 업로드 가이드

이 폴더에 직접 관람한 MLB 경기의 사진들을 업로드하세요.

## 파일명 규칙

### Los Angeles Dodgers 경기
- `dodgers-game1-cover.jpg` - 메인 커버 이미지 (그리드에 표시될 대표 사진)
- `dodgers-game1-1.jpg` ~ `dodgers-game1-4.jpg` - 갤러리 이미지

### New York Yankees 경기
- `yankees-game1-cover.jpg` - 메인 커버 이미지
- `yankees-game1-1.jpg` ~ `yankees-game1-3.jpg` - 갤러리 이미지

## 추천 이미지 사양
- **커버 이미지**: 16:9 비율, 최소 1200x675px
- **갤러리 이미지**: 제한 없음, 고해상도 권장
- **파일 형식**: JPG, PNG
- **파일 크기**: 웹 최적화 권장 (각 이미지 2MB 이하)

## 비디오 파일
비디오는 `/public/videos/mlb-games/` 폴더에 업로드하세요.
- `dodgers-game1.mp4`
- `yankees-game1.mp4`

## 추가 경기 기록 시
1. `src/data/myMLBGames.js` 파일에 새 경기 데이터 추가
2. 해당 경기 이미지를 이 폴더에 업로드
3. 파일명을 데이터와 일치시키기

## 임시 플레이스홀더
실제 이미지를 업로드하기 전까지는 기본 ohtani.jpg 이미지가 표시됩니다.
이미지 업로드 후 `src/data/myMLBGames.js`의 경로를 실제 파일명으로 수정하세요.
