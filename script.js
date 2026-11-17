// ==========================================
// JAPAN, TOGETHER — AUTUMN 2027
// ==========================================

const days = [
{
  n:1, place:"Osaka", title:"Hello, Osaka.",
  sub:"Arrival · Dotonbori · First night",
  date:"26 November · Working date",
  intro:"Land at Kansai International Airport, settle into the hotel and ease into Japan with Osaka's glowing streets and famous food.",
  photo:"https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Airport arrival","Morning","Arrive at KIX, immigration, collect luggage and travel into Osaka.","Allow time for airport procedures. Check the hotel luggage-drop policy if the room is not ready."],
    ["Hotel check-in","Afternoon","Leave bags, freshen up and take a break.","Suggested base: Namba or Shinsaibashi for convenient evening exploring."],
    ["Dotonbori","Evening","Walk along the canal, see the Glico sign and explore the neon streets.","Try takoyaki, okonomiyaki or ramen. Keep the first evening flexible after the flight."]
  ],
  note:"Keep the first day light · Airport transfer depends on hotel location"
},
{
  n:2, place:"Osaka", title:"The city lights.",
  sub:"Osaka Castle · Umeda",
  date:"27 November · Working date",
  intro:"A day for Osaka's history and skyline. Take the morning slowly, then head north for city views and shopping.",
  photo:"https://images.unsplash.com/photo-1589452271712-64b8a66c7b71?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Osaka Castle","Morning","Explore the castle grounds and park.","Allow around 1.5–2 hours depending on whether you visit the museum interior."],
    ["Lunch break","Midday","Find a nearby restaurant or casual food spot.","Keep lunch flexible rather than booking a fixed restaurant."],
    ["Umeda","Afternoon","Explore the shopping district and department stores.","Great area for shopping, cafes and city architecture."],
    ["Umeda Sky Building","Evening","Optional observatory visit for city views.","Check sunset time and ticket availability closer to the trip."]
  ],
  note:"Transport: Osaka Metro / JR depending on hotel and stops"
},
{
  n:3, place:"Nara + Osaka", title:"A little escape.",
  sub:"Nara afternoon · Shinsaibashi evening",
  date:"28 November · Working date",
  intro:"Keep the morning relaxed in Osaka. Head to Nara after lunch, visit the main sights, then return to Osaka for an evening in Shinsaibashi.",
  photo:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Travel to Nara","Early afternoon","Take the JR Yamatoji Rapid or Kintetsu Railway.","Choose the station based on your first Nara attraction and route."],
    ["Nara Park","Afternoon","Walk through the park and enjoy the scenery.","Deer are wild animals. Give them space and follow park guidance."],
    ["Todai-ji Temple","Afternoon","Visit the Great Buddha Hall and temple grounds.","Check entry hours and ticket details before the visit."],
    ["Naramachi","Late afternoon","Explore traditional streets, small shops and cafes.","Allow time to return to the station before it gets too late."],
    ["Shinsaibashi","Evening","Return to Osaka for shopping and dinner.","This is the main shopping evening after Nara."]
  ],
  note:"Nara is a day trip · No hotel change needed"
},
{
  n:4, place:"Osaka", title:"A day of adventure.",
  sub:"Universal Studios Japan · Aquarium option",
  date:"29 November · Working date",
  intro:"A major theme-park day. Universal Studios Japan can easily take most of the day, so the aquarium is an optional extra rather than a guaranteed second stop.",
  photo:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Universal Studios Japan","Early morning","Arrive before opening and prioritise your must-do attractions.","Check official opening hours, ticket rules and timed-entry requirements nearer the date. Express Pass pricing is separate."],
    ["Park lunch","Midday","Eat inside the park and take a proper break.","Crowds and attraction queues can change the schedule."],
    ["USJ afternoon","Afternoon","Continue rides, themed areas and shows.","Do not plan a tight evening booking while inside the park."],
    ["Osaka Aquarium Kaiyukan","Optional evening","Visit only if park timing, aquarium hours and energy allow.","This combination is very ambitious. Better alternative: move the aquarium to Day 2 or another Osaka slot."]
  ],
  note:"USJ is the priority · Aquarium is optional and depends on closing time"
},
{
  n:5, place:"Kyoto", title:"Old-world Kyoto.",
  sub:"Travel · Gion · Yasaka Shrine",
  date:"30 November · Working date",
  intro:"Leave Osaka and settle into Kyoto. Spend the afternoon wandering through traditional streets and atmospheric shrine areas.",
  photo:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Osaka → Kyoto","Morning","Take the JR Special Rapid train to Kyoto.","Around 30 minutes station-to-station; allow extra time for hotel transfers and luggage."],
    ["Hotel check-in","Midday","Leave luggage and have lunch.","Suggested areas: Kyoto Station, Kawaramachi or the edge of Gion."],
    ["Gion & Hanamikoji","Afternoon","Walk through Kyoto's historic district.","Be respectful of residents and follow local photography restrictions."],
    ["Yasaka Shrine","Late afternoon","Explore the shrine and nearby streets.","Combine with a walk through the Higashiyama area."],
    ["Sannenzaka & Ninenzaka","Evening","Browse traditional lanes, shops and food stops.","Some shops close earlier, so avoid arriving too late."]
  ],
  note:"Hotel base: Kyoto · Travel by JR Special Rapid"
},
{
  n:6, place:"Kyoto", title:"A thousand gates.",
  sub:"Fushimi Inari · Matcha · Tea culture",
  date:"1 December · Working date",
  intro:"A slower Kyoto day built around the iconic torii gates, a tea experience and a few relaxed stops.",
  photo:"https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Fushimi Inari Taisha","Morning","Walk through the famous red torii gates.","Go earlier to enjoy a calmer visit. You can choose how far up the mountain to walk."],
    ["Lunch","Midday","Find a local restaurant around the station area.","Try soba, udon or a Japanese set meal."],
    ["Tea experience","Afternoon","Enjoy a tea ceremony or matcha tasting.","Reserve ahead if you want a guided experience."],
    ["Matcha cafes","Late afternoon","Explore a cafe and try Kyoto matcha desserts.","Popular cafes may have queues, especially in peak season."]
  ],
  note:"Comfortable walking shoes recommended"
},
{
  n:7, place:"Kyoto", title:"Into the green.",
  sub:"Arashiyama · Bamboo Grove · Riverside",
  date:"2 December · Working date",
  intro:"Explore western Kyoto's bamboo paths, temple gardens and riverside scenery. Autumn colours depend on the weather and seasonal timing.",
  photo:"https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Arashiyama Bamboo Grove","Morning","Walk through the bamboo path.","Arrive early for a quieter experience."],
    ["Tenryu-ji","Late morning","Visit the temple and landscaped garden.","Check garden and temple opening times."],
    ["Togetsukyo Bridge","Afternoon","Enjoy the river and mountain scenery.","Good area for a relaxed lunch and photographs."],
    ["Optional autumn foliage","Late afternoon","Consider Eikando or another seasonal garden if timing works.","Seasonal colour varies year to year; check foliage updates before travelling."]
  ],
  note:"Allow time for travel back to central Kyoto"
},
{
  n:8, place:"Hakone", title:"A slower pace.",
  sub:"Kyoto · Odawara · Lake Ashi",
  date:"3 December · Working date",
  intro:"Trade the city for mountain scenery. Travel by Shinkansen to Odawara, continue into Hakone and enjoy a peaceful overnight stay.",
  photo:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Kyoto → Odawara","Morning","Take the Tokaido Shinkansen.","Journey is roughly 2–2.5 hours depending on service. Check train times and ticket options."],
    ["Odawara → Hakone","Midday","Continue by local train or bus to your accommodation.","Choose the transport based on your hotel area."],
    ["Lake Ashi","Afternoon","Enjoy the lake views and surrounding scenery.","Sightseeing cruise is optional and weather dependent."],
    ["Hakone Shrine","Late afternoon","Visit the shrine area if time and daylight allow.","Crowds can form around popular photo spots."],
    ["Ryokan stay","Evening","Check in, relax and enjoy a traditional stay.","Confirm whether dinner and breakfast are included in the room rate."]
  ],
  note:"Overnight in Hakone · Consider forwarding large luggage to Tokyo"
},
{
  n:9, place:"Kawaguchiko", title:"Chasing Fuji.",
  sub:"Gotemba · Lake Kawaguchi · Oishi Park",
  date:"4 December · Working date",
  intro:"Travel towards the Fuji Five Lakes area. Keep the day flexible because Mount Fuji visibility depends on the weather.",
  photo:"https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Hakone → Kawaguchiko","Morning","Travel by bus via the Gotemba area.","Check the latest route, operating days and reservation requirements before departure."],
    ["Hotel check-in","Midday","Drop bags and have lunch.","Look for accommodation near Lake Kawaguchi; verify exactly what a Fuji-view room includes."],
    ["Lake Kawaguchi","Afternoon","Walk by the lake and enjoy the mountain scenery.","Fuji visibility is never guaranteed."],
    ["Oishi Park","Late afternoon","Visit the lakeside park and take photographs.","Check seasonal flower and foliage conditions."],
    ["Chureito Pagoda","Optional","Visit if transport and daylight allow.","It involves stairs and can be crowded. Keep it flexible."]
  ],
  note:"Overnight near Lake Kawaguchi · Early morning may offer another Fuji-view opportunity"
},
{
  n:10, place:"Tokyo", title:"Welcome to Tokyo.",
  sub:"Shibuya · Hachiko · Shinjuku",
  date:"5 December · Working date",
  intro:"Arrive in the capital and step straight into the energy of Tokyo. Keep the afternoon focused around Shibuya and Shinjuku.",
  photo:"https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Kawaguchiko → Tokyo","Morning","Take a highway bus or train connection into Tokyo.","Compare departure times and arrival stations when booking."],
    ["Hotel check-in","Midday","Drop luggage and settle in.","Suggested bases: Shinjuku, Ueno or Tokyo Station area."],
    ["Shibuya Crossing","Afternoon","See the famous crossing and Hachiko statue.","Expect crowds, especially during busy periods."],
    ["Shibuya shopping","Late afternoon","Explore the shopping streets and department stores.","Keep purchases manageable before the final travel days."],
    ["Shinjuku","Evening","Explore the city lights and find dinner.","Enjoy the atmosphere and plan a relaxed route back to the hotel."]
  ],
  note:"Tokyo base for the final three nights"
},
{
  n:11, place:"Tokyo", title:"Tradition & skyline.",
  sub:"Asakusa · Senso-ji · Ueno · Skytree",
  date:"6 December · Working date",
  intro:"A day that mixes old Tokyo with modern city views, from temple streets to the riverside skyline.",
  photo:"https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Asakusa & Senso-ji","Morning","Visit the temple and explore Nakamise Shopping Street.","Go earlier to avoid the busiest crowds."],
    ["Nakamise Street","Late morning","Browse traditional snacks and souvenirs.","Check shop opening times and keep some cash available."],
    ["Ueno Park","Afternoon","Enjoy the park and nearby museums if interested.","Choose one museum rather than trying to fit everything in."],
    ["Tokyo Skytree","Evening","Optional observatory visit and shopping complex.","Book tickets in advance if you want a specific time."]
  ],
  note:"Use Tokyo Metro / JR depending on the order of stops"
},
{
  n:12, place:"Tokyo", title:"One last city day.",
  sub:"Harajuku · Meiji · Omotesando · Ginza",
  date:"7 December · Working date",
  intro:"A final full day for fashion, cafes, architecture and shopping before heading home.",
  photo:"https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Harajuku","Morning","Explore Takeshita Street and nearby shops.","Expect crowds and busy pedestrian areas."],
    ["Meiji Jingu","Midday","Enjoy a peaceful walk through the forested shrine grounds.","Respect shrine etiquette and quiet areas."],
    ["Omotesando","Afternoon","Explore architecture, boutiques and cafes.","A good place for a slower afternoon."],
    ["Ginza","Evening","Enjoy the final shopping and dinner.","Keep time to pack and prepare for the airport journey."]
  ],
  note:"Check luggage weight and airline baggage allowance tonight"
},
{
  n:13, place:"Tokyo → KL", title:"Until next time.",
  sub:"Breakfast · Airport · Home",
  date:"8 December · Working date",
  intro:"A relaxed final morning, then make your way to the airport for the flight home. Leave enough time for airport procedures.",
  photo:"https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=2200&q=85",
  cards:[
    ["Breakfast & check-out","Morning","Have breakfast, check the room and return the key.","Confirm checkout time and any luggage storage arrangements."],
    ["Airport transfer","Before flight","Travel to Haneda or Narita depending on your flight.","Check your departure airport carefully; they are different airports."],
    ["Return flight","Departure","Fly from Tokyo back to Kuala Lumpur.","Arrive at the airport with enough time for check-in, baggage and security."]
  ],
  note:"Confirm flight terminal, airport transfer and baggage allowance"
}
];

