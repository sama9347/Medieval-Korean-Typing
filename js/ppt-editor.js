/**
 * 중세국어 슬라이드 파워포인트급 웹 에디터 스튜디오 엔진 (ppt-editor.js)
 * - 문단/상자 전체 서체 일괄 변경 및 스마트 서체 자동 분리 탑재
 * - 1분 주기 무음 자동저장 & 우하단 컴팩트 토스트 (사진 2번 규격)
 * - 함초롬바탕 표준 두벌식 옛글 타이핑 스튜디오 연동
 */

var PPTStudio = (function() {
    let currentSlideIdx = 0;
    let selectedElement = null;
    let deleteHandleBtn = null;
    const STORAGE_KEY = 'MIDDLE_KOREAN_SLIDES_CUSTOM_DATA';

    function init() {
        loadSlidesData();
        renderThumbnailList();
        loadSlideToCanvas(currentSlideIdx);
        setupViewportScaler();
        setupRibbonTabs();
        setupAutoSave();
        setupKeyBindings();
        setupYetTypingStudio();
        updateStatus();
    }

    function loadSlidesData() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    SLIDES_DATA.length = 0;
                    parsed.forEach(s => SLIDES_DATA.push(s));
                    console.log('Loaded ' + SLIDES_DATA.length + ' slides from LocalStorage.');
                }
            }
        } catch (e) {
            console.error('LocalStorage load failed:', e);
        }
    }

    function saveSlidesData(silent = false) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(SLIDES_DATA));
            if (!silent) {
                showToast('저장완료!');
            }
            updateStatus();
        } catch (e) {
            console.error('Save failed:', e);
        }
    }

    function setupViewportScaler() {
        const scaler = document.getElementById('editor-canvas-scaler');
        const viewport = document.getElementById('canvas-viewport-area');
        if (!scaler || !viewport) return;

        function resize() {
            const vWidth = viewport.clientWidth - 40;
            const vHeight = viewport.clientHeight - 40;
            const targetWidth = 1600;
            const targetHeight = 900;

            const scaleX = vWidth / targetWidth;
            const scaleY = vHeight / targetHeight;
            const scale = Math.min(scaleX, scaleY);

            scaler.style.transform = `scale(${scale})`;
        }

        window.addEventListener('resize', resize);
        resize();
    }

    /**
     * 1. 썸네일 사이드바
     */
    function renderThumbnailList() {
        const list = document.getElementById('thumbnail-items-container');
        if (!list) return;

        let html = '';
        SLIDES_DATA.forEach((s, idx) => {
            const activeClass = idx === currentSlideIdx ? 'active' : '';
            html += `
                <div class="thumb-item ${activeClass}" onclick="PPTStudio.selectSlide(${idx})" id="thumb-item-${idx}">
                    <div class="thumb-index">${idx + 1}</div>
                    <div class="thumb-preview-box">
                        <div style="font-weight: 800; font-size: 7px; color: #a82323; margin-bottom: 2px;">${s.category || ''}</div>
                        <div style="font-weight: 700; font-size: 8px; color: #111; margin-bottom: 2px;">${s.title || '제목 없음'}</div>
                    </div>
                    <div class="thumb-title" title="${s.title}">${s.title}</div>
                </div>
            `;
        });

        list.innerHTML = html;
    }

    /**
     * 2. 슬라이드 캔버스 로드
     */
    function loadSlideToCanvas(idx) {
        if (idx < 0 || idx >= SLIDES_DATA.length) return;
        currentSlideIdx = idx;
        const slide = SLIDES_DATA[idx];

        const container = document.getElementById('editor-slide-canvas');
        if (!container) return;

        removeDeleteHandle();

        container.innerHTML = `
            <div class="slide-header-box">
                <div>
                    <div class="slide-category-tag" contenteditable="true" id="edit-cat-tag">${slide.category} &gt; ${slide.chapter}</div>
                    <div class="slide-main-title" contenteditable="true" id="edit-main-title">${slide.title}</div>
                </div>
                <div class="slide-chapter-badge">Slide ${slide.num} / ${SLIDES_DATA.length}</div>
            </div>
            <div class="slide-body" contenteditable="true" id="edit-slide-body">
                ${slide.render}
            </div>
        `;

        bindCanvasElements(container);
        highlightActiveThumbnail();
        updateInspector();
        updateStatus();
    }

    function selectSlide(idx) {
        saveCurrentCanvasToData(true);
        loadSlideToCanvas(idx);
    }

    function highlightActiveThumbnail() {
        document.querySelectorAll('.thumb-item').forEach((item, idx) => {
            item.classList.toggle('active', idx === currentSlideIdx);
        });
        const activeElem = document.getElementById(`thumb-item-${currentSlideIdx}`);
        if (activeElem) {
            activeElem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    function bindCanvasElements(container) {
        const selectableCards = container.querySelectorAll('.content-card, .ancient-text-box, .grammar-table, .media-container, img, table, .bullet-list');
        selectableCards.forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                setSelectedElement(el);
            });
        });

        container.addEventListener('click', () => {
            setSelectedElement(null);
        });

        container.addEventListener('input', () => {
            saveCurrentCanvasToData(true);
        });
    }

    function setSelectedElement(el) {
        if (selectedElement) {
            selectedElement.classList.remove('selected-element-box');
        }
        removeDeleteHandle();

        selectedElement = el;
        if (selectedElement && selectedElement.id !== 'editor-slide-canvas' && selectedElement.id !== 'edit-slide-body') {
            selectedElement.classList.add('selected-element-box');
            attachDeleteHandle(selectedElement);
        }
        updateInspector();
    }

    function attachDeleteHandle(target) {
        removeDeleteHandle();
        const btn = document.createElement('div');
        btn.className = 'element-delete-btn';
        btn.innerHTML = '✕';
        btn.title = '이 상자/요소 삭제';
        btn.onclick = function(e) {
            e.stopPropagation();
            deleteSelectedElement();
        };
        target.appendChild(btn);
        deleteHandleBtn = btn;
    }

    function removeDeleteHandle() {
        if (deleteHandleBtn && deleteHandleBtn.parentNode) {
            deleteHandleBtn.remove();
        }
        deleteHandleBtn = null;
    }

    function saveCurrentCanvasToData(silent = false) {
        const slide = SLIDES_DATA[currentSlideIdx];
        if (!slide) return;

        removeDeleteHandle();

        const catTag = document.getElementById('edit-cat-tag');
        const mainTitle = document.getElementById('edit-main-title');
        const slideBody = document.getElementById('edit-slide-body');

        if (catTag) {
            const parts = catTag.innerText.split('>');
            if (parts.length >= 2) {
                slide.category = parts[0].trim();
                slide.chapter = parts[1].trim();
            }
        }
        if (mainTitle) slide.title = mainTitle.innerText.trim();
        if (slideBody) {
            const clone = slideBody.cloneNode(true);
            clone.querySelectorAll('.element-delete-btn').forEach(b => b.remove());
            clone.querySelectorAll('.selected-element-box').forEach(b => b.classList.remove('selected-element-box'));
            slide.render = clone.innerHTML;
        }

        saveSlidesData(silent);
    }

    /**
     * 3. 요소 삭제
     */
    function deleteSelectedElement() {
        if (selectedElement && selectedElement.id !== 'editor-slide-canvas' && selectedElement.id !== 'edit-slide-body') {
            selectedElement.remove();
            selectedElement = null;
            removeDeleteHandle();
            saveCurrentCanvasToData(true);
            updateInspector();
            showToast('삭제완료!');
        } else {
            alert('삭제할 상자나 요소를 먼저 클릭해 선택해주세요.');
        }
    }

    /**
     * 4. 서식 명령 & 스마트 서체 엔진
     */
    function execFormat(command, value = null) {
        document.execCommand(command, false, value);
        saveCurrentCanvasToData(true);
    }

    /**
     * 서체 적용:
     * 1) 마우스 드래그 선택 영역이 있으면 해당 글자들만 변경
     * 2) 문단/상자 전체가 선택되어 있으면 하위 모든 자식 노드까지 재귀적으로 일괄 변경
     */
    function applyFontToSelection(fontFamily) {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
            const range = sel.getRangeAt(0);
            const selectedText = range.extractContents();
            const span = document.createElement('span');
            span.style.fontFamily = fontFamily;
            span.appendChild(selectedText);
            range.insertNode(span);

            sel.removeAllRanges();
            const newRange = document.createRange();
            newRange.selectNodeContents(span);
            sel.addRange(newRange);

            saveCurrentCanvasToData(true);
            showToast('선택 글자 서체 적용!');
            return;
        }

        // 문단/상자 전체 적용
        if (selectedElement && selectedElement.id !== 'editor-slide-canvas') {
            selectedElement.style.fontFamily = fontFamily;
            selectedElement.querySelectorAll('*').forEach(child => {
                if (child.className !== 'element-delete-btn') {
                    child.style.fontFamily = fontFamily;
                }
            });
            saveCurrentCanvasToData(true);
            showToast('상자 전체 서체 적용!');
        } else {
            alert('서체를 바꿀 글자를 드래그하거나, 상자/문단을 먼저 클릭해 주세요.');
        }
    }

    /**
     * ✨ 스마트 서체 자동 분리 엔진:
     * 한자 -> 조선궁서체, 옛한글 -> 함초롬바탕, 현대어/해설 -> 나눔바른고딕으로 1초 만에 자동 분리 스타일링
     */
    function applySmartFonts() {
        let target = selectedElement;
        const sel = window.getSelection();
        let isSelectionMode = false;

        if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
            isSelectionMode = true;
        } else if (!target || target.id === 'editor-slide-canvas') {
            target = document.getElementById('edit-slide-body');
        }

        if (!target && !isSelectionMode) {
            alert('스마트 서체를 적용할 문단이나 글자를 선택해 주세요.');
            return;
        }

        function isHanja(code) {
            return (code >= 0x4E00 && code <= 0x9FFF) || 
                   (code >= 0x3400 && code <= 0x4DBF) || 
                   (code >= 0xF900 && code <= 0xFAFF);
        }

        function isOldHangul(code) {
            return (code >= 0x1100 && code <= 0x11FF) || // 첫가끝
                   (code >= 0xA960 && code <= 0xA97F) || // 옛자모 확장A
                   (code >= 0xD7B0 && code <= 0xD7FF) || // 옛자모 확장B
                   (code >= 0xE000 && code <= 0xF8FF) || // 한양 PUA
                   (code === 0x302E || code === 0x302F); // 성조 방점
        }

        function formatSmartHTML(rawText) {
            let html = '';
            let currentType = '';
            let currentBuf = '';

            for (let i = 0; i < rawText.length; i++) {
                const char = rawText[i];
                const code = char.charCodeAt(0);
                let type = 'modern';

                if (isHanja(code)) {
                    type = 'hanja';
                } else if (isOldHangul(code)) {
                    type = 'old';
                } else if (char === ' ' || char === '\n') {
                    type = currentType || 'modern';
                }

                if (type !== currentType) {
                    if (currentBuf) {
                        html += wrapTypeSpan(currentBuf, currentType);
                        currentBuf = '';
                    }
                    currentType = type;
                }
                currentBuf += char;
            }
            if (currentBuf) {
                html += wrapTypeSpan(currentBuf, currentType);
            }
            return html;
        }

        function wrapTypeSpan(text, type) {
            if (type === 'hanja') {
                return `<span class="hanja" style="font-family: 'ChosunGs', serif; color: #111827;">${text}</span>`;
            } else if (type === 'old') {
                return `<span class="ancient-hangul" style="font-family: 'HANBatang', serif; color: #111827;">${text}</span>`;
            } else {
                return `<span class="modern-text" style="font-family: 'NanumBarunGothicYetHangul', sans-serif;">${text}</span>`;
            }
        }

        if (isSelectionMode) {
            const range = sel.getRangeAt(0);
            const rawText = range.toString();
            if (rawText) {
                const span = document.createElement('span');
                span.innerHTML = formatSmartHTML(rawText);
                range.deleteContents();
                range.insertNode(span);
                sel.removeAllRanges();
            }
        } else if (target) {
            const raw = target.innerText;
            if (raw) {
                target.innerHTML = formatSmartHTML(raw);
            }
        }

        saveCurrentCanvasToData(true);
        showToast('✨ 스마트 서체 자동 분리 완료!');
    }

    function setFontSize(sizePx) {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
            const range = sel.getRangeAt(0);
            const selectedText = range.extractContents();
            const span = document.createElement('span');
            span.style.fontSize = sizePx + 'px';
            span.appendChild(selectedText);
            range.insertNode(span);
            sel.removeAllRanges();
            const newRange = document.createRange();
            newRange.selectNodeContents(span);
            sel.addRange(newRange);
        } else if (selectedElement) {
            selectedElement.style.fontSize = sizePx + 'px';
        }
        saveCurrentCanvasToData(true);
    }

    function setTextColor(color) {
        document.execCommand('foreColor', false, color);
        saveCurrentCanvasToData(true);
    }

    function setHighlightColor(color) {
        document.execCommand('hiliteColor', false, color);
        saveCurrentCanvasToData(true);
    }

    /**
     * 5. 요소 삽입
     */
    function insertTextBox() {
        const body = document.getElementById('edit-slide-body');
        if (!body) return;

        const newBox = document.createElement('div');
        newBox.className = 'content-card highlight-card';
        newBox.innerHTML = `
            <div class="card-title" contenteditable="true">✏️ 새 텍스트 상자</div>
            <ul class="bullet-list">
                <li contenteditable="true">내용을 여기에 입력하세요. (상자 클릭 시 삭제 버튼 노출)</li>
            </ul>
        `;
        body.appendChild(newBox);
        saveCurrentCanvasToData(true);
        loadSlideToCanvas(currentSlideIdx);
        showToast('상자 추가!');
    }

    function insertAncientBox() {
        const body = document.getElementById('edit-slide-body');
        if (!body) return;

        const box = document.createElement('div');
        box.className = 'ancient-text-box';
        box.innerHTML = `
            <div class="ancient-verse" contenteditable="true" style="font-family: 'HANBatang', serif;">나랏말ᄊᆞ미 中듕國귁에 달아</div>
            <div class="modern-translation" contenteditable="true">우리나라 말이 중국과 달라</div>
        `;
        body.appendChild(box);
        saveCurrentCanvasToData(true);
        loadSlideToCanvas(currentSlideIdx);
        showToast('원문 추가!');
    }

    function insertTable() {
        const body = document.getElementById('edit-slide-body');
        if (!body) return;

        const table = document.createElement('table');
        table.className = 'grammar-table';
        table.innerHTML = `
            <thead>
                <tr>
                    <th contenteditable="true">구분</th>
                    <th contenteditable="true">15세기 중세국어</th>
                    <th contenteditable="true">현대국어</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="category-cell" contenteditable="true">항목 1</td>
                    <td class="highlight" contenteditable="true" style="font-family: 'HANBatang', serif;">중세 형태</td>
                    <td contenteditable="true">현대 형태</td>
                </tr>
            </tbody>
        `;
        body.appendChild(table);
        saveCurrentCanvasToData(true);
        loadSlideToCanvas(currentSlideIdx);
        showToast('문법표 추가!');
    }

    function insertImageFromFile() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    const body = document.getElementById('edit-slide-body');
                    if (body) {
                        const imgHtml = `
                            <div class="media-container" style="max-height: 480px; margin: 10px auto;">
                                <img src="${evt.target.result}" class="slide-img" style="max-height: 440px;" alt="삽입된 이미지">
                            </div>
                        `;
                        body.insertAdjacentHTML('beforeend', imgHtml);
                        saveCurrentCanvasToData(true);
                        loadSlideToCanvas(currentSlideIdx);
                        showToast('사진 추가!');
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    }

    /**
     * 6. 슬라이드 추가/복제/삭제/이동
     */
    function addNewSlide() {
        const newSlide = {
            num: currentSlideIdx + 2,
            category: "선생님 보충 자료",
            chapter: "수업 추가 내용",
            title: "새 슬라이드 제목을 입력하세요",
            render: `
                <div class="slide-col" style="justify-content: center; align-items: center;">
                    <div class="content-card highlight-card" style="width: 90%; padding: 40px;">
                        <div class="card-title">💡 수업 보충 포인트</div>
                        <ul class="bullet-list" style="font-size: 26px;">
                            <li>새로운 수업 내용이나 퀴즈를 여기에 작성하세요.</li>
                        </ul>
                    </div>
                </div>
            `
        };

        SLIDES_DATA.splice(currentSlideIdx + 1, 0, newSlide);
        SLIDES_DATA.forEach((s, i) => s.num = i + 1);

        saveSlidesData(true);
        renderThumbnailList();
        selectSlide(currentSlideIdx + 1);
        showToast('슬라이드 추가!');
    }

    function duplicateSlide() {
        const current = SLIDES_DATA[currentSlideIdx];
        if (!current) return;

        const copy = JSON.parse(JSON.stringify(current));
        copy.title += ' (복사본)';
        SLIDES_DATA.splice(currentSlideIdx + 1, 0, copy);
        SLIDES_DATA.forEach((s, i) => s.num = i + 1);

        saveSlidesData(true);
        renderThumbnailList();
        selectSlide(currentSlideIdx + 1);
        showToast('슬라이드 복제!');
    }

    function deleteSlide() {
        if (SLIDES_DATA.length <= 1) {
            alert('슬라이드는 최소 1개 이상 남아있어야 합니다.');
            return;
        }

        const current = SLIDES_DATA[currentSlideIdx];
        if (confirm(`정말 슬라이드 ${current.num}번을 삭제하시겠습니까?`)) {
            SLIDES_DATA.splice(currentSlideIdx, 1);
            SLIDES_DATA.forEach((s, i) => s.num = i + 1);

            saveSlidesData(true);
            renderThumbnailList();
            const nextIdx = Math.min(currentSlideIdx, SLIDES_DATA.length - 1);
            selectSlide(nextIdx);
            showToast('슬라이드 삭제!');
        }
    }

    function moveSlideUp() {
        if (currentSlideIdx <= 0) return;
        const temp = SLIDES_DATA[currentSlideIdx];
        SLIDES_DATA[currentSlideIdx] = SLIDES_DATA[currentSlideIdx - 1];
        SLIDES_DATA[currentSlideIdx - 1] = temp;
        SLIDES_DATA.forEach((s, i) => s.num = i + 1);

        saveSlidesData(true);
        renderThumbnailList();
        selectSlide(currentSlideIdx - 1);
    }

    function moveSlideDown() {
        if (currentSlideIdx >= SLIDES_DATA.length - 1) return;
        const temp = SLIDES_DATA[currentSlideIdx];
        SLIDES_DATA[currentSlideIdx] = SLIDES_DATA[currentSlideIdx + 1];
        SLIDES_DATA[currentSlideIdx + 1] = temp;
        SLIDES_DATA.forEach((s, i) => s.num = i + 1);

        saveSlidesData(true);
        renderThumbnailList();
        selectSlide(currentSlideIdx + 1);
    }

    function exportFile() {
        saveCurrentCanvasToData(true);
        const fileContent = '/**\n * 중세국어 수업 플랫폼 - 슬라이드 데이터베이스\n * (파워포인트 에디터 편집본: ' + new Date().toLocaleString() + ')\n */\n\nconst SLIDES_DATA = ' + JSON.stringify(SLIDES_DATA, null, 4) + ';\n';
        
        const blob = new Blob([fileContent], { type: 'text/javascript;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'slides-data.js';
        a.click();
        URL.revokeObjectURL(a.href);

        showToast('파일 다운로드!');
    }

    function resetToOriginal() {
        if (confirm('모든 편집 내용을 초기화하고 처음 원본 슬라이드로 되돌리시겠습니까?')) {
            localStorage.removeItem(STORAGE_KEY);
            location.reload();
        }
    }

    /**
     * 7. 우측 속성 인스펙터
     */
    function updateInspector() {
        const inspector = document.getElementById('inspector-dynamic-content');
        if (!inspector) return;

        if (!selectedElement || selectedElement.id === 'editor-slide-canvas') {
            const slide = SLIDES_DATA[currentSlideIdx];
            inspector.innerHTML = `
                <div class="inspector-section">
                    <div class="inspector-section-title">슬라이드 기본 정보</div>
                    <div class="prop-row">
                        <span class="prop-label">번호</span>
                        <span style="font-weight: 700; color: #fff;">${slide.num} / ${SLIDES_DATA.length}</span>
                    </div>
                    <div class="prop-row">
                        <span class="prop-label">대분류</span>
                        <input type="text" class="prop-input" value="${slide.category}" onchange="PPTStudio.updateSlideProp('category', this.value)">
                    </div>
                    <div class="prop-row">
                        <span class="prop-label">소단원</span>
                        <input type="text" class="prop-input" value="${slide.chapter}" onchange="PPTStudio.updateSlideProp('chapter', this.value)">
                    </div>
                    <div class="prop-row">
                        <span class="prop-label">제목</span>
                        <input type="text" class="prop-input" value="${slide.title}" onchange="PPTStudio.updateSlideProp('title', this.value)">
                    </div>
                </div>
            `;
        } else {
            const isImg = selectedElement.tagName === 'IMG';
            inspector.innerHTML = `
                <div class="inspector-section">
                    <div class="inspector-section-title">${isImg ? '이미지 서식 및 삭제' : '선택 상자 서식 및 삭제'}</div>
                    
                    <button class="ribbon-btn" style="background: #c0392b; color: #fff; width: 100%; padding: 10px; margin-bottom: 8px; font-weight: 800;" onclick="PPTStudio.deleteSelectedElement()">
                        🗑️ 이 상자/요소 삭제하기
                    </button>

                    ${isImg ? `
                        <button class="ribbon-btn" style="background: #2b6cb0; color: #fff; width: 100%; margin-top: 4px;" onclick="PPTStudio.replaceSelectedImage()">
                            📁 내 PC 사진으로 교체
                        </button>
                    ` : `
                        <div class="prop-row">
                            <span class="prop-label">배경색</span>
                            <input type="color" class="color-picker-input" onchange="PPTStudio.setElementStyle('backgroundColor', this.value)">
                        </div>
                        <div class="prop-row">
                            <span class="prop-label">글자색</span>
                            <input type="color" class="color-picker-input" onchange="PPTStudio.setElementStyle('color', this.value)">
                        </div>
                    `}
                </div>
            `;
        }
    }

    function updateSlideProp(key, value) {
        SLIDES_DATA[currentSlideIdx][key] = value;
        saveSlidesData(true);
        renderThumbnailList();
        loadSlideToCanvas(currentSlideIdx);
    }

    function setElementStyle(prop, val) {
        if (selectedElement) {
            selectedElement.style[prop] = val;
            saveCurrentCanvasToData(true);
        }
    }

    function replaceSelectedImage() {
        if (!selectedElement) return;
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    if (selectedElement.tagName === 'IMG') {
                        selectedElement.src = evt.target.result;
                    }
                    saveCurrentCanvasToData(true);
                    showToast('이미지 교체!');
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    }

    /**
     * 8. 중세국어 옛글 타이핑 스튜디오 모달
     */
    function openYetTypingStudio() {
        const modal = document.getElementById('yet-typing-studio-modal');
        const input = document.getElementById('yet-studio-input');
        if (modal) {
            modal.classList.add('open');
            if (input && typeof YetHangulIME !== 'undefined') {
                YetHangulIME.bindInput(input);
                setTimeout(() => input.focus(), 50);
            }
        }
    }

    function closeYetTypingStudio() {
        const modal = document.getElementById('yet-typing-studio-modal');
        if (modal) modal.classList.remove('open');
    }

    function setupYetTypingStudio() {
        const input = document.getElementById('yet-studio-input');
        if (!input || typeof YetHangulIME === 'undefined') return;
        YetHangulIME.bindInput(input);
    }

    function insertTypedYetToSlide() {
        const input = document.getElementById('yet-studio-input');
        if (!input || !input.value.trim()) {
            alert('입력된 중세국어 텍스트가 없습니다.');
            return;
        }

        const text = input.value;
        const body = document.getElementById('edit-slide-body');
        if (body) {
            const box = document.createElement('div');
            box.className = 'content-card';
            box.style.borderLeft = '6px solid #d4af37';
            box.innerHTML = `
                <div style="font-family: 'HANBatang', serif; font-size: 36px; color: #111827; line-height: 1.8; word-break: break-all;" contenteditable="true">
                    ${text}
                </div>
            `;
            body.appendChild(box);
            saveCurrentCanvasToData(true);
            loadSlideToCanvas(currentSlideIdx);
            closeYetTypingStudio();
            showToast('옛글 상자 삽입!');
        }
    }

    function setupRibbonTabs() {
        document.querySelectorAll('.ribbon-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.ribbon-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const tabName = tab.dataset.tab;
                document.querySelectorAll('.ribbon-toolbar-panel').forEach(p => {
                    p.style.display = p.id === `tab-panel-${tabName}` ? 'flex' : 'none';
                });
            });
        });
    }

    function setupAutoSave() {
        setInterval(() => {
            saveCurrentCanvasToData(true);
            const statusIndicator = document.getElementById('status-autosave-indicator');
            if (statusIndicator) {
                statusIndicator.innerText = '⚡ 자동 저장됨 (' + new Date().toLocaleTimeString() + ')';
            }
        }, 60000);
    }

    function setupKeyBindings() {
        window.addEventListener('keydown', (e) => {
            if (e.target.isContentEditable || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            if (e.key === 'Delete' || e.key === 'Backspace') {
                if (selectedElement) {
                    e.preventDefault();
                    deleteSelectedElement();
                }
            } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                if (currentSlideIdx < SLIDES_DATA.length - 1) selectSlide(currentSlideIdx + 1);
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                if (currentSlideIdx > 0) selectSlide(currentSlideIdx - 1);
            } else if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                saveCurrentCanvasToData(false);
            }
        });
    }

    function updateStatus() {
        const count = document.getElementById('status-slide-count');
        if (count) count.innerText = `슬라이드 ${currentSlideIdx + 1} / ${SLIDES_DATA.length}`;
    }

    function showToast(msg = '저장완료!') {
        let toast = document.getElementById('editor-toast-msg');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'editor-toast-msg';
            toast.className = 'editor-toast';
            document.body.appendChild(toast);
        }
        toast.innerText = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 1800);
    }

    return {
        init,
        selectSlide,
        execFormat,
        applyFontToSelection,
        applySmartFonts,
        setFontSize,
        setTextColor,
        setHighlightColor,
        insertTextBox,
        insertAncientBox,
        insertTable,
        insertImageFromFile,
        addNewSlide,
        duplicateSlide,
        deleteSlide,
        moveSlideUp,
        moveSlideDown,
        exportFile,
        resetToOriginal,
        updateSlideProp,
        setElementStyle,
        deleteSelectedElement,
        replaceSelectedImage,
        openYetTypingStudio,
        closeYetTypingStudio,
        insertTypedYetToSlide
    };
})();
