import Link from 'next/link';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export default function ForgotPassword() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-2">비밀번호 찾기</h1>
        <p className="text-gray-600 text-center mb-6">
          계정에 등록된 이메일을 입력하시면 비밀번호 재설정 링크를 보내드립니다.
        </p>
        
        <ForgotPasswordForm />
        
        <div className="mt-6 text-center">
          <Link href="/auth/login" className="text-sm text-primary hover:underline">
            로그인 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 