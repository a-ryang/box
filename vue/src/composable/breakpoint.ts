import { ref, computed, onMounted, onUnmounted } from "vue";

export function useBreakpoints() {
  const windowWidth = ref(window.innerWidth);

  const onResize = () => (windowWidth.value = window.innerWidth);

  onMounted(() => window.addEventListener("resize", onResize));
  onUnmounted(() => window.removeEventListener("resize", onResize));

  const type = computed(() => {
    if (windowWidth.value < 550) return "xs";
    if (windowWidth.value >= 550 && windowWidth.value < 1200) return "md";
    if (windowWidth.value >= 1200) return "lg";
    return null; // eslint용
  });

  const width = computed(() => windowWidth.value);

  return { width, type };
}
