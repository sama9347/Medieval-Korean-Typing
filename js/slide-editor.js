/**
 * 중세국어 웹 수업 플랫폼 - 슬라이드 비주얼 & 소스 & 미디어 에디터 모듈
 */

const SlideEditor = (function() {
    let isEditing = false;
    const STORAGE_KEY = 'MIDDLE_KOREAN_SLIDES_CUSTOM_DATA';
    let selectedMediaElem = null;

    function loadSavedSlides() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    console.log('Loaded ' + parsed.length + ' slides from LocalStorage.');
                    return parsed;
                }
            }
        } catch (e) {
            console.error('Failed to load from LocalStorage:', e);
        }
        return null;
    }

    function saveToStorage() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(SLIDES_DATA));
            showEditorToast('✅ 변경사항이 자동 저장되었습니다!');
        } catch (e) {
            console.error('Storage save failed:', e);
        }
    }

    /**
     * 1. 화면 즉시 편집 모드 토글 (WYSIWYG contenteditable)
     */
    function toggleVisualEdit() {
        isEditing = !isEditing;
        const container = document.getElementById('slide-content-container');
        const btn = document.getElementById('btn-toggle-visual-edit');

        if (!container) return;

        if (isEditing) {
            container.setAttribute('contenteditable', 'true');
            container.classList.add('visual-editing-mode');
            if (btn) btn.classList.add('active');
            bindMediaClickEvents();
            showEditorToast('✏️ 화면 직접 편집 모드 ON! 글자를 클릭해 수정하거나, 이미지를 클릭해 변경/삭제하세요.');
        } else {
            container.removeAttribute('contenteditable');
            container.classList.remove('visual-editing-mode');
            if (btn) btn.classList.remove('active');
            closeMediaPopup();
            saveCurrentSlideVisual();
            showEditorToast('💾 편집 내용이 저장되었습니다.');
        }
    }

    function saveCurrentSlideVisual() {
        const idx = SlideEngine ? SlideEngine.getCurrentSlideIndex() : 0;
        const container = document.getElementById('slide-content-container');
        if (!container || idx < 0 || idx >= SLIDES_DATA.length) return;

        const bodyElem = container.querySelector('.slide-body');
        const titleElem = container.querySelector('.slide-main-title');
        
        if (bodyElem) {
            SLIDES_DATA[idx].render = bodyElem.innerHTML;
        }
        if (titleElem) {
            SLIDES_DATA[idx].title = titleElem.innerText.trim();
        }

        saveToStorage();
    }

    /**
     * 2. 시각적 이미지/미디어 클릭 편집 팝업 바인딩
     */
    function bindMediaClickEvents() {
        const container = document.getElementById('slide-content-container');
        if (!container) return;

        const images = container.querySelectorAll('img, video, .media-container');
        images.forEach(img => {
            img.style.cursor = 'pointer';
            img.onclick = function(e) {
                if (!isEditing) return;
                e.stopPropagation();
                openMediaPopup(img, e.clientX, e.clientY);
            };
        });
    }

    function openMediaPopup(elem, x, y) {
        selectedMediaElem = elem;
        let popup = document.getElementById('media-edit-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'media-edit-popup';
            popup.className = 'media-edit-popup';
            popup.innerHTML = `
                <div class="media-popup-title">🖼️ 이미지 / 미디어 관리</div>
                <div class="media-popup-buttons">
                    <button class="btn-tool btn-primary-action" onclick="SlideEditor.replaceImageWithFile()">📁 사진 바꾸기 (내 컴퓨터)</button>
                    <button class="btn-tool" onclick="SlideEditor.resizeSelectedMedia(1.2)">🔍 확대</button>
                    <button class="btn-tool" onclick="SlideEditor.resizeSelectedMedia(0.8)">🔎 축소</button>
                    <button class="btn-tool" style="background: #c0392b; color: #fff;" onclick="SlideEditor.deleteSelectedMedia()">🗑️ 사진 삭제</button>
                    <button class="btn-tool" onclick="SlideEditor.closeMediaPopup()">닫기</button>
                </div>
            `;
            document.body.appendChild(popup);
        }

        popup.style.top = Math.min(y, window.innerHeight - 150) + 'px';
        popup.style.left = Math.min(x, window.innerWidth - 320) + 'px';
        popup.classList.add('open');
    }

    function closeMediaPopup() {
        const popup = document.getElementById('media-edit-popup');
        if (popup) popup.classList.remove('open');
        selectedMediaElem = null;
    }

    /**
     * 내 컴퓨터에서 사진 선택하여 즉시 교체
     */
    function replaceImageWithFile() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = function(e) {
            const file = e.target.files[0];
            if (file && selectedMediaElem) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    if (selectedMediaElem.tagName === 'IMG') {
                        selectedMediaElem.src = evt.target.result;
                    } else {
                        const img = selectedMediaElem.querySelector('img');
                        if (img) img.src = evt.target.result;
                    }
                    saveCurrentSlideVisual();
                    closeMediaPopup();
                    showEditorToast('🎉 사진이 성공적으로 교체되었습니다!');
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    }

    /**
     * 새 이미지 삽입 (상단 툴바 버튼용)
     */
    function insertNewImage() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    const idx = SlideEngine ? SlideEngine.getCurrentSlideIndex() : 0;
                    const container = document.getElementById('slide-content-container');
                    const body = container ? container.querySelector('.slide-body') : null;

                    if (body) {
                        const newImgHtml = `
                            <div class="media-container" style="max-height: 480px; margin: 10px auto;">
                                <img src="${evt.target.result}" class="slide-img" style="max-height: 450px;" alt="삽입된 이미지">
                            </div>
                        `;
                        body.insertAdjacentHTML('beforeend', newImgHtml);
                        saveCurrentSlideVisual();
                        bindMediaClickEvents();
                        showEditorToast('🎉 새 사진이 슬라이드에 삽입되었습니다!');
                    }
                };
                reader.readAsDataURL(file);
            }
        };
        fileInput.click();
    }

    /**
     * 선택된 이미지 크기 조절
     */
    function resizeSelectedMedia(scale) {
        if (!selectedMediaElem) return;
        const target = selectedMediaElem.tagName === 'IMG' ? selectedMediaElem : selectedMediaElem.querySelector('img') || selectedMediaElem;
        const curHeight = target.clientHeight || 300;
        target.style.maxHeight = (curHeight * scale) + 'px';
        target.style.height = 'auto';
        saveCurrentSlideVisual();
    }

    /**
     * 선택된 이미지 삭제
     */
    function deleteSelectedMedia() {
        if (!selectedMediaElem) return;
        if (confirm('이 이미지를 슬라이드에서 삭제하시겠습니까?')) {
            const parentCol = selectedMediaElem.closest('.media-container') || selectedMediaElem;
            parentCol.remove();
            saveCurrentSlideVisual();
            closeMediaPopup();
            showEditorToast('🗑️ 이미지가 삭제되었습니다.');
        }
    }

    /**
     * 3. 상세 편집 모달
     */
    function openEditorModal() {
        const idx = SlideEngine ? SlideEngine.getCurrentSlideIndex() : 0;
        const slide = SLIDES_DATA[idx];
        if (!slide) return;

        const modal = document.getElementById('slide-editor-modal');
        const catInput = document.getElementById('edit-slide-category');
        const chapterInput = document.getElementById('edit-slide-chapter');
        const titleInput = document.getElementById('edit-slide-title');
        const contentArea = document.getElementById('edit-slide-content');

        if (!modal) return;

        if (catInput) catInput.value = slide.category;
        if (chapterInput) chapterInput.value = slide.chapter;
        if (titleInput) titleInput.value = slide.title;
        if (contentArea) contentArea.value = slide.render.trim();

        modal.classList.add('open');
    }

    function closeEditorModal() {
        const modal = document.getElementById('slide-editor-modal');
        if (modal) modal.classList.remove('open');
    }

    function applyModalChanges() {
        const idx = SlideEngine ? SlideEngine.getCurrentSlideIndex() : 0;
        if (idx < 0 || idx >= SLIDES_DATA.length) return;

        const catInput = document.getElementById('edit-slide-category');
        const chapterInput = document.getElementById('edit-slide-chapter');
        const titleInput = document.getElementById('edit-slide-title');
        const contentArea = document.getElementById('edit-slide-content');

        if (catInput) SLIDES_DATA[idx].category = catInput.value;
        if (chapterInput) SLIDES_DATA[idx].chapter = chapterInput.value;
        if (titleInput) SLIDES_DATA[idx].title = titleInput.value;
        if (contentArea) SLIDES_DATA[idx].render = contentArea.value;

        saveToStorage();
        closeEditorModal();
        SlideEngine.goToSlide(idx + 1);
        SlideEngine.renderTOC();
        showEditorToast('✅ 슬라이드가 성공적으로 수정되었습니다!');
    }

    function addNewSlide() {
        const currentIdx = SlideEngine ? SlideEngine.getCurrentSlideIndex() : SLIDES_DATA.length - 1;
        const newSlideNum = currentIdx + 2;

        const newSlide = {
            num: newSlideNum,
            category: "선생님 보충 자료",
            chapter: "수업 추가 내용",
            title: "새 슬라이드 제목을 입력하세요",
            render: `
                <div class="slide-col" style="justify-content: center; align-items: center;">
                    <div class="content-card highlight-card" style="width: 90%; padding: 40px;">
                        <div class="card-title">💡 수업 보충 내용 및 판서 포인트</div>
                        <ul class="bullet-list" style="font-size: 26px;">
                            <li>선생님께서 원하시는 설명이나 핵심 요약 내용을 여기에 입력하세요.</li>
                            <li>상단의 '🖼️ 사진 넣기' 버튼을 눌러 사진을 바로 넣으실 수도 있습니다.</li>
                        </ul>
                    </div>
                </div>
            `
        };

        SLIDES_DATA.splice(currentIdx + 1, 0, newSlide);
        SLIDES_DATA.forEach((s, i) => s.num = i + 1);

        saveToStorage();
        SlideEngine.goToSlide(newSlideNum);
        SlideEngine.renderTOC();
        showEditorToast('🎉 새 슬라이드가 추가되었습니다! (Slide ' + newSlideNum + ')');
    }

    function deleteCurrentSlide() {
        if (SLIDES_DATA.length <= 1) {
            alert('슬라이드가 최소 1개 이상 존재해야 합니다.');
            return;
        }

        const idx = SlideEngine ? SlideEngine.getCurrentSlideIndex() : 0;
        const slide = SLIDES_DATA[idx];

        if (confirm(`정말 현재 슬라이드(Slide ${slide.num}: ${slide.title})를 삭제하시겠습니까?`)) {
            SLIDES_DATA.splice(idx, 1);
            SLIDES_DATA.forEach((s, i) => s.num = i + 1);

            saveToStorage();
            const nextIdx = Math.min(idx, SLIDES_DATA.length - 1);
            SlideEngine.goToSlide(nextIdx + 1);
            SlideEngine.renderTOC();
            showEditorToast('🗑️ 슬라이드가 삭제되었습니다.');
        }
    }

    function exportSlidesFile() {
        const fileContent = '/**\n * 중세국어 수업 플랫폼 - 슬라이드 데이터베이스\n * (선생님 맞춤 편집본: ' + new Date().toLocaleString() + ')\n */\n\nconst SLIDES_DATA = ' + JSON.stringify(SLIDES_DATA, null, 4) + ';\n';
        
        const blob = new Blob([fileContent], { type: 'text/javascript;charset=utf-8' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'slides-data.js';
        a.click();
        URL.revokeObjectURL(a.href);

        showEditorToast('💾 slides-data.js 파일이 다운로드되었습니다! (중세국어/js/ 폴더에 넣으시면 영구 반영됩니다)');
    }

    function resetToDefault() {
        if (confirm('모든 수정한 내용을 초기화하고 처음 원본 슬라이드로 되돌리시겠습니까?')) {
            localStorage.removeItem(STORAGE_KEY);
            location.reload();
        }
    }

    function showEditorToast(msg) {
        let toast = document.getElementById('editor-toast-msg');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'editor-toast-msg';
            toast.className = 'editor-toast';
            document.body.appendChild(toast);
        }
        toast.innerText = msg;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    return {
        loadSavedSlides,
        toggleVisualEdit,
        openEditorModal,
        closeEditorModal,
        applyModalChanges,
        addNewSlide,
        deleteCurrentSlide,
        exportSlidesFile,
        resetToDefault,
        showEditorToast,
        replaceImageWithFile,
        insertNewImage,
        resizeSelectedMedia,
        deleteSelectedMedia,
        closeMediaPopup,
        bindMediaClickEvents
    };
})();
