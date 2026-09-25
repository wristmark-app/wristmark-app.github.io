const translations = {
  zh: {
    nav: {
      brand: "时扣 (WristMark)",
      support: "获得支持",
      download: "下载",
      privacy: "隐私安全"
    },
    hero: {
      title: "从手腕开始录音。<br>让重点自己留下。",
      subtitle: "时扣是专为 iPhone 与智能手表打造的私密会议助手。抬腕录音，互点两下秒打时间戳，设备本地离线转写，并把会议纪要变成下一步行动。",
      "primary-btn": "前往 App Store 下载",
      "secondary-btn": "了解核心体验"
    },
    store: {
      kicker: "核心体验",
      title: "从手腕记录，到手机整理",
      subtitle: "时扣围绕一个清晰流程设计：在手表上开始录音，听到重点时标记，回到手机本地转写，再生成会议纪要并整理后续行动。",
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
        tag: "会议行动整理",
        title: "从纪要到下一步行动",
        desc: "用本机 Local AI 或你配置的 AI 端点生成纪要，再把负责人、截止时间和安排整理成可编辑的后续事项。"
      },
      reminders: {
        tag: "后续提醒",
        title: "别让会议决定停在纪要里",
        desc: "从会议纪要生成可编辑提醒，确认负责人和截止时间后再保存，让下一步真正有人跟进。"
      },
      calendar: {
        tag: "日历草稿",
        title: "先检查，再放进日历",
        desc: "将会议中的时间安排整理为日历草稿，检查时间与参与人，只保存真正需要的日程。"
      }
    }
  },
  en: {
    nav: {
      brand: "WristMark",
      support: "Support",
      download: "Download",
      privacy: "Privacy"
    },
    hero: {
      title: "Record from your wrist.<br>Keep every key moment.",
      subtitle: "WristMark is a private meeting companion for iPhone and your watch. Record from your wrist, tap to timestamp key moments, transcribe offline on device, and turn meeting notes into next steps.",
      "primary-btn": "Download on the App Store",
      "secondary-btn": "Explore the Workflow"
    },
    store: {
      kicker: "Core Workflow",
      title: "The whole flow: wrist recording to private notes",
      subtitle: "WristMark is built around one clear flow: start recording on your watch, mark key moments as they happen, return to iPhone for offline transcription, then turn the meeting summary into follow-ups.",
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
        tag: "Actionable meeting notes",
        title: "Turn meeting notes into next steps",
        desc: "Generate notes with on-device Local AI or your configured endpoint, then turn owners, due dates, and plans into editable follow-ups."
      },
      reminders: {
        tag: "Follow-up reminders",
        title: "Keep decisions moving after the meeting",
        desc: "Create editable reminders from your meeting summary, confirm the owner and due date, then save the next step."
      },
      calendar: {
        tag: "Calendar drafts",
        title: "Review first, then add to your calendar",
        desc: "Turn scheduling details from a meeting into calendar drafts, review the time and attendees, and save only what you need."
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
    title: "时扣 WristMark - 手腕录音、离线转写与会议行动整理",
    description: "专为开会、听课打造的私密会议助手。抬腕录音，标记重点，本地离线转写，并将会议纪要整理为提醒与日历草稿。"
  },
  en: {
    title: "WristMark - Wrist Recording, Offline Transcription, and Actionable Meeting Notes",
    description: "A private meeting companion for iPhone and your watch. Record from your wrist, mark key moments, transcribe offline, and turn meeting notes into reminders and calendar drafts."
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
