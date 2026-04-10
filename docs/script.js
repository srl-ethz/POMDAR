/** Served as <code>website/videos/</code> → symlink to parent folder (keeps paths valid on GitHub Pages and local servers). */
const VIDEO_BASE = "videos/";

function videoSrc(file) {
  if (file.startsWith("assets/")) return file;
  return VIDEO_BASE + file;
}

function videoMimeType(file) {
  const lower = file.toLowerCase();
  if (lower.endsWith(".mp4")) return "video/mp4";
  if (lower.endsWith(".webm")) return "video/webm";
  return "video/quicktime";
}

const EMB = {
  orca2: "videos/embodiments/orca_2.png",
  orca3: "videos/embodiments/orca_3.png",
  orca5: "videos/embodiments/orca_5.png",
  orcafull: "videos/embodiments/orca_full.png",
};

/** @type {Record<string, { id: string; label: string; group: 'manipulation' | 'grasp'; description: string; files: Partial<Record<'orca2'|'orca3'|'orca5'|'orcafull', string>> }>} */
const TASKS = {
  C4: {
    id: "C4",
    label: "C4: Fidget",
    group: "manipulation",
    description: "Continuous rotation — fidget mechanism with geared transmission.",
    files: {
      orca3: "c_fidget_3f_trimmed.mp4",
      orcafull: "c_fidget_5full_trimmed.mp4",
    },
  },
  V1: {
    id: "V1",
    label: "V1: Wheel",
    group: "manipulation",
    description: "Vertical scaffold — rotate the wheel through increasing angle notches.",
    files: {
      orca2: "v_wheel_2f_trimmed.mov",
      orca3: "v_wheel_3f_trimmed.mov",
      orca5: "v_wheel_5f_trimmed.mov",
      orcafull: "v_wheel_5full_trimmed.mov",
    },
  },
  V2: {
    id: "V2",
    label: "V2: Stick",
    group: "manipulation",
    description: "Vertical scaffold — thin stick rotation (precision grasp pattern).",
    files: {
      orca2: "v_stick_2f_trimmed.mov",
      orca3: "v_stick_3f_trimmed.mov",
      orca5: "v_stick_5noabd_trimmed.mov",
      orcafull: "v_stick_5full_trimmed.mov",
    },
  },
  V3: {
    id: "V3",
    label: "V3: Sphere",
    group: "manipulation",
    description: "Vertical scaffold — sphere / ball rotation.",
    files: {
      orca2: "v_ball_2f_trimmed.mov",
      orca3: "v_ball_3f_trimmed.mov",
      orca5: "v_ball_5noabd_trimmed.mov",
      orcafull: "v_ball_5full_triimmed.mov",
    },
  },
  H1: {
    id: "H1",
    label: "H1: Scissors",
    group: "manipulation",
    description: "Horizontal scaffold — scissors along curved rail.",
    files: {
      orca2: "h_scissors_2f_trimmed.mov",
      orcafull: "h_scissors_5full_trimmed.mov",
    },
  },
  H2: {
    id: "H2",
    label: "H2: Chopsticks",
    group: "manipulation",
    description: "Horizontal scaffold — chopsticks along curved rail.",
    files: {
      orcafull: "h_chopsticks_5full_trimmed.mov",
    },
  },
  H3: {
    id: "H3",
    label: "H3: Squeeze",
    group: "manipulation",
    description: "Horizontal scaffold — squeeze task.",
    files: {
      orcafull: "h_squeeze_5full_trimmed.mov",
    },
  },
  H4: {
    id: "H4",
    label: "H4: Palmar",
    group: "manipulation",
    description: "Horizontal scaffold — palmar grasp on shared object.",
    files: {
      orcafull: "h_palmar_5full_trimmed.mov",
    },
  },
  H5: {
    id: "H5",
    label: "H5: Pinch",
    group: "manipulation",
    description: "Horizontal scaffold — precision pinch.",
    files: {
      orca2: "h_pinch_2f_trimmed.mov",
      orcafull: "h_pinch_5full_trimmed.mov",
    },
  },
  C1: {
    id: "C1",
    label: "C1: Thread",
    group: "manipulation",
    description: "Continuous rotation — threaded insert removal.",
    files: {
      orca2: "c_thread_2f_trimmed.mp4",
      orcafull: "c_thread_5full_trimmed.mp4",
    },
  },
  C2: {
    id: "C2",
    label: "C2: Stick",
    group: "manipulation",
    description: "Continuous rotation — stick with gravity clutch.",
    files: {
      orca2: "c_stick_2f_trimmed.mp4",
      orca3: "c_stick_3f_trimmed.mp4",
      orca5: "c_stick_5noabd_trimmed.mp4",
      orcafull: "c_stick_5full_trimmed.mp4",
    },
  },
  C3: {
    id: "C3",
    label: "C3: Wheel",
    group: "manipulation",
    description: "Continuous rotation — wheel with clutch (file uses “whell” spelling).",
    files: {
      orca2: "c_wheel_2f_trimmed.mp4",
      orca3: "c_wheel_3f_trimmed.mp4",
      orca5: "c_whell_5noabd_trimmed.mp4",
      orcafull: "c_wheel_5full_trimmed.mp4",
    },
  },
  G1: {
    id: "G1",
    label: "G1: Grasp Wheel",
    group: "grasp",
    description: "Pure grasping — wheel object pick-up and relocation.",
    files: {
      orca2: "g_wheel_2f_trimmed.mov",
      orca3: "g_wheel_3f_trimmed.mov",
      orca5: "g_wheel_5abd_trimmed.mov",
      orcafull: "g_wheel_5full_trimmed.mov",
    },
  },
  G2: {
    id: "G2",
    label: "G2: Grasp Sphere",
    group: "grasp",
    description: "Pure grasping — sphere.",
    files: {
      orca2: "g_sphere_2f_trimmed.mov",
      orca3: "g_sphere_3f_trimmed.mov",
      orca5: "g_sphere_5noabd_trimmed.mov",
      orcafull: "g_sphere_5full_trimmed.mov",
    },
  },
  G3: {
    id: "G3",
    label: "G3: Grasp Disk",
    group: "grasp",
    description: "Pure grasping — disk.",
    files: {
      orca2: "g_disk_2f_trimmed.mp4",
      orca3: "g_disk_3f_trimmed.mov",
      orca5: "g_disk_5noabd_trimmed.mov",
      orcafull: "g_disk_5full_trimmed.mov",
    },
  },
  G4: {
    id: "G4",
    label: "G4: Cylinder Small",
    group: "grasp",
    description: "Pure grasping — small cylinder.",
    files: {
      orca2: "g_csmall_2f_trimmed.mov",
      orca3: "g_csmall_3f_trimmed.mov",
      orca5: "g_csmall_5noabd_trimmed.mp4",
      orcafull: "g_csmall_5full_trimmed.mov",
    },
  },
  G5: {
    id: "G5",
    label: "G5: Cylinder Medium",
    group: "grasp",
    description: "Pure grasping — medium cylinder.",
    files: {
      orca2: "g_cmedium_2f_trimmed.mp4",
      orca3: "g_cmedium_3f_trimmed.mp4",
      orca5: "g_cmedium_5noabd_trimmed.mov",
      orcafull: "g_cmedium_5full_trimmed.mov",
    },
  },
  G6: {
    id: "G6",
    label: "G6: Cylinder Large",
    group: "grasp",
    description: "Pure grasping — large cylinder.",
    files: {
      orca2: "g_clarge_2f_trimmed.mov",
      orca3: "g_clarge_3f_trimmed.mov",
      orca5: "g_clarge_5noabd_trimmed.mov",
      orcafull: "g_clarge_5full_trimmed.mov",
    },
  },
};

