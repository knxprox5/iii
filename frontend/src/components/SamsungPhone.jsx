import React from 'react';

// تصغير الشاشة الداخلية على عرض الجوال فقط مع الإبقاء على حجم إطار الهاتف ثابتاً
const SamsungPhone = ({ className = '', children, screenImageSrc = '', screenImageAlt = 'صورة داخل شاشة الهاتف', imageFit = 'cover' }) => {
  return (
    <div className={`relative phone-frame ${className}`} aria-label="هاتف سامسونج">
      <picture>
        <source srcSet="/images/s24.webp" type="image/webp" />
        <img
          src="/images/s24.png"
          alt="Samsung Galaxy S24 Ultra"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          fetchPriority="high"
          decoding="async"
          width={320}
          height={640}
          sizes="(min-width:1280px) 360px, 320px"
        />
      </picture>

      {/* منطقة الشاشة - تتقلص على الجوال فقط عبر أصناف CSS responsive */}
      <div
        className="absolute bg-white rounded-3xl overflow-hidden shadow-inner phone-screen"
        role="region"
        aria-label="شاشة الهاتف"
        tabIndex={0}
      >
        <div className="w-full h-full overflow-hidden">
          {screenImageSrc ? (
            <img
              src={screenImageSrc}
              alt={screenImageAlt}
              className={`w-full h-full object-${imageFit}`}
              loading="eager"
              decoding="async"
            />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default SamsungPhone;