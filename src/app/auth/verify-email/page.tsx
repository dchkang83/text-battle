import Link from 'next/link';

export default function VerifyEmail() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6">이메일 확인</h1>
        
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-green-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
          </div>
          
          <p className="text-gray-800 mb-4">
            회원가입해 주셔서 감사합니다!
          </p>
          <p className="text-gray-600 mb-6">
            입력하신 이메일 주소로 확인 링크를 보냈습니다.<br />
            이메일을 확인하고 링크를 클릭하여 계정 등록을 완료해주세요.
          </p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <Link 
            href="/auth/login"
            className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            로그인 페이지로 돌아가기
          </Link>
          
          <Link 
            href="/"
            className="py-2 px-4 border border-transparent rounded-md text-primary hover:underline focus:outline-none"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 