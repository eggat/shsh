const departments = {
  business: {
    name: '商業經營科', en: 'BUSINESS MANAGEMENT', title: '把好點子，<br>經營成一門好生意。',
    intro: '從顧客為什麼買，到一間公司如何運作，練習用經營者的角度思考。結合商業、會計與管理知識，學會規劃資源、理解成本，讓每一個決定都有依據。',
    learn: ['商業概論、經濟學與企業管理', '會計、成本會計與金融實務', '行銷、文書處理與計算機應用'],
    practice: ['設計一份校園市集營運企畫', '整理收支，試算成本與毛利', '從顧客需求規劃商品與服務'],
    fit: '喜歡觀察消費、規劃活動，或對品牌經營充滿點子的你。',
    demoTitle: '經營者的小算盤', hint: '拖曳售價，看看毛利怎麼變。',
    demo: `<p class="demo-label">YOUR FIRST POP-UP STORE</p><h3>一杯好茶，怎麼定價？</h3><label for="price">每杯售價 <output id="price-value" for="price">NT$ 60</output></label><input id="price" type="range" min="30" max="100" step="5" value="60"><div class="metrics"><div><small>每杯毛利</small><strong id="gross">25 <em>元</em></strong></div><div><small>毛利率</small><strong id="margin">41.7 <em>%</em></strong></div></div><p class="demo-note" id="price-note">售價 60 元 − 單杯成本 35 元 = 毛利 25 元。<br>還要考慮租金、人力與顧客願付的價格。</p>`
  },
  trade: {
    name: '國際貿易科', en: 'INTERNATIONAL TRADE', title: '讓一件好商品，<br>走進全世界的日常。',
    intro: '一筆跨國訂單，需要懂市場，也需要把細節說清楚。從國際貿易實務、匯兌到商業溝通，認識商品如何跨越國界，培養連結買方與賣方的商務能力。',
    learn: ['國際貿易與國際貿易實務', '國際匯兌、商業溝通與禮儀', '經濟、會計、行銷與計算機應用'],
    practice: ['練習詢價、報價與交易溝通', '整理出口訂單與交易文件', '理解匯率如何影響商品報價'],
    fit: '對不同文化好奇、喜歡與人溝通，想認識世界市場的你。',
    demoTitle: '跨國報價練習', hint: '切換模擬匯率，觀察同一商品的美元報價。',
    demo: `<p class="demo-label">FROM TAIWAN TO THE WORLD</p><h3>把台灣好物，賣向世界。</h3><div class="route"><span><b>◎</b>TAIWAN</span><span>✈<br>跨境訂單</span><span><b>◎</b>WORLD</span></div><p>商品台幣價格：NT$ 960<br>模擬匯率：1 美元可兌換多少台幣？</p><div class="demo-choices" aria-label="模擬匯率"><button data-rate="30" aria-pressed="false">30 元</button><button data-rate="32" aria-pressed="true">32 元</button><button data-rate="34" aria-pressed="false">34 元</button></div><div class="metrics"><div><small>美元商品報價</small><strong id="usd-quote">30.00 <em>USD</em></strong></div><div><small>模擬匯率</small><strong id="exchange">32 <em>TWD / USD</em></strong></div></div><p class="demo-note">以台幣價格 ÷ 匯率換算；未計運費、稅費及匯差風險。此為教學用固定情境，非即時匯率。</p>`
  },
  data: {
    name: '資料處理科', en: 'DATA PROCESSING', title: '把一串數字，<br>變成有用的答案。',
    intro: '喜歡電腦，也想知道技術如何解決問題？從軟體應用、程式設計到網路與專題，練習把資料整理得有條理，再用數位工具做出能被使用的成果。',
    learn: ['數位科技概論、計算機應用', 'Python 與 App Inventor 程式設計', '電腦網路原理、軟體應用與專題'],
    practice: ['用試算表整理銷售資料', '寫程式找出最受歡迎的品項', '規劃一個解決日常問題的小工具'],
    fit: '喜歡邏輯、解謎和數位工具，願意一步步找出問題答案的你。',
    demoTitle: '讓資料自己說話', hint: '按下整理，找出市集的熱銷品項。',
    demo: `<p class="demo-label">A LITTLE CODE, A BIG INSIGHT</p><h3>哪個品項最受歡迎？</h3><div class="code-box">sales = {<em>"茶飲": 48, "餅乾": 72, "果汁": 36</em>}<br>sorted(sales, key=sales.get, reverse=True)</div><div class="data-bars" id="data-bars"><div style="height:60%" data-label="茶飲 48"></div><div style="height:90%" data-label="餅乾 72"></div><div style="height:45%" data-label="果汁 36"></div></div><button class="demo-action" id="sort-data">執行排序 → 找到熱銷商品</button><p class="demo-note" id="data-result" aria-live="polite">銷量為情境示例。程式能幫我們快速整理與比較資料。</p>`
  },
  ecommerce: {
    name: '電子商務科', en: 'E-COMMERCE', title: '讓你的品牌，<br>在每一個螢幕發光。',
    intro: '一個好逛的商務網站，背後需要設計、技術與商業思維。從網頁設計、程式與網路應用出發，認識線上商務的運作，練習把商品與資訊清楚呈現在顧客眼前。',
    learn: ['網頁設計、程式設計與專題製作', '計算機應用、文書處理與軟體應用', '網路架設、安裝與電腦網路原理'],
    practice: ['製作一個商品展示網站', '規劃清楚的商品資訊與瀏覽流程', '結合商業思考，改善線上購物體驗'],
    fit: '喜歡網站、數位內容與線上購物，想把科技用在商業上的你。',
    demoTitle: '商品頁改造提案', hint: '切換標題，體會商品資訊如何幫助顧客。',
    demo: `<p class="demo-label">MAKE YOUR STORE STAND OUT</p><h3>一句標題，說清楚價值。</h3><div class="shop-preview"><div class="shop-product" aria-hidden="true">♧</div><div><span class="shop-badge">CAMPUS SELECT</span><p><strong id="product-title">一個帆布袋</strong></p><p>NT$ 290 · 校園市集情境商品</p></div></div><div class="demo-choices" aria-label="商品標題選擇"><button data-copy="simple" aria-pressed="true">簡單版</button><button data-copy="detail" aria-pressed="false">清楚版</button></div><div class="metrics"><div><small>商品資訊</small><strong id="info-count">1 <em>個重點</em></strong></div><div><small>顧客看見的是</small><strong style="font-size:18px" id="product-value">商品名稱</strong></div></div><p class="demo-note" id="copy-note">名稱讓人知道你在賣什麼；也可以補充材質、用途與特色。此互動示範資訊表達，不預測實際銷量。</p>`
  }
};

