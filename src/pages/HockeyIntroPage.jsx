import { useEffect } from "react";
import Hero from "../components/shared/Hero";
import VideoSection from "../components/shared/VideoSection";
import TextSection from "../components/shared/TextSection";
import ImageTextSection from "../components/shared/ImageTextSection";

export default function HockeyIntroPage() {
  useEffect(() => {
    document.title = "NHL 허브 | Sports Athletes";
  }, []);

  return (
    <div className="hockey-page">
      {/* ① Hero - Arena Image */}
      <Hero
        title="아이스 하키"
        subtitle="얼음 위에서 펼쳐지는 가장 빠른 경기"
        backgroundImage="/images/arena.jpg"
      />

      {/* ② Video Section */}
      <VideoSection src="/videos/hockey.mp4" />

      {/* ③ Intro Text */}
      <TextSection quote='"TV로 보던 경기와는 전혀 달랐다."'>
        <p>
          모든 스포츠가 그렇듯, TV로 보는 것보다 실제 경기장에서 보는 편이
          훨씬 더 재미있고 박진감이 넘친다.
        </p>
        <p>
          하지만 아이스하키는 그런 기대를 훌쩍 뛰어넘는 수준이었다. 얼음 위를
          가르며 움직이는 선수들, 스피드 속에서도 스틱 하나로 퍽을 다루는
          기술, 그리고 경기 중간중간 벌어지는 격렬한 몸싸움까지.
        </p>
        <p>
          이 모든 요소가 쉼 없이 이어지며 왜 아이스하키는 현장에서 봐야 하는
          스포츠인지 단번에 이해할 수 있었다.
        </p>
      </TextSection>

      {/* ④ Speed & Impact - Text Only */}
      <TextSection title="스피드 · 충격 · 혼돈">
        <p>
          얼음 위에서 펼쳐지는 이 경기는 처음 마주한 순간부터 다른 스포츠와는
          전혀 다른 긴장감을 준다.
        </p>
        <p>
          스케이팅으로 만들어지는 압도적인 스피드, 그 속에서도 작은 퍽을
          자유자재로 다루는 기술, 그리고 경기 중 허용되는 강력한 바디체크와
          격투는 아이스하키만의 백미다.
        </p>
        <p>
          TV 화면으로는 절대 다 전달되지 않는 이 속도감과 충돌의 에너지는 반드시
          경기장에서 직접 경험해야 한다.
        </p>
      </TextSection>

      {/* ⑤ Rules - Text Only */}
      <TextSection quote='"생각보다 훨씬 단순하다."'>
        <p>
          아이스하키는 퍽을 상대 팀 골대에 넣으면 득점하는 매우 직관적인
          스포츠다.
        </p>
        <p>
          축구와 크게 다르지 않은 구조 덕분에 규칙이 복잡하다는 인상은 거의
          없었다.
        </p>
        <p>
          양 팀은 각각 6명씩 경기를 진행하며, 3개의 피리어드(각 20분)로 나뉘어
          총 60분간 펼쳐진다. 골키퍼를 제외한 5명의 선수들은 공격과 수비를
          자유롭게 전환하며 빠른 템포로 경기를 이끌어간다.
        </p>
      </TextSection>

      {/* ⑥ Speed - Image Right */}
      <ImageTextSection
        title="이 스피드는 현장에서만 느껴진다"
        imageSrc="/images/hockey-speed.jpg"
        imageAlt="Hockey player skating at high speed"
        imagePosition="right"
      >
        <p>
          선수들은 걷지도 뛰지도 않는다. 스케이팅 위에서 전력으로 경기를
          풀어나간다.
        </p>
        <p>
          최고 속도는 시속 40km를 넘나들며, 급정거와 방향 전환이 순식간에
          이루어진다. TV 화면으로는 이 속도감을 제대로 전달할 수 없다.
        </p>
        <p>
          경기장에서 직접 보면 선수들이 얼마나 빠르게 움직이는지, 그 안에서
          얼마나 정교한 기술을 구사하는지 비로소 알게 된다.
        </p>
      </ImageTextSection>

      {/* ⑦ Body Check - Text Only */}
      <TextSection quote='"충돌마저도 전략이다."'>
        <p>
          바디체크는 단순한 거친 플레이가 아니라 룰 안에서 허용되는 명확한
          전술이다.
        </p>
        <p>
          상대방이 퍽을 소유하고 있거나 마지막으로 터치한 경우, 어깨나 몸통을
          이용한 충돌이 허용된다. 이는 상대의 진로를 막고 퍽을 빼앗기 위한
          정당한 수단이다.
        </p>
        <p>
          경기장의 투명한 보드에 선수가 강하게 부딪히는 소리, 그리고 얼음 위로
          쏟아지는 충격은 현장에서만 느낄 수 있는 강렬한 경험이다.
        </p>
      </TextSection>

      {/* ⑧ Fighting - Image Left */}
      <ImageTextSection
        title="이 장면은 아이스하키에서만 볼 수 있다"
        imageSrc="/images/hockey-fight.jpg"
        imageAlt="Hockey players fighting"
        imagePosition="left"
      >
        <p>
          룰 안에서 허용되는 맨손 격투는 이 스포츠만의 독특한 문화다.
        </p>
        <p>
          선수 간의 싸움이 발생하면 심판은 즉시 개입하지 않고 어느 정도 진행을
          지켜본다. 양 선수가 장갑을 벗고 주먹을 맞대는 순간, 관중들의 환호가
          터져 나온다.
        </p>
        <p>
          물론 무제한 허용은 아니다. 싸움이 끝나면 양 선수 모두 5분간 페널티
          박스로 향하게 되며, 팀은 한동안 수적 열세를 감수해야 한다.
        </p>
        <p>
          이는 단순한 폭력이 아니라 팀의 사기를 높이거나, 상대방의 거친 플레이에
          맞서는 하나의 전략이자 문화로 자리 잡았다.
        </p>
      </ImageTextSection>

      {/* ⑨ Power Play */}
      <TextSection quote='"숫자 싸움이 승부를 가른다."'>
        <p>
          파울이 선언되면 반칙을 범한 선수는 2분 또는 5분간 페널티 박스로
          향한다. 이 시간 동안 팀은 한 명이 적은 상태로 경기를 이어가야 한다.
        </p>
        <p>
          수적 우위를 점한 팀의 공격을 '파워플레이(Power Play)'라 부르며, 이
          순간은 득점의 절호의 기회다. 반대로 수비하는 팀은 '페널티 킬(Penalty
          Kill)'이라 불리는 극한의 수비 전략을 펼친다.
        </p>
        <p>
          5 대 4, 때로는 5 대 3의 상황에서 벌어지는 공방은 경기의 흐름을
          완전히 바꿔놓을 수 있다.
        </p>
      </TextSection>

      {/* ⑩ Atmosphere - Image Right */}
      <ImageTextSection
        title="경기장의 분위기가 경기를 만든다"
        imageSrc="/images/hockey-crowd.jpg"
        imageAlt="Hockey arena filled with fans"
        imagePosition="right"
      >
        <p>
          아이스하키 경기장은 다른 어떤 스포츠보다 관중과 선수가 가깝다.
          유리벽 너머로 선수들의 표정과 땀방울까지 보이며, 퍽이 보드를 강타하는
          소리가 온몸으로 전해진다.
        </p>
        <p>
          골이 터지면 경기장 전체가 흔들릴 듯한 함성이 울려 퍼지고, 싸움이
          벌어지면 관중들이 자리에서 일어선다. 이 모든 순간이 TV로는 절대
          전달되지 않는 현장만의 경험이다.
        </p>
        <p>
          한 번이라도 아이스하키 경기를 직관한 사람은 다시 찾게 된다. 그만큼
          중독성이 강하고, 그만큼 짜릿하다.
        </p>
      </ImageTextSection>
    </div>
  );
}
