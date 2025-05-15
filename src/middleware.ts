import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function middleware(request: NextRequest) {
  // 애플리케이션에 쿠키가 저장되는 방식과 일치하도록 쿠키 초기화
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
      },
    }
  );

  // 세션 가져오기
  const { data: { session } } = await supabase.auth.getSession();

  // 현재 URL 경로 확인
  const path = request.nextUrl.pathname;

  // 보호된 라우트
  if (path.startsWith('/battle') || path.startsWith('/dashboard')) {
    if (!session) {
      // 로그인되지 않은 경우 로그인 페이지로 리디렉션
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  // 이미 로그인 된 상태에서 인증 페이지 접근 시 홈으로 리디렉션
  if ((path.startsWith('/auth/login') || path.startsWith('/auth/register')) && session) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/battle/:path*',
    '/dashboard/:path*',
    '/auth/login',
    '/auth/register',
  ],
}; 