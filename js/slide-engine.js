/**
 * 중세국어 웹 수업 플랫폼 - 슬라이드 엔진 (나눔바른고딕 기본 & 전체 문법 사전 탑재 & 한자 자동 분리)
 */

const SlideEngine = (function() {
    let currentSlideIndex = 0; // 0-indexed
    let isLaserMode = false;

    // 훈민정음 서문 & 용비어천가 전체 구절 문법 해설 사전
    const GRAMMAR_DICT = {
        // [구절 1] 나랏말미 中國귁에 달아 文문字와로 서르 디 아니
        '나랏': {
            title: '나랏 (나라의)',
            desc: '<strong>나라(ㅎ종성체언: 나라ㅎ) + ㅅ(무정물 관형격 조사)</strong><br>• 중세국어에서 관형격 조사 \'ㅅ\'은 <strong>무정명사</strong>(나라, 집) 또는 <strong>존칭의 유정명사</strong>(부텨, 님금) 뒤에 결합합니다.'
        },
        '말미': {
            title: '말미 (말이)',
            desc: '<strong>말 + 이(주격 조사)</strong><br>• 중세국어에서 \'말\'은 높임의 뜻이 없는 일반 <strong>\'말(言)\'</strong>을 의미합니다 (현대 국어에서는 높임/낮춤으로 <strong>의미 축소</strong>).<br>• 자음 뒤 주격조사 \'이\'가 결합하여 <strong>이어적기(연철)</strong>로 표기되었습니다.'
        },
        '中國귁에': {
            title: '中國귁에 (중국과)',
            desc: '<strong>中國귁 + 에(비교 부사격 조사)</strong><br>• 현대국어의 \'~와/과\'에 해당하는 <strong>비교 부사격 조사</strong>로 \'에\'가 사용되었습니다.<br>• \'中國귁\'은 <strong>동국정운식 한자음 표기</strong>(이상적 중국 원음 표기)입니다.'
        },
        '달아': {
            title: '달아 (달라)',
            desc: '<strong>다-(다르다) + -아(연결어미)</strong><br>• 중세국어의 \'/르\' 불규칙 용언 활용입니다. 어간의 ㆍ/ㅡ가 탈락하고 앞 음절에 \'ㄹ\'이 덧붙어 \'달아\'가 되며, 현대국어 \'르\' 불규칙(다르다→달라)의 직접적 기원입니다.'
        },
        '文문字와로': {
            title: '文문字와로 (한자와는 / 문자와는)',
            desc: '<strong>文문字 + 와로(공동 부사격 조사)</strong><br>• \'와/과\' 뒤에 \'로\'가 결합된 형태입니다.<br>• \'文字\'는 당시 중국의 글자인 <strong>한자(漢字)</strong>를 뜻합니다.'
        },
        '서르': {
            title: '서르 (서로)',
            desc: '<strong>서르 (부사)</strong><br>• 음성모음(ㅓ, ㅡ)끼리 어울린 <strong>모음조화</strong>의 철저한 반영 형태입니다 (현대에는 \'서로\'로 변화).'
        },
        '디': {
            title: '디 (통하지)',
            desc: '<strong>-(통하다) + -디(부정 연결어미)</strong><br>• 원래 어간 말음이 \'ㅊ\'인 \'-\'이나 <strong>8종성법</strong>(ㄱ,ㄴ,ㄷ,ㄹ,ㅁ,ㅂ,ㅅ,ㆁ)에 의해 받침이 \'ㅅ\'으로 표기되었습니다.<br>• ㄷ 앞 모음 환경에서 <strong>구개음화가 일어나지 않아</strong> \'지\'가 아닌 \'디\'로 표기되었습니다.'
        },
        '아니': {
            title: '아니 (아니하므로)',
            desc: '<strong>아니 + -(하다) + -ㄹ(원인·이유 연결어미)</strong><br>• \'-ㄹ\'는 \'~하므로, ~하기 때문에\'를 나타내는 중세국어의 대표적인 종속적 연결어미입니다.'
        },

        // [구절 2] 이런 젼로 어린 百姓이 니르고져  배 이셔도
        '이런': {
            title: '이런 (이러한)',
            desc: '<strong>이러-(이러하다) + -ㄴ(관형사형 어미)</strong><br>• 관형사 역할을 하는 지시어입니다.'
        },
        '젼로': {
            title: '젼로 (까닭으로 / 이유로)',
            desc: '<strong>젼(까닭, 이유) + 로(부사격 조사)</strong><br>• \'젼\'는 \'까닭/이유\'를 뜻하던 고유어로, 현대 국어에서는 <strong>소실된 어휘</strong>입니다.'
        },
        '어린': {
            title: '어린 (어리석은)',
            desc: '<strong>어리-(어리석다) + -ㄴ(관형사형 어미)</strong><br>• 15세기에는 \'어리석다\'의 뜻이었으나, 현대 국어에서는 \'나이가 적다\'로 <strong>의미가 이동(變化)</strong>한 대표적 어휘입니다.'
        },
        '百姓이': {
            title: '百姓이 (백성이)',
            desc: '<strong>百姓 + 이(주격 조사)</strong><br>• 자음(옛이응 ㆁ) 뒤이므로 주격 조사 <strong>\'이\'</strong>가 결합하였습니다.<br>• 동국정운식 한자음 표기로 성(姓)에 형식 종성 ㆁ이 붙어 있습니다.'
        },
        '니르고져': {
            title: '니르고져 (말하고자 / 이르고자)',
            desc: '<strong>니르-(이르다/말하다) + -고져(희망 연결어미)</strong><br>• 어두에 \'ㄴ\'이 유지되어 <strong>두음법칙이 적용되지 않았음</strong>을 보여줍니다.'
        },
        '': {
            title: ' (할 / 하는)',
            desc: '<strong>-(하다) + -오-(1인칭/의도) + -ㄹ(관형사형) + ㆆ(된소리부호)</strong><br>• 뒤에 오는 \'바\'를 된소리 [빠]로 발음하게 하는 <strong>여린히읗(ㆆ, 된소리 부호/절음 부호)</strong>이 사용되었습니다.'
        },
        '배': {
            title: '배 (바가)',
            desc: '<strong>바(의존명사) + ㅣ(주격 조사)</strong><br>• 모음(ㅏ) 뒤이므로 주격 조사 <strong>\'ㅣ\'</strong>가 결합하여 \'배\'로 축약되었습니다 (중세국어에는 주격조사 \'가\'가 없었음).'
        },
        '이셔도': {
            title: '이셔도 (있어도)',
            desc: '<strong>잇-(있다) + -어도(양보 연결어미)</strong><br>• \'잇-\'의 어간 말음과 모음 어미가 결합하여 이어적기(연철) 표기되었습니다.'
        },

        // [구절 3] 내 제 들 시러 펴디 몯 노미 하니라
        '내': {
            title: '내 (마침내)',
            desc: '<strong>내 (부사)</strong><br>• 양성모음(ㆍ)끼리 결합한 모음조화 형태입니다.'
        },
        '제': {
            title: '제 (자기의 / 자신의)',
            desc: '<strong>저(재귀대명사) + ㅣ(관형격 조사)</strong><br>• \'자신의, 자기의\'를 뜻하는 관형격 결합 형태입니다.'
        },
        '들': {
            title: '들 (뜻을)',
            desc: '<strong>(뜻) + 을(목적격 조사)</strong><br>• 초성에 <strong>어두자음군(ㅄ계: ᄠ)</strong>이 사용되었습니다.<br>• 음성모음(ㅡ) 뒤이므로 음성 목적격 조사 <strong>\'을\'</strong>이 결합하여 이어적기(연철)되었습니다.'
        },
        '시러': {
            title: '시러 (능히 / 능숙하게)',
            desc: '<strong>시러 (부사)</strong><br>• \'능히, 실어\'의 뜻을 지닌 고유어 부사로, 현대에는 <strong>소실된 어휘</strong>입니다.'
        },
        '펴디': {
            title: '펴디 (펴지)',
            desc: '<strong>펴-(펴다) + -디(부정 연결어미)</strong><br>• ㄷ이 모음 ㅣ 앞에서 ㅈ으로 변하지 않아 <strong>구개음화가 일어나지 않았음</strong>을 보여줍니다.'
        },
        '몯': {
            title: '몯 (못할)',
            desc: '<strong>몯(부정부사) + -(하다) + -ㄹ(관형사형 어미)</strong><br>• ㄷ받침 부정부사 \'몯\'과 결합한 형태입니다.'
        },
        '노미': {
            title: '노미 (사람이)',
            desc: '<strong>놈(사람 일반) + 이(주격 조사)</strong><br>• 15세기에는 보통 <strong>\'사람 일반(평칭)\'</strong>을 가리켰으나, 현대에는 \'남자를 낮잡아 부르는 말(비속어)\'로 <strong>의미가 축소</strong>되었습니다.<br>• 자음 뒤 주격조사 \'이\' 결합 및 이어적기(연철).'
        },
        '하니라': {
            title: '하니라 (많으니라)',
            desc: '<strong>하-(많다) + -니라(서술 종결어미)</strong><br>• 15세기 <strong>\'하다\' = 많다(多) / 크다(大)</strong> (현대 국어의 \'동작을 하다\'는 중세에 <strong>\'다\'</strong>로 표기).'
        },

        // [구절 4] 내 이 爲윙야 어엿비 너겨 새로 스믈여듧 字 노니
        '내': {
            title: '내 (내가)',
            desc: '<strong>나(1인칭 대명사) + ㅣ(주격 조사)</strong><br>• 모음 뒤 주격 조사 \'ㅣ\'가 결합하여 \'내\'가 됨 (세종대왕 자신을 지칭).'
        },
        '이': {
            title: '이 (이를 / 이것을)',
            desc: '<strong>이(지시대명사) + (목적격 조사)</strong><br>• 모음 뒤 목적격 조사 \'\' 결합.'
        },
        '爲윙야': {
            title: '爲윙야 (위하여)',
            desc: '<strong>爲윙(동국정운식 한자음) + -(하다) + -아(연결어미)</strong><br>• 한자음 받침에 형식 종성 \'ㅇ\'이 붙은 동국정운식 표기입니다.'
        },
        '어엿비': {
            title: '어엿비 (불쌍히 / 가엾게)',
            desc: '<strong>어엿브-(불쌍하다) + -이(부사 파생 접미사)</strong><br>• 15세기에는 <strong>\'불쌍하다, 가엽다\'</strong>의 뜻이었으나, 현대에는 \'아름답다, 예쁘다\'로 <strong>의미가 이동(變化)</strong>하였습니다.'
        },
        '너겨': {
            title: '너겨 (여겨 / 생각하여)',
            desc: '<strong>너기-(여기다) + -어(연결어미)</strong><br>• 어두에 \'ㄴ\'이 남아 있어 <strong>두음법칙이 적용되지 않았음</strong>을 보여줍니다.'
        },
        '새로': {
            title: '새로 (새로이)',
            desc: '<strong>새로 (부사)</strong><br>• 창조 정신을 나타냅니다.'
        },
        '스믈여듧': {
            title: '스믈여듧 (스물여덟)',
            desc: '<strong>스믈(20) + 여듧(8)</strong><br>• \'스믈\'은 순음(ㅁ) 아래에서 \'ㅡ\'가 \'ㅜ\'로 바뀌지 않아 <strong>원순모음화가 일어나지 않았음</strong>을 보여줍니다.'
        },
        '字': {
            title: '字 (글자를)',
            desc: '<strong>字(동국정운식 한자음) + (목적격 조사)</strong><br>• 훈민정음 28자를 뜻합니다.'
        },
        '노니': {
            title: '노니 (만드노니)',
            desc: '<strong>-(만들다) + --(현재시제 선어말어미) + -오-(1인칭 주어 일치) + -니</strong><br>• 어간 말음 \'ㄹ\'이 \'--\' 앞에서 탈락하고, 1인칭 주어(내)를 나타내는 <strong>\'-오-\'</strong>가 결합하였습니다.'
        },

        // [구절 5] 사마다  수 니겨 날로 메 便뼌安킈 고져  미니라
        '사마다': {
            title: '사마다 (사람마다)',
            desc: '<strong>사(사람) + 마다(보조사)</strong><br>• 모든 백성을 지칭합니다.'
        },
        '': {
            title: ' (하여금 / 하게 하여)',
            desc: '<strong>-(하다) + -이-(사동) + -어(연결어미)</strong><br>• 쌍이응(ᅇ)이 사용된 특수 사동 표기입니다.'
        },
        '수': {
            title: '수 (쉽게)',
            desc: '<strong>쉽-(쉽다) + -이(부사 파생 접미사)</strong><br>• 모음 어미 앞에서 ㅂ이 <strong>순경음 비읍(ㅸ)</strong>으로 바뀐 형태입니다 (수 → 수이 → 쉬이).'
        },
        '니겨': {
            title: '니겨 (익혀)',
            desc: '<strong>익히-(익히다) / 닏-(익다) + -어</strong><br>• <strong>두음법칙 미적용</strong> 형태입니다.'
        },
        '날로': {
            title: '날로 (날마다)',
            desc: '<strong>날(日) + -로(부사격 조사)</strong><br>• 실용 정신을 나타냅니다.'
        },
        '메': {
            title: '메 (씀에 / 사용하는 데에)',
            desc: '<strong>-(쓰다) + -움-(명사형 전성어미) + -에(부사격 조사)</strong><br>• 초성에 <strong>어두자음군(ㅄ계: ᄡ)</strong> 사용.<br>• 음성모음(ㅡ) 뒤이므로 음성 <strong>명사형 전성어미 \'-움-\'</strong>이 결합하여 이어적기되었습니다.'
        },
        '便뼌安킈': {
            title: '便뼌安킈 (편안하게)',
            desc: '<strong>便뼌安 + -(하다) + -게 → 편안킈</strong><br>• \'ㅎ + ㄱ\'이 축약되어 거센소리 <strong>\'ㅋ(킈)\'</strong>으로 표기되었습니다.'
        },
        '고져': {
            title: '고져 (하고자)',
            desc: '<strong>-(하다) + -고져(희망 연결어미)</strong><br>• 백성을 편안케 하려는 애민/실용 정신을 담고 있습니다.'
        },
        '': {
            title: ' (할)',
            desc: '<strong>-(하다) + -ㄹ(관형사형 어미) + ㆆ(된소리 부호)</strong><br>• 뒤에 오는 \'\'을 된소리로 발음하게 합니다.'
        },
        '미니라': {
            title: '미니라 (따름이니라)',
            desc: '<strong>(따름) + 이-(서술격조사) + -니라(종결어미)</strong><br>• 초성에 <strong>어두자음군(ㅄ계: ᄯ)</strong> 표기.<br>• 자음 뒤 서술격조사 \'이-\' 결합 및 이어적기(연철) 표기.'
        }
    };

    function init() {
        // 로컬스토리지에 저장된 편집 슬라이드가 있으면 반영
        if (typeof SlideEditor !== 'undefined') {
            const customData = SlideEditor.loadSavedSlides();
            if (customData) {
                SLIDES_DATA.length = 0;
                customData.forEach(s => SLIDES_DATA.push(s));
            }
        }
        renderSlide(currentSlideIndex);
        renderTOC();
        setupViewportScaler();
        setupKeyBindings();
        setupFontSelector();
        setupPointerEvents();
        updateProgressBar();
    }

    function setupViewportScaler() {
        const scaler = document.getElementById('slide-canvas-scaler');
        const viewport = document.getElementById('presentation-viewport');
        if (!scaler || !viewport) return;

        function resize() {
            const vWidth = viewport.clientWidth;
            const vHeight = viewport.clientHeight;
            const targetWidth = 1600;
            const targetHeight = 900;

            const scaleX = vWidth / targetWidth;
            const scaleY = vHeight / targetHeight;
            const scale = Math.min(scaleX, scaleY) * 0.96;

            scaler.style.transform = `scale(${scale})`;
        }

        window.addEventListener('resize', resize);
        resize();
    }

    function renderSlide(index) {
        if (index < 0 || index >= SLIDES_DATA.length) return;
        currentSlideIndex = index;
        const slide = SLIDES_DATA[index];

        const container = document.getElementById('slide-content-container');
        if (!container) return;

        container.innerHTML = `
            <div class="slide-header-box">
                <div>
                    <div class="slide-category-tag">${slide.category} &gt; ${slide.chapter}</div>
                    <div class="slide-main-title">${slide.title}</div>
                </div>
                <div class="slide-chapter-badge">Slide ${slide.num} / ${SLIDES_DATA.length}</div>
            </div>
            <div class="slide-body">
                ${slide.render}
            </div>
        `;

        const indicator = document.getElementById('current-section-text');
        const counter = document.getElementById('slide-counter-display');
        if (indicator) indicator.innerText = `[${slide.category}] ${slide.title}`;
        if (counter) counter.innerText = `${slide.num} / ${SLIDES_DATA.length}`;

        updateProgressBar();
        highlightTOCItem(index);
        if (typeof SlideEditor !== 'undefined') {
            SlideEditor.bindMediaClickEvents();
        }
    }

    function prevSlide() {
        if (currentSlideIndex > 0) renderSlide(currentSlideIndex - 1);
    }

    function nextSlide() {
        if (currentSlideIndex < SLIDES_DATA.length - 1) renderSlide(currentSlideIndex + 1);
    }

    function goToSlide(num) {
        const idx = num - 1;
        if (idx >= 0 && idx < SLIDES_DATA.length) renderSlide(idx);
    }

    function updateProgressBar() {
        const fill = document.getElementById('progress-bar-fill');
        if (fill) {
            const pct = ((currentSlideIndex + 1) / SLIDES_DATA.length) * 100;
            fill.style.width = pct + '%';
        }
    }

    function renderTOC() {
        const listContainer = document.getElementById('toc-list-items');
        if (!listContainer) return;

        let currentCat = '';
        let html = '';

        SLIDES_DATA.forEach((s, idx) => {
            if (s.category !== currentCat) {
                currentCat = s.category;
                html += `<div class="toc-chapter-title">${currentCat}</div>`;
            }
            html += `
                <div class="toc-item ${idx === currentSlideIndex ? 'active' : ''}" onclick="SlideEngine.goToSlide(${s.num}); SlideEngine.toggleTOC();" id="toc-item-${idx}">
                    <span>${s.num}. ${s.title}</span>
                    <span class="toc-badge">${s.chapter}</span>
                </div>
            `;
        });

        listContainer.innerHTML = html;
    }

    function highlightTOCItem(index) {
        document.querySelectorAll('.toc-item').forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
        });
    }

    function toggleTOC() {
        const drawer = document.getElementById('toc-drawer');
        if (drawer) drawer.classList.toggle('open');
    }

    function setupFontSelector() {
        const select = document.getElementById('font-selector');
        if (!select) return;

        select.addEventListener('change', (e) => {
            document.body.classList.remove('font-batang', 'font-nanum', 'font-hoonmin');
            const fontVal = e.target.value;
            if (fontVal === 'batang') document.body.classList.add('font-batang');
            else if (fontVal === 'nanum') document.body.classList.add('font-nanum');
            else if (fontVal === 'hoonmin') document.body.classList.add('font-hoonmin');
        });
    }

    function setupPointerEvents() {
        const laser = document.getElementById('laser-pointer-dot');
        const viewport = document.getElementById('presentation-viewport');
        if (!laser || !viewport) return;

        viewport.addEventListener('mousemove', (e) => {
            if (isLaserMode) {
                laser.style.left = e.clientX + 'px';
                laser.style.top = e.clientY + 'px';
                laser.style.display = 'block';
            } else {
                laser.style.display = 'none';
            }
        });
    }

    function toggleLaser() {
        isLaserMode = !isLaserMode;
        const btn = document.getElementById('btn-toggle-laser');
        if (btn) btn.classList.toggle('active', isLaserMode);
    }

    function setupKeyBindings() {
        window.addEventListener('keydown', (e) => {
            if (
                e.target.tagName === 'INPUT' || 
                e.target.tagName === 'TEXTAREA' || 
                e.target.isContentEditable || 
                e.target.closest('[contenteditable="true"]') ||
                e.target.closest('#slide-editor-modal') ||
                e.target.closest('#yet-typing-modal') ||
                e.target.closest('.media-edit-popup')
            ) {
                return;
            }

            switch (e.key) {
                case 'ArrowRight':
                case 'PageDown':
                case ' ':
                    e.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                case 'PageUp':
                case 'Backspace':
                    e.preventDefault();
                    prevSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    goToSlide(1);
                    break;
                case 'End':
                    e.preventDefault();
                    goToSlide(SLIDES_DATA.length);
                    break;
                case 'w':
                case 'W':
                    e.preventDefault();
                    WhiteboardEngine.openFullscreenBoard('whiteboard');
                    break;
                case 'b':
                case 'B':
                    e.preventDefault();
                    WhiteboardEngine.openFullscreenBoard('chalkboard');
                    break;
                case 'p':
                case 'P':
                    e.preventDefault();
                    WhiteboardEngine.toggleOverlayPen();
                    break;
                case 'e':
                case 'E':
                    e.preventDefault();
                    if (typeof SlideEditor !== 'undefined') SlideEditor.toggleVisualEdit();
                    break;
                case 't':
                case 'T':
                    e.preventDefault();
                    toggleYetTypingModal();
                    break;
                case 'm':
                case 'M':
                    e.preventDefault();
                    toggleTOC();
                    break;
                case 'l':
                case 'L':
                    e.preventDefault();
                    toggleLaser();
                    break;
                case 'f':
                case 'F':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                case 'Escape':
                    WhiteboardEngine.closeFullscreenBoard();
                    closeYetTypingModal();
                    hideGrammarModal();
                    break;
            }
        });
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    }

    return {
        getCurrentSlideIndex: () => currentSlideIndex,
        renderTOC,
        init,
        prevSlide,
        nextSlide,
        goToSlide,
        toggleTOC,
        toggleLaser,
        toggleFullscreen,
        GRAMMAR_DICT
    };
})();