// ==========================================
// GENERATE ITINERARY AND NAVIGATION
// ==========================================

const itinerary = document.getElementById("itinerary");
const nav = document.getElementById("sideNav");

days.forEach(day => {
  const section = document.createElement("section");
  section.className = "day";
  section.id = "day" + day.n;
  section.style.backgroundImage = `url('${day.photo}')`;

  section.innerHTML = `
    <div class="day-inner">
      <div class="day-number">DAY ${String(day.n).padStart(2, "0")} / 13</div>
      <h2>${day.title}</h2>
      <div class="day-sub">${day.place} · ${day.sub}</div>
      <div class="day-intro">${day.intro}</div>

      <div class="cards">
        ${day.cards.map((card, index) => `
          <button class="place-card"
            type="button"
            aria-expanded="false"
            data-day="${day.n}"
            data-card="${index}">

            <div class="place-top">
              <h3>${card[0]}</h3>
              <span class="time">${card[1]}</span>
            </div>

            <div class="hint">Click to reveal schedule + notes</div>

            <div class="place-detail">
              <b>Plan:</b> ${card[2]}<br>
              <b>Notes:</b> ${card[3]}
            </div>
          </button>
        `).join("")}
      </div>

      <div class="day-footer">
        <span>${day.date}</span>
        <span>${day.note}</span>
      </div>
    </div>

    <div class="scroll-note">Continue the journey ↓</div>
  `;

  itinerary.appendChild(section);

  const dot = document.createElement("a");
  dot.href = "#day" + day.n;
  dot.title = "Day " + day.n + " — " + day.place;
  dot.setAttribute("aria-label", "Day " + day.n + " — " + day.place);
  nav.appendChild(dot);
});

