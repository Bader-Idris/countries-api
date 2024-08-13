// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///E:/coding_and_programming/front-end-mentor/rest-countries-api-with-color-theme-switcher/project/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/coding_and_programming/front-end-mentor/rest-countries-api-with-color-theme-switcher/project/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import autoprefixer from "file:///E:/coding_and_programming/front-end-mentor/rest-countries-api-with-color-theme-switcher/project/node_modules/autoprefixer/lib/autoprefixer.js";
import vueDevTools from "file:///E:/coding_and_programming/front-end-mentor/rest-countries-api-with-color-theme-switcher/project/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/coding_and_programming/front-end-mentor/rest-countries-api-with-color-theme-switcher/project/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), vueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/main.scss";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["defaults", "last 2 versions", "Edge >= 12", "Firefox >= 20"],
          grid: "stable",
          flexbox: "modern",
          cascade: false
        })
      ]
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxjb2RpbmdfYW5kX3Byb2dyYW1taW5nXFxcXGZyb250LWVuZC1tZW50b3JcXFxccmVzdC1jb3VudHJpZXMtYXBpLXdpdGgtY29sb3ItdGhlbWUtc3dpdGNoZXJcXFxccHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcY29kaW5nX2FuZF9wcm9ncmFtbWluZ1xcXFxmcm9udC1lbmQtbWVudG9yXFxcXHJlc3QtY291bnRyaWVzLWFwaS13aXRoLWNvbG9yLXRoZW1lLXN3aXRjaGVyXFxcXHByb2plY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NvZGluZ19hbmRfcHJvZ3JhbW1pbmcvZnJvbnQtZW5kLW1lbnRvci9yZXN0LWNvdW50cmllcy1hcGktd2l0aC1jb2xvci10aGVtZS1zd2l0Y2hlci9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcblxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFt2dWUoKSwgdnVlRGV2VG9vbHMoKV0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL3Njc3MvbWFpbi5zY3NzXCI7YFxuICAgICAgfVxuICAgIH0sXG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBhdXRvcHJlZml4ZXIoe1xuICAgICAgICAgIG92ZXJyaWRlQnJvd3NlcnNsaXN0OiBbJ2RlZmF1bHRzJywgJ2xhc3QgMiB2ZXJzaW9ucycsICdFZGdlID49IDEyJywgJ0ZpcmVmb3ggPj0gMjAnXSxcbiAgICAgICAgICBncmlkOiAnc3RhYmxlJyxcbiAgICAgICAgICBmbGV4Ym94OiAnbW9kZXJuJyxcbiAgICAgICAgICBjYXNjYWRlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeWQsU0FBUyxlQUFlLFdBQVc7QUFFNWYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sa0JBQWtCO0FBRXpCLE9BQU8saUJBQWlCO0FBTnVSLElBQU0sMkNBQTJDO0FBU2hXLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQUEsRUFDOUIsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxhQUFhO0FBQUEsVUFDWCxzQkFBc0IsQ0FBQyxZQUFZLG1CQUFtQixjQUFjLGVBQWU7QUFBQSxVQUNuRixNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsUUFDWCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
