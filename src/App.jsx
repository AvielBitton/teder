import { motion } from 'framer-motion'

// Generate random stars
const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
  size: Math.random() * 2 + 1,
}))

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0a0a12] via-[#12121f] to-[#0a0a12]">
      {/* Stars Background */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Mystical Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Logo / Symbol */}
        <motion.div
          className="text-6xl mb-6 float"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          ✨
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-6 text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #fff 0%, #a855f7 40%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          תדר האישה האלוקית
        </motion.h1>

        {/* Description */}
        <motion.div
          className="max-w-md text-center mb-10 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-violet-200/70 text-sm leading-relaxed">
            ✨ קבוצה נשמתית לנשים ההולכות בדרך
            <br />
            מרחב נקי של חיבור, זכירה והתעוררות פנימית
            <br />
            <span className="text-violet-300/50 text-xs">בהשראת שמשון בעל ההבטחה</span>
          </p>
          
          <p className="text-violet-200/60 text-sm leading-relaxed">
            🌿 כוח שנובע מאמונה, דיוק וברית עם הנשמה
            <br />
            כאן נעמיק בתדרים של קבלה, נשיות מודעת
            <br />
            עוצמה רכה ואור פנימי
          </p>
          
          <p className="text-violet-200/50 text-xs leading-relaxed">
            🔮 מקום של הקשבה, כוונה, ריפוי
            <br />
            וחזרה לשורש האלוקי שבך 🤍
          </p>
        </motion.div>

        {/* WhatsApp Button */}
        <motion.a
          href="https://chat.whatsapp.com/DiVApiSFTLFBy814DC0P4y"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
          
          {/* Button */}
          <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold py-4 px-8 rounded-2xl border border-white/10 transition-all duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>הצטרפי לקהילה</span>
          </div>
        </motion.a>

        {/* Decorative Element */}
        <motion.div
          className="mt-16 text-violet-400/30 text-sm tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          ॐ
        </motion.div>
      </div>
    </div>
  )
}

export default App

