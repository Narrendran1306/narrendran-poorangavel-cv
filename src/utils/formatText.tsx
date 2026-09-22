import React from 'react';

/**
 * Utility to parse markdown bold syntax (`**text**`) into React <strong> elements.
 */
export const formatRichText = (text: string): React.ReactNode => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default formatRichText;
