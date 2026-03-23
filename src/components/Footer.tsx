import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-container-low pt-24 pb-12 border-t border-outline-variant/20">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex flex-shrink-0 items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-on-surface">
                Making
              </span>
            </div>
            <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">
              A melhor e mais completa plataforma de gestão para agências de publicidade do Brasil.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-on-surface mb-6">Produto</h4>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li><Link href="#" className="hover:text-primary transition-colors">Recursos</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Preços</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Casos de Uso</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Integrações</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Atualizações</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-on-surface mb-6">Recursos</h4>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Comunidade</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Guias</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Central de Ajuda</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Webinars</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-on-surface mb-6">Empresa</h4>
            <ul className="space-y-4 font-body text-sm text-on-surface-variant">
              <li><Link href="#" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Carreiras</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Legal & Privacidade</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-on-surface-variant font-body">
            © {new Date().getFullYear()} Making Publicidade. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-on-surface-variant font-body">
            <Link href="#" className="hover:text-primary">Termos</Link>
            <Link href="#" className="hover:text-primary">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
