/* =========================================================
   إعدادات اللعبة — عدّل هذا الجزء فقط لكل عميل
   ========================================================= */

// حجم الشبكة: ٥ يعني ٥ صفوف × ٥ أعمدة = ٢٥ خلية
const عدد_الصفوف = 5;

// ترتيب الأسئلة = ترتيب الخلايا (السؤال ١ للخلية الأولى، وهكذا).
// أي سؤال زيادة بعد عدد الخلايا يصير «احتياطي»: يُستخدم إذا أخطأ الفريقان
// وانفتحت نفس الخلية مرة ثانية (لازم يكون بنفس الحرف).
const بيانات_اللعبة = {
  اسم_المناسبة: "تقاعد الأستاذ أحمد",
  اسم_الشخص: "أحمد",
  الأسئلة: [
    { الحرف: "ك", سؤال: "أول سيارة اشتراها؟", الإجابة: "كامري", القصة: "عطّلت أول يوم 😂" },
    { الحرف: "ت", سؤال: "وين قضى شهر العسل؟", الإجابة: "تركيا", القصة: "ضاع بالسوق ساعتين" },
    { الحرف: "ر", سؤال: "تخصّصه الجامعي؟", الإجابة: "رياضيات", القصة: "كان يكره الأرقام!" },
    { الحرف: "ب", سؤال: "وش أكلته المفضّلة؟", الإجابة: "برياني", القصة: "يقيّم كل برياني ياكله من عشرة" },
    { الحرف: "أ", سؤال: "وين انولد؟", الإجابة: "الأحساء", القصة: "انتقل للرياض وعمره عشر سنين" },
    { الحرف: "ح", سؤال: "وش اسم أول ولد له؟", الإجابة: "حمد", القصة: "" },
    { الحرف: "خ", سؤال: "وش يجهّز كل شتاء قبل طلعة البر؟", الإجابة: "خيمة", القصة: "أول خيمة اشتراها طارت مع أول هبّة ريح" },
    { الحرف: "د", سؤال: "وين كانت أول سفرة عمل له؟", الإجابة: "دبي", القصة: "نسي الجواز في الفندق يوم الرجعة" },
    { الحرف: "ز", سؤال: "مين أقرب زميل له طول سنين الخدمة؟", الإجابة: "زياد", القصة: "" },
    { الحرف: "س", سؤال: "وش نوع الساعة اللي ما فارقت يده؟", الإجابة: "سيكو", القصة: "هدية من أبوه يوم تخرّج" },
    { الحرف: "ش", سؤال: "وش يسوي كل خميس مع عياله؟", الإجابة: "شوي", القصة: "" },
    { الحرف: "ص", سؤال: "وش هوايته في الإجازات؟", الإجابة: "صيد السمك", القصة: "أكبر سمكة صادها يقول ٥ كيلو… والشهود يقولون كيلو" },
    { الحرف: "ط", سؤال: "وش الهواية اللي بدأها بعد التقاعد؟", الإجابة: "طبخ", القصة: "" },
    { الحرف: "ع", سؤال: "وش اسم أول مدير اشتغل عنده؟", الإجابة: "عبدالله", القصة: "" },
    { الحرف: "غ", سؤال: "وش الأكلة اللي يطبخها بنفسه في العزايم؟", الإجابة: "غوزي", القصة: "" },
    { الحرف: "ف", سؤال: "وش أكثر فاكهة يحبها؟", الإجابة: "فراولة", القصة: "" },
    { الحرف: "ق", سؤال: "وش أول شي يطلبه الصبح؟", الإجابة: "قهوة", القصة: "" },
    { الحرف: "ل", سؤال: "وش اسم أول حفيدة له؟", الإجابة: "لمى", القصة: "" },
    { الحرف: "م", سؤال: "وين نفسه يسافر بعد التقاعد؟", الإجابة: "ماليزيا", القصة: "" },
    { الحرف: "ن", سؤال: "مين جاره القديم اللي ما انقطع عنه؟", الإجابة: "ناصر", القصة: "" },
    { الحرف: "ه", سؤال: "وين أبعد مكان سافر له؟", الإجابة: "هونغ كونغ", القصة: "" },
    { الحرف: "و", سؤال: "من وين أصل أهله؟", الإجابة: "وادي الدواسر", القصة: "" },
    { الحرف: "ي", سؤال: "وش اسم بنته الصغيرة؟", الإجابة: "يارا", القصة: "" },
    { الحرف: "ج", سؤال: "وش اسم الحي اللي سكن فيه أول ما تزوّج؟", الإجابة: "الجزيرة", القصة: "" },
    { الحرف: "ض", سؤال: "وش أكثر شي يميّز مجلسه؟", الإجابة: "ضيافة", القصة: "ما يطلع أحد بدون ما يتقهوى" },

    // أسئلة احتياطية (اختيارية) — تُستخدم إذا انفتح نفس الحرف مرة ثانية
    { الحرف: "ك", سؤال: "وش ماركة أول كاميرا عنده؟", الإجابة: "كانون", القصة: "" },
    { الحرف: "ر", سؤال: "وش أول بلد أوروبي زاره؟", الإجابة: "روما", القصة: "" }
  ]
};
/* ========================= نهاية الإعدادات ========================= */


