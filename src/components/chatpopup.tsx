"use client";

import { DownloadIcon } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { skills } from "./SkillsMarquee";

interface ChatPopupProps {
  setIsSearchOpen: (isOpen: boolean) => void;
}

type ChatMessage = {
  id: number;
  role: "bot" | "user";
  text: string;
};

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const QUICK_REPLIES = ["Show projects", "Core skills", "How do I contact you?"];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    role: "bot",
    text: "Hi, I am Godfred's assistant. Ask me about projects, skills, services, or contact details.",
  },
];

const CV_FILE_PATH = "/files/Godfred Quarm - Full Stack Engineer.docx";

const triggerCvDownload = () => {
  const link = document.createElement("a");
  link.href = CV_FILE_PATH;
  link.download = "Godfred Quarm - Full Stack Engineer.docx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const buildBotReply = (prompt: string) => {
  const text = prompt.toLowerCase();

  if (text.includes("project")) {
    return "You can find featured work in the Projects section, including the stack and goals for each build.";
  }

  if (text.includes("skill") || text.includes("stack")) {
    return `Core strengths include ${skills.join(", ")} and building polished full-stack web apps.`;
  }

  if (text.includes("service")) {
    return "Services include modern web development, UI implementation, and product-focused frontend engineering.";
  }

  if (text.includes("available") || text.includes("hire")) {
    return "Yes, new opportunities are welcome. Share project details in the Contact section.";
  }

  if (text.includes("cv") || text.includes("resume")) {
    return "I can share my CV here. Click the download icon below to get it.";
  }

  return "I can help with projects, skills, services, and contact information. Ask me anything about those.";
};

const wantsContactForm = (prompt: string) => {
  const text = prompt.toLowerCase().trim();
  const patterns = [
    "contact me",
    "contact you",
    "how do i contact",
    "how do we contact",
    "how do they contact",
    "how can i contact",
    "how can we contact",
    "how can they contact",
    "reach you",
    "get in touch",
  ];

  return (
    patterns.some((pattern) => text.includes(pattern)) || text === "contact"
  );
};