const keys = Object.keys(departments);
let currentDepartment = 'business';
const panel = document.getElementById('dept-panel');
const deptSection = document.getElementById('departments');
const tabs = [...document.querySelectorAll('.dept-tabs [role="tab"]')];

function setDepartment(key, focus = false) {
  if (!departments[key]) return;
  currentDepartment = key;
  const d = departments[key];
  deptSection.dataset.theme = key;
  deptSection.querySelector('.departments').dataset.theme = key;
  tabs.forEach(tab => {
    const selected = tab.dataset.key === key;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected && focus) tab.focus();
  });
  panel.setAttribute('aria-labelledby', `tab-${key}`);
  panel.innerHTML = `<div class="dept-layout"><div class="dept-copy"><p class="dept-kicker">${d.en} / ${d.name}</p><h2>${d.title}</h2><p class="dept-intro">${d.intro}</p><div class="dept-learning"><div><h3>在這裡，學什麼？</h3><ul>${d.learn.map(x => `<li>${x}</li>`).join('')}</ul></div><div><h3>你可以這樣實作</h3><ul>${d.practice.map(x => `<li>${x}</li>`).join('')}</ul></div></div><p class="dept-fit"><b>這樣的你，很適合探索</b><br>${d.fit}</p></div><div class="dept-demo"><div class="demo-top"><span>TRY IT YOURSELF</span><span>${d.demoTitle}</span></div><div class="demo-window"><div class="window-bar"><i></i><i></i><i></i><span>SHIN SHING / BUSINESS LAB</span><b>↗</b></div><div class="demo-body">${d.demo}</div></div><p class="demo-hint"><span>↳</span> ${d.hint}</p></div></div>`;
  setupDemo(key);
}

