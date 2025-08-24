import React from 'react';

// تصغير الشاشة الداخلية على عرض الجوال فقط مع الإبقاء على حجم إطار الهاتف ثابتاً
const SamsungPhone = ({ className = '', children, screenImageSrc = '', screenImageAlt = 'صورة داخل شاشة الهاتف', imageFit = 'cover', imagePosition = 'center center', tight = true }) => {
  return (
    <div className={`relative phone-frame ${className}`} aria-label="هاتف سامسونج">
      <picture>
        <source srcSet="/images/s24.webp" type="image/webp" />
        <img
          src="/images/s24.png"
          alt="Samsung Galaxy S24 Ultra"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-20"
          fetchPriority="high"
          decoding="async"
          width={320}
          height={640}
          sizes="(min-width:1280px) 360px, 320px"
        />
      </picture>

      {/* منطقة الشاشة - تتقلص على الجوال فقط عبر أصناف CSS responsive */}
      <div
        className={`absolute ${tight ? 'rounded-[28px]' : 'rounded-3xl'} overflow-hidden phone-screen`}
        role="region"
        aria-label="شاشة الهاتف"
        tabIndex={0}
        style={{
          // إزالة أي padding ضمني وضبط الخلفية لتجنب حواف بيضاء
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }}
      >
        <div className="w-full h-full overflow-hidden">
          {screenImageSrc ? (
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${screenImageSrc})`,
                backgroundSize: imageFit === 'contain' ? 'contain' : 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: imagePosition,
                // لمنع أي ظهور لحواف نتيجة وضع contain على شاشات معينة
                backgroundColor: 'transparent'
              }}
              aria-label={screenImageAlt}
              role="img"
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