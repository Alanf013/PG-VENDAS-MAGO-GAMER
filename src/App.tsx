import { useState, useEffect, FormEvent } from "react";
import { 
  Flame, 
  ShieldCheck, 
  Zap, 
  Star, 
  ArrowRight, 
  Clock, 
  Award, 
  Check, 
  X, 
  Smartphone, 
  Tv, 
  CheckCircle2, 
  Lock,
  Sparkles,
  Gamepad2,
  Tv2
} from "lucide-react";

// The 6 legendary PS2 classics requested for the Visual Showcase
const CLASSIC_GAMES = [
  {
    title: "GTA San Andreas",
    desc: "O maior clássico das ruas, com rádios icônicas e traduzido em PT-BR.",
    tag: "🏆 RECORDE DE VOTOS",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&h=600&q=80",
    color: "from-amber-500/20 to-amber-500/5",
    glow: "shadow-amber-500/20"
  },
  {
    title: "God of War II",
    desc: "Kratos desafiando os Deuses do Olimpo em batalhas épicas dubladas.",
    tag: "🔥 MAIS JOGADO",
    image: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?auto=format&fit=crop&w=400&h=600&q=80",
    color: "from-red-500/20 to-red-500/5",
    glow: "shadow-red-500/20"
  },
  {
    title: "Bomba Patch 2026",
    desc: "100% Atualizado, com elencos de hoje e aquela narração clássica.",
    tag: "⚽ BRASIL INTEIRO AMA",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&h=600&q=80",
    color: "from-emerald-500/20 to-emerald-500/5",
    glow: "shadow-emerald-500/20"
  },
  {
    title: "Resident Evil 4",
    desc: "Reviva a tensão em terras espanholas com dublagem em PT-BR.",
    tag: "🧟 TERROR ABSOLUTO",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&h=600&q=80",
    color: "from-blue-600/20 to-blue-600/5",
    glow: "shadow-blue-500/20"
  },
  {
    title: "NFS Underground 2",
    desc: "As corridas noturnas lendárias, neon e a melhor trilha sonora.",
    tag: "🚗 VELOCIDADE MÁXIMA",
    image: "https://images.unsplash.com/photo-1611245620453-77ab7271afd9?auto=format&fit=crop&w=400&h=600&q=80",
    color: "from-purple-500/20 to-purple-500/5",
    glow: "shadow-purple-500/20"
  },
  {
    title: "Black",
    desc: "O melhor jogo de tiro do PS2. Gráficos absurdos e destruição.",
    tag: "💥 PODER DE FOGO",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=400&h=600&q=80",
    color: "from-zinc-500/20 to-zinc-500/5",
    glow: "shadow-zinc-500/20"
  }
];