function setupDemo(key) {
  if (key === 'business') {
    document.getElementById('price').addEventListener('input', e => {
      const price = Number(e.target.value), gross = price - 35;
      document.getElementById('price-value').textContent = `NT$ ${price}`;
      document.getElementById('gross').innerHTML = `${gross} <em>元</em>`;
      document.getElementById('margin').innerHTML = `${(gross / price * 100).toFixed(1)} <em>%</em>`;
      document.getElementById('price-note').textContent = gross < 0 ? `售價 ${price} 元低於單杯成本 35 元，每杯毛損 ${-gross} 元。還未計入租金與人力，這個定價要再想想！` : `售價 ${price} 元 − 單杯成本 35 元 = 毛利 ${gross} 元。還要考慮租金、人力與顧客願付的價格。`;
    });
  } else if (key === 'trade') {
    panel.querySelectorAll('[data-rate]').forEach(button => button.addEventListener('click', () => {
      const rate = Number(button.dataset.rate);
      panel.querySelectorAll('[data-rate]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      document.getElementById('usd-quote').innerHTML = `${(960 / rate).toFixed(2)} <em>USD</em>`;
      document.getElementById('exchange').innerHTML = `${rate} <em>TWD / USD</em>`;
    }));
  } else if (key === 'data') {
    let sorted = false;
    document.getElementById('sort-data').addEventListener('click', e => {
      sorted = !sorted;
      document.getElementById('data-bars').innerHTML = sorted ? `<div class="top" style="height:90%" data-label="餅乾 72"></div><div style="height:60%" data-label="茶飲 48"></div><div style="height:45%" data-label="果汁 36"></div>` : `<div style="height:60%" data-label="茶飲 48"></div><div style="height:90%" data-label="餅乾 72"></div><div style="height:45%" data-label="果汁 36"></div>`;
      e.target.textContent = sorted ? '↺ 還原資料，再試一次' : '執行排序 → 找到熱銷商品';
      document.getElementById('data-result').textContent = sorted ? '找到答案！餅乾售出 72 份，排名第一。整理後更容易比較，也能進一步思考備貨與補貨。' : '銷量為情境示例。程式能幫我們快速整理與比較資料。';
    });
  } else {
    panel.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', () => {
      const detail = button.dataset.copy === 'detail';
      panel.querySelectorAll('[data-copy]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      document.getElementById('product-title').textContent = detail ? '厚磅帆布袋｜A4 大容量・日常好搭' : '一個帆布袋';
      document.getElementById('info-count').innerHTML = `${detail ? 3 : 1} <em>個重點</em>`;
      document.getElementById('product-value').textContent = detail ? '材質・用途・特色' : '商品名稱';
      document.getElementById('copy-note').textContent = detail ? '清楚版補上材質、容量與搭配特色，讓顧客更容易判斷是否符合需求。實際商品描述必須真實，不能誇大。' : '名稱讓人知道你在賣什麼；也可以補充材質、用途與特色。此互動示範資訊表達，不預測實際銷量。';
    }));
  }
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => setDepartment(tab.dataset.key));
  tab.addEventListener('keydown', e => {
    let index = keys.indexOf(currentDepartment);
    if (e.key === 'ArrowRight') index = (index + 1) % keys.length;
    else if (e.key === 'ArrowLeft') index = (index + keys.length - 1) % keys.length;
    else if (e.key === 'Home') index = 0;
    else if (e.key === 'End') index = keys.length - 1;
    else return;
    e.preventDefault(); setDepartment(keys[index], true);
  });
});
document.querySelectorAll('[data-dept]').forEach(button => button.addEventListener('click', () => {
  setDepartment(button.dataset.dept);
  deptSection.scrollIntoView({ behavior: 'smooth' });
}));
setDepartment('business');

const navLinks = [...document.querySelectorAll('.nav a')];
const explorer = document.getElementById('explorer');
const explorerTrigger = document.getElementById('open-explorer');
const chapterStatus = document.getElementById('current-chapter');
const chapterTitles = { home: '首頁・從好奇開始', about: '認識商管・發現日常', departments: '四科探索・找到主場', honors: '金手榮耀・陳翊翔', future: '未來方向・走向下一步' };
explorerTrigger.addEventListener('click', () => {
  explorer.showModal();
  explorerTrigger.setAttribute('aria-expanded', 'true');
});
document.getElementById('close-explorer').addEventListener('click', () => explorer.close());
explorer.addEventListener('close', () => explorerTrigger.setAttribute('aria-expanded', 'false'));
explorer.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => explorer.close()));
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(x => x.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const hash = `#${visible.target.id}`;
  chapterStatus.textContent = chapterTitles[visible.target.id];
  navLinks.forEach(a => { const active = a.getAttribute('href') === hash; a.classList.toggle('active', active); if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
}, { rootMargin: '-20% 0px -45% 0px', threshold: 0 });
document.querySelectorAll('.page').forEach(section => observer.observe(section));

// Compact screens use two views within the same chapter rather than a taller page.
function setupScreenViews(selector, initial, selectView) {
  const buttons = [...document.querySelectorAll(selector)];
  const activate = (button, focus = false) => {
    buttons.forEach(item => {
      const selected = item === button;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    selectView(button);
    if (focus) button.focus({ preventScroll: true });
  };
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => activate(button));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
      else if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = buttons.length - 1;
      else return;
      event.preventDefault();
      activate(buttons[next], true);
    });
  });
  if (buttons[initial]) activate(buttons[initial]);
}

setupScreenViews('[data-dept-view]', 0, button => {
  panel.dataset.view = button.dataset.deptView;
});
setupScreenViews('[data-future-view]', 0, button => {
  document.getElementById('future').dataset.view = button.dataset.futureView;
});
