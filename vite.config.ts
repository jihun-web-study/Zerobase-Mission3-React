// https://vitejs.dev/config/
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ command, mode }) => {
  const base = {
    plugins: [svgr(), react()],
    resolve: {
      alias: [
        { find: "@", replacement: "/src" },
        { find: "@assets", replacement: "/src/assets" },
        { find: "@store", replacement: "/src/store" },
      ],
    },
  };

  /**
   * build command 일 때는 base 설정만 사용 합니다.
   */
  if ("build" === command) {
    return base;
  }

  /**
   * 개발 환경에서는 proxy를 사용 합니다.
   */
  const env = loadEnv(mode, process.cwd(), "");
  return {
    ...base,
    server: {
      proxy: {
        "/proxy": {
          target: env.VITE_FAKE_STORE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/proxy/, ""),
          secure: false,
          ws: true,
        },
      },
      port: 3000,
    },
  };
});