export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(899); // 14m 59s
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [currentToastIndex, setCurrentToastIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  // Checkout states
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [checkoutStep, setCheckoutStep] = useState<"form" | "loading" | "success">("form");
  const [generatedToken, setGeneratedToken] = useState("");

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 10 ? 899 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Floating notifications
  useEffect(() => {
    const start = setTimeout(() => setShowToast(true), 2000);
    const interval = setInterval(() => {
      setShowToast(false);
      setTimeout(() => {
        setCurrentToastIndex((prev) => (prev + 1) % 4);
        setShowToast(true);
      }, 500);
    }, 12000);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time: number) => {
    const m = Math.floor(time / 60);
    const s = time % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const scrollToOffer = () => {
    const target = document.getElementById("oferta-vip");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCheckout = () => {
    setShowCheckoutModal(true);
    setCheckoutStep("form");
  };

  const handleProcessCheckout = (e: FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) {
      alert("Por favor, preencha os dados obrigatórios.");
      return;
    }
    setCheckoutStep("loading");
    setTimeout(() => {
      const token = "VIP-PS2-" + Math.floor(100000 + Math.random() * 900000);
      setGeneratedToken(token);
      setCheckoutStep("success");
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-500 selection:text-zinc-950 font-sans antialiased overflow-x-hidden">
      
      {/* RADIANT AMBIENT RETRO GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-purple-900/10 via-emerald-950/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* --- SEÇÃO 1: HERO SECTION (PRIMEIRA DOBRA SUPER LIMPA) --- */}
      <section className="relative min-h-screen md:min-h-0 pt-6 pb-12 px-4 max-w-6xl mx-auto flex flex-col justify-between" id="hero">
        
        {/* Simple Brand Header */}
        <div className="flex items-center justify-between w-full pb-6 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white">
              MAGO <span className="text-emerald-400">GAMER</span>
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-bold text-zinc-500 tracking-widest uppercase">
            ⚡ MÉTODO 1-CLIQUE OFICIAL
          </span>
        </div>

        {/* Hero Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 md:py-16">
          
          {/* Left Emotional Copy block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="animate-shimmer inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-bold tracking-wider uppercase">
              🚀 OFERTA LIMITADA: APENAS R$ 29,90
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Lembra daquela <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">sensação mágica</span> de ligar o PS2 na sexta-feira à noite?
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              Sem travar, sem tela vermelha, sem complicação. Nós mastigamos tudo pra você. Plugou o pendrive, jogou os seus clássicos favoritos hoje mesmo.
            </p>

            {/* Micro bullet points for instant reading */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">+1.000 Jogos Prontos</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">Instalador Automático</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">Downloads Ultra Rápidos</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold">Suporte WhatsApp VIP</span>
              </div>
            </div>

            {/* Giant clean responsive CTA button */}
            <div className="pt-4 space-y-3">
              <button
                onClick={scrollToOffer}
                className="neon-pulse-btn w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-lg md:text-xl rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero_giant_cta"
              >
                QUERO JOGAR MEUS CLÁSSICOS AGORA
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <p className="text-xs text-zinc-500">
                ⚡ Download liberado imediatamente • Garantia Incondicional de 7 Dias
              </p>
            </div>

          </div>

          {/* Right Product Image block */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-3xl opacity-20 blur-xl animate-pulse" />
            
            {/* Visual nostalgic frame */}
            <div className="relative bg-zinc-950 rounded-3xl border border-zinc-800 p-4 shadow-2xl flex flex-col items-center">
              
              {!imgFailed ? (
                <img 
                  src="/images.jpg" 
                  alt="OPL PS2 16MB Memory Card + 64GB USB Drive" 
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-64 object-contain rounded-2xl mb-4 border border-zinc-900 bg-[#050507]/40 hover:scale-102 transition-transform duration-300"
                />
              ) : (
                /* Interactive CSS Memory Card + Pendrive Showcase (Perfect Vector Replicas) */
                <div className="w-full flex items-center justify-center gap-6 py-6 select-none scale-90 sm:scale-100 mb-4 border border-zinc-900 bg-[#050507]/40 rounded-2xl">
                  {/* PS2 Memory Card */}
                  <div className="relative w-36 h-48 bg-gradient-to-b from-[#18181b] to-[#09090b] border border-zinc-800 rounded-xl shadow-2xl flex flex-col justify-between p-3 overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
                    <div className="absolute top-0 inset-x-0 h-3 bg-zinc-950 border-b border-zinc-900 flex justify-center items-center">
                      <div className="w-8 h-0.5 bg-zinc-800 rounded-full" />
                    </div>
                    <div className="mt-2.5 flex justify-between px-1">
                      <div className="w-3 h-1 bg-zinc-950 rounded-sm" />
                      <div className="w-3 h-1 bg-zinc-950 rounded-sm" />
                      <div className="w-3 h-1 bg-zinc-950 rounded-sm" />
                    </div>
                    <div className="my-auto text-center space-y-0.5">
                      <span className="block font-display font-black text-lg tracking-wider text-amber-500/90 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        OPL PS2
                      </span>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto" />
                    </div>
                    <div className="flex items-end justify-between text-[8px]">
                      <span className="text-zinc-600 font-bold tracking-widest">MAGICGATE</span>
                      <span className="font-display font-bold text-zinc-400">16 MB</span>
                    </div>
                  </div>

                  {/* Silver Metallic 64GB USB Drive */}
                  <div className="relative w-14 h-32 bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-400 border border-zinc-200 rounded-lg shadow-xl flex flex-col justify-between p-2.5 rotate-12 hover:rotate-6 hover:scale-105 transition-all duration-300 origin-bottom">
                    <div className="absolute -top-1 inset-x-3.5 h-1.5 bg-zinc-500 rounded-t-sm" />
                    <div className="my-auto rotate-90 text-center font-display font-black text-zinc-700 tracking-wider text-xs whitespace-nowrap">
                      64GB
                    </div>
                    <div className="w-4 h-4 rounded-full bg-zinc-950/20 border border-zinc-400/50 mx-auto flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#09090b]" />
                    </div>
                  </div>
                </div>
              )}
              
              <div className="w-full flex items-center justify-between text-xs px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-zinc-400 font-semibold uppercase">O SISTEMA COMPATÍVEL</span>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                  OPL 100% GARANTIDO
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Metric bar */}
        <div className="grid grid-cols-3 gap-4 border-t border-zinc-900 pt-8 text-center text-zinc-400">
          <div>
            <span className="block text-2xl font-black text-white">+1.480</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Gamers Ativos</span>
          </div>
          <div className="border-x border-zinc-900">
            <span className="block text-2xl font-black text-white">⭐ 4.9/5</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Avaliações VIP</span>
          </div>
          <div>
            <span className="block text-2xl font-black text-white">🚀 100%</span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Servidor Rápido</span>
          </div>
        </div>

      </section>

      {/* --- SEÇÃO 2: VITRINE VISUAL DE JOGOS CLÁSSICOS (GRID DE CAPAS 3D) --- */}
      <section className="py-20 px-4 bg-zinc-950/60 border-y border-zinc-900" id="vitrine">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 block">
              DENTRO DA ÁREA DE DOWNLOADS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Todos os Clássicos que Marcaram Sua Vida
            </h2>
            <p className="text-sm md:text-base text-zinc-400">
              Mais de 1.000 jogos testados, compactados e livres de vírus. Passe para o pendrive e jogue sem travar.
            </p>
          </div>

          {/* Grid of beautiful 3D-styled physical game cases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLASSIC_GAMES.map((game, i) => (
              <div 
                key={i}
                className="group relative bg-[#0d0d11] rounded-2xl border border-zinc-800/80 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-2xl"
              >
                {/* Visual Header bar representing typical original PS2 DVD case layout */}
                <div className="bg-[#121217] px-4 py-2 border-b border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-zinc-400 tracking-widest uppercase">
                    PLAYSTATION 2 SYSTEM
                  </span>
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded uppercase">
                    {game.tag}
                  </span>
                </div>

                {/* Cover Art Wrapper with Zoom and Light Glow */}
                <div className="relative h-72 overflow-hidden bg-zinc-900">
                  <img 
                    src={game.image} 
                    alt={`Capa do jogo ${game.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover visual sheen layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                  
                  {/* Floating Action Text overlay */}
                  <div className="absolute top-3 left-3 bg-zinc-950/90 text-[10px] text-zinc-300 font-bold px-2 py-0.5 rounded border border-zinc-800 uppercase">
                    ✓ Testado no OPL
                  </div>
                </div>

                {/* Details layout */}
                <div className="p-5 space-y-2">
                  <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                    {game.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {game.desc}
                  </p>
                  
                  <div className="flex items-center gap-1.5 pt-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pronto Para Download Direto</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-zinc-500 mb-6 font-medium">
              ...e mais de 1.000 outros jogos completos das maiores franquias da história!
            </p>
            <button 
              onClick={scrollToOffer}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-base md:text-lg rounded-xl transition-all hover:scale-102 cursor-pointer uppercase font-display"
            >
              QUERO ESSE ACERVO VITALÍCIO
            </button>
          </div>

        </div>
      </section>

      {/* --- SEÇÃO 3: 3 PASSOS SIMPLES (CÉLULA DE FLUXO ULTRA VELOZ) --- */}
      <section className="py-20 px-4 max-w-5xl mx-auto" id="passos">
        
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 block">
            CÓDIGO DE EXECUÇÃO RÁPIDA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Como Funciona? 3 Passos Simples
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Nós eliminamos todas as partes difíceis. Qualquer pessoa de qualquer idade consegue jogar em minutos.
          </p>
        </div>

        {/* Easy 1-2-3 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Step 1 */}
          <div className="relative bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-display font-black text-emerald-400 text-lg">
              1
            </div>
            <h3 className="font-extrabold text-lg text-white">Conecte no Computador</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Espete o seu pendrive de qualquer tamanho no computador ou notebook. Não precisa de PC potente.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-display font-black text-emerald-400 text-lg">
              2
            </div>
            <h3 className="font-extrabold text-lg text-white">Passe com 1-Clique</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Abra o nosso instalador exclusivo, selecione os jogos que quer baixar e injete no pendrive automaticamente.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-zinc-900/40 border border-emerald-500/20 p-6 rounded-2xl space-y-4 glow-card-emerald">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-display font-black text-emerald-400 text-lg">
              3
            </div>
            <h3 className="font-extrabold text-lg text-white">Plugue no PS2 e Jogue!</h3>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Conecte o pendrive na entrada USB do seu PlayStation 2 e divirta-se. O console carrega os jogos direto na tela!
            </p>
          </div>

        </div>

      </section>

      {/* --- SEÇÃO 4: OFERTA COMPACTA E DIRETA (R$ 29,90) --- */}
      <section className="py-16 px-4 max-w-4xl mx-auto" id="oferta-vip">
        
        {/* Countdown urgency box */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-3.5 mb-8 text-center flex items-center justify-center gap-3 animate-pulse">
          <Clock className="w-4 h-4 text-red-400 shrink-0" />
          <p className="text-xs md:text-sm text-red-200 font-bold">
            ⚠️ O VALOR PROMOCIONAL EXPIRA EM:{" "}
            <span className="font-mono text-white bg-red-600 px-2.5 py-0.5 rounded text-base">
              {formatTime(secondsLeft)}
            </span>
          </p>
        </div>

        {/* Central visual buy card */}
        <div className="relative bg-zinc-900 border-2 border-emerald-500/40 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden glow-card-emerald">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Value checklist */}
            <div className="md:col-span-7 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block font-display">
                ACESSO COMPLETO + ATUALIZAÇÕES
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Kit Mago Gamer VIP
              </h3>
              
              <ul className="space-y-2.5 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acesso Vitalício sem mensalidade ou taxas extras</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Instalador OPL 1-Clique Automático</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Biblioteca com +1.000 Jogos de PS2 e PS1</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Servidores sem limites e sem anúncios</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Videoaulas práticas Passo-a-Passo de 5 min</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Suporte VIP e individual por WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* Price section and dynamic modal call trigger */}
            <div className="md:col-span-5 bg-[#050507] rounded-2xl border border-zinc-800 p-6 text-center space-y-4">
              <div>
                <span className="text-xs text-zinc-500 line-through">De R$ 97,00</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xs text-zinc-400 font-bold">R$</span>
                  <span className="text-white text-4xl font-extrabold tracking-tight">29,90</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block mt-1">
                  PAGAMENTO ÚNICO VITALÍCIO
                </span>
              </div>

              <button
                onClick={handleOpenCheckout}
                className="neon-pulse-btn w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-sm rounded-xl tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md shadow-emerald-500/10 cursor-pointer uppercase"
                id="cta_buy_button"
              >
                GARANTIR ACESSO VIP (R$ 29,90)
              </button>

              <p className="text-[9px] text-zinc-500">
                🔒 Ambiente 100% criptografado e seguro. Liberação imediata.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* --- SEÇÃO 5: GARANTIA DE 7 DIAS --- */}
      <section className="py-8 px-4 max-w-3xl mx-auto text-center" id="garantia">
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center space-y-3">
          <Award className="w-12 h-12 text-emerald-400 shrink-0" />
          <h3 className="text-xl font-bold text-white">Risco Zero: Garantia Blindada de 7 Dias</h3>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
            Se você não conseguir rodar seus jogos em até 7 dias, devolvemos seu dinheiro sem burocracia ou perguntas chatas. O risco é todo do nosso lado.
          </p>
        </div>
      </section>

      {/* --- FOOTER MINIMALISTA --- */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-10 px-4 text-center text-xs text-zinc-500 space-y-3">
        <div className="flex items-center justify-center gap-1 font-bold text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>Mago Gamer Oficial © {new Date().getFullYear()}</span>
        </div>
        <p className="max-w-md mx-auto leading-relaxed">
          Nenhuma afiliação direta com a Sony. PlayStation é marca registrada. Uso estritamente de caráter nostálgico e educacional para preservação de mídias físicas antigas.
        </p>
        <span className="block text-[10px] text-zinc-600">
          Compra 100% Segura e Criptografada • Mago Gamer • Todos os Direitos Reservados
        </span>
      </footer>

      {/* --- FLOATING RETRO NOTIFICATIONS --- */}
      <div 
        className={`fixed bottom-4 left-4 z-50 max-w-xs bg-zinc-900 border border-zinc-800 rounded-xl p-3 shadow-2xl transition-all duration-500 transform ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-zinc-200">
              {currentToastIndex === 0 && "Marcos de Porto Alegre/RS acabou de comprar!"}
              {currentToastIndex === 1 && "Felipe de São Paulo/SP liberou seu Token VIP!"}
              {currentToastIndex === 2 && "Juliano de Curitiba/PR ativou o Bomba Patch!"}
              {currentToastIndex === 3 && "Rodrigo de Salvador/BA acabou de baixar RE4!"}
            </p>
            <p className="text-[9px] text-emerald-400">⚡ Status: Token VIP gerado e enviado por e-mail</p>
          </div>
        </div>
      </div>

      {/* --- CHECKOUT EXPRESS POPUP (SIMULATOR) --- */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl">
            
            <div className="bg-[#050507] px-5 py-3 border-b border-zinc-800 flex items-center justify-between">
              <span className="font-display font-bold text-xs text-zinc-200 uppercase tracking-wide">
                🔐 Checkout Express Seguro
              </span>
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {checkoutStep === "form" && (
              <form onSubmit={handleProcessCheckout} className="p-5 space-y-4">
                <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800 flex justify-between items-center text-xs">
                  <span className="font-bold text-zinc-300">Kit Mago Gamer VIP + Token</span>
                  <span className="font-extrabold text-emerald-400">R$ 29,90</span>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-zinc-400 font-bold uppercase">Seu Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Ex: João Silva"
                    className="w-full px-3 py-1.5 bg-zinc-950 border border-zinc-800 focus:border-emerald-500 focus:outline-none rounded-lg text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-zinc-400 font-bold uppercase">Seu E-mail Principal *</label>
                  <input
                    type="email"
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Ex: joao@email.com"
                    className="w-full px-3 py-1.5 bg-zinc-950 border border-zinc-800 focus:border-emerald-500 focus:outline-none rounded-lg text-xs"
                  />
                  <span className="text-[9px] text-zinc-500 block">
                    O instalador e o Token VIP serão disparados para este endereço.
                  </span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase">Forma de Pagamento</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("pix")}
                      className={`py-1.5 rounded-lg border text-[11px] font-bold flex items-center justify-center gap-1 transition-all ${
                        paymentMethod === "pix"
                          ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400"
                      }`}
                    >
                      ⚡ PIX Instantâneo
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`py-1.5 rounded-lg border text-[11px] font-bold flex items-center justify-center gap-1 transition-all ${
                        paymentMethod === "card"
                          ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                          : "bg-zinc-950 border-zinc-800 text-zinc-400"
                      }`}
                    >
                      💳 Cartão
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-xs rounded-xl tracking-wider uppercase transition-all cursor-pointer"
                >
                  Confirmar e Gerar Token VIP
                </button>
              </form>
            )}

            {checkoutStep === "loading" && (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <h4 className="font-bold text-sm text-white">Processando Transação Segura...</h4>
                <p className="text-[11px] text-zinc-400">Gerando assinatura digital e registrando seu Token VIP.</p>
              </div>
            )}

            {checkoutStep === "success" && (
              <div className="p-5 text-center space-y-4">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Acesso VIP Gerado!</h4>
                  <p className="text-[11px] text-emerald-400 font-bold">Compra Simulada com Sucesso</p>
                </div>
                <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800 font-mono text-sm font-bold text-emerald-400 select-all">
                  {generatedToken}
                </div>
                <p className="text-[11px] text-zinc-400 text-left bg-zinc-950 p-3 rounded border border-zinc-800/40">
                  ✓ Enviamos o link do instalador de 1-Clique para: <strong className="text-zinc-200">{userEmail}</strong>. Insira seu token acima para iniciar.
                </p>
                <button
                  onClick={() => setShowCheckoutModal(false)}
                  className="w-full py-2 bg-emerald-500 text-zinc-950 font-bold text-xs rounded-lg uppercase cursor-pointer"
                >
                  Fechar e Voltar
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
