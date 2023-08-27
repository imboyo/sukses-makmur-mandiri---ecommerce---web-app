import {computed, onMounted, ref} from "vue";

export const useDeviceSize = () => {
  const deviceState = ref(0);

  // Add Event Listener when the window size changes
  onMounted(() => {
    window.addEventListener("resize", () => {
      deviceState.value = window.innerWidth;
    });
  })

  // computed with mobile, tablet and desktop breakpoints
  const isMobile = computed(() => deviceState.value < 768);
  const isTablet = computed(() => deviceState.value >= 768 && deviceState.value < 1024);
  const isDesktop = computed(() => deviceState.value >= 1024);
  const isTabletAndBelow = computed(() => deviceState.value < 1024);
  const isTabletAndAbove = computed(() => deviceState.value >= 768);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isTabletAndBelow,
    isTabletAndAbove,
  }
};
