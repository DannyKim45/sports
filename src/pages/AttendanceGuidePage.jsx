import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { nhlTeams, getStadiumByTeam } from "../data/stadiums";
import { getPromotionsByTeam } from "../data/promotions";
import TeamSelector from "../components/guide/TeamSelector";
import SeatingMap from "../components/guide/SeatingMap";
import PromoCalendar from "../components/guide/PromoCalendar";
import SeatDetailGuide from "../components/guide/SeatDetailGuide";

export default function AttendanceGuidePage() {
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    document.title = "NHL 관람 가이드 | Sports Athletes";
  }, []);

  const stadium = selectedTeam ? getStadiumByTeam(selectedTeam) : null;
  const promotions = selectedTeam ? getPromotionsByTeam(selectedTeam) : [];

  const ticketLinks = [
    { name: "NHL.com", url: "https://www.nhl.com/tickets", primary: true },
    { name: "Ticketmaster", url: "https://www.ticketmaster.com/nhl-tickets/hockey" }
  ];

  const resaleLinks = [
    { name: "StubHub", url: "https://www.stubhub.com/nhl-tickets/grouping/715/" },
    { name: "SeatGeek", url: "https://seatgeek.com/nhl-tickets" },
    { name: "Vivid Seats", url: "https://www.vividseats.com/nhl-hockey-tickets.html" }
  ];

  return (
    <div className="page-container attendance-page">
      {/* Header */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1>관람 가이드</h1>
          <p className="page-subtitle">
            NHL 경기 관람을 위한 모든 것
          </p>
        </div>
      </motion.div>

      {/* Team Selector */}
      <TeamSelector
        teams={nhlTeams}
        selectedTeam={selectedTeam}
        onTeamChange={setSelectedTeam}
      />

      {!selectedTeam ? (
        <motion.div
          className="guide-placeholder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>팀을 선택하시면 경기장 정보, 티켓 옵션, 프로모션 일정을 확인하실 수 있습니다</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Arena Information */}
          {stadium && (
            <div className="arena-info-card">
              <h2>{stadium.name}</h2>
              <p className="arena-location">{stadium.city}</p>

              <div className="arena-details-grid">
                <div className="arena-detail">
                  <span className="detail-icon">🏟️</span>
                  <div>
                    <div className="detail-label">수용 인원</div>
                    <div className="detail-text">{stadium.capacity.toLocaleString()}명</div>
                  </div>
                </div>

                <div className="arena-detail">
                  <span className="detail-icon">📅</span>
                  <div>
                    <div className="detail-label">개장 연도</div>
                    <div className="detail-text">{stadium.opened}년</div>
                  </div>
                </div>

                <div className="arena-detail">
                  <span className="detail-icon">📍</span>
                  <div>
                    <div className="detail-label">주소</div>
                    <div className="detail-text">{stadium.address}</div>
                  </div>
                </div>

                <div className="arena-detail">
                  <span className="detail-icon">🅿️</span>
                  <div>
                    <div className="detail-label">주차</div>
                    <div className="detail-text">{stadium.parkingInfo}</div>
                  </div>
                </div>

                <div className="arena-detail">
                  <span className="detail-icon">🚇</span>
                  <div>
                    <div className="detail-label">대중교통</div>
                    <div className="detail-text">{stadium.publicTransit}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Ticket Purchase Section */}
          <div className="tickets-section">
            <h2>티켓 구매</h2>
            <div className="ticket-links-grid">
              <div className="ticket-category">
                <h3>공식 티켓</h3>
                <div className="link-buttons">
                  {ticketLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`ticket-link ${link.primary ? "primary" : ""}`}
                    >
                      {link.name} →
                    </a>
                  ))}
                </div>
              </div>

              <div className="ticket-category">
                <h3>리셀 마켓</h3>
                <div className="link-buttons">
                  {resaleLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ticket-link"
                    >
                      {link.name} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Seating Map */}
          {stadium && <SeatingMap stadium={stadium} />}

          {/* Seat Detail Guide */}
          {stadium && (
            <SeatDetailGuide
              rateYourSeatsUrl={stadium.rateYourSeatsUrl}
              teamName={nhlTeams.find(t => t.abbrev === selectedTeam)?.name}
            />
          )}

          {/* Promotions */}
          <PromoCalendar promotions={promotions} />
        </motion.div>
      )}
    </div>
  );
}