/* =========================================================
   منطق الشبكة (الجيران + الفوز) — مفصول عن الواجهة عشان يسهل اختباره
   =========================================================
   الترتيب: صفوف أفقية، وكل صف فردي (١، ٣، …) مزاح نص خلية.
   الخلية رقمها = صف × عدد_الأعمدة + عمود.
   الفريق ٠ = الأفقي: يربط العمود الأول بالعمود الأخير.
   الفريق ١ = العمودي: يربط الصف الأول بالصف الأخير.
*/
const منطق_الشبكة = (function () {

  // الجيران الستة لخلية (ص، ع):
  // - نفس الصف: اليمين واليسار.
  // - الصف اللي فوق واللي تحت: خليتين لكل صف، وأي خليتين بالضبط
  //   يعتمد على هل الصف زوجي أو فردي (لأن الفردي مزاح نص خلية).
  function الجيران(ص, ع, ن) {
    const إزاحات = (ص % 2 === 0)
      ? [[0, -1], [0, 1], [-1, -1], [-1, 0], [1, -1], [1, 0]]   // صف زوجي
      : [[0, -1], [0, 1], [-1, 0], [-1, 1], [1, 0], [1, 1]];    // صف فردي (مزاح)
    const نتيجة = [];
    for (const [دص, دع] of إزاحات) {
      const ص2 = ص + دص, ع2 = ع + دع;
      if (ص2 >= 0 && ص2 < ن && ع2 >= 0 && ع2 < ن) نتيجة.push([ص2, ع2]);
    }
    return نتيجة; // خلايا الأطراف لها أقل من ٦ جيران
  }

  // فحص الفوز: بحث بالعرض (BFS) يبدأ من كل خلايا الفريق على حافة البداية،
  // ويمشي عبر الجيران اللي لنفس الفريق. لو وصل لحافة النهاية = فوز.
  // يرجّع المسار الفائز (عشان نظلّله) أو null.
  function فحص_الفوز(الملاك, فريق, ن) {
    const رقم = (ص, ع) => ص * ن + ع;
    const أب = new Map();
    const طابور = [];

    for (let i = 0; i < ن; i++) {
      // الأفقي يبدأ من العمود ٠، العمودي يبدأ من الصف ٠
      const [ص, ع] = فريق === 0 ? [i, 0] : [0, i];
      if (الملاك[رقم(ص, ع)] === فريق) { أب.set(رقم(ص, ع), -1); طابور.push([ص, ع]); }
    }

    while (طابور.length) {
      const [ص, ع] = طابور.shift();
      const وصل = فريق === 0 ? ع === ن - 1 : ص === ن - 1;
      if (وصل) {
        // نرجع من النهاية للبداية ونجمع المسار
        const مسار = []; let ك = رقم(ص, ع);
        while (ك !== -1) { مسار.push(ك); ك = أب.get(ك); }
        return مسار;
      }
      for (const [ص2, ع2] of الجيران(ص, ع, ن)) {
        const ك2 = رقم(ص2, ع2);
        if (الملاك[ك2] === فريق && !أب.has(ك2)) { أب.set(ك2, رقم(ص, ع)); طابور.push([ص2, ع2]); }
      }
    }
    return null;
  }

  return { الجيران, فحص_الفوز };
})();


/* =========================================================
   الواجهة
   ========================================================= */
