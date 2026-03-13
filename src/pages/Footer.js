import React from 'react'

export default function Footer() {
  return (
    <footer class="footer_outer">
        <section class="footer_box">
            <div class="footer_left">
                <div class="footer_logo"><img src="/images/logo.jpeg" alt="푸터로고" /></div>
                <p>대한민국 대표 축구공 브랜드</p>
                <p>공공이와 함께 공차러 가시죠</p>
                <div class="footer_sns_box">
                    <a href="#!"><img src="/images/footer_insta.png" alt="" /></a>
                    <a href="#!"><img src="/images/footer_youtube.png" alt="" /></a>
                    <a href="#!"><img src="/images/footer_facebook.png" alt="" /></a>
                    <a href="#!"><img src="/images/footer_kakao.png" alt="" /></a>
                </div>
            </div>
            <div class="footer_center">
                <p>상호명: 공공이 | 대표자: 이종훈 | 사업자등록번호: 123-45-67890</p>
                <p>통신판매업 신고번호: 제 2025-부산금정-01234호 | 개인정보보호책임자 : 이종훈</p>
                <p>주소 : 부산광역시 금정구 강아지로 123,공공빌딩 3층 | 전화 : 02-123-4567</p>
                <p>이메일 : hello@gonggong002.com</p>
                호스팅 서비스 : (주)002
                <p>© 2026 002 | All Rights Reserved.</p>
            </div>
            <div class="footer_right">
                <h2>고객지원</h2>
                <p><a href="#!">자주 묻는 질문</a></p>
                <p><a href="#!">배송 및 반품 안내</a></p>
                <p><a href="#!">문의하기</a></p>
                <p><a href="#!">이용약관</a></p>
                <p><a href="#!">개인정보처리방침</a></p>
            </div>
        </section>
    </footer>
  )
}
