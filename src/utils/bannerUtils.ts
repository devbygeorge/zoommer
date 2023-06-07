import { IBanner } from "../../typings";

// Helper function to shuffle the banners while maintaining the layout
export function shuffleBanners(banners: IBanner[]) {
  const smallBanners = banners.filter((banner) => banner.size === "small");
  const largeBanners = banners.filter((banner) => banner.size === "large");

  const shuffledBanners = [];
  const maxPairs = Math.min(smallBanners.length / 2, largeBanners.length);

  // Shuffle small banners and large banners separately
  shuffleArray(smallBanners);
  shuffleArray(largeBanners);

  let i = 0;
  while (i < maxPairs) {
    // Determine the current small banner indices
    const smallBannerIndex1 = i * 2;
    const smallBannerIndex2 = i * 2 + 1;

    // Determine the current large banner index
    const largeBannerIndex = i;

    // Check if there are enough small banners left to swap with
    if (smallBannerIndex2 < smallBanners.length) {
      // Swap the large banner with two small banners
      shuffledBanners.push(largeBanners[largeBannerIndex]);
      shuffledBanners.push(smallBanners[smallBannerIndex1]);
      shuffledBanners.push(smallBanners[smallBannerIndex2]);
      i++;
    } else {
      // No more small banners to swap, just add the large banner
      shuffledBanners.push(largeBanners[largeBannerIndex]);
    }
  }

  // Add any remaining small banners
  for (
    let j = smallBanners.length - (smallBanners.length % 2);
    j < smallBanners.length;
    j++
  ) {
    shuffledBanners.push(smallBanners[j]);
  }

  // Add any remaining large banners
  for (let j = maxPairs; j < largeBanners.length; j++) {
    shuffledBanners.push(largeBanners[j]);
  }

  return shuffledBanners;
}

function shuffleArray(array: IBanner[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
