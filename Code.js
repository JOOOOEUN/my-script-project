function generateSiteIDs() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dataRange = sheet.getRange(8, 2, sheet.getLastRow() - 7, 15); // B8:P
  const data = dataRange.getValues();

  const regionMap = {
    "서울특별시": "SE", "인천광역시": "IC", "대구광역시": "DG",
    "대전광역시": "DJ", "광주광역시": "GJ", "부산광역시": "BS",
    "울산광역시": "US", "세종특별자치시": "CC", "경기도": "GG",
    "강원도": "GW", "충청남도": "CC", "충청북도": "CC",
    "전라남도": "JL", "전라북도": "JL", "경상남도": "GS",
    "경상북도": "GS", "제주특별자치도": "JJ"
  };

  const typeMap = {
    "아파트": "RES",
    "기타": "BIZ"
  };

  const idTracker = {};
  let createdCount = 0;

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const currentID = row[0];     // B열: 현장ID
    const typeRaw = row[8];       // J열: 단지유형
    const addressRaw = row[14];   // P열: 주소

    // 유효성 검사
    if (currentID || !typeRaw || !addressRaw) continue;

    // 유형코드 가져오기
    const typeCode = typeMap[typeRaw];
    if (!typeCode) continue;

    // 지역코드 추출
    const regionKey = Object.keys(regionMap).find(region => addressRaw.startsWith(region));
    const regionCode = regionMap[regionKey];
    if (!regionCode) continue;

    // 순차번호 누적관리
    const key = `${typeCode}-${regionCode}`;
    if (!idTracker[key]) idTracker[key] = 1;
    const serial = String(idTracker[key]++).padStart(5, "0");

    // ID 조합
    const newID = `${key}-${serial}`;

    // 시트에 기록
    sheet.getRange(i + 8, 2).setValue(newID);
    createdCount++;
  }

  // 알림 메시지
  const ui = SpreadsheetApp.getUi();
  if (createdCount > 0) {
    ui.alert(`✅ 현장ID 생성 완료: ${createdCount}건`);
  } else {
    ui.alert("❌ 생성할 현장ID가 없습니다.");
  }
}
