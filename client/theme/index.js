const palette = [
  {
    // Orange
    text: "#f97316",
    bgColor: (opacity = 1) => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    // Blue
    text: "#3b82f6",
    bgColor: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
  },
  {
    // Green
    text: "#22c55e",
    bgColor: (opacity = 1) => `rgba(34, 197, 94, ${opacity})`,
  },
  {
    // Purple
    text: "#a855f7",
    bgColor: (opacity = 1) => `rgba(168, 85, 247, ${opacity})`,
  },
  {
    // Pink
    text: "#ec4899",
    bgColor: (opacity = 1) => `rgba(236, 72, 153, ${opacity})`,
  },
  {
    // Yellow
    text: "#eab308",
    bgColor: (opacity = 1) => `rgba(234, 179, 8, ${opacity})`,
  },
  {
    // Teal
    text: "#14b8a6",
    bgColor: (opacity = 1) => `rgba(20, 184, 166, ${opacity})`,
  },
  {
    // Red
    text: "#ef4444",
    bgColor: (opacity = 1) => `rgba(239, 68, 68, ${opacity})`,
  },
]

export const themeColors = {
  ...palette[4],
}
