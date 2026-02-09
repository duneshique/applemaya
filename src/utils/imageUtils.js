/**
 * Utility for handling image loading errors.
 * Replaces the source with a fallback placeholder.
 */
export const handleImageError = (e, fallback = '/images/placeholders/flower.webp') => {
  if (!e.target.dataset.errorAttempted) {
    e.target.dataset.errorAttempted = 'true';
    e.target.src = fallback;
  }
};