// ==========================================
// ATTRACTION CARD EXPANSION + PREVIEW PANEL
// ==========================================

const previewOverlay = document.createElement("div");
previewOverlay.className = "preview-overlay";

previewOverlay.innerHTML = `
  <div class="preview-panel" role="dialog" aria-modal="true" aria-labelledby="previewTitle">
    <div class="preview-image" id="previewImage">
      <button class="preview-close" id="previewClose" aria-label="Close preview">×</button>
    </div>

    <div class="preview-content">
      <div class="preview-kicker" id="previewDay">JAPAN · DAY 01</div>
      <h2 id="previewTitle">Destination</h2>
      <div class="preview-time" id="previewTime"></div>
      <p class="preview-description" id="previewDescription"></p>

      <div class="preview-notes">
        <strong>Travel notes</strong>
        <p id="previewNotes"></p>
      </div>
    </div>
  </div>
`;

document.body.appendChild(previewOverlay);

const previewImage = document.getElementById("previewImage");
const previewDay = document.getElementById("previewDay");
const previewTitle = document.getElementById("previewTitle");
const previewTime = document.getElementById("previewTime");
const previewDescription = document.getElementById("previewDescription");
const previewNotes = document.getElementById("previewNotes");

function closePreview() {
  previewOverlay.classList.remove("open");
  document.body.classList.remove("preview-open");
}

