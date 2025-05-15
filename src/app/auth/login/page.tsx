import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">로그인</h1>
        
        <LoginForm />
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            계정이 없으신가요?{' '}
            <Link href="/auth/register" className="text-primary hover:underline">
              회원가입
            </Link>
          </p>
        </div>
        
        <div className="mt-4 text-center">
          <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
      </div>
    </main>
  );
} 