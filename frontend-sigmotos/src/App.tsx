import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SigmotosAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  // Variantes para el contenido del formulario para que aparezca suavemente
  const formContentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="min-h-screen bg-moto-black text-white flex flex-col lg:flex-row font-technical overflow-hidden">
      
      {/* CONTENEDOR DINÁMICO 
          Usamos 'flex-row-reverse' condicionalmente para mover las columnas
      */}
      <div className={`flex flex-col w-full min-h-screen transition-all duration-700 ${isLogin ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        {/* Columna: Identidad Visual (Branding) */}
        <motion.div 
          layout
          className="hidden lg:flex lg:w-1/2 relative bg-moto-gray items-center justify-center border-x border-moto-orange/20 overflow-hidden"
        >
          {/* Textura de fibra de carbono con overlay de gradiente */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className={`absolute inset-0 bg-gradient-to-br from-moto-orange/5 to-transparent pointer-events-none`} />
          
          <motion.div 
            layout="position"
            className="relative z-10 p-12 text-center lg:text-left"
          >
            <motion.h1 
              layout="position"
              className="text-7xl font-display font-bold tracking-tighter leading-none"
            >
              SIG<span className="text-moto-orange">MOTOS</span>
            </motion.h1>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login-txt' : 'reg-txt'}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="mt-6"
              >
                <p className="max-w-xs uppercase tracking-widest text-[10px] border-l-2 border-moto-orange pl-4 text-gray-400">
                  {isLogin 
                    ? "Gestión de Inventario Inteligente para Sistemas de Alto Rendimiento."
                    : "Únete a la red de control de repuestos más avanzada del sector."}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Elemento Decorativo: "Chasis" / Glow animado */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-moto-orange/10 blur-[120px] rounded-full" 
          />
        </motion.div>

        {/* Columna: Formulario */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
          <motion.div 
            layout
            className="w-full max-w-md space-y-8"
          >
            <div className="space-y-2">
              <motion.h2 
                layout="position"
                className="text-2xl font-bold uppercase tracking-tight"
              >
                {isLogin ? 'Acceso al Sistema' : 'Registro de Operador'}
              </motion.h2>
              <motion.div layout className="h-1 w-12 bg-moto-orange" />
            </div>

            <form className="space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isLogin ? 'login-fields' : 'signup-fields'}
                  variants={formContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  {!isLogin && (
                    <div className="space-y-1 mb-5">
                      <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Nombre del Operador</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b-2 border-moto-gray focus:border-moto-orange outline-none py-3 transition-all duration-300 placeholder:text-gray-700"
                        placeholder="MOTOS RACING S.A.S"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  )}

                  <div className="space-y-1 mb-5">
                    <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Email de Operador</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b-2 border-moto-gray focus:border-moto-orange outline-none py-3 transition-all duration-300 placeholder:text-gray-700"
                      placeholder="operador@sigmotos.dev"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest">Contraseña</label>
                    <input 
                      type="password" 
                      className="w-full bg-transparent border-b-2 border-moto-gray focus:border-moto-orange outline-none py-3 transition-all duration-300 placeholder:text-gray-700"
                      placeholder="••••••••"
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between text-xs text-gray-400 py-2">
                {isLogin && (
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input type="checkbox" className="accent-moto-orange" />
                    <span className="group-hover:text-gray-200 transition-colors">Mantener conectado</span>
                  </label>
                )}
                <button 
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-moto-orange font-bold hover:text-white transition-colors uppercase tracking-widest text-[9px]"
                >
                  {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Ingresa'}
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-moto-orange text-black font-black py-5 uppercase tracking-tighter transition-colors flex justify-between px-8 items-center shadow-[0_10px_20px_rgba(255,90,0,0.15)]"
              >
                {isLogin ? 'Iniciar Motores' : 'Crear Perfil Técnico'}
                <span className="text-2xl font-light">→</span>
              </motion.button>
            </form>

            <footer className="pt-8 text-[9px] text-gray-600 uppercase flex justify-between border-t border-moto-gray/30">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-moto-orange animate-pulse rounded-full" />
                Sigmotos Core v1.0.0
              </span>
              <span>SISTEMA DE ALTO RENDIMIENTO</span>
            </footer>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SigmotosAuth;