function openPreview(day, card) {
  previewImage.style.backgroundImage = `url('${day.photo}')`;
  previewDay.textContent = `JAPAN · DAY ${String(day.n).padStart(2, "0")} · ${day.place}`;
  previewTitle.textContent = card[0];
  previewTime.textContent = card[1];
  previewDescription.textContent = card[2];
  previewNotes.textContent = card[3];

  previewOverlay.classList.add("open");
  document.body.classList.add("preview-open");
}

document.getElementById("previewClose").addEventListener("click", closePreview);

previewOverlay.addEventListener("click", event => {
  if (event.target === previewOverlay) {
    closePreview();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closePreview();
  }
});

itinerary.addEventListener("click", event => {
  const cardElement = event.target.closest(".place-card");

  if (!cardElement) return;

  const dayNumber = Number(cardElement.dataset.day);
  const cardIndex = Number(cardElement.dataset.card);

  const day = days.find(item => item.n === dayNumber);

  if (!day || !day.cards[cardIndex]) return;

  const place = day.cards[cardIndex];

  // Preserve the original expandable card behaviour.
  document.querySelectorAll(".place-card").forEach(card => {
    if (card !== cardElement) {
      card.classList.remove("active");
      card.setAttribute("aria-expanded", "false");
    }
  });

  const active = cardElement.classList.toggle("active");
  cardElement.setAttribute("aria-expanded", String(active));

  // Open the attraction preview.
  openPreview(day, place);
});

