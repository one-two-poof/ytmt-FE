# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**너도나도 (TOGETTHERE)** — 사용자가 자신의 생각을 문장으로 등록하면, 벡터 유사도 검색으로 비슷한 생각을 하는 사람을 매칭해주는 모바일 최적화 웹앱.

## 기술 스택

### 프론트엔드
- **Next.js 15** (App Router)
- **vanilla-extract** — 스타일링 (CSS-in-TypeScript, 런타임 없음)
- **TanStack Query** — 서버 상태 관리
- **axios** — HTTP 클라이언트
- **배포**: Vercel

### 백엔드
- **Python** (별도 레포 또는 `backend/` 디렉토리)
- **PostgreSQL + pgvector** — 벡터 임베딩 저장 및 유사도 검색
- **SentenceTransformer** (`jhgan/ko-sroberta-multitask`) — 한국어 문장 임베딩

## 주요 명령어

```bash
# 개발 서버
pnpm dev

# 빌드
pnpm build

# 타입 체크
pnpm type-check

# 린트
pnpm lint
```

## 아키텍처

### 인증
카카오 로그인 전용 (자체 회원가입 없음). 카카오에서 이름·이메일·프로필 이미지를 받아 사용.

### 핵심 도메인 흐름
1. 사용자가 문장 등록 (하루 최대 3개, 덮어쓰기 방식)
2. 백엔드에서 SentenceTransformer로 임베딩 → pgvector로 유사도 검색
3. 프론트에서 매칭 결과 리스트 표시 (유사도 점수 포함)
4. 매칭된 사용자에게 채팅 전송

### 화면 구성
| 라우트 | 설명 |
|--------|------|
| `/` | 로그인 (카카오 버튼) |
| `/home` | 오늘의 생각 입력 폼 |
| `/matches` | 나와 비슷한 생각을 하는 사람들 리스트 |
| `/chat/[id]` | 채팅 |
| `/mypage` | 프로필 및 등록한 문장 관리 |

## 디자인 시스템 (`.claude/DESIGN.md` 참고)

- **스타일**: Soft-Minimalism + Glassmorphism
- **폰트**: Plus Jakarta Sans (기본), Pretendard (한국어 fallback)
- **색상**: Soft Indigo(`#4343d5`) 주색, Spark Gold(`#fcd400`) 강조(연결 순간에만 사용)
- **간격**: 8px 베이스 유닛
- **카드**: 24px radius, glassmorphism (backdrop-blur 12–20px, white 70–85% opacity, 1px translucent border)
- **레이아웃**: 모바일 우선, 단일 컬럼, 좌우 margin 20px

### vanilla-extract 사용 원칙
디자인 토큰(색상, 타이포그래피, 간격, radius)은 `src/styles/vars.css.ts`에 CSS custom properties로 정의하고, 컴포넌트 스타일 파일(`.css.ts`)에서 참조한다.