const EMB_LABELS = {
  orca2: "orca_2",
  orca3: "orca_3",
  orca5: "orca_5",
  orcafull: "orca_full",
};

/** Manipulation task chips: vertical (V), horizontal (H), continuous (C), then C4 fidget last. */
const ORDER_MANIP = ["V1", "V2", "V3", "H1", "H2", "H3", "H4", "H5", "C1", "C2", "C3", "C4"];
const ORDER_GRASP = ["G1", "G2", "G3", "G4", "G5", "G6"];

function renderTaskChips() {
  const manipEl = document.getElementById("task-chips-manip");
  const graspEl = document.getElementById("task-chips-grasp");
  if (!manipEl || !graspEl) return;

  const mkChip = (taskId) => {
    const t = TASKS[taskId];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "task-chip";
    btn.dataset.taskId = taskId;
    btn.textContent = t.label;
    btn.title = t.description;
    const hasVideo = Object.keys(t.files).length > 0;
    if (!hasVideo) {
      btn.disabled = true;
      btn.style.opacity = "0.45";
      btn.style.cursor = "not-allowed";
      btn.title = `${t.description} (no video files)`;
    }
    return btn;
  };

  ORDER_MANIP.forEach((id) => manipEl.appendChild(mkChip(id)));
  ORDER_GRASP.forEach((id) => graspEl.appendChild(mkChip(id)));
}

