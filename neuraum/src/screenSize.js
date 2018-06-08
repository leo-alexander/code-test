const MOBILE_SIZE = 812;
const DESKTOP_SIZE = 813;

const isMobile = () => (window.innerWidth <= MOBILE_SIZE);
const isDesktop = () => !isMobile();

export {
  MOBILE_SIZE,
  DESKTOP_SIZE,
  isMobile,
  isDesktop,
};
