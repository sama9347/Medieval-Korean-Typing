/**
 * 중세국어 수업용 전자칠판 화이트보드 & 슬라이드 오버레이 드로잉 엔진 (개선판)
 */

const WhiteboardEngine = (function() {
    let overlayCanvas, overlayCtx;
    let modalCanvas, modalCtx;
    
    let isDrawing = false;
    let currentMode = 'overlay'; // 'overlay' | 'modal'
    let currentTool = 'pen'; // 'pen' | 'highlighter' | 'eraser'
    let currentColor = '#f1c40f'; // 기본 분필 노랑
    let currentLineWidth = 5;
    let boardBgType = 'chalkboard'; // 'chalkboard' | 'whiteboard' | 'grid'

    let historyOverlay = [];
    let historyOverlayIndex = -1;
    let historyModal = [];
    let historyModalIndex = -1;

    let lastX = 0, lastY = 0;

    function init() {
        overlayCanvas = document.getElementById('drawing-canvas');
        if (overlayCanvas) {
            overlayCtx = overlayCanvas.getContext('2d', { willReadFrequently: true });
            bindCanvasEvents(overlayCanvas, overlayCtx, 'overlay');
            resizeCanvas(overlayCanvas);
        }

        modalCanvas = document.getElementById('modal-board-canvas');
        if (modalCanvas) {
            modalCtx = modalCanvas.getContext('2d', { willReadFrequently: true });
            bindCanvasEvents(modalCanvas, modalCtx, 'modal');
            resizeCanvas(modalCanvas);
        }

        window.addEventListener('resize', () => {
            if (overlayCanvas) resizeCanvas(overlayCanvas);
            if (modalCanvas) resizeCanvas(modalCanvas);
        });

        setupToolbarEvents();
    }

    function resizeCanvas(canvas) {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
        const ctx = canvas.getContext('2d');
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }

    function bindCanvasEvents(canvas, ctx, modeName) {
        function getCoords(e) {
            const rect = canvas.getBoundingClientRect();
            if (e.touches && e.touches.length > 0) {
                return {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top
                };
            }
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }

        function startDraw(e) {
            isDrawing = true;
            const coords = getCoords(e);
            lastX = coords.x;
            lastY = coords.y;

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            if (currentTool === 'eraser') {
                ctx.globalCompositeOperation = 'destination-out';
                ctx.lineWidth = currentLineWidth * 8;
            } else if (currentTool === 'highlighter') {
                // ★ 진짜 형광펜 처리 (반투명 및 다중 레이어 블렌딩)
                ctx.globalCompositeOperation = modeName === 'overlay' ? 'multiply' : 'source-over';
                ctx.strokeStyle = hexToRgba(currentColor, 0.35); // 35% 투명도
                ctx.lineWidth = currentLineWidth * 5; // 굵은 형광팁
            } else {
                ctx.globalCompositeOperation = 'source-over';
                ctx.strokeStyle = currentColor;
                ctx.lineWidth = currentLineWidth;
            }
        }

        function draw(e) {
            if (!isDrawing) return;
            e.preventDefault();
            const coords = getCoords(e);

            ctx.lineTo(coords.x, coords.y);
            ctx.stroke();

            lastX = coords.x;
            lastY = coords.y;
        }

        function endDraw() {
            if (!isDrawing) return;
            isDrawing = false;
            ctx.closePath();
            saveState(modeName);
        }

        canvas.addEventListener('mousedown', startDraw);
        canvas.addEventListener('mousemove', draw);
        window.addEventListener('mouseup', endDraw);

        canvas.addEventListener('touchstart', startDraw, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        window.addEventListener('touchend', endDraw);
    }

    function hexToRgba(hex, alpha) {
        let c = hex.replace('#', '');
        if (c.length === 3) c = c.split('').map(x => x + x).join('');
        const num = parseInt(c, 16);
        return 'rgba(' + [(num >> 16) & 255, (num >> 8) & 255, num & 255, alpha].join(',') + ')';
    }

    function saveState(modeName) {
        const canvas = modeName === 'overlay' ? overlayCanvas : modalCanvas;
        if (!canvas) return;
        const dataUrl = canvas.toDataURL();
        if (modeName === 'overlay') {
            historyOverlay = historyOverlay.slice(0, historyOverlayIndex + 1);
            historyOverlay.push(dataUrl);
            historyOverlayIndex++;
        } else {
            historyModal = historyModal.slice(0, historyModalIndex + 1);
            historyModal.push(dataUrl);
            historyModalIndex++;
        }
    }

    function undo(modeName) {
        const isOv = modeName === 'overlay';
        const history = isOv ? historyOverlay : historyModal;
        let idx = isOv ? historyOverlayIndex : historyModalIndex;
        const canvas = isOv ? overlayCanvas : modalCanvas;
        const ctx = isOv ? overlayCtx : modalCtx;

        if (idx > 0) {
            idx--;
            if (isOv) historyOverlayIndex = idx; else historyModalIndex = idx;
            const img = new Image();
            img.src = history[idx];
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
            };
        } else if (idx === 0) {
            if (isOv) historyOverlayIndex = -1; else historyModalIndex = -1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    function clearBoard(modeName) {
        const canvas = modeName === 'overlay' ? overlayCanvas : modalCanvas;
        const ctx = modeName === 'overlay' ? overlayCtx : modalCtx;
        if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            saveState(modeName);
        }
    }

    function toggleOverlayPen() {
        const overlay = document.getElementById('whiteboard-overlay');
        const btn = document.getElementById('btn-toggle-overlay-pen');
        if (overlay) {
            overlay.classList.toggle('active');
            const isActive = overlay.classList.contains('active');
            if (btn) btn.classList.toggle('active', isActive);
            currentMode = isActive ? 'overlay' : 'none';
        }
    }

    function openFullscreenBoard(bgType = 'chalkboard') {
        const modal = document.getElementById('fullscreen-board-modal');
        const modalContainer = document.getElementById('modal-board-container');
        if (!modal || !modalContainer) return;

        boardBgType = bgType;
        modalContainer.className = 'board-container-' + bgType;
        modal.classList.add('open');
        currentMode = 'modal';

        setTimeout(() => {
            if (modalCanvas) resizeCanvas(modalCanvas);
        }, 50);
    }

    function closeFullscreenBoard() {
        const modal = document.getElementById('fullscreen-board-modal');
        if (modal) modal.classList.remove('open');
        currentMode = 'overlay';
    }

    function captureAndDownload() {
        const canvas = currentMode === 'modal' ? modalCanvas : overlayCanvas;
        if (!canvas) return;
        
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');

        if (currentMode === 'modal') {
            tempCtx.fillStyle = boardBgType === 'chalkboard' ? '#1a2f23' : '#ffffff';
            tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
        }

        tempCtx.drawImage(canvas, 0, 0);

        const a = document.createElement('a');
        a.download = '중세국어_수업판서_' + new Date().toISOString().slice(0, 10) + '.png';
        a.href = tempCanvas.toDataURL('image/png');
        a.click();
    }

    function setupToolbarEvents() {
        document.querySelectorAll('.color-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
                dot.classList.add('selected');
                currentColor = dot.dataset.color || '#f1c40f';
                if (currentTool === 'eraser') currentTool = 'pen';
            });
        });

        const btnPen = document.getElementById('tool-pen');
        const btnHighlight = document.getElementById('tool-highlighter');
        const btnEraser = document.getElementById('tool-eraser');

        if (btnPen) btnPen.addEventListener('click', () => { currentTool = 'pen'; setActiveToolBtn(btnPen); });
        if (btnHighlight) btnHighlight.addEventListener('click', () => { currentTool = 'highlighter'; setActiveToolBtn(btnHighlight); });
        if (btnEraser) btnEraser.addEventListener('click', () => { currentTool = 'eraser'; setActiveToolBtn(btnEraser); });
    }

    function setActiveToolBtn(activeBtn) {
        document.querySelectorAll('.btn-tool-mode').forEach(b => b.classList.remove('active'));
        if (activeBtn) activeBtn.classList.add('active');
    }

    return {
        init,
        toggleOverlayPen,
        openFullscreenBoard,
        closeFullscreenBoard,
        clearBoard,
        undo,
        captureAndDownload,
        setTool: (t) => currentTool = t,
        setColor: (c) => currentColor = c,
        setLineWidth: (w) => currentLineWidth = w
    };
})();