// ==========================================
// SIDE NAVIGATION
// ==========================================

const sections = [
  document.getElementById("home"),
  document.getElementById("overview"),
  ...days.map(day => document.getElementById("day" + day.n)),
  document.getElementById("weather"),
  document.getElementById("budget")
];

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    document.querySelectorAll(".side-nav a").forEach(link => {
      link.classList.remove("current");
    });

    const id = entry.target.id;
    const dayIndex = days.findIndex(day => "day" + day.n === id);

    if (dayIndex >= 0 && nav.children[dayIndex]) {
      nav.children[dayIndex].classList.add("current");
    }
  });
}, {
  threshold: 0.45
});

sections.forEach(section => {
  if (section) sectionObserver.observe(section);
});

// ==========================================
// SAVINGS TRACKER
// ==========================================

const slider = document.getElementById("saved");

function updateSavings() {
  const amount = Number(slider.value);
  const percent = Math.round(amount / 25000 * 100);

  document.getElementById("savedAmount").textContent =
    "RM" + amount.toLocaleString("en-MY");

  document.getElementById("progressBar").style.width =
    percent + "%";

  document.getElementById("progressText").textContent =
    percent + "% of our RM25,000 goal";
}

slider.addEventListener("input", updateSavings);
updateSavings();

// ==========================================
// SUGGEST A CHANGE MODAL
// ==========================================

function openChange() {
  document.getElementById("changeModal").classList.add("show");
}

function closeChange() {
  document.getElementById("changeModal").classList.remove("show");
}

function copyChange() {
  const request = document.getElementById("changeText").value.trim();
  const status = document.getElementById("copyStatus");

  if (!request) {
    status.textContent = "Please describe the change first.";
    return;
  }

  const fullRequest =
    "Please update my Japan 2027 travel website with this change: " +
    request +
    "\nKeep the cinematic design, responsive layout and existing itinerary unless the change requires otherwise.";

  navigator.clipboard.writeText(fullRequest)
    .then(() => {
      status.textContent =
        "Copied! Paste this into our ChatGPT conversation.";
    })
    .catch(() => {
      document.getElementById("changeText").value = fullRequest;
      status.textContent = "Select and copy the text above.";
    });
}

