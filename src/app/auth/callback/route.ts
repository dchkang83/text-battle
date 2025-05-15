import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    // Supabase Auth 콜백 처리
    await supabase.auth.exchangeCodeForSession(code);
  }

  // 인증 후 리디렉션
  return NextResponse.redirect(new URL('/', requestUrl.origin));
} 