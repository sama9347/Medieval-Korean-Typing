/**
 * 중세국어 수업 플랫폼 - 전체 슬라이드 데이터베이스 (개선 완료판)
 */

const SLIDES_DATA = [
    // [Slide 1]
    {
        num: 1,
        category: "도입",
        chapter: "중세국어 시작",
        title: "중세국어 (326)",
        render: `
            <div class="slide-col" style="align-items: center; text-align: center;">
                <div style="font-size: 58px; font-weight: 900; color: #1a2f23; margin-bottom: 16px; font-family: var(--font-hanja);">
                    中世國語
                </div>
                <div style="font-size: 28px; font-weight: 800; color: #b3802e; margin-bottom: 24px;">
                    우리가 만나는 15세기 살아있는 우리말의 비밀
                </div>
                <div style="max-width: 680px; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-md); border: 2px solid #d4af37;">
                    <img src="media/image2.jpg" style="width: 100%; display: block;" alt="중세국어 인트로">
                </div>
            </div>
        `
    },
    // [Slide 2]
    {
        num: 2,
        category: "도입",
        chapter: "중세국어의 의의",
        title: "중세국어, 왜 배워야 할까?",
        render: `
            <div class="slide-col" style="justify-content: center; align-items: center; text-align: center;">
                <div style="font-size: 48px; font-weight: 800; color: #9d2b2b; margin-bottom: 32px; line-height: 1.4;">
                    "왜 옛날 말을 지금 우리가<br>시간을 들여 배워야 할까?"
                </div>
                <div class="content-card highlight-card" style="max-width: 880px; text-align: left;">
                    <ul class="bullet-list">
                        <li><strong>현재 우리말의 기원과 규칙 이해</strong>: 현대 국어의 불규칙 활용, 형태소 변화의 원인이 중세국어에 존재</li>
                        <li><strong>단어의 어원과 의미 변화 추적</strong>: 말의 역사성을 통해 어휘력과 국어적 직관 확장</li>
                        <li><strong>훈민정음의 독창성과 과학성 체감</strong>: 문자가 없던 시대에 탄생한 세계 최고의 문자 체계 탐구</li>
                    </ul>
                </div>
            </div>
        `
    },
    // [Slide 3]
    {
        num: 3,
        category: "도입",
        chapter: "언어의 역사성과 어원",
        title: "라틴어, 왜 배워야 할까? (어원의 힘)",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="content-card highlight-card">
                        <div class="card-title">라틴어 어근 하나가 수십 개의 영어 단어를 만듭니다</div>
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li><strong>octo</strong> (8) → october, octopus, octagon, octave</li>
                            <li><strong>lux / luce</strong> (빛) → luxury, lucid, Lucifer, illumination, lumière</li>
                            <li><strong>terra</strong> (땅) → territory, Extra Terrestrial, terrace, Mediterranean</li>
                            <li><strong>manus</strong> (손) → manual, manufacture, manuscript, manicure, manner</li>
                        </ul>
                    </div>
                    <div class="content-card accent-card">
                        <div style="font-size: 24px; font-weight: 800; color: #9d2b2b;">
                            👉 중세국어는 우리말의 '라틴어'입니다! 옛 형태를 알면 현대 국어의 수많은 의문이 풀립니다.
                        </div>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container">
                        <img src="media/image3.png" class="slide-img" alt="라틴어 어원">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 4]
    {
        num: 4,
        category: "도입",
        chapter: "현대국어의 수수께끼",
        title: "씹다-씹어 vs 눕다-누워 (ㅂ 불규칙의 비밀)",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card">
                        <div class="card-title">현대 국어의 불규칙 현상</div>
                        <div style="font-size: 28px; line-height: 2; margin: 12px 0;">
                            • 씹다 → <strong>씹어</strong> (ㅂ 유지)<br>
                            • 눕다 → <strong>누워</strong> (ㅂ이 왜 '우'로 변했을까?)<br>
                            • 돕다 → <strong>도와</strong> (ㅂ이 왜 '오'로 변했을까?)
                        </div>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">중세국어의 해답 : 순경음 비읍(ㅸ)</div>
                        <div style="font-size: 26px; line-height: 1.8; color: #2b4162;">
                            중세국어 당시에는 <strong>'눕-+ -어 → 누ᄫᅥ'</strong>로 활용했습니다.<br><br>
                            이후 15세기 후반에 순경음 비읍(ㅸ)의 음가가 [w] 반모음/모음(오/우)으로 변화하면서 오늘날의 <strong>'ㅂ 불규칙'</strong>이 완성된 것입니다!
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 5]
    {
        num: 5,
        category: "도입",
        chapter: "현대국어의 수수께끼",
        title: "햇사과 vs 햅쌀 (사잇소리 'ㅂ'의 비밀)",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card">
                        <div class="card-title">왜 '햇쌀'이 아니라 '햅쌀'일까?</div>
                        <div style="font-size: 28px; line-height: 2; margin: 12px 0;">
                            • 해 + 사과 = <strong>햇사과</strong> ('ㅅ' 사이시옷)<br>
                            • 해 + 쌀 = <strong>햅쌀</strong> (왜 'ㅂ'이 들어갈까?)<br>
                            • 해 + 콩 = <strong>해콩 / 햇콩</strong>
                        </div>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">중세국어의 해답 : 어두자음군(ㅂ계)</div>
                        <div style="font-size: 26px; line-height: 1.8; color: #2b4162;">
                            15세기 중세국어에서 '쌀'은 단어 첫머리에 ㅂ이 붙은 <strong>'ᄡᆞᆯ(ㅄ 계열)'</strong>이었습니다.<br><br>
                            '해 + ᄡᆞᆯ'이 합쳐지면서 앞의 <strong>'ㅂ'</strong> 발음이 앞 글자의 받침으로 남아 오늘날 <strong>'햅쌀, 찹쌀, 볍씨, 입때'</strong>가 되었습니다!
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 6]
    {
        num: 6,
        category: "도입",
        chapter: "현대국어의 수수께끼",
        title: "'비나이다'의 어간과 선어말어미는?",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card">
                        <div class="card-title">"비나이다 비나이다" 형태소 분석</div>
                        <div style="font-size: 28px; line-height: 2; margin: 12px 0;">
                            • 어간은? → <strong>빌-</strong> (빌다)<br>
                            • 어미 결합: <strong>빌- + -나이- + -다</strong><br>
                            • <strong>'-나이-'</strong>는 대체 무슨 선어말어미일까?
                        </div>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">중세국어의 상대 높임 선어말어미 (--)</div>
                        <div style="font-size: 26px; line-height: 1.8; color: #2b4162;">
                            중세국어의 현재시제 선어말어미 <strong>'--'</strong>와 상대높임 선어말어미 <strong>'--'</strong>가 결합된 <strong>'--'</strong>의 화석화된 형태입니다!<br><br>
                            (빌- + -- + -다 → 비나이다)
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 7]
    {
        num: 7,
        category: "도입",
        chapter: "시각 자료",
        title: "중세국어 사료와 문헌",
        render: `
            <div class="slide-col" style="align-items: center; justify-content: center;">
                <div class="media-container" style="max-height: 680px; width: 85%;">
                    <img src="media/image4.png" class="slide-img" alt="훈민정음 원문 사료">
                </div>
            </div>
        `
    },
    // [Slide 8]
    {
        num: 8,
        category: "도입",
        chapter: "중세국어의 가치",
        title: "조선시대 외국어 학습서와 발음 복원",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="ancient-text-box" style="font-size: 26px; line-height: 1.8;">
                        “조선시대 통역관 양성기관인 <strong>사역원</strong>에서 훈민정음으로 우리말 발음을 달아 만든 교재가 있습니다. 중세 국어의 발음에 대해서는 연구가 꽤 돼 있기 때문에, 이를 토대로 <strong>만주어의 어휘·문법은 물론 발음까지 복원</strong>할 수 있습니다.”
                    </div>
                    <div class="content-card highlight-card" style="margin-top: 14px;">
                        <div style="font-size: 24px; line-height: 1.6;">
                            • 노걸대언해, 번역박통사 등 사역원 언해서는 동아시아 고대 언어 음운 복원의 세계적 표준 자료입니다.
                        </div>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container" style="gap: 12px;">
                        <img src="media/image5.png" style="max-height: 260px;" class="slide-img" alt="사역원 교재">
                        <img src="media/image6.png" style="max-height: 260px;" class="slide-img" alt="노걸대">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 9]
    {
        num: 9,
        category: "도입",
        chapter: "흥미 유발",
        title: "타임머신 타고 조선시대 갔을 때 살아남기 위하여",
        render: `
            <div class="slide-body">
                <div class="slide-col col-narrow">
                    <div class="content-card accent-card">
                        <div class="card-title">조선 전기로 시간 이동한다면?</div>
                        <div style="font-size: 24px; line-height: 1.7;">
                            • 성조(방점)와 된소리가 다른 15세기 한양말!<br><br>
                            • "어린 백성"은 나이가 적은 게 아니라 <strong>'어리석은'</strong> 사람?<br><br>
                            • "어엿브다"는 예쁜 게 아니라 <strong>'불쌍하다'</strong>?<br><br>
                            • 제대로 뜻을 알고 말해야 살아남을 수 있습니다!
                        </div>
                    </div>
                </div>
                <div class="slide-col col-wide">
                    <div class="media-container">
                        <video controls class="slide-video" poster="media/image7.png">
                            <source src="media/media1.mp4" type="video/mp4">
                            동영상을 재생할 수 없습니다.
                        </video>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 10]
    {
        num: 10,
        category: "도입",
        chapter: "훈민정음의 진실",
        title: "한글 / 훈민정음에 대한 오해와 진실",
        render: `
            <div class="slide-col" style="align-items: center; justify-content: center; text-align: center;">
                <div style="font-size: 46px; font-weight: 800; color: #2b4162; margin-bottom: 24px;">
                    우리가 잘못 알고 있는 한글 상식 5가지
                </div>
                <div class="content-card" style="max-width: 950px; text-align: left; background: #fffcf5; border: 2px solid #e2ddd3;">
                    <div style="font-size: 26px; line-height: 1.9; color: #333;">
                        1. 한글은 '언어'가 아니라 <strong>'문자(소리글자)'</strong>이다.<br>
                        2. 집현전 학자들이 만든 것이 아니라 <strong>세종대왕의 단독/주도 창제</strong>이다.<br>
                        3. 창호지 문살 모양을 본뜬 것이 아니라 <strong>발음 기관의 상형</strong>이다.<br>
                        4. 가림토 문자나 외국 문자를 모방한 것이 아니다.<br>
                        5. 유네스코에 등재된 것은 한글 문자가 아니라 기록유산인 <strong>《훈민정음 혜례본》</strong>이다.
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 11]
    {
        num: 11,
        category: "도입",
        chapter: "언어와 문자의 차이",
        title: "배워서 읽고 쓰기 쉬운 '문자'",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">언어(음성) vs 문자(기호)</div>
                        <div style="font-size: 26px; line-height: 1.8;">
                            • <strong>한국어</strong> (음성 언어) ↔ <strong>한글</strong> (표기 문자)<br>
                            • 영어(English) ↔ 로마자(Alphabet)<br>
                            • 일본어(日本語) ↔ 가나(かな), 한자(漢字)
                        </div>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card">
                        <div class="card-title">문자 차용의 예시</div>
                        <div style="font-size: 26px; line-height: 1.8;">
                            • Mokdong (한국어를 로마자로 표기)<br>
                            • <span class="hanja">大韓民國</span> (한국 고유어를 한자로 표기)<br>
                            • 봉주르 / Bonjour (프랑스어를 한글/로마자로 표기)<br>
                            • 아리가또 / arigato / ありがと
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 12]
    {
        num: 12,
        category: "도입",
        chapter: "문자의 특성",
        title: "배워서 읽고 쓰기 쉬운 '문자' (시각 자료)",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="media-container">
                        <img src="media/image8.png" class="slide-img" style="max-height: 480px;" alt="문자 도표">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="media-container" style="gap: 12px;">
                        <img src="media/image9.png" class="slide-img" style="max-height: 240px;" alt="표기 자료1">
                        <img src="media/image10.png" class="slide-img" style="max-height: 240px;" alt="표기 자료2">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 13]
    {
        num: 13,
        category: "도입",
        chapter: "한글의 제자성",
        title: "배워서 읽고 쓰기 쉬운 '문자' (상형 자료)",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="media-container">
                        <img src="media/image11.png" class="slide-img" alt="발음기관 상형">
                    </div>
                </div>
                <div class="slide-col">
                    <div class="media-container">
                        <img src="media/image12.png" class="slide-img" alt="문자 체계">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 14]
    {
        num: 14,
        category: "도입",
        chapter: "문자의 진화",
        title: "표의문자(한자)의 한계와 표음문자",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card">
                        <div class="card-title">한문 원문</div>
                        <div class="ancient-verse hanja" style="font-size: 32px; line-height: 1.8;">
                            君子曰：學不可以已。青取之於藍，而青於藍；冰水為之，而寒於水。
                        </div>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">한글 독음 및 풀이</div>
                        <div style="font-size: 24px; line-height: 1.8;">
                            <strong>군자왈</strong>: 학불가이이. 청취지어람, 이청어람; 빙수위지, 이한어수.<br><br>
                            👉 뜻글자(한자)는 글자마다 개별적인 뜻과 음을 외워야 하지만, 소리글자(한글)는 28자만 익히면 모든 소리를 적고 읽을 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 15]
    {
        num: 15,
        category: "도입",
        chapter: "문자의 효율성",
        title: "배워서 읽고 쓰기 쉬운 '문자'",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="ancient-text-box" style="font-size: 36px; letter-spacing: 4px; line-height: 2;">
                        마마 마 마 모 마 파 마 마 마 마 마 마 마 마 모
                    </div>
                    <div class="content-card highlight-card" style="margin-top: 16px;">
                        <div style="font-size: 24px; line-height: 1.7;">
                            • 성조와 자모음의 결합으로 무한한 음절을 규칙적으로 표현하는 한글의 간결성
                        </div>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container">
                        <img src="media/image13.png" class="slide-img" alt="문자 예시">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 16]
    {
        num: 16,
        category: "도입",
        chapter: "한글에 대한 오해 바로잡기",
        title: "세상의 모든 문자와 훈민정음의 독보적 가치",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="content-card accent-card">
                        <div class="card-title">훈민정음만의 독보적 특징 4가지</div>
                        <ul class="bullet-list">
                            <li><strong>창제자와 창제 시기, 창제 목적</strong>이 문헌으로 명확히 밝혀진 유일한 문자</li>
                            <li><strong>창제 원리(상형·가획·합성)</strong> 해설서(혜례본)가 전해지는 유일한 과학 문자</li>
                            <li>키릴 문자, 파스파 문자, 태국 문자 등과 비교해도 압도적인 <strong>음소-자질 문자 체계</strong></li>
                            <li>유네스코 세계기록유산 등재: <strong>《훈민정음 혜례본(해설서)》</strong></li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container">
                        <img src="media/image14.png" class="slide-img" alt="훈민정음 혜례본">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 17]
    {
        num: 17,
        category: "도입",
        chapter: "창제 주체 논쟁",
        title: "세종대왕 친제설 vs 집현전 합작설",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card">
                        <div class="card-title">항간의 가설들</div>
                        <ul class="bullet-list">
                            <li>세종의 명에 따라 집현전 학자들이 만들었다? ❌</li>
                            <li>한글 자모는 창호지 문살을 본떴다? ❌</li>
                            <li>가림토 문자나 외국 문자를 모방했다? ❌</li>
                            <li>신미대사가 창제에 결정적 기여를 했다? ❌</li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">정사(실록)와 혜례본의 기록</div>
                        <div style="font-size: 26px; line-height: 1.8; color: #1b4965;">
                            • <strong>"계해년 겨울, 전하께서 친히 언문 28자를 창제하시니..."</strong> (세종실록)<br><br>
                            • 세종대왕의 단독 친제(親製)이며, 집현전 학자들(정인지, 신숙주, 성삼문 등)은 해설서인 <strong>혜례본 편찬에 참여</strong>한 것입니다.
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 18]
    {
        num: 18,
        category: "도입",
        chapter: "세계 문자 계통",
        title: "세계 문자 계통도와 한글의 위상 (1)",
        render: `
            <div class="slide-body">
                <div class="slide-col col-narrow">
                    <div class="content-card highlight-card">
                        <div class="card-title">세계 문자의 갈래</div>
                        <div style="font-size: 22px; line-height: 1.7;">
                            • 이집트 상형문자 → 페니키아 → 그리스/로마자<br>
                            • 아람문자 → 히브리, 아랍, 몽골, 만주 문자<br>
                            • 브라흐미 문자 → 데바나가리, 티베트, 파스파<br>
                            • 갑골문 → 금문 → 소전 → 예서 → 해서/행서<br><br>
                            • <strong>한글은 다른 계통의 모방이 아닌 독창적 자질문자!</strong>
                        </div>
                    </div>
                </div>
                <div class="slide-col col-wide">
                    <div class="media-container">
                        <img src="media/image16.png" class="slide-img" alt="문자 계통도">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 19]
    {
        num: 19,
        category: "도입",
        chapter: "세계 문자 계통",
        title: "세계 문자 계통도와 한글의 위상 (2)",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="media-container">
                        <img src="media/image15.png" class="slide-img" alt="세계 문자 도표">
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="content-card accent-card">
                        <div class="card-title">문자의 분류 단계</div>
                        <div style="font-size: 24px; line-height: 1.8;">
                            1. 그림문자 / 상형문자<br>
                            2. 표의문자 (한자)<br>
                            3. 음절문자 (가나, 체로키)<br>
                            4. 음소문자 (알파벳)<br>
                            5. <strong>자질문자 (한글)</strong>: 소리의 특질(가획)이 글자 모양에 반영된 최고 단계의 문자
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 20]
    {
        num: 20,
        category: "도입",
        chapter: "시각 자료",
        title: "동아시아 문자의 흐름",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="media-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
                        <img src="media/image17.jpeg" class="slide-img" style="max-height: 260px;" alt="사료1">
                        <img src="media/image18.png" class="slide-img" style="max-height: 260px;" alt="사료2">
                        <img src="media/image19.png" class="slide-img" style="max-height: 260px;" alt="사료3">
                        <img src="media/image20.png" class="slide-img" style="max-height: 260px;" alt="사료4">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 21]
    {
        num: 21,
        category: "제1부 훈민정음 제자원리",
        chapter: "제자 원리 개관",
        title: "훈민정음 제자 원리 (총 28자)",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="content-card highlight-card">
                        <div class="card-title">창제 당시 28자의 체계</div>
                        <div style="font-size: 28px; line-height: 1.9;">
                            • <strong>초성 (자음자 17자)</strong>: 기본 5자(ㄱ,ㄴ,ㅁ,ㅅ,ㅇ) + 가획 9자 + 이체 3자<br>
                            • <strong>중성 (모음자 11자)</strong>: 기본 3자(ㆍ,ㅡ,ㅣ) + 초출 4자 + 재출 4자<br>
                            • <strong>종성 (받침)</strong>: 종성부용초성 (초성을 다시 사용)
                        </div>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container">
                        <img src="media/image21.png" class="slide-img" alt="제자원리 도표">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 22]
    {
        num: 22,
        category: "제1부 훈민정음 제자원리",
        chapter: "상형의 원리",
        title: "훈민정음을 만든 원리 | 상형(象形)",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="content-card highlight-card">
                        <div class="card-title">1. 자음 기본자 5자 (발음 기관 상형)</div>
                        <ul class="bullet-list" style="font-size: 23px;">
                            <li><strong>ㄱ (아음/어금닛소리)</strong>: 혀뿌리가 목구멍을 막는 모양</li>
                            <li><strong>ㄴ (설음/혓소리)</strong>: 혀끝이 윗잇몸에 닿는 모양</li>
                            <li><strong>ㅁ (순음/입술소리)</strong>: 입의 모양</li>
                            <li><strong>ㅅ (치음/잇소리)</strong>: 이의 모양</li>
                            <li><strong>ㅇ (후음/목구멍소리)</strong>: 목구멍의 둥근 모양</li>
                        </ul>
                    </div>
                    <div class="content-card accent-card">
                        <div class="card-title">2. 모음 기본자 3자 (천지인 삼재 상형)</div>
                        <div style="font-size: 24px; line-height: 1.7;">
                            • <strong>• (하늘 천 天)</strong>: 둥근 하늘의 모양<br>
                            • <strong>ㅡ (땅 지 地)</strong>: 평평한 땅의 모양<br>
                            • <strong>ㅣ (사람 인 人)</strong>: 서 있는 사람의 모양
                        </div>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container">
                        <img src="media/image23.png" class="slide-img" style="max-height: 250px;" alt="발음기관 상형">
                        <img src="media/image22.png" class="slide-img" style="max-height: 250px; margin-top: 10px;" alt="천지인 상형">
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 23]
    {
        num: 23,
        category: "제1부 훈민정음 제자원리",
        chapter: "가획의 원리",
        title: "훈민정음을 만든 원리 | 가획(加劃)과 이체(異體)",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <table class="grammar-table">
                    <thead>
                        <tr>
                            <th>구분 / 조음위치</th>
                            <th>기본자 (상형)</th>
                            <th>가획자 (소리가 세짐)</th>
                            <th>이체자 (획은 더했으나 세지 않음)</th>
                            <th>병서자 (나란히 쓰기)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="center highlight">아음 (어금닛소리)</td>
                            <td class="center" style="font-size: 26px;">ㄱ</td>
                            <td class="center" style="font-size: 26px;">ㅋ</td>
                            <td class="center" style="font-size: 26px;">ㆁ (옛이응 [ŋ])</td>
                            <td class="center" style="font-size: 26px;">ㄲ</td>
                        </tr>
                        <tr>
                            <td class="center highlight">설음 (혓소리)</td>
                            <td class="center" style="font-size: 26px;">ㄴ</td>
                            <td class="center" style="font-size: 26px;">ㄷ, ㅌ</td>
                            <td class="center" style="font-size: 26px;">ㄹ (반설음)</td>
                            <td class="center" style="font-size: 26px;">ㄸ</td>
                        </tr>
                        <tr>
                            <td class="center highlight">순음 (입술소리)</td>
                            <td class="center" style="font-size: 26px;">ㅁ</td>
                            <td class="center" style="font-size: 26px;">ㅂ, ㅍ</td>
                            <td class="center" style="font-size: 26px;">- (연서: ㅸ)</td>
                            <td class="center" style="font-size: 26px;">ㅃ</td>
                        </tr>
                        <tr>
                            <td class="center highlight">치음 (잇소리)</td>
                            <td class="center" style="font-size: 26px;">ㅅ</td>
                            <td class="center" style="font-size: 26px;">ㅈ, ㅊ</td>
                            <td class="center" style="font-size: 26px;">ㅿ (반치음 [z])</td>
                            <td class="center" style="font-size: 26px;">ㅆ, ㅉ</td>
                        </tr>
                        <tr>
                            <td class="center highlight">후음 (목구멍소리)</td>
                            <td class="center" style="font-size: 26px;">ㅇ (음가X)</td>
                            <td class="center" style="font-size: 26px;">ㆆ (여린히읗), ㅎ</td>
                            <td class="center" style="font-size: 26px;">-</td>
                            <td class="center" style="font-size: 26px;">ㆅ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // [Slide 24]
    {
        num: 24,
        category: "제1부 훈민정음 제자원리",
        chapter: "합성의 원리",
        title: "훈민정음을 만든 원리 | 모음 합성(合成)",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <table class="grammar-table">
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>양성 모음 (밝고 가벼움)</th>
                                <th>음성 모음 (어둡고 무거움)</th>
                                <th>중성 모음</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="center highlight">기본자 (3자)</td>
                                <td class="center" style="font-size: 26px;">• (하늘)</td>
                                <td class="center" style="font-size: 26px;">ㅡ (땅)</td>
                                <td class="center" style="font-size: 26px;">ㅣ (사람)</td>
                            </tr>
                            <tr>
                                <td class="center highlight">초출자 (4자)</td>
                                <td class="center" style="font-size: 26px;">ㅗ (•+ㅡ), ㅏ (ㅣ+•)</td>
                                <td class="center" style="font-size: 26px;">ㅜ (ㅡ+•), ㅓ (•+ㅣ)</td>
                                <td class="center">-</td>
                            </tr>
                            <tr>
                                <td class="center highlight">재출자 (4자)</td>
                                <td class="center" style="font-size: 26px;">ㅛ (••+ㅡ), ㅑ (ㅣ+••)</td>
                                <td class="center" style="font-size: 26px;">ㅠ (ㅡ+••), ㅕ (••+ㅣ)</td>
                                <td class="center">-</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="content-card highlight-card" style="margin-top: 12px;">
                        <div style="font-size: 24px; line-height: 1.6;">
                            • <strong>합용 모음</strong>: ㅘ, ㅝ, ㅙ, ㅞ, ㅚ, ㅟ, ㅢ, ㅐ, ㅔ, ㅒ, ㅖ 등 기본 11자를 조합하여 무한 확장!
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 25]
    {
        num: 25,
        category: "제1부 훈민정음 제자원리",
        chapter: "합자의 원리",
        title: "훈민정음을 만든 원리 | 합자(合字)와 음절 구성",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">초성·중성·종성의 합자 원리</div>
                        <ul class="bullet-list">
                            <li><strong>모음 단독 (초성 ㅇ)</strong>: 아, 오, 으 (초성 ㅇ은 음가 없음)</li>
                            <li><strong>모음 + 자음</strong>: 입, 약, 억</li>
                            <li><strong>자음 + 모음</strong>: 차, 배, 소</li>
                            <li><strong>자음 + 모음 + 자음</strong>: 먹, 통, 산</li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card accent-card">
                        <div class="card-title">모아쓰기(음절 단위 표기)의 위대함</div>
                        <div style="font-size: 26px; line-height: 1.8;">
                            • 풀어쓰기(h-a-n-g-u-l)에 비해 글자 인식 속도가 <strong>3배 이상 빠름</strong><br><br>
                            • 단어의 시각적 식별성과 가독성을 극대화한 독창적 음절 블록 구조
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 26]
    {
        num: 26,
        category: "제2부 국어사 개관",
        chapter: "시대 구분",
        title: "국어사 시대 구분 및 주요 사료",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <table class="grammar-table">
                    <thead>
                        <tr><th>시대 구분</th><th>시기</th><th>주요 자료 및 문헌</th></tr>
                    </thead>
                    <tbody>
                        <tr><td class="center highlight">고대 국어</td><td class="center">태초 ~ 고려 건국 전 (10세기)</td><td>향가(서동요 등), 삼국사기·삼국유사 인명/지명 표기</td></tr>
                        <tr><td class="center highlight">중세 국어</td><td class="center">고려 건국 ~ 16세기 말 (임진왜란)</td><td><strong>전기</strong>: 계림유사, 향약구급방<br><strong>후기</strong>: 훈민정음 언해, 용비어천가, 석보상절, 월인석보, 두시언해</td></tr>
                        <tr><td class="center highlight">근대 국어</td><td class="center">17세기 ~ 19세기 말 (개화기)</td><td>언간(한글편지), 노걸대언해, 첩해신어, 박통사언해, 고소설(홍길동전 등)</td></tr>
                        <tr><td class="center highlight">현대 국어</td><td class="center">20세기 ~ 현재</td><td>한글 맞춤법 통일안(1933), 표준어 규정</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // [Slide 27]
    {
        num: 27,
        category: "제2부 국어사 개관",
        chapter: "표기와 음운 비교",
        title: "시기별 표기상 특징과 음운 변화 종합",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <table class="grammar-table" style="font-size: 22px;">
                    <thead>
                        <tr><th>구분</th><th>고대 국어</th><th>중세 국어 (15C)</th><th>근대 국어 (17-19C)</th><th>현대 국어 (20C~)</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="center highlight">표기 방식</td>
                            <td>차자 표기 (향찰, 이두, 구결)</td>
                            <td><strong>연철(이어적기)</strong> 중심, 띄어쓰기X</td>
                            <td>연철→분철 과도기, <strong>중철(거듭적기)</strong></td>
                            <td><strong>분철(끊어적기)</strong> 확립, 띄어쓰기O</td>
                        </tr>
                        <tr>
                            <td class="center highlight">소실 음운</td>
                            <td>기본 예사소리 중심</td>
                            <td><strong>ㅸ, ㆆ, ㅿ, ㆁ, ㆍ</strong> 존재</td>
                            <td>소실 진행 (ㅸ→ㆆ→ㅿ→ㆁ→ㆍ)</td>
                            <td>소실 완료 (현대 24자)</td>
                        </tr>
                        <tr>
                            <td class="center highlight">음운 현상</td>
                            <td>된소리 미발달</td>
                            <td><strong>어두자음군</strong>(ㅄ, ㅳ), <strong>성조(방점)</strong>, 강력한 모음조화</td>
                            <td>어두자음군→된소리화, 방점 소실, 구개음화 출현</td>
                            <td>두음법칙, 구개음화, 모음조화 약화</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // [Slide 28]
    {
        num: 28,
        category: "제2부 국어사 개관",
        chapter: "어휘와 문법 비교",
        title: "시기별 어휘 및 문법 특징 종합 (1)",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">어휘의 역사적 변화</div>
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li><strong>고유어 비중</strong>: (강), 뫼(산), 온(100), 즈믄(1000) 등 고유어 풍부</li>
                            <li><strong>외래어 유입</strong>: 몽골어(바톨-용사), 여진어(투먼-두만), 중국어(붇-붓)</li>
                            <li><strong>의미 변화</strong>: 다(값이 나가다), 어리다(어리석다), 놈(일반 사람), 어엿브다(불쌍하다), 하다(많다)</li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card accent-card">
                        <div class="card-title">문법의 핵심 특징</div>
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li><strong>주격조사 3형태</strong>: '이'(자음 뒤), 'ㅣ'(모음 뒤), 'Ø'(ㅣ모음 뒤) ('가' 없음)</li>
                            <li><strong>명사형 어미 vs 접미사</strong>: 전성어미 '-옴/-움' vs 파생접미사 '-/-음'</li>
                            <li><strong>높임법 3대 체계</strong>: 주체(-시/샤-), 객체(-//-), 상대(-/-)</li>
                            <li><strong>관형격조사 'ㅅ'</strong>: 무정명사(나랏) 및 존칭명사(부텻) 뒤 결합</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 29]
    {
        num: 29,
        category: "제2부 국어사 개관",
        chapter: "어휘와 문법 비교",
        title: "시기별 어휘 및 문법 특징 종합 (2)",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card">
                        <div class="card-title">근대국어로의 이행 (17세기 이후)</div>
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li>고유어의 급격한 쇠퇴 및 한자어 대체</li>
                            <li><strong>새로운 주격조사 '가'의 본격 출현</strong> (17C)</li>
                            <li>1인칭 선어말어미 '-오-'의 기능 소실</li>
                            <li>객체높임 선어말어미의 쇠퇴 (여쭙다, 뵙다 등의 어휘로 축소)</li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">현대국어와의 결정적 차이</div>
                        <div style="font-size: 26px; line-height: 1.8;">
                            • 중세국어는 <strong>형태소의 원형보다 발음 중심(표음주의/연철)</strong>으로 표기<br><br>
                            • 현대국어는 <strong>뜻을 밝혀 적는 표의주의(분철)</strong> 확립
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 30]
    {
        num: 30,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "서문 시작",
        title: "훈민정음 언해본 서문 (世宗御製訓民正音)",
        render: `
            <div class="slide-col" style="align-items: center; justify-content: center; text-align: center;">
                <div style="display: flex; justify-content: center; align-items: baseline; gap: 14px; flex-wrap: wrap; margin-bottom: 24px;"><span style="font-family: 'ChosunGs', serif; font-size: 56px; color: #9d2b2b;">世</span><span style="font-family: 'HancomHoonminjeongeum', 'HANBatang', serif; font-size: 42px; color: #9d2b2b;">솅</span><span style="font-family: 'ChosunGs', serif; font-size: 56px; color: #9d2b2b;">宗</span><span style="font-family: 'HancomHoonminjeongeum', 'HANBatang', serif; font-size: 42px; color: #9d2b2b;">종</span><span style="font-family: 'ChosunGs', serif; font-size: 56px; color: #9d2b2b;">御</span><span style="font-family: 'HancomHoonminjeongeum', 'HANBatang', serif; font-size: 42px; color: #9d2b2b;">엉</span><span style="font-family: 'ChosunGs', serif; font-size: 56px; color: #9d2b2b;">製</span><span style="font-family: 'HancomHoonminjeongeum', 'HANBatang', serif; font-size: 42px; color: #9d2b2b;">졩</span>&nbsp;&nbsp;<span style="font-family: 'ChosunGs', serif; font-size: 56px; color: #9d2b2b;">訓</span><span style="font-family: 'HancomHoonminjeongeum', 'HANBatang', serif; font-size: 42px; color: #9d2b2b;">훈</span><span style="font-family: 'ChosunGs', serif; font-size: 56px; color: #9d2b2b;">民</span><span style="font-family: 'HancomHoonminjeongeum', 'HANBatang', serif; font-size: 42px; color: #9d2b2b;">민</span><span style="font-family: 'ChosunGs', serif; font-size: 56px; color: #9d2b2b;">正</span><span style="font-family: 'HancomHoonminjeongeum', 'HANBatang', serif; font-size: 42px; color: #9d2b2b;">정</span><span style="font-family: 'ChosunGs', serif; font-size: 56px; color: #9d2b2b;">音</span><span style="font-family: 'HancomHoonminjeongeum', 'HANBatang', serif; font-size: 42px; color: #9d2b2b;">음</span></div>
                <div class="content-card highlight-card" style="max-width: 920px; text-align: left;">
                    <div style="font-size: 26px; line-height: 1.9;">
                        세종대왕께서 백성을 사랑하는 마음으로 직접 밝히신 훈민정음 창제의 4대 정신:<br><br>
                        <strong>1. 자주정신 (自主)</strong>: 중국과 우리말이 다름을 천명<br>
                        <strong>2. 애민정신 (愛民)</strong>: 문자를 몰라 억울한 백성을 가엾게 여김<br>
                        <strong>3. 창조정신 (創造)</strong>: 28자의 새로운 문자 체계 독창적 창제<br>
                        <strong>4. 실용정신 (實用)</strong>: 날마다 쉽게 써서 편안케 하고자 함
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 31]
    {
        num: 31,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "원문 판본",
        title: "훈민정음 언해본 서문 판본 자료",
        render: `
            <div class="slide-col" style="align-items: center; justify-content: center;">
                <div class="media-container" style="max-height: 680px; width: 75%;">
                    <img src="media/image31.jpeg" class="slide-img" alt="언해본 서문 원본">
                </div>
            </div>
        `
    },
    // [Slide 32]
    {
        num: 32,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "표기 방식과 성조(방점)",
        title: "서문의 표기 방식 & 방점(성조)",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <table class="grammar-table">
                        <thead><tr><th>성조(聲調)</th><th>방점(글자 왼쪽 점)</th><th>소리의 높낮이</th><th>현대국어로의 변화</th></tr></thead>
                        <tbody>
                            <tr><td class="center highlight">평성(平聲)</td><td class="center">점 없음 (· 없음)</td><td>낮은 소리 (저조)</td><td>평음</td></tr>
                            <tr><td class="center highlight">거성(去聲)</td><td class="center">점 1개 (·)</td><td>높은 소리 (고조)</td><td>단음</td></tr>
                            <tr><td class="center highlight">상성(上聲)</td><td class="center">점 2개 (··)</td><td>낮았다가 높아지는 소리 (저→고)</td><td><strong>장음(긴소리)</strong></td></tr>
                            <tr><td class="center highlight">입성(入聲)</td><td class="center">받침 ㄱ,ㄷ,ㅂ,ㅅ + 점</td><td>빨리 끝을 닫는 소리 (촉급)</td><td>-</td></tr>
                        </tbody>
                    </table>
                    <div class="content-card highlight-card" style="margin-top: 14px;">
                        <div style="font-size: 24px;">
                            • 세로쓰기(종서), 우종서(오른쪽에서 왼쪽으로 읽음), 띄어쓰기 없음
                        </div>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container"><img src="media/image31.jpeg" class="slide-img" alt="서문"></div>
                </div>
            </div>
        `
    },
    // [Slide 33]
    {
        num: 33,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "사료",
        title: "훈민정음 언해본 서문 고해상도 사료",
        render: `
            <div class="slide-col" style="align-items: center; justify-content: center;">
                <div class="media-container" style="max-height: 680px; width: 75%;">
                    <img src="media/image32.jpeg" class="slide-img" alt="언해본 서문 정밀 사료">
                </div>
            </div>
        `
    },
    // [Slide 34]
    {
        num: 34,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "서문 전문",
        title: "훈민정음 언해본 서문 전문 (全文)",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <div class="ancient-text-box">
                    <div class="ancient-verse" style="font-size: 28px; line-height: 2;">
                        나랏말미 中國귁에 달아 文문字와로 서르 디 아니 이런 젼로 어린 百姓이 니르고져  배 이셔도 내 제 들 시러 펴디 몯 노미 하니라 내 이 爲윙야 어엿비 너겨 새로 스믈여듧 字 노니 사마다  수 니겨 날로 메 便뼌安킈 고져  미니라.
                    </div>
                    <div class="modern-translation" style="font-size: 22px;">
                        우리나라의 말이 중국과 달라 한자와는 서로 통하지 아니하므로, 이런 까닭으로 어리석은 백성이 말하고자 하는 바가 있어도 마침내 제 뜻을 능히 펴지 못하는 사람이 많으니라. 내가 이를 불쌍히 여겨 새로 스물여덟 자를 만드니, 모든 사람으로 하여금 쉽게 익혀 날마다 씀에 편안하게 하고자 할 따름이니라.
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 35]
    {
        num: 35,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "동국정운식 표기",
        title: "동국정운식 한자음 표기의 원리",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="content-card highlight-card">
                        <div class="card-title">동국정운식 표기의 3대 원칙</div>
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li><strong>1. 초성·중성·종성의 완비</strong>: 받침이 없는 한자에도 형식 종성 'ㅇ'을 표기 (예: 世솅, 禦, 製졩)</li>
                            <li><strong>2. 이상적 중국 원음 추구</strong>: 현실음이 아닌 이상적인 규범 한자음 표기 (예: 便뼌, 安)</li>
                            <li><strong>3. 이영보래(以影補來)</strong>: 받침 'ㄹ' 뒤에 여린히읗(ㆆ)을 덧붙여 입성임을 표시 (예: 曰, 戌)</li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="ancient-text-box" style="text-align: center;">
                        <div style="font-size: 40px; font-weight: bold; color: #9d2b2b; font-family: var(--font-hanja);">
                            <span style="font-family: 'ChosunGs', serif;">世</span><span style="font-family: 'HancomHoonminjeongeum', serif;">솅</span><span style="font-family: 'ChosunGs', serif;">宗</span><span style="font-family: 'HancomHoonminjeongeum', serif;">종</span><span style="font-family: 'ChosunGs', serif;">御</span><span style="font-family: 'HancomHoonminjeongeum', serif;">엉</span><span style="font-family: 'ChosunGs', serif;">製</span><span style="font-family: 'HancomHoonminjeongeum', serif;">졩</span><br><span style="font-family: 'ChosunGs', serif;">訓</span><span style="font-family: 'HancomHoonminjeongeum', serif;">훈</span><span style="font-family: 'ChosunGs', serif;">民</span><span style="font-family: 'HancomHoonminjeongeum', serif;">민</span><span style="font-family: 'ChosunGs', serif;">正</span><span style="font-family: 'HancomHoonminjeongeum', serif;">정</span><span style="font-family: 'ChosunGs', serif;">音</span><span style="font-family: 'HancomHoonminjeongeum', serif;">음</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 36]
    {
        num: 36,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "구절별 정밀 분석",
        title: "구절 분석 1: 나랏말미 中國귁에 달아",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="ancient-text-box">
                        <div class="ancient-verse" style="font-size: 32px;">
                            <span class="annotated-word" onclick="showGrammarModal('나랏')">나랏</span>
                            <span class="annotated-word" onclick="showGrammarModal('말미')">말미</span>
                            <span class="annotated-word" onclick="showGrammarModal('中國귁에')">中國귁에</span>
                            <span class="annotated-word" onclick="showGrammarModal('달아')">달아</span>
                            <span class="annotated-word" onclick="showGrammarModal('文문字와로')">文문字와로</span>
                            <span class="annotated-word" onclick="showGrammarModal('서르')">서르</span>
                            <span class="annotated-word" onclick="showGrammarModal('디')">디</span>
                            <span class="annotated-word" onclick="showGrammarModal('아니')">아니</span>
                        </div>
                        <div style="font-size: 16px; color: #a82323; margin-top: 8px; font-weight: bold;">
                            💡 단어를 클릭하면 상세 형태소 분석 및 문법 해설 팝업이 나타납니다.
                        </div>
                    </div>
                    <div class="content-card highlight-card">
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li><strong>나랏</strong>: 나라(ㅎ종성체언) + <strong>ㅅ(무정물 관형격조사)</strong></li>
                            <li><strong>말미</strong>: 말(일반 명사, 높임X) + <strong>이(자음 뒤 주격조사)</strong> → 연철(이어적기)</li>
                            <li><strong>中國귁에</strong>: '에'는 <strong>비교 부사격 조사</strong> ('중국과')</li>
                            <li><strong>달아</strong>: 다- + -아 → '' 불규칙 활용 (현대 '르' 불규칙의 소급형)</li>
                            <li><strong>디</strong>: -(통하다) + -디 → <strong>구개음화X, 8종성 표기</strong></li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container"><img src="media/image33.png" class="slide-img" alt="서문1"></div>
                </div>
            </div>
        `
    },
    // [Slide 37]
    {
        num: 37,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "어휘 의미 변화",
        title: "중세국어 어휘의 의미 변화 3대 유형",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <table class="grammar-table" style="font-size: 22px;">
                    <thead><tr><th style="width: 200px;">유형</th><th>중세국어 의미 (과거)</th><th>현대국어 의미 (현재)</th><th>대표 어휘</th></tr></thead>
                    <tbody>
                        <tr>
                            <td class="category-cell">의미 확대</td>
                            <td>사람/짐승의 다리, 당상관(정3품) 벼슬</td>
                            <td>책상다리 등 무생물로 확장, 노인 일반</td>
                            <td><strong>다리, 영감</strong></td>
                        </tr>
                        <tr>
                            <td class="category-cell">의미 축소</td>
                            <td>살아있는 모든 생물, 보통 사람 일반, 보통 여자, 말(言) 일반</td>
                            <td>인간 제외 동물, 남자의 비속어, 여자의 비속어, 높임말/낮춤말</td>
                            <td><strong>짐승, 놈, 계집, 말씀</strong></td>
                        </tr>
                        <tr>
                            <td class="category-cell">의미 이동</td>
                            <td>불쌍하다, 어리석다, 많다</td>
                            <td>예쁘다(아름답다), 나이가 적다, 동작을 하다</td>
                            <td><strong>어엿브다, 어리다, 하다</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // [Slide 38]
    {
        num: 38,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "의미 변화 확인",
        title: "의미 변화 확인 : '놈'",
        render: `
            <div class="slide-col" style="justify-content: center; align-items: center; text-align: center;">
                <div class="content-card highlight-card" style="max-width: 860px; padding: 48px; width: 100%;">
                    <div style="font-size: 36px; font-weight: bold; color: #2b4162; margin-bottom: 28px;">
                        '놈'의 의미 변화는?
                    </div>
                    <div style="font-size: 30px; line-height: 2.2;">
                        15세기: <strong>보통 사람 일반 (평칭)</strong><br>
                        ↓<br>
                        현대: <strong>남자를 낮추어 부르는 말 (비속어)</strong>
                    </div>
                    
                    <div style="margin-top: 36px;">
                        <button id="btn-ans-38" class="btn-tool btn-primary-action" onclick="revealAnswer('btn-ans-38', 'ans-box-38')" style="font-size: 24px; padding: 14px 32px; border-radius: 30px;">
                            💡 정답 확인하기 (클릭)
                        </button>
                        <div id="ans-box-38" style="display: none; font-size: 42px; font-weight: 900; color: #c0392b;">
                            👉 의미의 [ 축 소 ]
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 39] (불필요 사이드 이미지 제거 & Full width 구절 팝업)
    {
        num: 39,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "구절별 정밀 분석",
        title: "구절 분석 2: 이런 젼로 어린 百姓이",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <div class="ancient-text-box">
                    <div class="ancient-verse" style="font-size: 34px;">
                        <span class="annotated-word" onclick="showGrammarModal('이런')">이런</span>
                        <span class="annotated-word" onclick="showGrammarModal('젼로')">젼로</span>
                        <span class="annotated-word" onclick="showGrammarModal('어린')">어린</span>
                        <span class="annotated-word" onclick="showGrammarModal('百姓이')">百姓이</span>
                        <span class="annotated-word" onclick="showGrammarModal('니르고져')">니르고져</span>
                        <span class="annotated-word" onclick="showGrammarModal('')"></span>
                        <span class="annotated-word" onclick="showGrammarModal('배')">배</span>
                        <span class="annotated-word" onclick="showGrammarModal('이셔도')">이셔도</span>
                    </div>
                    <div style="font-size: 16px; color: #a82323; margin-top: 8px; font-weight: bold;">
                        💡 단어를 클릭하면 상세 형태소 분석 및 문법 해설 팝업이 나타납니다.
                    </div>
                </div>
                <div class="content-card highlight-card" style="margin-top: 14px;">
                    <ul class="bullet-list" style="font-size: 25px;">
                        <li><strong>젼</strong>: '까닭/이유' (소실된 고유어)</li>
                        <li><strong>어린</strong>: '어리석은' (의미 이동)</li>
                        <li><strong>백셩이</strong>: 백셩 + <strong>이(자음 뒤 주격조사)</strong></li>
                        <li><strong>니르고져</strong>: <strong>두음법칙 미적용</strong> ('이르고자')</li>
                        <li><strong> 배</strong>: - + -오-(1인칭/의도) + -ㄹ(관형사형) + ㆆ(된소리부호) + 바 + <strong>ㅣ(모음 뒤 주격조사)</strong></li>
                    </ul>
                </div>
            </div>
        `
    },
    // [Slide 40] (불필요 사이드 이미지 제거 & Full width 구절 팝업)
    {
        num: 40,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "구절별 정밀 분석",
        title: "구절 분석 3: 내 제 들 시러 펴디 몯  노미 하니라",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <div class="ancient-text-box">
                    <div class="ancient-verse" style="font-size: 34px;">
                        <span class="annotated-word" onclick="showGrammarModal('내')">내</span>
                        <span class="annotated-word" onclick="showGrammarModal('제')">제</span>
                        <span class="annotated-word" onclick="showGrammarModal('들')">들</span>
                        <span class="annotated-word" onclick="showGrammarModal('시러')">시러</span>
                        <span class="annotated-word" onclick="showGrammarModal('펴디')">펴디</span>
                        <span class="annotated-word" onclick="showGrammarModal('몯')">몯</span>
                        <span class="annotated-word" onclick="showGrammarModal('노미')">노미</span>
                        <span class="annotated-word" onclick="showGrammarModal('하니라')">하니라</span>
                    </div>
                    <div style="font-size: 16px; color: #a82323; margin-top: 8px; font-weight: bold;">
                        💡 단어를 클릭하면 상세 형태소 분석 및 문법 해설 팝업이 나타납니다.
                    </div>
                </div>
                <div class="content-card highlight-card" style="margin-top: 14px;">
                    <ul class="bullet-list" style="font-size: 25px;">
                        <li><strong>제</strong>: 저 + <strong>ㅣ(관형격조사)</strong> ('자기의')</li>
                        <li><strong>들</strong>: <strong>어두자음군(ㅄ)</strong>, 음성모음조화(-을), 연철(이어적기)</li>
                        <li><strong>시러</strong>: '능히/실어' (소실된 부사)</li>
                        <li><strong>펴디</strong>: <strong>구개음화 미적용</strong> ('펴지')</li>
                        <li><strong>노미</strong>: 놈(사람 일반) + <strong>이(주격조사)</strong> (의미 축소)</li>
                        <li><strong>하니라</strong>: 하다(<strong>많다</strong>) + -니라</li>
                    </ul>
                </div>
            </div>
        `
    },
    // [Slide 41] (불필요 사이드 이미지 제거 & Full width 구절 팝업)
    {
        num: 41,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "구절별 정밀 분석",
        title: "구절 분석 4: 내 이 爲윙야 어엿비 너겨 새로 스믈여듧 字 노니",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <div class="ancient-text-box">
                    <div class="ancient-verse" style="font-size: 33px;">
                        <span class="annotated-word" onclick="showGrammarModal('내')">내</span>
                        <span class="annotated-word" onclick="showGrammarModal('이')">이</span>
                        <span class="annotated-word" onclick="showGrammarModal('爲윙야')">爲윙야</span>
                        <span class="annotated-word" onclick="showGrammarModal('어엿비')">어엿비</span>
                        <span class="annotated-word" onclick="showGrammarModal('너겨')">너겨</span>
                        <span class="annotated-word" onclick="showGrammarModal('새로')">새로</span>
                        <span class="annotated-word" onclick="showGrammarModal('스믈여듧')">스믈여듧</span>
                        <span class="annotated-word" onclick="showGrammarModal('字')">字</span>
                        <span class="annotated-word" onclick="showGrammarModal('노니')">노니</span>
                    </div>
                    <div style="font-size: 16px; color: #a82323; margin-top: 8px; font-weight: bold;">
                        💡 단어를 클릭하면 상세 형태소 분석 및 문법 해설 팝업이 나타납니다.
                    </div>
                </div>
                <div class="content-card highlight-card" style="margin-top: 14px;">
                    <ul class="bullet-list" style="font-size: 25px;">
                        <li><strong>내</strong>: 나 + <strong>ㅣ(주격조사)</strong></li>
                        <li><strong>어엿비</strong>: 어엿브-(<strong>불쌍하다</strong>) + -이(부사파생접미사) (의미 이동)</li>
                        <li><strong>너겨</strong>: <strong>두음법칙 미적용</strong> (녀기다 → 여기다)</li>
                        <li><strong>스믈</strong>: <strong>원순모음화 미적용</strong> (스믈 → 스물)</li>
                        <li><strong>노니</strong>: -(만들다) + --(현재시제) + -오-(1인칭 주어) + -니</li>
                    </ul>
                </div>
            </div>
        `
    },
    // [Slide 42] (불필요 사이드 이미지 제거 & Full width 구절 팝업)
    {
        num: 42,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "구절별 정밀 분석",
        title: "구절 분석 5: 사마다  수 니겨 날로 메 便뼌安킈 고져",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <div class="ancient-text-box">
                    <div class="ancient-verse" style="font-size: 32px;">
                        <span class="annotated-word" onclick="showGrammarModal('사마다')">사마다</span>
                        <span class="annotated-word" onclick="showGrammarModal('')"></span>
                        <span class="annotated-word" onclick="showGrammarModal('수')">수</span>
                        <span class="annotated-word" onclick="showGrammarModal('니겨')">니겨</span>
                        <span class="annotated-word" onclick="showGrammarModal('날로')">날로</span>
                        <span class="annotated-word" onclick="showGrammarModal('메')">메</span>
                        <span class="annotated-word" onclick="showGrammarModal('便뼌安킈')">便뼌安킈</span>
                        <span class="annotated-word" onclick="showGrammarModal('고져')">고져</span>
                        <span class="annotated-word" onclick="showGrammarModal('')"></span>
                        <span class="annotated-word" onclick="showGrammarModal('미니라')">미니라</span>
                    </div>
                    <div style="font-size: 16px; color: #a82323; margin-top: 8px; font-weight: bold;">
                        💡 단어를 클릭하면 상세 형태소 분석 및 문법 해설 팝업이 나타납니다.
                    </div>
                </div>
                <div class="content-card highlight-card" style="margin-top: 14px;">
                    <ul class="bullet-list" style="font-size: 25px;">
                        <li><strong></strong>: <strong>쌍이응(ᅇ)</strong> 표기 (사동 '하여금')</li>
                        <li><strong>수</strong>: 쉽- + -이 → <strong>순경음비읍(ㅸ)</strong> ('쉽게')</li>
                        <li><strong>메</strong>: <strong>어두자음군(ㅄ)</strong> + <strong>명사형 전성어미(-움)</strong> + 에 → - + -움 + -에</li>
                        <li><strong>미니라</strong>: <strong>어두자음군(ㅄ)</strong>, 연철 표기</li>
                    </ul>
                </div>
            </div>
        `
    },
    // [Slide 43]
    {
        num: 43,
        category: "제3부 훈민정음 언해본 서문",
        chapter: "서문 총정리",
        title: "훈민정음 언해본 서문 핵심 총정리",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">음운 및 표기 핵심 요약</div>
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li>이어적기(연철), 세로쓰기, 띄어쓰기 없음</li>
                            <li>소실 음운: ㆍ, ㅸ, ㆆ, ㅿ, ㆁ</li>
                            <li>어두자음군(ㅄ, ㅳ), 방점(성조), 강력한 모음조화</li>
                            <li>구개음화X, 두음법칙X, 원순모음화X</li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card accent-card">
                        <div class="card-title">문법 및 어휘 핵심 요약</div>
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li>주격조사 3형태: 이, ㅣ, Ø (조사 '가' 없음)</li>
                            <li>관형격조사: 무정물/존칭 'ㅅ', 유정물 평칭 '/의'</li>
                            <li>명사형 어미 '-옴/-움' vs 명사파생 접미사 '-/-음'</li>
                            <li>어휘 의미 변화: 어린(이동), 놈(축소), 어엿비(이동)</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 44]
    {
        num: 44,
        category: "제2부 국어사 종합",
        chapter: "음운·표기 복습",
        title: "중세국어의 표기와 음운상 특징 총정리",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <div class="content-card highlight-card">
                    <div class="card-title">중세국어 음운·표기 6대 원칙</div>
                    <ul class="bullet-list" style="font-size: 25px;">
                        <li><strong>1. 표음주의 & 연철(이어적기)</strong>: 소리 나는 대로 앞 음절 종성을 뒤 음절 초성으로 이어 적음</li>
                        <li><strong>2. 8종성법 (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㆁ)</strong>: 종성에서 8개 자음만 발음 및 표기 허용</li>
                        <li><strong>3. 어두자음군</strong>: 단어 첫머리에 서로 다른 자음이 2~3개 연속으로 발음됨 (ㅄ, ㅳ 등)</li>
                        <li><strong>4. 단모음 체계</strong>: 'ㅐ, ㅔ, ㅚ, ㅟ'는 현대와 달리 [ai, ei, oi, ui] 이중모음으로 발음</li>
                        <li><strong>5. 방점과 성조</strong>: 평성(무점), 거성(1점), 상성(2점)으로 단어의 의미 구별</li>
                        <li><strong>6. 강력한 모음조화</strong>: 양성모음(ㅏ,ㅗ,ㆍ)끼리, 음성모음(ㅓ,ㅜ,ㅡ)끼리 엄격 결합</li>
                    </ul>
                </div>
            </div>
        `
    },
    // [Slide 45]
    {
        num: 45,
        category: "제2부 국어사 종합",
        chapter: "문법 체계 복습",
        title: "중세국어의 문법상 특징 총정리",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <div class="content-card accent-card">
                    <div class="card-title">중세국어 문법 6대 핵심 포인트</div>
                    <ul class="bullet-list" style="font-size: 25px;">
                        <li><strong>1. 주격조사</strong>: '이'(자음 뒤) / 'ㅣ'(모음 뒤) / 'Ø'(ㅣ모음 뒤) - 조사 '가' 없음</li>
                        <li><strong>2. 높임 선어말어미 3체계</strong>: 주체(-시/샤-), 객체(-//-), 상대(-/-) 완비</li>
                        <li><strong>3. 명사형 어미 vs 접미사</strong>: 명사형 전성어미(-옴/움) vs 명사 파생 접미사(-/음)</li>
                        <li><strong>4. 관형격 조사</strong>: 무정물 및 존칭 체언 뒤 'ㅅ' / 유정물 평칭 뒤 '/의'</li>
                        <li><strong>5. 존칭 호격 조사</strong>: '하' (예: 님금하 = 임금이시여)</li>
                        <li><strong>6. 1인칭 선어말어미</strong>: '-오/우-' (주어가 1인칭이거나 관형절의 대상일 때 사용)</li>
                    </ul>
                </div>
            </div>
        `
    },
    // [Slide 46]
    {
        num: 46,
        category: "제2부 국어사 종합",
        chapter: "종합 비교표",
        title: "국어사 시기별 표기 & 음운 비교표",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <table class="grammar-table">
                    <thead><tr><th>시대</th><th>표기 방식</th><th>음운 체계 특징</th></tr></thead>
                    <tbody>
                        <tr><td class="center highlight">고대</td><td>한자 음차 (향찰, 이두, 구결)</td><td>예사소리 기본, 된소리 미발달</td></tr>
                        <tr><td class="center highlight">중세</td><td>훈민정음, 연철(이어적기), 띄어쓰기X</td><td>소실자(ㅸ,ㆆ,ㅿ,ㆁ,ㆍ), 어두자음군, 성조(방점), 강력한 모음조화</td></tr>
                        <tr><td class="center highlight">근대</td><td>중철(거듭적기) 출현, 연철→분철 이행</td><td>소실음 순차 탈락, 성조 소실, 어두자음군→된소리화, 구개음화 출현</td></tr>
                        <tr><td class="center highlight">현대</td><td>분철(끊어적기), 띄어쓰기O, 표준맞춤법</td><td>24자 체계, 두음법칙/구개음화 정착, 모음조화 약화</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // [Slide 47]
    {
        num: 47,
        category: "제2부 국어사 종합",
        chapter: "종합 비교표",
        title: "국어사 시기별 어휘 & 문법 비교표",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <table class="grammar-table">
                    <thead><tr><th>시대</th><th>어휘상 특징</th><th>문법상 특징</th></tr></thead>
                    <tbody>
                        <tr><td class="center highlight">고대</td><td>삼국시대부터 한자 어휘 대거 유입</td><td>초보적 격조사 및 어미 발달</td></tr>
                        <tr><td class="center highlight">중세</td><td>고유어 비중 큼, 몽골/여진 외래어, 의미 차이</td><td>주격조사(이/ㅣ/Ø), 높임 선어말어미 3종, 명사형어미(-옴/움)</td></tr>
                        <tr><td class="center highlight">근대</td><td>한자어 증가, 서양 신문물 어휘 유입</td><td>주격조사 '가' 출현, 1인칭 '-오-' 소실, 객체높임 선어말어미 쇠퇴</td></tr>
                        <tr><td class="center highlight">현대</td><td>전문 학술어, 외래어, 신조어 확장</td><td>주격조사(이/가), 현대적 경어법 체계</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // [Slide 48]
    {
        num: 48,
        category: "제2부 국어사 종합",
        chapter: "종합 정리",
        title: "국어사 발전 과정 요약 마인드맵",
        render: `
            <div class="slide-col" style="justify-content: center; align-items: center;">
                <div class="content-card highlight-card" style="max-width: 950px; padding: 36px;">
                    <div style="font-size: 30px; font-weight: bold; color: #2b4162; margin-bottom: 24px; text-align: center;">
                        중세국어에서 현대국어로의 핵심 변화 3가지
                    </div>
                    <div style="font-size: 26px; line-height: 2.1;">
                        1. <strong>소리의 단순화</strong>: 어두자음군 → 된소리 / 방점 소실 / 소실문자 5자 탈락<br>
                        2. <strong>표기의 합리화</strong>: 소리 중심 이어적기(연철) → 뜻 중심 끊어적기(분철)<br>
                        3. <strong>문법의 체계화</strong>: 주격조사 '가' 등장 / 복잡한 높임 선어말어미의 어휘적 높임화
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 49] (육룡 형상화 이미지 적용)
    {
        num: 49,
        category: "제4부 용비어천가",
        chapter: "작품 개관",
        title: "용비어천가 (龍飛御天歌) 개관",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="content-card highlight-card">
                        <div class="card-title">악장의 효시이자 최초의 한글 문헌</div>
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li><strong>갈래</strong>: 악장 (총 125장 장편 서사시)</li>
                            <li><strong>편찬자</strong>: 정인지, 권제, 안지 등 (세종 명으로 편찬)</li>
                            <li><strong>창작 목적</strong>:
                                <br>1. 조선 왕조 개국의 천명성과 정당성 찬양 (육조의 사적)
                                <br>2. 후대 왕에 대한 권계 (경천근민 <span class="hanja">敬天勤民</span>)
                                <br>3. 훈민정음의 실용성 시험 및 보급
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container"><img src="media/six_dragons.jpg" class="slide-img" alt="용비어천가 육룡 비상"></div>
                </div>
            </div>
        `
    },
    // [Slide 50] (고조부, 증조부 줄바꿈 방지)
    {
        num: 50,
        category: "제4부 용비어천가",
        chapter: "육조 찬양",
        title: "조선 건국 육조(六祖)의 사적",
        render: `
            <div class="slide-col" style="justify-content: center; align-items: center;">
                <div class="content-card" style="max-width: 980px; width: 100%;">
                    <div class="card-title">용비어천가에 등장하는 6대 선조</div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 18px;">
                        <div style="background: #fdfcf9; border: 1.5px solid #dcd3be; padding: 20px; border-radius: 10px; text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: #9d2b2b; font-family: var(--font-hanja);">穆祖 (목조)</div>
                            <div style="font-size: 20px; color: #444; margin-top: 8px; white-space: nowrap;">이안사 (태조 고조부)</div>
                        </div>
                        <div style="background: #fdfcf9; border: 1.5px solid #dcd3be; padding: 20px; border-radius: 10px; text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: #9d2b2b; font-family: var(--font-hanja);">翼祖 (익조)</div>
                            <div style="font-size: 20px; color: #444; margin-top: 8px; white-space: nowrap;">이행리 (태조 증조부)</div>
                        </div>
                        <div style="background: #fdfcf9; border: 1.5px solid #dcd3be; padding: 20px; border-radius: 10px; text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: #9d2b2b; font-family: var(--font-hanja);">度祖 (도조)</div>
                            <div style="font-size: 20px; color: #444; margin-top: 8px; white-space: nowrap;">이춘 (태조 조부)</div>
                        </div>
                        <div style="background: #fdfcf9; border: 1.5px solid #dcd3be; padding: 20px; border-radius: 10px; text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: #9d2b2b; font-family: var(--font-hanja);">桓祖 (환조)</div>
                            <div style="font-size: 20px; color: #444; margin-top: 8px; white-space: nowrap;">이자춘 (태조 부친)</div>
                        </div>
                        <div style="background: #fdfcf9; border: 1.5px solid #dcd3be; padding: 20px; border-radius: 10px; text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: #1b4965; font-family: var(--font-hanja);">太祖 (태조)</div>
                            <div style="font-size: 20px; color: #444; margin-top: 8px; white-space: nowrap;">이성계 (조선 개국)</div>
                        </div>
                        <div style="background: #fdfcf9; border: 1.5px solid #dcd3be; padding: 20px; border-radius: 10px; text-align: center;">
                            <div style="font-size: 28px; font-weight: bold; color: #1b4965; font-family: var(--font-hanja);">太宗 (태종)</div>
                            <div style="font-size: 20px; color: #444; margin-top: 8px; white-space: nowrap;">이방원 (왕권 확립)</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 51]
    {
        num: 51,
        category: "제4부 용비어천가",
        chapter: "전체 구성",
        title: "용비어천가의 3단 구성 (서사·본사·결사)",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <table class="grammar-table">
                    <thead><tr><th>구성</th><th>해당 장</th><th>중심 내용 및 대구 형식</th></tr></thead>
                    <tbody>
                        <tr><td class="center highlight">서사 (開國頌)</td><td class="center">제1장 ~ 제2장</td><td>조선 개국의 천명성과 무궁한 왕조 발전 송축</td></tr>
                        <tr><td class="center highlight">본사 (事績讚)</td><td class="center">제3장 ~ 제109장</td><td><strong>앞 절(중국 역대 성왕 사적) ↔ 뒷 절(조선 육조의 사적)</strong> 대구 배열</td></tr>
                        <tr><td class="center highlight">결사 (戒王訓)</td><td class="center">제110장 ~ 제125장</td><td>후대 왕들에 대한 권계 (경천근민, 무망장 <span class="hanja">毋忘章</span>)</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // [Slide 52]
    {
        num: 52,
        category: "제4부 용비어천가",
        chapter: "제1장 분석",
        title: "용비어천가 제1장 정밀 분석",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="ancient-text-box">
                        <div class="ancient-verse" style="font-size: 30px;">
                            海東(해동) 六龍(육룡)이 샤 일마다 天福(천복) 이시니<br>
                            古聖(고성)이 同符(동부)시니
                        </div>
                        <div class="modern-translation">
                            해동(우리나라)에 여섯 용(6조)이 나시어, 하시는 일마다 모두 하늘이 내리신 복이시니, 중국 고대의 여러 성왕들이 하신 일과 부절(부합)을 맞춘 듯 일치하십니다.
                        </div>
                    </div>
                    <div class="content-card highlight-card">
                        <ul class="bullet-list" style="font-size: 24px;">
                            <li><strong>샤</strong>: -(날다) + <strong>-시-(주체높임)</strong> + -아 → <strong>'-샤'</strong>로 축약</li>
                            <li><strong>-시-의 결합 형태</strong>: -시- + 모음어미(-아/-어/-오-) = <strong>-샤-</strong></li>
                            <li><strong>이시니</strong>: 이-(서술격조사) + -시-(주체높임) + -니</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 53] (기존 54 슬라이드: 뿌리깊은나무와 샘이깊은물 이미지 교체)
    {
        num: 53,
        category: "제4부 용비어천가",
        chapter: "제2장 분석",
        title: "용비어천가 제2장 정밀 분석 (불휘 기픈 남)",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="ancient-text-box">
                        <div class="ancient-verse" style="font-size: 28px; line-height: 1.9;">
                            불휘 기픈 남 매 아니 뮐 곶 됴코 여름 하니<br>
                            미 기픈 므른 래 아니 그츨 내히 이러 바래 가니
                        </div>
                    </div>
                    <div class="content-card highlight-card">
                        <ul class="bullet-list" style="font-size: 22px;">
                            <li><strong>불휘</strong>: 불휘 + <strong>Ø(ㅣ계 모음 뒤 주격조사)</strong> ('뿌리가')</li>
                            <li><strong>남</strong>: <strong>ㄱ곡용 체언</strong> (나무: 나모 + 모음조사 → 남ㄱ +  = 남)</li>
                            <li><strong>곶</strong>: <strong>종성부용초성</strong> 표기 (8종성 이전 원칙 적용)</li>
                            <li><strong>여름</strong>: 열-(열매 맺다) + <strong>-음(명사파생접미사)</strong> ('열매')</li>
                            <li><strong>내히</strong>: 내(ㅎ종성체언: 내ㅎ) + <strong>이(주격조사)</strong> = 내히</li>
                            <li><strong>바래</strong>: 바 + <strong>애(양성모음 처격조사)</strong></li>
                        </ul>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container"><img src="media/deep_roots_water.jpg" class="slide-img" alt="뿌리깊은나무와 샘이깊은물"></div>
                </div>
            </div>
        `
    },
    // [Slide 54] (기존 55 슬라이드)
    {
        num: 54,
        category: "제4부 용비어천가",
        chapter: "시제 선어말어미",
        title: "중세국어 시제 선어말어미 체계",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <table class="grammar-table">
                    <thead><tr><th>시제</th><th>동사</th><th>형용사 / 서술격조사</th><th>용례</th></tr></thead>
                    <tbody>
                        <tr><td class="center highlight">과거 시제</td><td class="center"><strong>Ø (무표지)</strong> / <strong>-더-</strong> (회상)</td><td class="center"><strong>-더-</strong></td><td>뵈니 (과거), 두립더니 (회상)</td></tr>
                        <tr><td class="center highlight">현재 시제</td><td class="center"><strong>--</strong></td><td class="center"><strong>Ø (무표지)</strong></td><td>노니 (동사), 하니, 어렵도다 (형용사)</td></tr>
                        <tr><td class="center highlight">미래 / 추측</td><td class="center"><strong>-리-</strong></td><td class="center"><strong>-리-</strong></td><td>구드시리다, 슬프리라</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // [Slide 55] (기존 56 슬라이드)
    {
        num: 55,
        category: "제4부 용비어천가",
        chapter: "제2장 감상",
        title: "제2장 전문 풀이 및 문학적 의의",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <div class="content-card highlight-card">
                    <div class="card-title">전문 현대어 풀이</div>
                    <div style="font-size: 26px; line-height: 1.8; color: #2b4162;">
                        뿌리가 깊은 나무는 바람에 흔들리지 아니하므로, 꽃 좋고 열매 많나니.<br>
                        샘이 깊은 물은 가뭄에 그치지 아니하므로, 내를 이루어 바다에 가나니.
                    </div>
                </div>
                <div class="content-card accent-card" style="margin-top: 16px;">
                    <div class="card-title">문학적 의의 및 비유 구조</div>
                    <ul class="bullet-list" style="font-size: 24px;">
                        <li><strong>불휘 기픈 남ㄱ & 미 기픈 믈</strong>: 기초가 튼튼하고 유서가 깊은 조선 왕조의 국기(國基) 비유</li>
                        <li><strong>곶 됴코 여름 하니</strong>: 문화의 융성과 국가 번영 비유</li>
                        <li><strong>내히 이러 바래 가니</strong>: 무궁한 발전과 영원성 비유</li>
                        <li>순수 고유어로만 지어졌으며 대구법과 은유법이 가장 뛰어난 장편 서사시의 백미!</li>
                    </ul>
                </div>
            </div>
        `
    },
    // [Slide 56] (기존 57 슬라이드: 붉은새 & 뱀 까치 고사 이미지 2종 추가)
    {
        num: 56,
        category: "제4부 용비어천가",
        chapter: "제7장 분석",
        title: "용비어천가 제7장 정밀 분석 (블근 새 & 야미)",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <div class="ancient-text-box">
                    <div class="ancient-verse" style="font-size: 26px; line-height: 1.9;">
                        블근 새 그를 므러 寢室(침실) 잎에 안니 聖子革命(성자혁명)에 帝祜(제호) 뵈니.<br>
                        야미 가칠 므러 즘겟 가재 연니 聖孫將興(성손장흥)에 嘉祥(가상)이 몬졔시니.
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 14px;">
                    <div class="content-card highlight-card" style="margin-bottom: 0;">
                        <div class="card-title" style="font-size: 22px;">전절: 주나라 문왕 붉은 새 고사</div>
                        <div style="height: 220px; border-radius: 8px; overflow: hidden; margin-bottom: 10px;">
                            <img src="media/red_bird_gate.jpg" style="width: 100%; height: 100%; object-fit: cover;" alt="붉은 새 고사">
                        </div>
                        <div style="font-size: 19px; line-height: 1.5;">
                            • <strong>잎</strong>: 문(門)의 옛말<br>
                            • <strong>뵈니</strong>: 보- + -이-(사동) + <strong>--(객체높임)</strong> + -니
                        </div>
                    </div>
                    <div class="content-card accent-card" style="margin-bottom: 0;">
                        <div class="card-title" style="font-size: 22px;">후절: 조선 도조 큰 뱀·까치 고사</div>
                        <div style="height: 220px; border-radius: 8px; overflow: hidden; margin-bottom: 10px;">
                            <img src="media/snake_magpie_tree.jpg" style="width: 100%; height: 100%; object-fit: cover;" alt="뱀과 까치 고사">
                        </div>
                        <div style="font-size: 19px; line-height: 1.5;">
                            • <strong>즘게</strong>: 큰 나무 / <strong>연니</strong>: 얹으니<br>
                            • <strong>몬졔시니</strong>: 몬져 + 이(서술격) + <strong>-시-(주체높임)</strong>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 57] (기존 58 슬라이드: 드라마 스틸컷 맨 위 1장만 크롭 & 확대)
    {
        num: 57,
        category: "제4부 용비어천가",
        chapter: "객체높임법",
        title: "중세국어 객체높임 선어말어미 (-//-)",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <table class="grammar-table">
                        <thead><tr><th>결합 환경 (어간 끝소리)</th><th>자음 어미 앞</th><th>모음 어미 앞 (순경음화)</th></tr></thead>
                        <tbody>
                            <tr><td class="center highlight">ㄱ, ㅂ, ㅅ, ㅎ 뒤</td><td class="center" style="font-size: 26px;">--</td><td class="center" style="font-size: 26px;">-- (→ --)</td></tr>
                            <tr><td class="center highlight">ㄷ, ㅌ, ㅈ, ㅊ 뒤</td><td class="center" style="font-size: 26px;">--</td><td class="center" style="font-size: 26px;">-- (→ --)</td></tr>
                            <tr><td class="center highlight">모음, ㄴ, ㄹ, ㅁ 뒤</td><td class="center" style="font-size: 26px;">--</td><td class="center" style="font-size: 26px;">-- (→ --)</td></tr>
                        </tbody>
                    </table>
                    <div class="content-card highlight-card" style="margin-top: 14px;">
                        <div style="font-size: 22px; line-height: 1.7;">
                            • <strong>목적어나 부사어가 지칭하는 대상(객체)을 높일 때 사용</strong><br>
                            (현대국어의 '모시다, 드리다, 뵙다, 여쭙다' 등 어휘적 높임으로 변화)
                        </div>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="media-container" style="padding: 10px;">
                        <div style="width: 100%; height: 380px; overflow: hidden; border-radius: 8px; border: 1.5px solid var(--border-color);">
                            <img src="media/image47.png" style="width: 100%; height: auto; display: block; transform: translateY(0);" alt="객체높임 드라마 명장면">
                        </div>
                        <div style="font-size: 15px; color: #666; margin-top: 8px; font-weight: bold;">
                            ▲ SBS 드라마 《뿌리깊은 나무》 객체높임 설명 장면
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 58] (기존 59 슬라이드)
    {
        num: 58,
        category: "제4부 용비어천가",
        chapter: "제7장 고사",
        title: "제7장 배경 고사와 의미",
        render: `
            <div class="slide-body">
                <div class="slide-col">
                    <div class="content-card highlight-card">
                        <div class="card-title">전절: 중국 주나라 문왕 고사</div>
                        <div style="font-size: 24px; line-height: 1.8;">
                            주나라 문왕 때 붉은 새가 천명을 담은 글을 물고 침실 문에 앉았다는 고사<br><br>
                            👉 성자(무왕)의 혁명이 하늘의 복임을 증명
                        </div>
                    </div>
                </div>
                <div class="slide-col">
                    <div class="content-card accent-card">
                        <div class="card-title">후절: 조선 도조(이춘) 고사</div>
                        <div style="font-size: 24px; line-height: 1.8;">
                            태조의 할아버지인 도조가 쏜 까치 두 마리를 큰 뱀이 물어다 나무 위에 올려놓았다는 고사<br><br>
                            👉 성손(태조 이성계)이 일어날 경사로운 징조
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 59] (신규 슬라이드: 의문문 고문헌 사료 단독 대형 뷰어)
    {
        num: 59,
        category: "제4부 용비어천가",
        chapter: "의문문 체계",
        title: "중세국어 의문문 고문헌 사료",
        render: `
            <div class="slide-col" style="align-items: center; justify-content: center;">
                <div class="media-container" style="max-height: 680px; width: 85%;">
                    <img src="media/image48.png" class="slide-img" alt="중세국어 의문문 사료 원본">
                </div>
            </div>
        `
    },
    // [Slide 60] (의문문 용어 변경: 의문문<br>유형, 판정<br>의문문, 설명<br>의문문, 2인칭<br>의문문)
    {
        num: 60,
        category: "제4부 용비어천가",
        chapter: "의문문 체계",
        title: "중세국어의 의문문 체계 (-가 vs -고)",
        render: `
            <div class="slide-col" style="justify-content: center;">
                <table class="grammar-table">
                    <thead>
                        <tr>
                            <th style="width: 220px;">의문문<br>유형</th>
                            <th>설명 / 특징</th>
                            <th>종결 어미</th>
                            <th>현대 방언(동남방언) 대비</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="category-cell">판정<br>의문문</td>
                            <td>Yes / No 단순 긍정·부정 대답 요구 (의문사 없음)</td>
                            <td class="center highlight" style="font-size: 28px;">-가 / -아 / -녀 / -려</td>
                            <td>"밥 묵었<strong>나</strong>?"</td>
                        </tr>
                        <tr>
                            <td class="category-cell">설명<br>의문문</td>
                            <td>구체적인 설명 요구 (의문사 <strong>누구, 무엇, 왜</strong> 등 포함)</td>
                            <td class="center highlight" style="font-size: 28px;">-고 / -오 / -뇨 / -료</td>
                            <td>"뭐 묵<strong>노</strong>?", "이 뭐<strong>꼬</strong>?"</td>
                        </tr>
                        <tr>
                            <td class="category-cell">2인칭<br>의문문</td>
                            <td>주어가 2인칭('너/그대')일 때 특수 의문 어미</td>
                            <td class="center highlight" style="font-size: 28px;">-ㄴ다 / -ㄹ다</td>
                            <td>"네 어듸 가<strong>ㄴ다</strong>?" (가느냐)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    },
    // [Slide 61]
    {
        num: 61,
        category: "제5부 실전 기출",
        chapter: "수능 기출",
        title: "[2014 수능 B형] 실전 기출 문제",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="content-card highlight-card">
                        <div class="card-title">기출 문항 보기 및 분석</div>
                        <div style="font-size: 24px; line-height: 1.8;">
                            <strong>[2014학년도 수능 국어 B형 기출]</strong><br>
                            &lt;보기&gt;의 (가)를 바탕으로 (나)를 이해한 것으로 적절하지 않은 것은?
                        </div>
                        <div class="media-container" style="margin-top: 14px; max-height: 380px;">
                            <img src="media/image49.png" class="slide-img" alt="기출문제 1">
                        </div>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="content-card accent-card">
                        <div class="card-title">정답 및 해설 보기</div>
                        <button class="btn-tool btn-primary-action" onclick="toggleQuizAnswer(61)" style="width: 100%; justify-content: center; padding: 14px; font-size: 20px;">
                            💡 정답 및 핵심 해설 확인
                        </button>
                        <div id="quiz-answer-61" style="display: none; margin-top: 16px; font-size: 20px; line-height: 1.8; color: #2b4162;">
                            <strong>[핵심 포인트]</strong><br>
                            • 주격조사 '이/ㅣ/Ø'의 음운 환경 분별<br>
                            • 객체높임 선어말어미 '-//-'의 결합 원칙<br>
                            • 중세국어 이어적기(연철) 형태소 분해 확인
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    // [Slide 62]
    {
        num: 62,
        category: "제5부 실전 기출",
        chapter: "학평 기출",
        title: "[고1 학평 기출] 실전 기출 문제",
        render: `
            <div class="slide-body">
                <div class="slide-col col-wide">
                    <div class="content-card highlight-card">
                        <div class="card-title">2025 · 2026 고1 학평 모의고사 문제</div>
                        <div style="display: flex; gap: 12px; margin-top: 10px;">
                            <div class="media-container" style="flex: 1; max-height: 380px;">
                                <img src="media/image50.png" class="slide-img" alt="학평문제 1">
                            </div>
                            <div class="media-container" style="flex: 1; max-height: 380px;">
                                <img src="media/image51.png" class="slide-img" alt="학평문제 2">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide-col col-narrow">
                    <div class="content-card accent-card">
                        <div class="card-title">추가 문제 이미지 삽입 안내</div>
                        <div style="font-size: 18px; color: #555; margin-bottom: 14px; line-height: 1.6;">
                            나중에 기출문제 이미지를 넣으시려면 <code>questions/</code> 폴더에 넣거나 이미지를 드래그앤드롭하여 브라우저에 바로 추가할 수 있습니다.
                        </div>
                        <button class="btn-tool btn-primary-action" onclick="toggleQuizAnswer(62)" style="width: 100%; justify-content: center; padding: 14px; font-size: 20px;">
                            💡 모범 해설 열기
                        </button>
                        <div id="quiz-answer-62" style="display: none; margin-top: 16px; font-size: 20px; line-height: 1.8; color: #2b4162;">
                            <strong>[해설]</strong><br>
                            훈민정음 제자 원리(상형, 가획, 이체)와 서문 형태소 분석, 용비어천가 2장(불휘기픈남)의 문법적 원리를 종합적으로 묻는 핵심 출제 유형입니다.
                        </div>
                    </div>
                </div>
            </div>
        `
    }
];