/**
 * 전역 헬퍼 함수들
 */
function showGrammarModal(word) {
    const popup = document.getElementById('interactive-popup');
    const title = document.getElementById('popup-title-text');
    const body = document.getElementById('popup-body-text');
    if (!popup || !title || !body) return;

    const data = SlideEngine.GRAMMAR_DICT[word] || {
        title: word,
        desc: '상세 문법 해설이 등록되어 있습니다.'
    };

    title.innerHTML = data.title;
    body.innerHTML = data.desc;
    popup.classList.add('open');

    // 화면 중앙 배치
    popup.style.top = '45%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
}

function hideGrammarModal() {
    const popup = document.getElementById('interactive-popup');
    if (popup) popup.classList.remove('open');
}

function toggleQuizAnswer(slideNum) {
    const ans = document.getElementById('quiz-answer-' + slideNum);
    if (ans) {
        ans.style.display = ans.style.display === 'none' ? 'block' : 'none';
    }
}

function revealAnswer(btnId, ansId) {
    const btn = document.getElementById(btnId);
    const ans = document.getElementById(ansId);
    if (btn) btn.style.display = 'none';
    if (ans) {
        ans.style.display = 'block';
        ans.style.animation = 'fadeIn 0.25s ease';
    }
}


function toggleYetTypingModal() {
    const modal = document.getElementById('yet-typing-modal');
    const input = document.getElementById('yet-input-box');
    if (modal) {
        modal.classList.toggle('open');
        if (modal.classList.contains('open') && input && typeof YetHangulIME !== 'undefined') {
            YetHangulIME.bindInput(input);
            setTimeout(() => input.focus(), 50);
        }
    }
}

function closeYetTypingModal() {
    const modal = document.getElementById('yet-typing-modal');
    if (modal) modal.classList.remove('open');
}

function copyYetText() {
    const input = document.getElementById('yet-input-box');
    if (input) {
        navigator.clipboard.writeText(input.value).then(() => {
            alert('중세국어 텍스트가 클립보드에 복사되었습니다! (Ctrl+V로 붙여넣기)');
        });
    }
}
