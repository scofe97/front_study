import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 기본 옵션을 설정할 수 있습니다.
      // 예: 데이터를 다시 가져오는 시간, 캐시 지속 시간 등
      retry: 2, // 실패 시 재시도 횟수
      refetchOnWindowFocus: false, // 창이 다시 포커스될 때 데이터 다시 가져오기
    },
  },
});

export default queryClient;