const wantsCvDownload = (prompt: string) => {
  const text = prompt.toLowerCase();
  return text.includes("cv") || text.includes("resume");
};

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const formatContactDetailsMessage = (payload: ContactFormData) =>
  [
    "Submitted contact details:",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Message: ${payload.message}`,
  ].join("\n");

export default function ChatPopup({ setIsSearchOpen }: ChatPopupProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isCvDownloaded, setIsCvDownloaded] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [contactEmailError, setContactEmailError] = useState("");
  const [contactStatus, setContactStatus] = useState<ContactStatus>({
    type: "idle",
    message: "",
  });
  const [isSendingContact, setIsSendingContact] = useState(false);

  const nextIdRef = useRef(2);
  const replyTimeoutRef = useRef<number | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const createMessage = (
    role: ChatMessage["role"],
    text: string,
  ): ChatMessage => {
    const id = nextIdRef.current;
    nextIdRef.current += 1;
    return { id, role, text };
  };

  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setIsSearchOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping, showContactForm, contactStatus.type]);

  useEffect(() => {
    return () => {
      if (replyTimeoutRef.current) {
        window.clearTimeout(replyTimeoutRef.current);
      }
    };
  }, []);

  const sendMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed || isTyping) {
      return;
    }

    const shouldShowContactForm = wantsContactForm(trimmed);
    const shouldDownloadCv = wantsCvDownload(trimmed);

    setMessages((prev) => [...prev, createMessage("user", trimmed)]);
    setDraft("");
    setIsTyping(true);

    if (shouldDownloadCv) {
      setIsCvDownloaded(true);
    }

    replyTimeoutRef.current = window.setTimeout(() => {
      const botReply = shouldShowContactForm
        ? "I can take your message here. Fill out the contact form below and it will be sent directly."
        : buildBotReply(trimmed);

      setMessages((prev) => [...prev, createMessage("bot", botReply)]);
      if (shouldShowContactForm) {
        setShowContactForm(true);
        setContactForm((prev) => ({
          ...prev,
          message:
            prev.message ||
            "Hi Godfred, I would like to discuss a project opportunity.",
        }));
      }
      setIsTyping(false);
    }, 550);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(draft);
  };

  const onContactFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as keyof ContactFormData;
    const value = event.target.value;

    setContactForm((prev) => ({ ...prev, [field]: value }));

    if (field === "email") {
      if (!value || isValidEmail(value)) {
        setContactEmailError("");
      } else {
        setContactEmailError("Enter a valid email address.");
      }
    }

    if (contactStatus.type !== "idle") {
      setContactStatus({ type: "idle", message: "" });
    }
  };

  const onContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name: contactForm.name.trim(),
      email: contactForm.email.trim(),
      message: contactForm.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setContactStatus({
        type: "error",
        message: "Please fill in your name, email, and message.",
      });
      return;
    }

    if (!isValidEmail(payload.email)) {
      setContactEmailError("Enter a valid email address.");
      setContactStatus({
        type: "error",
        message: "Please provide a valid email address.",
      });
      return;
    }

    setContactEmailError("");
    setContactStatus({ type: "idle", message: "" });
    setIsSendingContact(true);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        setContactStatus({
          type: "error",
          message:
            errorData?.message ||
            "Could not send your message. Please try again.",
        });
        return;
      }

      setContactForm({ name: "", email: "", message: "" });
      setShowContactForm(false);
      setContactStatus({ type: "idle", message: "" });
      setMessages((prev) => [
        ...prev,
        createMessage("user", formatContactDetailsMessage(payload)),
        createMessage(
          "bot",
          "Thanks. Your details have been sent successfully. You can continue chatting here.",
        ),
      ]);
    } catch {
      setContactStatus({
        type: "error",
        message: "Network error while sending your message.",
      });
    } finally {
      setIsSendingContact(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-60 bg-black/55 backdrop-blur-[2px] sm:p-6"
      onClick={() => setIsSearchOpen(false)}
    >
      <div className="flex h-full items-end justify-center sm:items-center">
        <section
          className="flex h-dvh w-full flex-col overflow-hidden bg-white shadow-2xl sm:h-[min(85vh,700px)] sm:max-w-xl sm:rounded-2xl"
          onClick={(event) => event.stopPropagation()}
          aria-label="Portfolio assistant chat"
        >
          <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                AI
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight text-slate-900">
                  Portfolio Assistant
                </p>
                <p className="text-xs text-emerald-600">Online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="rounded-md px-2 py-1 text-sm text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close chat"
            >
              Close
            </button>
          </header>

          <main className="min-h-0 flex-1 overflow-y-auto bg-slate-50 px-3 py-4 sm:px-4">
            <div className="mx-auto flex w-full max-w-2xl flex-col gap-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <p
                    className={`max-w-[88%] whitespace-pre-line rounded-2xl px-3 py-2 text-sm leading-relaxed sm:max-w-[80%] ${
                      message.role === "user"
                        ? "rounded-br-md bg-blue-600 text-white"
                        : "rounded-bl-md bg-white text-slate-800 shadow-sm"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <p className="rounded-2xl rounded-bl-md bg-white px-3 py-2 text-sm text-slate-500 shadow-sm">
                    Typing...
                  </p>
                </div>
              )}

              {showContactForm && (
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                  <p className="mb-3 text-sm font-medium text-slate-900">
                    Send a direct message
                  </p>
                  <form className="space-y-2.5" onSubmit={onContactSubmit}>
                    <input
                      type="text"
                      name="name"
                      value={contactForm.name}
                      onChange={onContactFieldChange}
                      className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                      placeholder="Your name"
                      disabled={isSendingContact}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={onContactFieldChange}
                      className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                      placeholder="Your email"
                      disabled={isSendingContact}
                      required
                    />
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={onContactFieldChange}
                      className="min-h-24 w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500"
                      placeholder="Your message"
                      disabled={isSendingContact}
                      required
                    />
                    <button
                      type="submit"
                      className="h-10 w-full rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                      disabled={isSendingContact}
                    >
                      {isSendingContact ? "Sending..." : "Send Message"}
                    </button>
                  </form>

                  {contactEmailError && (
                    <p className="mt-2 text-xs text-red-600">
                      {contactEmailError}
                    </p>
                  )}
                  {contactStatus.type !== "idle" && (
                    <p
                      className={`mt-2 text-xs ${
                        contactStatus.type === "error"
                          ? "text-red-600"
                          : "text-emerald-600"
                      }`}
                    >
                      {contactStatus.message}
                    </p>
                  )}
                </div>
              )}

              {isCvDownloaded && (
                <div className="flex justify-start">
                  <p
                    className={`max-w-[88%] whitespace-pre-line rounded-2xl px-3 py-2 text-sm leading-relaxed sm:max-w-[80%] ${"rounded-bl-none bg-white text-slate-800 shadow-sm"} flex items-center gap-2`}
                  >
                    Click the icon to download my CV.{" "}
                    <button
                      type="button"
                      onClick={triggerCvDownload}
                      aria-label="Download CV"
                      className="inline-flex rounded p-1 align-middle text-slate-700 bg-blue-600 transition hover:bg-blue-400 hover:text-slate-900"
                    >
                      <DownloadIcon className="h-4 w-4 text-white" />
                    </button>
                  </p>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </main>

          <div className="border-t border-slate-200 bg-white px-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 sm:px-4 sm:pb-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => sendMessage(reply)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isTyping}
                >
                  {reply}
                </button>
              ))}
            </div>

            <form className="flex items-center gap-2" onSubmit={onSubmit}>
              <input
                autoFocus
                type="text"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type your message..."
                className="h-11 flex-1 rounded-full border border-slate-300 px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500"
              />
              <button
                type="submit"
                className="h-11 rounded-full bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                disabled={!draft.trim() || isTyping}
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
