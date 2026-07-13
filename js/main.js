const translations = {
  zh: {
    nav: {
      brand: "时扣 (WristMark)",
      badge: "App Store",
      support: "获得支持",
      download: "下载",
      privacy: "隐私安全"
    },
    hero: {
      title: "从手腕开始录音。<br>让重点自己留下。",
      subtitle: "时扣是专为 iPhone 与智能手表打造的私密会议助手。抬腕录音，互点两下秒打时间戳，设备本地离线转写；本机离线 AI 摘要即将推出。",
      "primary-btn": "前往 App Store 下载",
      "secondary-btn": "了解核心体验"
    },
    store: {
      kicker: "核心体验",
      title: "从手腕记录，到手机整理",
      subtitle: "时扣围绕一个清晰流程设计：在手表上开始录音，听到重点时标记，回到手机本地转写，再用你自己的 API 生成会议摘要；本机离线 AI 摘要即将推出。",
      slides: {
        1: "抬腕录音",
        2: "重点标记",
        3: "离线转写",
        4: "离线 AI 摘要"
      }
    },
    features: {
      watch: {
        tag: "手表开录",
        title: "抬腕录音",
        desc: "开会、培训、电话沟通时不用掏手机。直接抬腕一键开启独立录音，双手仍然留给现场；结束后回到手机继续整理。"
      },
      privacy: {
        tag: "私密转写",
        title: "本地离线转写<br>音频不上传",
        desc: "语音转文字在设备本地完成，无需联网。会议音频不会发到时扣服务器，内部讨论和客户信息都留在你的设备上。"
      },
      merge: {
        tag: "重点回放",
        title: "互点两下<br>记住关键时刻",
        desc: "听到决策、报价、任务分配或确认信息时，互点两下秒打时间戳。回放时点击重点直接跳到那一刻，不再拖着进度条找答案。"
      },
      import: {
        tag: "离线 AI 纪要 · 即将推出",
        title: "本机离线 AI 摘要即将推出",
        desc: "本机 AI 模型下载与设备端摘要能力正在准备中。当前版本可继续使用自己配置的 OpenAI 兼容端点生成摘要。"
      }
    }
  },
  en: {
    nav: {
      brand: "WristMark",
      badge: "App Store",
      support: "Support",
      download: "Download",
      privacy: "Privacy"
    },
    hero: {
      title: "Record from your wrist.<br>Keep every key moment.",
      subtitle: "WristMark is a private meeting companion for iPhone and your watch. Record from your wrist, tap to timestamp key moments, and transcribe offline on device. On-device offline AI summaries are coming soon.",
      "primary-btn": "Download on the App Store",
      "secondary-btn": "Explore the Workflow"
    },
    store: {
      kicker: "Core Workflow",
      title: "The whole flow: wrist recording to private notes",
      subtitle: "WristMark is built around one clear flow: start recording on your watch, mark key moments as they happen, return to iPhone for offline transcription, then summarize with your own API. On-device offline AI summaries are coming soon.",
      slides: {
        1: "Wrist recording",
        2: "Instant marks",
        3: "Offline text",
        4: "Offline AI summaries"
      }
    },
    features: {
      watch: {
        tag: "Watch recording",
        title: "Start recording on your watch",
        desc: "Meetings are not the place to fumble with your phone. Start recording from your wrist, keep your hands free, then continue review and organization on iPhone."
      },
      privacy: {
        tag: "Private transcription",
        title: "Offline transcription<br>without upload",
        desc: "Speech-to-text runs entirely on your device. Audio is never sent to a WristMark server, so confidential meetings stay on your device."
      },
      merge: {
        tag: "Key moment replay",
        title: "Quick gesture<br>to mark key moments",
        desc: "When a decision, quote, or action item appears, use a quick gesture on your watch to plant a timestamp. During playback, jump to that exact moment in one tap."
      },
      import: {
        tag: "Offline AI notes · Coming soon",
        title: "On-device AI summaries are coming soon",
        desc: "Local model downloads and on-device summaries are being prepared. The current release can still use your own OpenAI-compatible endpoint for summaries."
      }
    }
  }
};

let currentLang = 'zh';

const appStoreLinks = {
  zh: "https://apps.apple.com/cn/app/%E6%97%B6%E6%89%A3/id6762519498",
  en: "https://apps.apple.com/us/app/wristmark/id6762519498"
};

const pageMeta = {
  zh: {
    title: "时扣 WristMark - 手腕录音、离线转写与即将推出的本机离线 AI",
    description: "专为开会、听课打造的私密会议助手。抬腕录音，互点两下秒记时间戳，本地离线转写，本机离线 AI 摘要即将推出。"
  },
  en: {
    title: "WristMark - Wrist Recording, Offline Transcription, and On-Device AI Coming Soon",
    description: "A private meeting companion for iPhone and your watch. Record from your wrist, tap to timestamp, transcribe offline, and get on-device AI summaries soon."
  }
};

const workflowImageAlt = {
  zh: [
    "时扣界面：抬腕开始会议录音",
    "时扣界面：互点两下标记重点",
    "时扣界面：本地离线转写",
    "时扣界面：本机离线 AI 摘要"
  ],
  en: [
    "WristMark interface: start recording from Apple Watch",
    "WristMark interface: Double Tap to mark key moments",
    "WristMark interface: offline transcription on iPhone",
    "WristMark interface: on-device offline AI summaries"
  ]
};

const featureImages = {
  zh: {
    watch: "screenshoots/cn/aw_firstpage.png",
    privacy: "screenshoots/cn/phone_meeting_details_dark.png",
    merge: "screenshoots/cn/aw_recording.png",
    import: "screenshoots/cn/phone_settings_dark.png"
  },
  en: {
    watch: "screenshoots/en/aw_firstpage.png",
    privacy: "screenshoots/en/phone_meeting_detail_dark.png",
    merge: "screenshoots/en/aw_recording.png",
    import: "screenshoots/en/phone_settings_dark.png"
  }
};

function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  document.getElementById('lang-btn').innerText = currentLang === 'zh' ? 'English' : '中文';
  document.documentElement.lang = currentLang === 'zh' ? 'zh-Hans' : 'en';
  applyTranslations();
  updateMeta();
  updateImages();
  updateAppStoreLinks();
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let translation = translations[currentLang];

    for (const k of keys) {
      if (translation[k]) {
        translation = translation[k];
      } else {
        translation = null;
        break;
      }
    }

    if (translation) {
      el.innerHTML = translation;
    }
  });
}

function updateImages() {
  const outputFolder = currentLang === 'zh' ? 'zh-Hans' : 'en';
  document.querySelectorAll('[data-workflow-image]').forEach((img) => {
    const index = Number(img.dataset.workflowImage);
    img.src = `appstore/fancy-screenshots/output/${outputFolder}/iphone-6.9-${String(index).padStart(2, '0')}.png`;
    img.alt = workflowImageAlt[currentLang][index - 1];
  });

  document.querySelectorAll('[data-feature-image]').forEach((img) => {
    const key = img.dataset.featureImage;
    img.src = featureImages[currentLang][key];
  });
}

function updateMeta() {
  document.title = pageMeta[currentLang].title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', pageMeta[currentLang].description);
  }
}

function updateAppStoreLinks() {
  document.querySelectorAll('[data-app-store-link]').forEach((link) => {
    link.href = appStoreLinks[currentLang];
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateMeta();
  updateImages();
  updateAppStoreLinks();
});
