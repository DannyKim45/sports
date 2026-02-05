import { useEffect } from "react";
import Hero from "../components/shared/Hero";
import TextSection from "../components/shared/TextSection";
import ImageTextSection from "../components/shared/ImageTextSection";
import VideoSection from "../components/shared/VideoSection";

export default function BaseballIntroPage() {
  useEffect(() => {
    document.title = "MLB 허브 | Sports Athletes";
  }, []);

  return (
    <>
      <Hero
        title="Major League Baseball"
        subtitle="미국 야구의 최고봉, MLB의 매력"
        backgroundImage="/images/ohtani.jpg"
      />

      <TextSection
        title="MLB란?"
        content="메이저리그 베이스볼(MLB)은 미국과 캐나다의 30개 팀이 참가하는 세계 최고 수준의 프로 야구 리그입니다. 1903년부터 시작된 월드 시리즈는 스포츠 역사상 가장 오래된 챔피언십 중 하나입니다."
      />

      <ImageTextSection
        imageSrc="/images/ohtani.jpg"
        imageAlt="Shohei Ohtani"
        imagePosition="left"
        title="MLB의 매력"
        quote="162경기의 긴 여정, 그리고 드라마"
      >
        <p>
          MLB는 4월부터 10월까지 무려 162경기의 정규시즌을 치릅니다.
          긴 시즌 동안 펼쳐지는 수많은 드라마와 역전, 그리고 개인 기록 경신의 순간들이
          야구 팬들을 열광시킵니다.
        </p>
        <p>
          특히 투수와 타자의 심리전, 도루와 견제의 긴장감, 끝까지 알 수 없는
          경기 흐름은 야구만의 독특한 매력입니다.
        </p>
      </ImageTextSection>

      <TextSection
        title="리그 구조"
        split
      >
        <div>
          <h3>아메리칸 리그 (AL)</h3>
          <ul>
            <li>동부: 뉴욕 양키스, 보스턴 레드삭스, 토론토 블루제이스, 탬파베이 레이스, 볼티모어 오리올스</li>
            <li>중부: 시카고 화이트삭스, 클리블랜드 가디언스, 디트로이트 타이거스, 캔자스시티 로열스, 미네소타 트윈스</li>
            <li>서부: 휴스턴 애스트로스, LA 에인절스, 오클랜드 애슬레틱스, 시애틀 매리너스, 텍사스 레인저스</li>
          </ul>
        </div>
        <div>
          <h3>내셔널 리그 (NL)</h3>
          <ul>
            <li>동부: 애틀랜타 브레이브스, 마이애미 말린스, 뉴욕 메츠, 필라델피아 필리스, 워싱턴 내셔널스</li>
            <li>중부: 시카고 컵스, 신시내티 레즈, 밀워키 브루어스, 피츠버그 파이어리츠, 세인트루이스 카디널스</li>
            <li>서부: 애리조나 다이아몬드백스, 콜로라도 로키스, LA 다저스, 샌디에이고 파드리스, 샌프란시스코 자이언츠</li>
          </ul>
        </div>
      </TextSection>

      <VideoSection
        videoSrc="https://www.youtube.com/embed/YOUR_MLB_VIDEO_ID"
        title="MLB 2024 시즌 하이라이트"
        description="2024 시즌의 최고의 순간들을 영상으로 만나보세요"
      />

      <TextSection
        title="시즌 일정"
        content="MLB 시즌은 크게 스프링 트레이닝, 정규시즌, 포스트시즌으로 나뉩니다."
      >
        <ul>
          <li><strong>스프링 트레이닝 (2~3월)</strong>: 플로리다와 애리조나에서 시범 경기</li>
          <li><strong>개막일 (3월 말~4월 초)</strong>: 정규시즌 시작</li>
          <li><strong>올스타 게임 (7월)</strong>: 양 리그 최고 선수들의 대결</li>
          <li><strong>트레이드 데드라인 (7월 31일)</strong>: 선수 트레이드 마감</li>
          <li><strong>정규시즌 종료 (9월 말)</strong>: 플레이오프 진출팀 확정</li>
          <li><strong>포스트시즌 (10월)</strong>: 와일드카드 → 디비전 시리즈 → 리그 챔피언십 시리즈 → 월드 시리즈</li>
        </ul>
      </TextSection>

      <ImageTextSection
        imageSrc="/images/ohtani.jpg"
        imageAlt="Baseball Stadium"
        imagePosition="right"
        title="경기 관람의 즐거움"
        quote="구장에서 느끼는 야구의 모든 것"
      >
        <p>
          MLB 구장은 각각 고유의 특색과 역사를 가지고 있습니다.
          보스턴의 펜웨이 파크, 시카고의 리글리 필드 같은 역사적인 구장부터
          현대적인 첨단 시설을 갖춘 새 구장까지 다양합니다.
        </p>
        <p>
          경기 전후로 즐길 수 있는 다양한 음식과 이벤트, 그리고
          7회 중간 부르는 'Take Me Out to the Ball Game'은
          MLB 관람의 빠질 수 없는 즐거움입니다.
        </p>
      </ImageTextSection>
    </>
  );
}
