import './style.css'

const profile = {
  name: '이창용',
  title: '지구과학 선생님',
  location: '서울, 대한민국',
  bio: `안녕하세요. 불꽃 지구과학 이창용입니다.`,
  experiences: [
    { role: '프론트엔드 개발자', company: '회사 A', period: '2022 — 현재', desc: 'SPA 개발 및 성능 최적화' },
    { role: '웹 개발자', company: '회사 B', period: '2020 — 2022', desc: '웹 퍼블리싱과 유지보수' }
  ]
}

function renderExperience(exp) {
  return `
    <li class="experience-item">
      <div class="exp-left">
        <div class="exp-role">${exp.role}</div>
        <div class="exp-company">${exp.company}</div>
      </div>
      <div class="exp-right">
        <div class="exp-period">${exp.period}</div>
        <div class="exp-desc">${exp.desc}</div>
      </div>
    </li>`
}

document.querySelector('#app').innerHTML = `
  <main class="profile-root">
    <section class="profile-card">
      <div class="profile-left">
        <div class="avatar">HG</div>
      </div>
      <div class="profile-right">
        <h1 class="profile-name">${profile.name}</h1>
        <div class="profile-title">${profile.title} — <span class="profile-location">${profile.location}</span></div>
        <p class="profile-bio">${profile.bio}</p>
        <h2 class="section-heading">경력</h2>
        <ul class="experience-list">
          ${profile.experiences.map(renderExperience).join('')}
        </ul>
      </div>
    </section>
  </main>
`
