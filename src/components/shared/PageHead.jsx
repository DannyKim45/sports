import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "NHL 허브 - 북미 스포츠 경험",
  "/hockey/intro": "아이스하키 소개 - NHL 허브",
  "/hockey/games": "NHL 경기 일정 - NHL 허브",
  "/hockey/players": "NHL 스타 선수 - NHL 허브",
  "/hockey/guide": "관람 가이드 - NHL 허브"
};

const pageDescriptions = {
  "/": "NHL 아이스하키를 포함한 북미 스포츠의 흥분을 경험하세요",
  "/hockey/intro": "아이스하키의 짜릿함을 발견하세요 - 스피드, 충격, 그리고 혼돈",
  "/hockey/games": "실시간 NHL 점수, 일정, 하이라이트를 확인하세요",
  "/hockey/players": "McDavid, Matthews, MacKinnon을 포함한 NHL 최고의 선수들을 만나보세요",
  "/hockey/guide": "NHL 경기 관람을 위한 완벽한 가이드 - 티켓, 좌석, 프로모션"
};

export default function PageHead() {
  const location = useLocation();

  useEffect(() => {
    // Update page title
    const title = pageTitles[location.pathname] || "NHL 허브";
    document.title = title;

    // Update meta description
    const description = pageDescriptions[location.pathname] || "NHL 허브 - 하키의 모든 것";
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    // Update viewport for responsive design
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.name = 'viewport';
      document.head.appendChild(metaViewport);
    }
    metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0';

  }, [location]);

  return null;
}
