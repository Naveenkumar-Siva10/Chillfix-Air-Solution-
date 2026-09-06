'use client';

import { useState, useRef, useEffect, useCallback, type FormEvent, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Phone,
  MessageCircle,
  Snowflake,
  Bot,
  Sparkles,
  ArrowDown,
  Loader2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CONTACT_DETAILS, SITE_CONFIG } from '@/constants/site';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const INITIAL_GREETING: Message = {
  id: 'greeting',
  role: 'assistant',
  content: "Hi! 👋 I'm Chillfix AI. How can I help you with your AC today?",
  timestamp: 'Just now',
};

const QUICK_ACTIONS = [
  '❄️ AC not cooling',
  '💧 AC water leakage',
  '✨ AC service',
  '🔧 AC installation',
  '📅 Book a service',
  '📞 Contact Chillfix',
];

export function ChillfixChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_GREETING]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      // Focus input on desktop
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen, messages, scrollToBottom]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend ?? inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Build history for Gemini
      const history = messages
        .filter((m) => m.id !== 'greeting')
        .slice(-8)
        .map((m) => ({
          role: m.role === 'user' ? ('user' as const) : ('model' as const),
          content: m.content,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      });

      const data = await res.json();
      const replyText =
        data?.reply ||
        "Sorry, I'm having trouble responding right now. Please contact Chillfix Air Solution directly at 9080495932.";

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const fallbackMessage: Message = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content:
          "Sorry, I'm having trouble responding right now. Please contact Chillfix Air Solution directly at 9080495932.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* ── Chat Modal Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Chillfix AI Chat window"
            className={cn(
              'fixed z-[950] flex flex-col bg-white dark:bg-slate-900',
              'border border-slate-200/90 dark:border-slate-800/90 shadow-2xl overflow-hidden',
              // Mobile: positioned safely at bottom
              'inset-x-3 bottom-3 sm:inset-x-auto sm:right-6 sm:bottom-24',
              // Responsive size
              'w-auto sm:w-[410px] h-[560px] max-h-[85vh] rounded-3xl',
            )}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 px-4 py-3.5 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
                  <Snowflake className="h-5 w-5 text-accent-300" aria-hidden="true" />
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-400 border-2 border-primary-700" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-base font-extrabold tracking-tight leading-tight">Chillfix AI</h2>
                    <span className="rounded-full bg-accent-400/20 px-1.5 py-0.5 text-[10px] font-bold text-accent-300 border border-accent-400/30">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-white/80 leading-none mt-0.5">How can we help with your AC?</p>
                </div>
              </div>

              {/* Direct Call, WhatsApp & Close */}
              <div className="flex items-center gap-1">
                <a
                  href={CONTACT_DETAILS.phone.href}
                  aria-label="Call Chillfix directly"
                  title="Call 9080495932"
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={CONTACT_DETAILS.whatsapp.withMessage('Hi ChillFix! I need help with AC service in Chennai.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] transition-colors text-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Chat"
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white ml-0.5"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* ── Messages List ── */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/70 dark:bg-slate-950/70">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={cn('flex items-end gap-2', isUser ? 'justify-end' : 'justify-start')}
                  >
                    {!isUser && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-white shadow-xs">
                        <Bot className="h-4 w-4" aria-hidden="true" />
                      </div>
                    )}
                    <div
                      className={cn(
                        'text-sm leading-relaxed px-4 py-2.5 shadow-xs max-w-[85%] whitespace-pre-wrap break-words',
                        isUser
                          ? 'bg-primary-600 text-white font-medium rounded-2xl rounded-br-xs'
                          : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl rounded-bl-xs border border-slate-200/70 dark:border-slate-700/60',
                      )}
                    >
                      {msg.content}
                      <span
                        className={cn(
                          'block text-[10px] mt-1 text-right select-none',
                          isUser ? 'text-white/70' : 'text-slate-400 dark:text-slate-500',
                        )}
                      >
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-white shadow-xs">
                    <Bot className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 rounded-2xl rounded-bl-xs px-4 py-3 shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-2 w-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-2 w-2 rounded-full bg-primary-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-xs text-slate-500 font-medium ml-1.5">Chillfix AI is thinking...</span>
                  </div>
                </div>
              )}

              {/* Quick Action Chips (shown initially or anytime) */}
              {messages.length <= 2 && !isLoading && (
                <div className="pt-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Frequently asked:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_ACTIONS.map((action) => (
                      <button
                        key={action}
                        type="button"
                        onClick={() => handleSendMessage(action.replace(/^[^s]+s/, ''))}
                        className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-primary-500 hover:text-primary-600 transition-all shadow-2xs hover:shadow-xs active:scale-95"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ── Input Box & Controls ── */}
            <form
              onSubmit={onSubmit}
              className="border-t border-slate-100 dark:border-slate-800 p-3 bg-white dark:bg-slate-900"
            >
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Ask about AC problems, cooling, service..."
                  disabled={isLoading}
                  maxLength={1000}
                  className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  aria-label="Send message"
                  className={cn(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all',
                    inputValue.trim() && !isLoading
                      ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm active:scale-95'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed',
                  )}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between px-1 text-[11px] text-slate-400 dark:text-slate-500">
                <span>Support in English, Tamil & Tanglish</span>
                <span>Direct: <a href="tel:9080495932" className="text-primary-600 dark:text-primary-400 font-bold hover:underline">9080495932</a></span>
              </div>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* ── Floating Launcher Button ── */}
      <motion.div
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[900] no-print"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close Chillfix AI Chat' : 'Open Chillfix AI Chatbot'}
          className={cn(
            'group relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl',
            'bg-gradient-to-tr from-primary-600 via-primary-500 to-secondary-500 text-white',
            'transition-transform duration-200 hover:scale-105 active:scale-95',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
          )}
        >
          {/* Pulsing halo */}
          <span
            className="absolute -inset-0.5 rounded-full bg-primary-500 opacity-35 animate-ping group-hover:opacity-50"
            aria-hidden="true"
          />

          {/* Icon state */}
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="bot-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative"
              >
                <Bot className="h-7 w-7" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-400" />
                </span>
              </motion.span>
            )}
          </AnimatePresence>

          {/* Hover Tooltip (desktop only) */}
          <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 hidden whitespace-nowrap rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 lg:block dark:bg-slate-800">
            {isOpen ? 'Close Chat' : 'Chat with Chillfix AI ❄️'}
          </span>
        </button>
      </motion.div>
    </>
  );
}
