/**
 * Extracts tool metadata from a URL.
 * @param {string} urlString 
 * @returns {object} { name, icon }
 */
export function extractToolMeta(urlString) {
  try {
    const url = new URL(urlString.startsWith('http') ? urlString : `https://${urlString}`);
    const hostname = url.hostname.replace('www.', '');
    const domainParts = hostname.split('.');
    
    // Basic capitalization for common domains
    let name = domainParts[0];
    if (name === 'github') name = 'GitHub';
    else if (name === 'linkedin') name = 'LinkedIn';
    else if (name === 'youtube') name = 'YouTube';
    else if (name === 'leetcode') name = 'LeetCode';
    else if (name === 'codeforces') name = 'Codeforces';
    else {
      name = name.charAt(0).toUpperCase() + name.slice(1);
    }

    return {
      name,
      icon: `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`,
      hostname
    };
  } catch (error) {
    return null;
  }
}

/**
 * Debounce function to limit API calls or heavy processing
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