function renderTaskPanel(taskId) {
  const panel = document.getElementById("task-panel");
  if (!panel) return;

  const t = TASKS[taskId];
  if (!t) return;

  const entries = /** @type {const} */ (["orca2", "orca3", "orca5", "orcafull"]);
  const videosHtml = entries
    .filter((k) => t.files[k])
    .map((k) => {
      const file = t.files[k];
      const src = videoSrc(file);
      const embSrc = EMB[k];
      return `
        <div class="video-unit">
          <div class="video-unit-head">
            <img class="emb-icon" src="${embSrc}" alt="" width="64" height="64" loading="lazy" />
            <span>${EMB_LABELS[k]}</span>
          </div>
          <div class="video-crop">
            <video
              controls
              playsinline
              preload="metadata"
              muted
              autoplay
              loop
            >
              <source src="${src}" type="${videoMimeType(file)}" />
            </video>
          </div>
        </div>
      `;
    })
    .join("");

  panel.innerHTML = `
    <h4>${t.label}</h4>
    <p class="task-desc">${t.description}</p>
    ${
      videosHtml
        ? `<div class="video-row">${videosHtml}</div>`
        : "<p class=\"subtle\">No videos available for this task in the current folder.</p>"
    }
  `;

  initTaskVideos(panel);
}

/**
 * Autoplay: browsers allow muted autoplay; `play()` catches stricter policies.
 */
function initTaskVideos(container) {
  container.querySelectorAll(".video-crop video").forEach((videoEl) => {
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.setAttribute("muted", "");
    const tryPlay = () => {
      const p = videoEl.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    videoEl.addEventListener("loadeddata", tryPlay, { once: true });
  });
}

function setupTaskInteraction() {
  const panel = document.getElementById("task-panel");
  document.querySelectorAll(".task-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.taskId;
      if (!id) return;
      document.querySelectorAll(".task-chip").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderTaskPanel(id);
      panel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  const defaultVideo = document.querySelector(".task-chip[data-task-id='V1']") || document.querySelector(".task-chip");
  if (defaultVideo instanceof HTMLButtonElement) {
    defaultVideo.classList.add("is-active");
    renderTaskPanel(defaultVideo.dataset.taskId || "V1");
  }
}

// Reveal on scroll
const sections = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.02 }
  );
  sections.forEach((section, index) => {
    section.style.transitionDelay = `${Math.min(index * 60, 240)}ms`;
    observer.observe(section);
  });
} else {
  sections.forEach((section) => section.classList.add("is-visible"));
}

const copyBibtexButton = document.querySelector("#copyBibtex");
const bibtex = document.querySelector("#bibtex");
if (copyBibtexButton && bibtex) {
  copyBibtexButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibtex.textContent?.trim() || "");
      copyBibtexButton.textContent = "Copied";
      setTimeout(() => {
        copyBibtexButton.textContent = "Copy BibTeX";
      }, 1200);
    } catch {
      copyBibtexButton.textContent = "Copy failed";
      setTimeout(() => {
        copyBibtexButton.textContent = "Copy BibTeX";
      }, 1400);
    }
  });
}

const THEME_KEY = "pomdar-theme";

function getStoredTheme() {
  const v = localStorage.getItem(THEME_KEY);
  if (v === "dark" || v === "light") return v;
  return "light";
}

function applyTheme(theme) {
  const t = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);
  document.documentElement.style.colorScheme = t === "dark" ? "dark" : "light";
  localStorage.setItem(THEME_KEY, t);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t === "dark" ? "#0a1218" : "#ffffff");
  const btn = document.getElementById("themeToggle");
  if (btn) {
    const isDark = t === "dark";
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.textContent = isDark ? "Light mode" : "Dark mode";
  }
}

applyTheme(getStoredTheme());

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(cur === "dark" ? "light" : "dark");
});

renderTaskChips();
setupTaskInteraction();
