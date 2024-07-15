import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import "@testing-library/jest-dom";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
