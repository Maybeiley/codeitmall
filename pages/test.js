import Image from 'next/image';

export default function Test() {
  return (
    <>
      <img
        src="/images/product.jpeg"
        width="400"
        height="400"
        alt="상품 이미지"
      />
      <Image
        src="/images/product.jpeg"
        width="400"
        height="400"
        alt="상품 이미지"
      />
    </>
  );
}

// Image : next 서버를 거쳐서 최적화된 이미지 가져오고, lazy loading으로 필요할 때만 처리하여 페이지 로딩 속도 최적화 *** 폭&너비 크기 지정 필수