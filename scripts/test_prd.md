# 텍스트 배틀 게임 PRD

---

# Overview

- 프로젝트명: 텍스트 배틀 (Text Battle)
- 목표: 사용자가 작성한 짧은 문장으로 AI 판정 기반 1:1 전투를 진행하고, 창의적 전투 해설을 통해 승패를 노출하는 웹 기반 게임 제작
- 핵심 컨셉: 문장 대결, 문학적 해설, 승패 공개, 바이럴 유도
- 타겟: 짧은 글쓰기와 경쟁을 즐기는 10~30대

문제 해결:

- 짧은 글쓰기에 대한 즉각적인 피드백과 경재 요소 제공
- 창의적 글쓰기에 대한 동기부여
- SNS 공유를 통한 바이럴 마케팅 기회 창출

타겟 사용자:

- 주 타겟: 짧은 글쓰기와 경쟁을 즐기는 10~30대
- 글쓰기에 관심이 있는 MZ세대
- SNS 활동이 활발한 사용자층

# Core Featuers

## 1. 캐릭터 생성 시스템

- 사용자명과 100자 이내 전투 문장 입력
- 비속어 및 불건전 표현 필터링
- 공란 입력 방지를 위한 유효성 검사

## 2. AI 기반 전투 시스템

- 문장의 논리성, 창의성, 공격성을 AI가 평가
- 실시간 1:1 매칭 시스템
- 문학적 전투 해설 자동 생성
- 일간/무기한 리그 운영

## 3. 랭킹 시스템

- ELO 레이팅 기반 점수 시스템
- 일간/무기한 리그별 독립 랭킹
- 상세한 전적 및 통계 제공

## 4. 코인 시스템

- 유료 결제를 통한 코인 구매
- 전투 쿨타임 스킵 기능
- 다양한 결제 수단 지원

# User Experience

## 사용자 페르소나

1. 대학생 A (22세, 여성)

- 트위터 사용자
- 짧은 글쓰기를 즐김
- 경쟁적인 게임을 선호

2. 직장인 B (28세, 남성)

- 인스타그램 활발회 사용
- 창의적인 글쓰기에 관심
- 틈틈이 모바일 게임을 즐김

## 핵심 사용자 플로우

1. 초기 진입

- 메인 페이지 접속
- 캐릭터 생성 (사용자명, 전투 문장 입력)
- 리그 선택 (일감/무기한

2. 전투 진행

- 상대방과 매칭
- AI 판정 진행
- 전투 해설 및 결과 확인

3. 결과 확인 및 공유

- 점수/랭킹 변동 확인
- SNS 공유
- 다음 전투 진행 또는 종료

## UI/UX 고려사항

- 모바일 우선 방응형 디자인
- 직관적인 전투 결과 표시
- 간편한 SNS 공유 기능
- 실시간 매칭 상태 표시
- 푸시 알림 시스템

# Technical Architecture

## 시스템 구성요소

1. 프론트앤드 & 백엔드

- Next.js 기반 통합 애플리케이션
- App Router 및 Server Components 확용
- 반응형 UI 컴포넌트
- 실시간 소켓 통신

2. 데이터베이스 & 인프라

- Supabase 플랫폼 활용
- PostgreSQL 데이터 베이스
- Row Level Security
- 인증/인가 시스템
- Edge Functions

- Node.js/Express 서버
- WebSocket 서버
- AI 평가 시스템

3. 데이터베이스

- PostgreSQL (사용자/전적 데이터)
- Redis (실시간 매칭/랭킹)

## 데이터 모델

1. User

- id: UUID
- username: String
- battlePhrase: String
- rating: Number
- stats: Object

2. Battle

- id: UUID
- player1Id: UUID (Supabase Auth User Reference)
- player2Id: UUID (Supabase Auth User Reference)
- winner: UUID
- narration: String
- scores: JSON
- createdAt: Timestamp

3. Transaction

- id: UUID
- userId: UUID (Supabase Auth User reference)
- amount: Number
- coins: Number
- createdAt: Timestamp

## API 구조

1. 인증 API (Supabase Auth)

- POST /api/auth/signup
- POST /api/auth/signin
- POST /api/auth/signout

2. 전투 API

- POST /api/battles/create
- GET /api/battles/[id]
- POST /api/battles/[id]/result

3. 랭킹 API

- GET /api/rankings/daily
- get /api/rankings/all-time

4. 결제 API

- POST /api/payments/create
- POST /api/payments/verify

## 인프라 요구사항

- Supebase 클라우드 플랫폼 활용
- Vercel을 통한 Next.js 애플리케이션 배포
- Edge Network를 통한 글로벌 성능 최적화
- 자동 백업 및 모니터링 시스템

# Development Roadmap

## Phase 1: MVP

- Supabase 기반 사용자 인증
- 단일 리그 전투 시스템
- 기본 AI 판정 로직
- 간단한 전투 해설

# Logical Dependency Chain

1. 기반 시스템 구축

- 사용자 인증
- 기본 DB 구조
- API 서버 설정

2. 핵심 게임 로직

- 전투 문장 입력/저장
- AI 판정 시스템
- 매칭 시스템

3. 전투 시스템

- 실시간 매칭
- 전투 결과 처리
- 해설 생성

4. 부가 기능

- 랭킹 시스템
- 코인 시스템
- SNS 공유

# Risks and Mitigations

## 기술적 도전

1. AI 판전 일관성

- 위험: AI 판정 결과의 불일치
- 대응: 판정 기준 명확화 및 테스트 케이스 구축

2. 성능 최적화

- 위험: 동시 요청 처리 시 응답 지연
- 대응: Edge Functions 활용 및 캐싱 전략 수립

## MVP 관련

1. 초기 사용자 확보

- 위험: 매칭 지연으로 인한 사용자 이탈
- 대응: 매칭 대기 시간 동안 AI 대전 기능 제공

2. 수익환 전환

- 위험: 낮은 결제 전환율
- 대응: 무료 사용자 경험 최적화

## 리소스 제약

1. 서버리스 비용

- 위험: Edge Function 호출 비용 증가
- 대응: 적적한 캐싱 전략 및 호출 최적화

2. 개발 복잡도

- 위험: 서버리스 아키텍처로 인한 개발 복잡도 증가
- 대응: 명확한 아키텍처 설계 및 문서화

# Appendix

## 연구 결과

- 유사 서비스 분석
- 사용자 설문 결과
- AI 판전 정확도 테스트 결과

## 기술 명세

- AI 모델 상세 스펙
- Supabase 스키마 설계
- Edge Functions 아키텍처
- API 문서
