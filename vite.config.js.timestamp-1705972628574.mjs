// vite.config.js
import react from "file:///D:/projetos/dashboard-brasanitas/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig, loadEnv } from "file:///D:/projetos/dashboard-brasanitas/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: "8080"
    },
    build: {
      outDir: "build"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZXRvc1xcXFxkYXNoYm9hcmQtYnJhc2FuaXRhc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamV0b3NcXFxcZGFzaGJvYXJkLWJyYXNhbml0YXNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2pldG9zL2Rhc2hib2FyZC1icmFzYW5pdGFzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kLCBtb2RlIH0pID0+IHtcclxuICBcclxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKVxyXG4gIHJldHVybiB7XHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgX19BUFBfRU5WX186IEpTT04uc3RyaW5naWZ5KGVudi5BUFBfRU5WKSxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICBwb3J0OiAnODA4MCdcclxuICAgIH0sXHJcbiAgICBidWlsZDp7XHJcbiAgICAgIG91dERpcjogJ2J1aWxkJ1xyXG4gICAgfVxyXG4gIH1cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQXdSLE9BQU8sV0FBVztBQUMxUyxTQUFTLGNBQWMsZUFBZTtBQUV0QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBRWpELFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixhQUFhLEtBQUssVUFBVSxJQUFJLE9BQU87QUFBQSxJQUN6QztBQUFBLElBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ2pCLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxPQUFNO0FBQUEsTUFDSixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