document.getElementById("changeModal").addEventListener("click", event => {
  if (event.target.id === "changeModal") {
    closeChange();
  }
});

// ==========================================
// WEATHER SECTION
// ==========================================

(function renderWeather() {
  const weatherData = [
    {
      day: "DAYS 01–04",
      location: "Osaka",
      high: "12–18°C",
      low: "5–10°C",
      tip: "Comfortable layers, a sweater and a medium-weight jacket.",
      query: "Osaka Japan"
    },
    {
      day: "DAY 03",
      location: "Nara",
      high: "11–17°C",
      low: "3–8°C",
      tip: "A warm jacket is useful, especially during the afternoon and evening.",
      query: "Nara Japan"
    },
    {
      day: "DAYS 05–07",
      location: "Kyoto",
      high: "11–17°C",
      low: "3–8°C",
      tip: "Wear layers. Temple visits and outdoor walks can feel cold.",
      query: "Kyoto Japan"
    },
    {
      day: "DAY 08",
      location: "Hakone",
      high: "6–14°C",
      low: "-1–7°C",
      tip: "Bring a warm coat. Mountain areas can be much colder.",
      query: "Hakone Japan"
    },
    {
      day: "DAY 09",
      location: "Lake Kawaguchi",
      high: "7–12°C",
      low: "-3–3°C",
      tip: "Thermal layers, gloves and a warm jacket are recommended.",
      query: "Lake Kawaguchi Japan"
    },
    {
      day: "DAY 09",
      location: "Mount Fuji Viewpoints",
      high: "3–10°C",
      low: "-5–2°C",
      tip: "Exposed and elevated areas may feel colder. Prepare extra layers.",
      query: "Mount Fuji Japan"
    },
    {
      day: "DAYS 10–13",
      location: "Tokyo",
      high: "11–17°C",
      low: "3–9°C",
      tip: "A sweater and winter jacket should be useful for outdoor sightseeing.",
      query: "Tokyo Japan"
    }
  ];

  const grid = document.getElementById("weatherGrid");

  grid.innerHTML = weatherData.map(place => {
    const weatherSearch =
      "https://www.google.com/search?q=" +
      encodeURIComponent("weather forecast " + place.query);

    return `
      <article class="weather-card">
        <div class="weather-day">${place.day}</div>
        <div class="weather-location">${place.location}</div>

        <div class="weather-temperatures">
          <div class="weather-temp">
            <small>Daytime</small>
            <strong>${place.high}</strong>
          </div>

          <div class="weather-temp">
            <small>Night</small>
            <strong>${place.low}</strong>
          </div>
        </div>

        <div class="weather-tip">${place.tip}</div>

        <a class="weather-link"
           href="${weatherSearch}"
           target="_blank"
           rel="noopener">
          Check local weather ↗
        </a>
      </article>
    `;
  }).join("");
})();

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const animatedElements = document.querySelectorAll(`
  .hero-content > *,
  .day-inner > *,
  .route-item,
  .budget-row,
  .savings-box,
  .weather-card,
  .place-card
`);

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -35px 0px"
});

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

animatedElements.forEach(element => {
  if (reducedMotion) {
    element.classList.add("is-visible");
  } else {
    revealObserver.observe(element);
  }
});

// ==========================================
// PARALLAX BACKGROUND EFFECT
// ==========================================

let parallaxScheduled = false;

function updateParallax() {
  const viewportHeight = window.innerHeight;

  document.querySelectorAll(".day").forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.bottom < 0 || rect.top > viewportHeight) return;

    const distanceFromCenter =
      rect.top + rect.height / 2 - viewportHeight / 2;

    const movement = distanceFromCenter * -0.035;

    section.style.setProperty(
      "--parallax",
      `${movement}px`
    );
  });

  parallaxScheduled = false;
}

window.addEventListener("scroll", () => {
  if (reducedMotion || parallaxScheduled) return;

  parallaxScheduled = true;
  requestAnimationFrame(updateParallax);
}, { passive: true });

window.addEventListener("resize", updateParallax);

updateParallax();
