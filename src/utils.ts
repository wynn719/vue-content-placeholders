export function usePrefix(prefix: string) {
  return `vue-content-placeholders-${prefix}` as const
}
