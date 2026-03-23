import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-24 making-bg-primary backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex flex-shrink-0 items-center justify-center text-white font-bold">
          M
        </div>
        <span className="font-display font-semibold text-xl tracking-tight text-white">
          Making
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href="#features" className="text-white text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Recursos</Link>
        <Link href="#how-it-works" className="text-white text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Como Funciona</Link>
        <Link href="#pricing" className="text-white text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Planos</Link>
        <Link href="#faq" className="text-white text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">FAQ</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login" className="hidden md:block text-white text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">
          Entrar
        </Link>
        <Button>Começar Agora</Button>
      </div>
    </nav>
  );
}