(function () {
  const D = بيانات_اللعبة;
  const N = Math.max(2, Math.floor(عدد_الصفوف) || 5);
  const CELLS = N * N;
  const Q = (D.الأسئلة || []).filter(x => x && x.سؤال).map(x => ({ ...x, الحرف: String(x.الحرف || '').trim(), القصة: x.القصة || '' }));
  // ألوان الفريقين ثابتة: برتقالي للأفقي، أزرق للعمودي
  const ORANGE = '#E07A2E', BLUE = '#2D6FB7';
  const SAVE_KEY = 'huroof_game_' + D.اسم_المناسبة;
  const NEUTRAL = '#F4ECE1';

  // حرف كل خلية = حرف السؤال بنفس الترتيب (لو ما فيه سؤال: null)
  const cellLetter = k => (k < Q.length && Q[k].الحرف) ? Q[k].الحرف : null;
  const missingCells = [...Array(CELLS).keys()].filter(k => !cellLetter(k));

  const app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ar = n => Number(n).toLocaleString('ar-SA');
  const $ = id => document.getElementById(id);

  let S = {
    screen: 'start',
    teams: [{ name: 'الفريق الأفقي', color: ORANGE }, { name: 'الفريق العمودي', color: BLUE }],
    game: null
  };

  const store = {
    save() { try { if (S.game && !S.game.winner && S.screen === 'play') localStorage.setItem(SAVE_KEY, JSON.stringify({ teams: S.teams, game: { ...S.game, ov: null } })); } catch (e) {} },
    load() { try { return JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) { return null; } },
    clear() { try { localStorage.removeItem(SAVE_KEY); } catch (e) {} }
  };

  function newGame() { S.game = { owner: Array(CELLS).fill(null), used: [], pending: {}, turn: 0, ov: null, winner: null, path: null }; }
  function go(s) { S.screen = s; render(); window.scrollTo(0, 0); }

  // اختيار السؤال لخلية: سؤالها الأصلي لو ما استُخدم، وإلا أول سؤال
  // احتياطي بنفس الحرف ما استُخدم.
  function pickQuestion(k) {
    const g = S.game, L = cellLetter(k);
    if (!L) return -1;
    g.pending = g.pending || {};
    if (g.pending[k] !== undefined) return g.pending[k];          // نفس السؤال اللي ما أحد عرفه
    const taken = i => g.used.includes(i) || Object.values(g.pending).includes(i);
    if (!taken(k)) return k;
    for (let i = CELLS; i < Q.length; i++) if (Q[i].الحرف === L && !taken(i)) return i;
    for (let i = 0; i < Q.length; i++) if (Q[i].الحرف === L && !taken(i)) return i;
    return -1;
  }

  /* ---------------- رسم الشبكة (SVG) ---------------- */
  function boardSVG() {
    const g = S.game, s = 50, w = Math.sqrt(3) * s;
    const W = w * (N + 0.5), H = s * 1.5 * (N - 1) + 2 * s;
    const onPath = new Set(g.path || []);
    let cells = '';
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) {
      const k = r * N + c;
      // موقع الخلية من اليسار، ثم نعكسه عشان العمود ٠ يكون يمين (RTL)
      const xL = w / 2 + w * (c + 0.5 * (r % 2)), x = W - xL, y = s + 1.5 * s * r;
      const pts = [...Array(6).keys()].map(i => { const a = Math.PI / 180 * (60 * i - 30); return `${(x + (s - 2) * Math.cos(a)).toFixed(1)},${(y + (s - 2) * Math.sin(a)).toFixed(1)}`; }).join(' ');
      const o = g.owner[k], L = cellLetter(k);
      const fill = o === null ? NEUTRAL : S.teams[o].color;
      const free = o === null && !g.winner;
      const open = o === null && g.pending && g.pending[k] !== undefined; // انسأل وما أحد عرفه
      cells += `<g class="cell ${free ? 'free' : ''} ${onPath.has(k) ? 'win' : ''}" data-cell="${k}">
        <polygon points="${pts}" fill="${fill}" stroke="${onPath.has(k) ? '#FFD34D' : open ? '#D64545' : '#fff'}" stroke-width="${onPath.has(k) ? 6 : open ? 5 : 3}" ${open ? 'stroke-dasharray="9 6"' : ''}/>
        <text x="${x}" y="${y + 2}" text-anchor="middle" dominant-baseline="middle" fill="${o === null ? (L ? '#3A2A1E' : '#C9B8A6') : '#fff'}">${esc(L || '؟')}</text></g>`;
    }
    const [h, v] = S.teams;
    // الإطار: يمين ويسار بلون الأفقي، فوق وتحت بلون العمودي
    return `<div class="board" style="border-color:${v.color} ${h.color}">
      <svg viewBox="0 0 ${W.toFixed(0)} ${H.toFixed(0)}" xmlns="http://www.w3.org/2000/svg">${cells}</svg></div>`;
  }

  /* ---------------- الشاشات ---------------- */
  const V = {};

  V.start = () => {
    const saved = store.load();
    const teamBox = (i, dir) => `
      <div class="card team-card" style="border-color:${S.teams[i].color}">
        <div class="team-dir" style="color:${S.teams[i].color}">${dir}</div>
        <input data-tn="${i}" value="${esc(S.teams[i].name)}" maxlength="20">
      </div>`;
    return `
    <div class="hero">
      <div class="hero-icon">⬡</div>
      <div class="hero-title">${esc(D.اسم_المناسبة)}</div>
      <div class="hero-sub">حروف المناسبة · عن <b>${esc(D.اسم_الشخص)}</b></div>
    </div>
    ${missingCells.length ? `<div class="warn">تنبيه للمقدّم: ${ar(missingCells.length)} خلية من ${ar(CELLS)} ما لها سؤال في ملف البيانات، وبتظهر بعلامة ؟</div>` : ''}
    ${saved ? `<button class="btn ghost" id="resume">↩︎ كمّل اللعبة السابقة</button>` : ''}
    ${teamBox(0, '↔ الفريق الأفقي — يوصل من اليمين لليسار')}
    ${teamBox(1, '↕ الفريق العمودي — يوصل من فوق لتحت')}
    <button class="btn primary big" id="play">ابدأ اللعبة</button>`;
  };

  V.play = () => {
    const g = S.game, t = S.teams[g.turn];
    return `
    <div class="topbar">
      <button class="back" id="quit">✕ إنهاء</button>
      <button class="mute" id="mute" aria-label="الصوت">${sound.muted ? '🔇' : '🔊'}</button>
      <div class="turn" style="background:${t.color}">الدور: ${esc(t.name)}</div>
    </div>
    <div class="legend">
      <span><i style="background:${S.teams[0].color}"></i>${esc(S.teams[0].name)} ↔</span>
      <span><i style="background:${S.teams[1].color}"></i>${esc(S.teams[1].name)} ↕</span>
    </div>
    ${boardSVG()}
    <p class="hint">${g.winner ? '' : 'اضغط على خلية فاضية'}${!g.winner && g.pending && Object.keys(g.pending).length ? '<br><span style="color:var(--bad)">الإطار الأحمر المتقطع = سؤال انسأل وما أحد عرفه، يقدر أي فريق يرجع له في دوره</span>' : ''}</p>
    ${g.ov ? overlay() : ''}`;
  };

  // نافذة السؤال
  function overlay() {
    const g = S.game, ov = g.ov, L = cellLetter(ov.cell);
    const q = ov.q >= 0 ? Q[ov.q] : null;
    const answering = S.teams[ov.answering];
    let body = '';

    if (ov.stage === 'ask') {
      body = `
        <div class="who" style="background:${answering.color}">${esc(answering.name)}</div>
        ${g.pending && g.pending[ov.cell] !== undefined ? '<div class="passed">هذا السؤال انسأل قبل وما أحد عرفه</div>' : ''}
        ${q ? `<div class="qtext">${esc(q.سؤال)}</div>`
            : `<div class="warn">${L ? `خلصت أسئلة حرف (${esc(L)}) في ملف البيانات.` : 'هذي الخلية ما لها سؤال في ملف البيانات.'}<br>اسأل سؤالك الخاص وحكّم يدويًا.</div>`}
        ${L ? `<div class="letter-hint">الإجابة تبدأ بحرف <b>(${esc(L)})</b></div>` : ''}
        <div class="row judge"><button class="ok" id="right">صح ✅</button><button class="bad" id="wrong">خطأ ❌</button></div>
        <button class="btn soft small" id="cancel">رجوع للشبكة (اخترت خلية بالغلط)</button>`;
    } else if (ov.stage === 'missed') {
      // خطأ: ما نكشف الجواب عشان الفريق الثاني يقدر يجاوب نفس السؤال في دوره
      body = `
        <div class="verdict" style="color:var(--bad)">❌ إجابة خاطئة من ${esc(answering.name)}</div>
        <div class="card" style="text-align:center;line-height:1.8;font-size:18px">السؤال يبقى مفتوح والجواب ما ينكشف.<br>الفريق الثاني يقدر يختار نفس الخلية في دوره.</div>
        <button class="btn primary big" id="close">إغلاق</button>
        <button class="btn soft small" id="reveal">كشف الإجابة (محد عرفها)</button>`;
    } else {
      const won = ov.result !== null;
      body = `
        <div class="verdict" style="color:${won ? S.teams[ov.result].color : 'var(--bad)'}">
          ${won ? `✅ الخلية لـ ${esc(S.teams[ov.result].name)}` : '👀 انكشفت الإجابة — الخلية تبقى فاضية'}</div>
        ${q ? `<div class="answer"><div class="lb">الإجابة الصحيحة</div><div class="v">${esc(q.الإجابة)}</div></div>
              ${q.القصة ? `<div class="story"><div class="lb">📖 القصة — يحكيها ${esc(D.اسم_الشخص)}</div><div class="tx">${esc(q.القصة)}</div></div>` : ''}` : ''}
        <button class="btn primary big" id="close">إغلاق</button>`;
    }
    const anim = ov.shown ? '' : 'anim'; ov.shown = true; // الحركة بس أول ما تنفتح النافذة
    return `<div class="sheet ${anim}"><div class="sheet-box">
      <div class="big-letter" style="border-color:${answering.color}">${esc(L || '؟')}</div>${body}</div></div>`;
  }

  V.result = () => {
    const w = S.teams[S.game.winner.team];
    return `
    <div class="winner"><div class="cup">🏆</div>
      <div class="wl">الفريق الفائز</div>
      <div class="nm" style="color:${w.color}">${esc(w.name)}</div>
      <div class="wl">${S.game.winner.team === 0 ? 'وصل من اليمين لليسار' : 'وصل من فوق لتحت'}</div>
    </div>
    ${boardSVG()}
    <button class="btn primary big" id="replay">إعادة اللعب</button>
    <button class="btn ghost" id="restart">من البداية</button>`;
  };

  /* ---------------- الأحداث ---------------- */
  function bind() {
    if (S.screen === 'start') {
      document.querySelectorAll('[data-tn]').forEach(el => el.oninput = () => { S.teams[+el.dataset.tn].name = el.value; });
      $('play').onclick = () => {
        S.teams.forEach((t, i) => t.name = t.name.trim() || (i === 0 ? 'الفريق الأفقي' : 'الفريق العمودي'));
        newGame(); go('play');
      };
      if ($('resume')) $('resume').onclick = () => { const s = store.load(); S.teams = s.teams.map((t, i) => ({ name: t.name, color: i === 0 ? ORANGE : BLUE })); S.game = s.game; go('play'); };
    }

    if (S.screen === 'play') {
      const g = S.game;
      $('mute').onclick = () => { sound.toggle(); $('mute').textContent = sound.muted ? '🔇' : '🔊'; };
      $('quit').onclick = () => confirmBox('تنهي اللعبة وترجع للبداية؟', 'نعم، أنهِ', () => { store.clear(); S.game = null; go('start'); });

      // ضغط خلية فاضية: نفتح السؤال للفريق صاحب الدور
      document.querySelectorAll('.cell.free').forEach(el => el.onclick = () => {
        if (g.ov) return;
        const k = +el.dataset.cell;
        sound.open();
        g.ov = { cell: k, q: pickQuestion(k), stage: 'ask', answering: g.turn, result: null };
        render();
      });

      if (g.ov) {
        const ov = g.ov;
        if ($('cancel')) $('cancel').onclick = () => { g.ov = null; render(); };
        if ($('right')) $('right').onclick = () => {
          sound.right();
          g.owner[ov.cell] = ov.answering; ov.result = ov.answering; markUsed(); ov.stage = 'reveal'; render();
        };
        if ($('reveal')) $('reveal').onclick = () => { sound.reveal(); ov.result = null; markUsed(); ov.stage = 'reveal'; render(); };
        // خطأ: الخلية تبقى فاضية والجواب ما ينكشف، والدور ينتقل للخصم بعد الإغلاق.
        // لو اختار أحد نفس الخلية بعدين، ينطرح عليه نفس السؤال.
        if ($('wrong')) $('wrong').onclick = () => { sound.wrong(); ov.result = null; ov.stage = 'missed'; render(); };
        if ($('close')) $('close').onclick = () => {
          g.pending = g.pending || {};
          if (ov.stage === 'missed' && ov.q >= 0) g.pending[ov.cell] = ov.q;   // السؤال يبقى معلّق على الخلية
          else delete g.pending[ov.cell];                                       // انحل أو انكشف
          g.ov = null;
          g.turn = 1 - g.turn; // الدور يتبدّل بالتناوب
          // فحص الفوز بعد كل خلية مكتسبة
          for (const team of [0, 1]) {
            const p = منطق_الشبكة.فحص_الفوز(g.owner, team, N);
            if (p) { g.winner = { team }; g.path = p; break; }
          }
          render();
          if (g.winner) { store.clear(); sound.win(); setTimeout(() => { go('result'); confetti(); }, 1400); }
        };
      }
    }

    if (S.screen === 'result') {
      $('replay').onclick = () => { newGame(); go('play'); };
      $('restart').onclick = () => { S.game = null; go('start'); };
    }
  }

  function markUsed() { const ov = S.game.ov; if (ov.q >= 0 && !S.game.used.includes(ov.q)) S.game.used.push(ov.q); }

  function confirmBox(msg, yesLabel, yes) {
    const m = document.createElement('div'); m.className = 'modal';
    m.innerHTML = `<div class="box"><p>${esc(msg)}</p><div class="row"><button class="bad small" id="y">${esc(yesLabel)}</button><button class="soft small" id="n">إلغاء</button></div></div>`;
    document.body.appendChild(m);
    m.querySelector('#y').onclick = () => { m.remove(); yes(); };
    m.querySelector('#n').onclick = () => m.remove();
  }

  function confetti() {
    const c = [S.teams[0].color, S.teams[1].color, '#E9B949', '#2E9E5B', '#FFFFFF'];
    for (let i = 0; i < 90; i++) {
      const d = document.createElement('div'); d.className = 'confetti';
      d.style.left = Math.random() * 100 + 'vw'; d.style.background = c[i % c.length];
      d.style.animationDuration = (2 + Math.random() * 2) + 's'; d.style.animationDelay = Math.random() * .6 + 's';
      document.body.appendChild(d); setTimeout(() => d.remove(), 5000);
    }
  }

  /* ---------------- الأصوات ----------------
     تتولّد بالكود (Web Audio) بدون ملفات صوت، فتشتغل بدون نت.
     زر 🔊 في أعلى شاشة اللعب يكتمها، والاختيار ينحفظ. */
  const sound = (function () {
    const KEY = 'huroof_muted';
    let ctx = null, muted = false;
    try { muted = localStorage.getItem(KEY) === '1'; } catch (e) {}
    function ac() {
      if (!ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); }
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    }
    // نغمة وحدة: تردد، بداية، مدة، نوع الموجة، الحجم، وتردد نهاية اختياري (انزلاق)
    function tone(f, t0, d, type = 'sine', vol = 0.18, f2) {
      const a = ac(); if (!a) return;
      const o = a.createOscillator(), g = a.createGain(), t = a.currentTime + t0;
      o.type = type; o.frequency.setValueAtTime(f, t);
      if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + d + 0.05);
    }
    const play = fn => { if (muted) return; try { fn(); } catch (e) {} };
    return {
      get muted() { return muted; },
      toggle() { muted = !muted; try { localStorage.setItem(KEY, muted ? '1' : '0'); } catch (e) {} if (!muted) this.open(); },
      open:    () => play(() => tone(880, 0, 0.08, 'sine', 0.10)),                                         // فتح خلية
      right:   () => play(() => { tone(523, 0, 0.14); tone(659, 0.11, 0.14); tone(784, 0.22, 0.28); }),    // صح
      wrong:   () => play(() => tone(240, 0, 0.42, 'sawtooth', 0.10, 140)),                               // خطأ
      reveal:  () => play(() => { tone(440, 0, 0.16, 'triangle'); tone(330, 0.14, 0.26, 'triangle'); }),  // كشف الإجابة
      win:     () => play(() => {                                                                          // فوز
        [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.13, 0.2, 'triangle', 0.2));
        [523, 659, 784].forEach(f => tone(f, 0.6, 0.9, 'sine', 0.12));
      })
    };
  })();

  function render() { app.innerHTML = V[S.screen](); bind(); store.save(); }

  document.title = D.اسم_المناسبة + ' — حروف المناسبة';
  render();

  // تفعيل العمل بدون إنترنت
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
  }
})();
