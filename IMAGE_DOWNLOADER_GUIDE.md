# 공식 스포츠 이미지 자동 다운로더

NHL과 MLB 공식 이미지 소스를 사용하는 자동 다운로더입니다.

## ✨ 특징

- ✅ **저작권 걱정 없음** - 공식 리그 제공 이미지
- ✅ **API 키 불필요** - 무료 무제한 사용
- ✅ **정확한 선수 사진** - 공식 헤드샷
- ✅ **자동화** - 데이터 파일 기반 일괄 다운로드

## 🚀 빠른 시작

### 1. 이미지 URL 테스트

```bash
npm run test-image-urls
```

NHL과 MLB 공식 이미지 URL이 작동하는지 확인합니다.

### 2. 이미지 다운로드

```bash
# 모든 이미지 다운로드 (NHL + MLB)
npm run download-images

# NHL 선수만
npm run download-images:nhl

# MLB 선수만
npm run download-images:mlb
```

### 3. 결과 확인

```bash
ls public/images/players/
```

다운로드된 이미지가 `public/images/players/` 폴더에 저장됩니다.

## 📋 이미지 소스

### NHL
- **소스**: `https://assets.nhle.com/mugs/nhl/20242025/{teamAbbrev}/{playerId}.png`
- **필요 정보**: Player ID, Team Abbreviation
- **현재 상태**: ✅ 모든 NHL 선수 ID 있음

### MLB
- **소스**: `https://img.mlbstatic.com/mlb-photos/image/upload/.../people/{playerId}/headshot/...`
- **필요 정보**: MLB Player ID
- **현재 상태**: ⚠️ `mlbId` 필드 추가 필요

## 📝 MLB 선수 ID 추가하기

MLB 선수 이미지를 다운로드하려면 각 선수의 공식 MLB ID를 추가해야 합니다.

### MLB ID 찾는 방법

1. **Baseball Reference 사용**
   - https://www.baseball-reference.com/ 접속
   - 선수 이름 검색
   - URL에서 ID 확인 (예: `/players/o/ohtansh01.shtml`)

2. **MLB.com 사용**
   - https://www.mlb.com/ 접속
   - 선수 프로필 검색
   - URL에서 숫자 ID 확인 (예: `/player/shohei-ohtani-660271`)

### 데이터 파일에 추가

`src/data/mlbPlayers.js` 파일을 열고 각 선수에 `mlbId` 추가:

```javascript
{
  id: 1,
  mlbId: 660271,  // ← 이 줄 추가
  name: "Shohei Ohtani",
  // ... 나머지 정보
}
```

### 주요 MLB 선수 ID (참고)

```javascript
// 예시 - 실제 ID는 확인 필요
Shohei Ohtani: 660271
Aaron Judge: 592450
Ronald Acuña Jr.: 660670
Mookie Betts: 605141
```

## 🔍 이미지를 찾을 수 없는 경우

### 문제: "Failed to download" 오류

**원인:**
- 선수 ID가 잘못됨
- 선수가 팀을 이적함 (NHL의 경우 팀 약자 변경 필요)
- 이미지가 아직 업로드되지 않음 (신인 선수)

**해결 방법:**

1. **ID 확인**
   ```bash
   npm run test-image-urls
   ```

2. **수동 다운로드**
   - 공식 리그 웹사이트에서 이미지 확인
   - 직접 다운로드하여 `public/images/players/` 폴더에 저장

3. **팀 정보 업데이트**
   - `src/data/players.js` 또는 `mlbPlayers.js`에서 팀 정보 확인
   - 이적한 선수의 경우 `teamAbbrev` 업데이트

## 📂 다운로드 위치

```
public/
└── images/
    └── players/
        ├── mcdavid.jpg      # NHL
        ├── matthews.jpg     # NHL
        ├── ohtani.jpg       # MLB
        └── judge.jpg        # MLB
```

## ⚙️ 기술 정보

### 사용된 URL 패턴

**NHL (2024-25 시즌)**
```
https://assets.nhle.com/mugs/nhl/20242025/{teamAbbrev}/{playerId}.png
```

**MLB**
```
https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/{playerId}/headshot/67/current
```

### Rate Limiting
- 각 다운로드 사이 0.5초 대기
- 공식 소스이므로 제한 없음

### 파일 덮어쓰기
- 기존 파일이 있으면 건너뜀
- 재다운로드하려면 기존 파일 삭제 후 실행

## 🆘 문제 해결

### axios 오류
```bash
npm install axios
```

### 디렉토리 없음
스크립트가 자동으로 생성합니다. 수동 생성:
```bash
mkdir -p public/images/players
```

### 권한 오류
```bash
chmod +x scripts/downloadOfficialImages.js
```

## 📄 라이선스

공식 리그 제공 이미지를 사용하므로:
- ✅ 팬 사이트, 교육용 사용 가능
- ⚠️ 상업적 사용 시 리그 정책 확인 권장
- ❌ 이미지 수정, 재배포 금지

---

**마지막 업데이트**: 2024
**공식 소스**: NHL.com, MLB.com
